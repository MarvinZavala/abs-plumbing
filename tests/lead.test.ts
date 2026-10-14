import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseLead } from '../src/lib/lead.ts';

const NOW = 1_800_000_000_000;

function fields(overrides: Record<string, string> = {}): Record<string, string> {
  return {
    name: 'Maria Lopez',
    phone: '(510) 555-0142',
    zip: '94601',
    service: 'water-heaters',
    urgency: 'emergency',
    details: '',
    ab_check: '',
    startedAt: String(NOW - 10_000),
    page: '/',
    ...overrides,
  };
}

test('accepts a complete request and normalizes every field', () => {
  const result = parseLead(
    fields({
      name: '  Maria   Lopez ',
      phone: '510.555.0142',
      zip: '94601-1234',
      details: '  No hot water since this morning  ',
      page: '/services/water-heaters',
      gclid: 'Cj0KCQabc',
      utm_source: 'google',
      utm_campaign: 'water-heaters',
    }),
    NOW,
  );

  assert.deepEqual(result, {
    ok: true,
    lead: {
      name: 'Maria Lopez',
      phone: '(510) 555-0142',
      zip: '94601',
      service: 'water-heaters',
      urgency: 'emergency',
      details: 'No hot water since this morning',
      page: '/services/water-heaters',
      attribution: { gclid: 'Cj0KCQabc', utmSource: 'google', utmCampaign: 'water-heaters' },
    },
  });
});

test('requires a name', () => {
  const result = parseLead(fields({ name: '   ' }), NOW);
  assert.equal(result.ok, false);
  assert.ok(!result.ok && 'errors' in result && result.errors.name);
});

test('rejects phone numbers that do not have 10 digits', () => {
  for (const phone of ['555-0142', '(510) 555-01', '', 'call me']) {
    const result = parseLead(fields({ phone }), NOW);
    assert.ok(!result.ok && 'errors' in result && result.errors.phone, `expected an error for "${phone}"`);
  }
});

test('accepts a leading US country code', () => {
  for (const phone of ['+1 510 555 0142', '15105550142', '1-510-555-0142']) {
    const result = parseLead(fields({ phone }), NOW);
    assert.ok(result.ok, `expected "${phone}" to be accepted`);
    assert.equal(result.ok && result.lead.phone, '(510) 555-0142');
  }
});

test('rejects a ZIP code that is not 5 digits', () => {
  for (const zip of ['946', 'abcde', '', '9460']) {
    const result = parseLead(fields({ zip }), NOW);
    assert.ok(!result.ok && 'errors' in result && result.errors.zip, `expected an error for "${zip}"`);
  }
});

test('reports every invalid field at once', () => {
  const result = parseLead(fields({ name: '', phone: '12', zip: '1' }), NOW);
  assert.ok(!result.ok && 'errors' in result);
  assert.deepEqual(Object.keys(!result.ok && 'errors' in result ? result.errors : {}).sort(), ['name', 'phone', 'zip']);
});

test('falls back to not-sure for an unknown service', () => {
  const result = parseLead(fields({ service: 'roofing' }), NOW);
  assert.equal(result.ok && result.lead.service, 'not-sure');
});

test('defaults urgency to soon when it is missing or unknown', () => {
  for (const urgency of ['', 'yesterday']) {
    const result = parseLead(fields({ urgency }), NOW);
    assert.equal(result.ok && result.lead.urgency, 'soon');
  }
});

test('treats a filled hidden trap field as spam', () => {
  assert.deepEqual(parseLead(fields({ ab_check: 'Best SEO Inc' }), NOW), { ok: false, spam: true });
});

test('ignores an autofilled company field, so real customers are never flagged as spam', () => {
  assert.equal(parseLead(fields({ company: 'Acme Property Management' }), NOW).ok, true);
});

test('treats a submission under 2.5 seconds after the form loaded as spam', () => {
  assert.deepEqual(parseLead(fields({ startedAt: String(NOW - 1_000) }), NOW), { ok: false, spam: true });
  assert.equal(parseLead(fields({ startedAt: String(NOW - 3_000) }), NOW).ok, true);
});

test('does not block a submission without a load timestamp (form posted without JavaScript)', () => {
  assert.equal(parseLead(fields({ startedAt: '' }), NOW).ok, true);
});

test('caps long free text so a paste bomb cannot flood the inbox', () => {
  const result = parseLead(fields({ details: 'x'.repeat(5_000), name: 'y'.repeat(500) }), NOW);
  assert.ok(result.ok);
  assert.equal(result.ok && result.lead.details.length, 1_000);
  assert.equal(result.ok && result.lead.name.length, 80);
});

test('keeps only a site path as the page, never a full URL', () => {
  for (const page of ['https://evil.example/phish', '//evil.example', 'javascript:alert(1)']) {
    const result = parseLead(fields({ page }), NOW);
    assert.equal(result.ok && result.lead.page, '/', `expected "${page}" to be replaced`);
  }
  const ok = parseLead(fields({ page: '/services/drain-cleaning?gclid=1' }), NOW);
  assert.equal(ok.ok && ok.lead.page, '/services/drain-cleaning');
});
