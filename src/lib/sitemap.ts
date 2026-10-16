/**
 * Sitemap entries, with hreflang pairs for pages that exist in English and Spanish.
 * Pure TypeScript so `node --test` can run it; src/app/sitemap.ts serves it.
 */
import { business } from '../content/business.ts';
import { servicesEs } from '../content/es.ts';
import { services } from '../content/services.ts';
import { languageAlternates, pageTwins } from './i18n-routes.ts';

export type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: 'monthly' | 'yearly';
  priority: number;
  alternates?: { languages: Record<string, string> };
};

export function sitemapEntries(base: string): SitemapEntry[] {
  const abs = (path: string) => new URL(path, base).toString();
  const lastModified = new Date(`${business.factsCheckedOn}T12:00:00Z`);

  const twins: [string, string][] = [
    ['/', '/es'],
    ...pageTwins,
    ...servicesEs.map((s): [string, string] => [`/services/${s.slug}`, `/es/servicios/${s.slugEs}`]),
  ];
  const languages = new Map<string, Record<string, string>>();
  for (const [en, es] of twins) {
    const pair = languageAlternates(abs(en), abs(es));
    languages.set(en, pair);
    languages.set(es, pair);
  }

  const paths = [
    '/',
    '/services',
    ...services.map((s) => `/services/${s.slug}`),
    '/offers',
    '/service-areas',
    '/gallery',
    '/about',
    '/privacy',
    '/es',
    '/es/servicios',
    ...servicesEs.map((s) => `/es/servicios/${s.slugEs}`),
    '/es/ofertas',
  ];
  return paths.map((path) => {
    const pair = languages.get(path);
    return {
      url: abs(path),
      lastModified,
      changeFrequency: path === '/privacy' ? 'yearly' : 'monthly',
      priority:
        path === '/'
          ? 1
          : path === '/es' || path.startsWith('/services') || path.startsWith('/es/servicios')
            ? 0.9
            : path === '/service-areas' || path === '/offers' || path === '/es/ofertas'
              ? 0.8
              : 0.6,
      ...(pair ? { alternates: { languages: pair } } : {}),
    };
  });
}
