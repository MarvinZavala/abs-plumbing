import { test } from 'node:test';
import assert from 'node:assert/strict';
import { activeOffers, endsLabel, offers, pacificDate, type Offer } from '../src/content/offers.ts';
import { business } from '../src/content/business.ts';
import { alternatePath } from '../src/lib/i18n-routes.ts';
import { sitemapEntries } from '../src/lib/sitemap.ts';

const BASE = 'https://www.abs-plumbingservices.com';
const offer = (o: Partial<Offer>): Offer => ({
  id: 'x',
  amount: { en: '$50 off', es: '$50 de descuento' },
  title: { en: 't', es: 't' },
  who: { en: 'w', es: 'w' },
  howTo: { en: 'h', es: 'h' },
  ...o,
});

test('the new-customer offer matches the percent in business.ts', () => {
  const first = offers.find((o) => o.id === 'new-customer');
  assert.equal(!!first, business.offer.enabled);
  if (first) assert.equal(first.amount.en, `${business.offer.percent}% off`);
});

test('every offer is written in English and Spanish, with a unique URL-safe id', () => {
  const ids = offers.map((o) => o.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const o of offers) {
    assert.match(o.id, /^[a-z0-9]+(-[a-z0-9]+)*$/);
    for (const text of [o.amount, o.title, o.who, o.howTo, ...(o.terms ?? [])]) {
      assert.ok(text.en.trim() && text.es.trim(), `${o.id}: missing translation`);
    }
    for (const d of [o.startsOn, o.endsOn]) if (d) assert.match(d, /^\d{4}-\d{2}-\d{2}$/);
  }
});

test('offers run from their first to their last day, Pacific time, inclusive', () => {
  const list = [offer({ id: 'ongoing' }), offer({ id: 'november', startsOn: '2026-11-01', endsOn: '2026-11-30' })];
  const ids = (iso: string) => activeOffers(new Date(iso), list).map((o) => o.id);
  assert.deepEqual(ids('2026-10-31T12:00:00-07:00'), ['ongoing']);
  assert.deepEqual(ids('2026-11-01T00:30:00-07:00'), ['ongoing', 'november']);
  // 11:30 pm on Nov 30 in Oakland is already Dec 1 in UTC: still running.
  assert.deepEqual(ids('2026-11-30T23:30:00-08:00'), ['ongoing', 'november']);
  assert.deepEqual(ids('2026-12-01T00:30:00-08:00'), ['ongoing']);
  assert.equal(pacificDate(new Date('2026-12-01T07:30:00Z')), '2026-11-30');
});

test('end dates read naturally in both languages', () => {
  assert.equal(endsLabel('2026-11-30', 'en'), 'Ends November 30, 2026');
  assert.equal(endsLabel('2026-11-30', 'es'), 'Termina el 30 de noviembre de 2026');
});

test('the offers page has a Spanish twin', () => {
  assert.equal(alternatePath('/offers', 'es'), '/es/ofertas');
  assert.equal(alternatePath('/es/ofertas', 'en'), '/offers');
});

test('both offers pages are in the sitemap, paired by hreflang', () => {
  const entries = sitemapEntries(BASE);
  for (const path of ['/offers', '/es/ofertas']) {
    const entry = entries.find((e) => e.url === `${BASE}${path}`);
    assert.ok(entry, `${path} missing`);
    assert.equal(entry.alternates?.languages['es-US'], `${BASE}/es/ofertas`);
    assert.equal(entry.alternates?.languages['en-US'], `${BASE}/offers`);
  }
});
