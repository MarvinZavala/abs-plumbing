import type { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const paths = ['/', '/services', ...services.map((s) => `/services/${s.slug}`), '/gallery', '/about', '/service-areas', '/privacy'];
  return paths.map((path) => ({
    url: new URL(path, base).toString(),
    changeFrequency: path === '/privacy' ? 'yearly' : 'monthly',
    priority: path === '/' ? 1 : path.startsWith('/services') ? 0.9 : 0.6,
  }));
}
