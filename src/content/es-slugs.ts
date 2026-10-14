import type { ServiceSlug } from './services.ts';

/**
 * URL slug of each service's Spanish page: /es/servicios/[slug]. Kept apart from the Spanish copy so the
 * language switch (a client component) can map URLs without shipping every page's text to the browser.
 * Ads point at these URLs, so don't rename them casually.
 */
export const spanishSlugs: Record<ServiceSlug, string> = {
  'emergency-plumbing': 'plomeria-de-emergencia',
  'drain-cleaning': 'destape-de-drenajes',
  'water-heaters': 'calentadores-de-agua',
  'sewer-lines': 'lineas-de-drenaje',
  'leaks-water-lines': 'fugas-y-lineas-de-agua',
  fixtures: 'inodoros-llaves-y-trituradores',
};
