// Submit every URL in the live sitemap to IndexNow after a production deploy.
// One submission is shared with all participating engines (Bing, Yandex, Seznam, Naver, Yep, Internet Archive,
// Amazonbot); a few endpoints are called directly for redundancy.
// usage: npm run indexnow
import { business } from '../src/content/business.ts';
import { INDEXNOW_KEY, extractSitemapUrls, indexNowBody } from '../src/lib/indexnow.ts';

const site = process.env.NEXT_PUBLIC_SITE_URL || business.website;
const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
  'https://search.seznam.cz/indexnow',
  'https://searchadvisor.naver.com/indexnow',
  'https://indexnow.yep.com/indexnow',
];

const sitemapRes = await fetch(new URL('/sitemap.xml', site));
if (!sitemapRes.ok) throw new Error(`sitemap.xml returned ${sitemapRes.status}`);
const body = indexNowBody({ siteUrl: site, key: INDEXNOW_KEY, urls: extractSitemapUrls(await sitemapRes.text()) });

// Engines verify the key by fetching it; submitting before it is live gets a 403.
const keyRes = await fetch(body.keyLocation);
if (!keyRes.ok || (await keyRes.text()).trim() !== INDEXNOW_KEY) {
  throw new Error(`Key file not live at ${body.keyLocation} (status ${keyRes.status}). Deploy first.`);
}

console.log(`Submitting ${body.urlList.length} URLs for ${body.host}`);
for (const endpoint of ENDPOINTS) {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15_000),
    });
    // 200 = received, 202 = received and key validation pending. Both are success.
    console.log(`${res.ok ? 'ok  ' : 'FAIL'} ${res.status} ${endpoint}`);
  } catch (error) {
    console.log(`FAIL ---- ${endpoint} (${error.message})`);
  }
}
