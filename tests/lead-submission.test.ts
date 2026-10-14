import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handleLeadSubmission, type DeliveryResult, type Lead } from '../src/lib/lead.ts';

const NOW = 1_800_000_000_000;
const BUSINESS_PHONE = '(510) 753-8649';

const valid = {
  name: 'Maria Lopez',
  phone: '510-555-0142',
  zip: '94601',
  service: 'drain-cleaning',
  urgency: 'soon',
  ab_check: '',
  startedAt: String(NOW - 20_000),
  page: '/',
};

function setup(result: DeliveryResult, { production = true } = {}) {
  const delivered: Lead[] = [];
  const logs: string[] = [];
  const deps = {
    now: NOW,
    production,
    businessPhone: BUSINESS_PHONE,
    config: { resendApiKey: 're_x', to: 'owner@example.com' },
    deliver: async (lead: Lead) => {
      delivered.push(lead);
      return result;
    },
    log: (message: string) => {
      logs.push(message);
    },
  };
  return { deps, delivered, logs };
}

test('confirms a delivered request with the visitor’s first name and phone', async () => {
  const { deps, delivered } = setup({ ok: true, channels: ['email'] });
  const state = await handleLeadSubmission(valid, deps);
  assert.deepEqual(state, { status: 'success', firstName: 'Maria', phone: '(510) 555-0142' });
  assert.equal(delivered.length, 1);
  assert.equal(delivered[0].service, 'drain-cleaning');
});

test('returns field errors and delivers nothing when the form is invalid', async () => {
  const { deps, delivered } = setup({ ok: true, channels: ['email'] });
  const state = await handleLeadSubmission({ ...valid, phone: '123' }, deps);
  assert.equal(state.status, 'error');
  assert.ok(state.status === 'error' && state.fieldErrors?.phone);
  assert.equal(delivered.length, 0);
});

test('answers spam like a success but never delivers it', async () => {
  const { deps, delivered } = setup({ ok: true, channels: ['email'] });
  const state = await handleLeadSubmission({ ...valid, ab_check: 'SEO Kings' }, deps);
  assert.equal(state.status, 'success');
  assert.equal(delivered.length, 0);
});

test('asks the visitor to call when delivery fails, instead of pretending it worked', async () => {
  const { deps, logs } = setup({ ok: false, reason: 'failed' });
  const state = await handleLeadSubmission(valid, deps);
  assert.equal(state.status, 'error');
  assert.ok(state.status === 'error' && state.message.includes(BUSINESS_PHONE));
  assert.equal(logs.length, 1);
});

test('in production, an unconfigured form is an error the visitor can act on', async () => {
  const { deps, logs } = setup({ ok: false, reason: 'not-configured' }, { production: true });
  const state = await handleLeadSubmission(valid, deps);
  assert.equal(state.status, 'error');
  assert.ok(state.status === 'error' && state.message.includes(BUSINESS_PHONE));
  assert.equal(logs.length, 1);
});

test('in development, an unconfigured form logs the lead and succeeds so the flow can be tested locally', async () => {
  const { deps, logs } = setup({ ok: false, reason: 'not-configured' }, { production: false });
  const state = await handleLeadSubmission(valid, deps);
  assert.equal(state.status, 'success');
  assert.equal(logs.length, 1);
  assert.ok(logs[0].includes('(510) 555-0142'));
});

test('answers in Spanish when the visitor used the Spanish form', async () => {
  const invalid = await handleLeadSubmission({ ...valid, lang: 'es', phone: '123' }, setup({ ok: true, channels: ['email'] }).deps);
  assert.equal(invalid.status === 'error' && invalid.message, 'Revise los campos marcados.');

  const failed = await handleLeadSubmission({ ...valid, lang: 'es' }, setup({ ok: false, reason: 'failed' }).deps);
  assert.equal(
    failed.status === 'error' && failed.message,
    `No pudimos enviar su solicitud. Llámenos al ${BUSINESS_PHONE}, abrimos 24/7.`,
  );
});
