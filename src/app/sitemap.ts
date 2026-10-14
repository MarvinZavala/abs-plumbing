import type { MetadataRoute } from 'next';
import { business } from '@/content/business';
import { services } from '@/content/services';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const lastModified = new Date(`${business.factsCheckedOn}T12:00:00Z`);
  const paths = ['/', '/services', ...services.map((s) => `/services/${s.slug}`), '/service-areas', '/gallery', '/about', '/privacy'];
  return paths.map((path) => ({
    url: new URL(path, base).toString(),
    lastModified,
    changeFrequency: path === '/privacy' ? 'yearly' : 'monthly',
    priority: path === '/' ? 1 : path.startsWith('/services') ? 0.9 : path === '/service-areas' ? 0.8 : 0.6,
  }));
}
