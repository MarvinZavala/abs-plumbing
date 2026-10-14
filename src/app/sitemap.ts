import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { sitemapEntries } from '@/lib/sitemap';

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries(siteUrl().toString());
}
