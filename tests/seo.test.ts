import { test } from 'node:test';
import assert from 'node:assert/strict';
import { breadcrumbJsonLd, businessJsonLd, faqJsonLd, serviceJsonLd } from '../src/lib/structured-data.ts';
import { buildLlmsFullTxt, buildLlmsTxt } from '../src/lib/llms.ts';
import { extractSitemapUrls, indexNowBody } from '../src/lib/indexnow.ts';
import { allCities } from '../src/content/areas.ts';
import { faqs } from '../src/content/faqs.ts';
import { serviceBySlug } from '../src/content/services.ts';

const BASE = 'https://www.abs-plumbingservices.com';
const SERVICE_URLS = [
  `${BASE}/services/emergency-plumbing`,
  `${BASE}/services/drain-cleaning`,
  `${BASE}/services/water-heaters`,
  `${BASE}/services/sewer-lines`,
  `${BASE}/services/leaks-water-lines`,
  `${BASE}/services/fixtures`,
];

// --- structured data -------------------------------------------------------

test('business markup describes a 24/7 Plumber based in Oakland', () => {
  const b = businessJsonLd(BASE);
  assert.equal(b['@type'], 'Plumber');
  assert.equal(b['@id'], `${BASE}/#business`);
  assert.equal(b.url, `${BASE}/`);
  assert.equal(b.telephone, '+15107538649');
  assert.deepEqual(b.address, {
    '@type': 'PostalAddress',
    addressLocality: 'Oakland',
    addressRegion: 'CA',
    postalCode: '94601',
    addressCountry: 'US',
  });
  assert.deepEqual(b.openingHoursSpecification, [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ]);
});

test('business markup lists every service page and the whole Bay Area as served area', () => {
  const b = businessJsonLd(BASE);
  const offered = b.hasOfferCatalog.itemListElement.map((o: { itemOffered: { url: string } }) => o.itemOffered.url);
  assert.deepEqual(offered, SERVICE_URLS);
  assert.deepEqual(b.areaServed[0], { '@type': 'AdministrativeArea', name: 'San Francisco Bay Area' });
  assert.ok(b.areaServed.some((a: { name: string }) => a.name === 'Oakland, CA'));
});

test('business markup carries no self-serving rating or reviews', () => {
  const b = businessJsonLd(BASE);
  assert.equal('aggregateRating' in b, false);
  assert.equal('review' in b, false);
});

test('service markup names the business as provider by id', () => {
  const s = serviceJsonLd(serviceBySlug('drain-cleaning')!, BASE);
  assert.equal(s['@type'], 'Service');
  assert.equal(s.url, `${BASE}/services/drain-cleaning`);
  assert.deepEqual(s.provider, { '@id': `${BASE}/#business` });
});

test('breadcrumbs are numbered from 1 with absolute URLs', () => {
  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }], BASE);
  assert.deepEqual(crumbs.itemListElement, [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
  ]);
});

test('FAQ markup pairs each question with its answer', () => {
  assert.deepEqual(faqJsonLd([{ q: 'Open on Sundays?', a: 'Yes.' }]), {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{ '@type': 'Question', name: 'Open on Sundays?', acceptedAnswer: { '@type': 'Answer', text: 'Yes.' } }],
  });
});

// --- llms.txt --------------------------------------------------------------

test('llms.txt opens with the business name as H1 and a summary blockquote', () => {
  const lines = buildLlmsTxt(BASE).split('\n');
  assert.equal(lines[0], '# AB’s Plumbing Services');
  assert.equal(lines[1], '');
  assert.ok(lines[2].startsWith('> '));
});

test('llms.txt links every service page with absolute URLs only', () => {
  const txt = buildLlmsTxt(BASE);
  for (const url of SERVICE_URLS) assert.ok(txt.includes(`](${url})`), `missing ${url}`);
  assert.equal(/\]\(\//.test(txt), false, 'found a relative link');
});

test('llms.txt states phone, hours and home base', () => {
  const txt = buildLlmsTxt(BASE);
  assert.ok(txt.includes('(510) 753-8649'));
  assert.ok(txt.includes('24 hours'));
  assert.ok(txt.includes('based in Oakland'));
});

test('AI files and structured data name the city only, never the neighborhood', () => {
  const outputs = [buildLlmsTxt(BASE), buildLlmsFullTxt(BASE), JSON.stringify(businessJsonLd(BASE))];
  for (const output of outputs) assert.equal(output.includes('Fruitvale'), false);
});

test('llms-full.txt covers every city and every FAQ', () => {
  const full = buildLlmsFullTxt(BASE);
  for (const city of allCities) assert.ok(full.includes(city), `missing city ${city}`);
  for (const faq of faqs) assert.ok(full.includes(faq.q), `missing FAQ ${faq.q}`);
});

// --- IndexNow --------------------------------------------------------------

test('reads every <loc> from a sitemap', () => {
  const xml = `<?xml version="1.0"?><urlset><url><loc>${BASE}/</loc></url>\n<url>\n  <loc>${BASE}/services</loc>\n</url></urlset>`;
  assert.deepEqual(extractSitemapUrls(xml), [`${BASE}/`, `${BASE}/services`]);
});

test('builds the IndexNow body with host, key, key file location and URLs', () => {
  assert.deepEqual(indexNowBody({ siteUrl: BASE, key: 'a1b2c3d4e5f6', urls: [`${BASE}/`] }), {
    host: 'www.abs-plumbingservices.com',
    key: 'a1b2c3d4e5f6',
    keyLocation: `${BASE}/a1b2c3d4e5f6.txt`,
    urlList: [`${BASE}/`],
  });
});

test('drops URLs from other hosts, which IndexNow rejects with 422', () => {
  const body = indexNowBody({ siteUrl: BASE, key: 'a1b2c3d4e5f6', urls: [`${BASE}/`, 'https://abs-plumbing.vercel.app/'] });
  assert.deepEqual(body.urlList, [`${BASE}/`]);
});

test('the IndexNow key file served from /public matches the key used for submissions', async () => {
  const { INDEXNOW_KEY } = await import('../src/lib/indexnow.ts');
  const { readFileSync } = await import('node:fs');
  const served = readFileSync(new URL(`../public/${INDEXNOW_KEY}.txt`, import.meta.url), 'utf8');
  assert.equal(served.trim(), INDEXNOW_KEY);
  assert.match(INDEXNOW_KEY, /^[A-Za-z0-9-]{8,128}$/);
});
