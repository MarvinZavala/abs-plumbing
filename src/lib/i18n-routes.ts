/**
 * Which pages exist in both languages. Only true twins are paired: they feed hreflang, the sitemap
 * and the language switch. Pure TypeScript so `node --test` can run it.
 */
import { spanishSlugs } from '../content/es-slugs.ts';
import type { Locale } from '../content/i18n.ts';
import type { ServiceSlug } from '../content/services.ts';

/** Pages that exist in both languages under different paths (besides home and the services). */
export const pageTwins: readonly [en: string, es: string][] = [
  ['/offers', '/es/ofertas'],
  ['/services', '/es/servicios'],
];

/** The same page in the other language, or null when the page exists in one language only. */
export function alternatePath(path: string, to: Locale): string | null {
  const clean = path.replace(/\/+$/, '') || '/';
  if (to === 'es') {
    if (clean === '/') return '/es';
    const twin = pageTwins.find(([en]) => en === clean);
    if (twin) return twin[1];
    const slug = clean.match(/^\/services\/([^/]+)$/)?.[1];
    const slugEs = slug && Object.hasOwn(spanishSlugs, slug) ? spanishSlugs[slug as ServiceSlug] : null;
    return slugEs ? `/es/servicios/${slugEs}` : null;
  }
  if (clean === '/es') return '/';
  const twin = pageTwins.find(([, es]) => es === clean);
  if (twin) return twin[0];
  const slugEs = clean.match(/^\/es\/servicios\/([^/]+)$/)?.[1];
  const slug = (Object.keys(spanishSlugs) as ServiceSlug[]).find((key) => spanishSlugs[key] === slugEs);
  return slug ? `/services/${slug}` : null;
}

/** hreflang map for a page that exists in both languages. English is the default for everyone else. */
export function languageAlternates(enPath: string, esPath: string) {
  return { 'en-US': enPath, 'es-US': esPath, 'x-default': enPath };
}
