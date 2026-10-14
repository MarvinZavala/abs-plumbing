/**
 * IndexNow helpers (https://www.indexnow.org/documentation). One submission is shared with every
 * participating engine: Bing, Yandex, Seznam, Naver, Yep, Internet Archive and Amazonbot.
 */
export function extractSitemapUrls(xml: string): string[] {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1].replace(/&amp;/g, '&'));
}

export function indexNowBody({ siteUrl, key, urls }: { siteUrl: string; key: string; urls: string[] }) {
  const site = new URL(siteUrl);
  const sameHost = (url: string) => {
    try {
      return new URL(url).host === site.host;
    } catch {
      return false;
    }
  };
  return {
    host: site.host,
    key,
    keyLocation: new URL(`/${key}.txt`, site).toString(),
    // URLs on another host make the whole request fail with 422.
    urlList: urls.filter(sameHost),
  };
}

/** Public by design: the same value is served at /{key}.txt so engines can verify submissions. */
export const INDEXNOW_KEY = 'bd526bdc839e73c359f0a2f554fd2d12';
