import { test } from 'node:test';
import assert from 'node:assert/strict';
import { deliverLead, formatLeadEmail, type Lead } from '../src/lib/lead.ts';

const lead: Lead = {
  name: 'Maria Lopez',
  phone: '(510) 555-0142',
  zip: '94601',
  service: 'water-heaters',
  urgency: 'emergency',
  details: 'No hot water since this morning',
  page: '/services/water-heaters',
  language: 'en',
  attribution: { gclid: 'Cj0KCQabc', utmSource: 'google' },
};

type Call = { url: string; init: RequestInit };

function fakeFetch(...responses: (Response | Error)[]) {
  const calls: Call[] = [];
  const impl = async (url: string | URL | Request, init?: RequestInit) => {
    calls.push({ url: String(url), init: init ?? {} });
    const next = responses.shift() ?? new Response('{}', { status: 200 });
    if (next instanceof Error) throw next;
    return next;
  };
  return { impl: impl as typeof fetch, calls };
}

test('email subject names the service, urgency and ZIP so the crew can triage from the inbox', () => {
  assert.equal(formatLeadEmail(lead).subject, 'New website lead: Water heaters (Emergency, right now), ZIP 94601');
  assert.equal(
    formatLeadEmail({ ...lead, service: 'not-sure', urgency: 'soon' }).subject,
    'New website lead: Not sure yet (In the next day or two), ZIP 94601',
  );
});

test('email subject flags Spanish speakers so the right person calls back', () => {
  assert.equal(
    formatLeadEmail({ ...lead, language: 'es' }).subject,
    'New website lead: Water heaters (Emergency, right now), ZIP 94601, Spanish speaker',
  );
});

test('email html escapes whatever the visitor typed', () => {
  const { html } = formatLeadEmail({ ...lead, details: '<img src=x onerror=alert(1)>', name: 'Bob & "Co"' });
  assert.ok(html.includes('&lt;img src=x onerror=alert(1)&gt;'));
  assert.ok(!html.includes('<img src=x'));
  assert.ok(html.includes('Bob &amp; &quot;Co&quot;'));
});

test('email gives a one-tap call-back link and the plain-text phone', () => {
  const { html, text } = formatLeadEmail(lead);
  assert.ok(html.includes('href="tel:+15105550142"'));
  assert.ok(text.includes('(510) 555-0142'));
});

test('sends the lead through Resend with the API key and recipient', async () => {
  const fetch = fakeFetch(new Response('{"id":"em_1"}', { status: 200 }));
  const result = await deliverLead(
    lead,
    { resendApiKey: 're_test_123', to: 'owner@example.com', from: 'Website <onboarding@resend.dev>' },
    fetch.impl,
  );

  assert.deepEqual(result, { ok: true, channels: ['email'] });
  assert.equal(fetch.calls.length, 1);
  const [{ url, init }] = fetch.calls;
  assert.equal(url, 'https://api.resend.com/emails');
  assert.equal(init.method, 'POST');
  const headers = new Headers(init.headers);
  assert.equal(headers.get('authorization'), 'Bearer re_test_123');
  assert.equal(headers.get('content-type'), 'application/json');
  const body = JSON.parse(String(init.body));
  assert.deepEqual(body.to, ['owner@example.com']);
  assert.equal(body.from, 'Website <onboarding@resend.dev>');
  assert.equal(body.subject, 'New website lead: Water heaters (Emergency, right now), ZIP 94601');
  assert.ok(body.text.includes('(510) 555-0142'));
});

test('reports failure when Resend rejects the email', async () => {
  const fetch = fakeFetch(new Response('{"message":"invalid from"}', { status: 422 }));
  const result = await deliverLead(lead, { resendApiKey: 're_test_123', to: 'owner@example.com' }, fetch.impl);
  assert.equal(result.ok, false);
  assert.equal(!result.ok && result.reason, 'failed');
});

test('reports failure when the network call throws', async () => {
  const fetch = fakeFetch(new Error('ECONNRESET'));
  const result = await deliverLead(lead, { resendApiKey: 're_test_123', to: 'owner@example.com' }, fetch.impl);
  assert.equal(!result.ok && result.reason, 'failed');
});

test('posts the full lead as JSON to the webhook', async () => {
  const fetch = fakeFetch(new Response('ok', { status: 200 }));
  const result = await deliverLead(lead, { webhookUrl: 'https://hooks.example.com/lead' }, fetch.impl);

  assert.deepEqual(result, { ok: true, channels: ['webhook'] });
  const [{ url, init }] = fetch.calls;
  assert.equal(url, 'https://hooks.example.com/lead');
  assert.equal(init.method, 'POST');
  const body = JSON.parse(String(init.body));
  assert.equal(body.phone, '(510) 555-0142');
  assert.equal(body.service, 'water-heaters');
  assert.equal(body.serviceName, 'Water heaters');
  assert.equal(body.gclid, 'Cj0KCQabc');
});

test('still succeeds through the webhook when the email channel fails, so the lead is not lost', async () => {
  const fetch = fakeFetch(new Response('down', { status: 500 }), new Response('ok', { status: 200 }));
  const result = await deliverLead(
    lead,
    { resendApiKey: 're_test_123', to: 'owner@example.com', webhookUrl: 'https://hooks.example.com/lead' },
    fetch.impl,
  );
  assert.deepEqual(result, { ok: true, channels: ['webhook'] });
  assert.equal(fetch.calls.length, 2);
});

test('reports not-configured and makes no request when no channel is set', async () => {
  const fetch = fakeFetch();
  const result = await deliverLead(lead, { resendApiKey: 're_test_123' }, fetch.impl);
  assert.deepEqual(result, { ok: false, reason: 'not-configured' });
  assert.equal(fetch.calls.length, 0);
});
