import { business } from '../content/business.ts';

/**
 * Absolute site URL for canonical links, the sitemap, structured data and llms.txt.
 * Defaults to the production domain so preview copies point search engines at the real site.
 */
export function siteUrl(): URL {
  return new URL(process.env.NEXT_PUBLIC_SITE_URL || business.website);
}
