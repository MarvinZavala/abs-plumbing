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
  'hydro-jetting': 'hydro-jetting',
  'plumbing-inspections': 'inspecciones-de-plomeria',
  'sump-pumps': 'bombas-de-sumidero',
  'backflow-preventers': 'valvulas-antirretorno',
  'tankless-water-heaters': 'calentadores-sin-tanque',
  'recirculation-pumps': 'bombas-de-recirculacion',
  'gas-lines': 'lineas-de-gas',
  'remodel-plumbing': 'plomeria-para-remodelaciones',
  'toilets': 'inodoros',
  'faucets-sinks': 'llaves-y-fregaderos',
  'garbage-disposals': 'trituradores-de-basura',
  'showers-bathtubs': 'regaderas-y-tinas',
};
