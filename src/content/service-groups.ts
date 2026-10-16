/**
 * How the services are grouped on /services and /es/servicios, in order. Every service must be in exactly one
 * group (tests/services.test.ts checks it). `core` services are the six shown on the home pages.
 */
import type { ServiceSlug } from './services.ts';

export type ServiceGroup = {
  id: string;
  name: { en: string; es: string };
  services: ServiceSlug[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'emergency',
    name: { en: 'Emergencies, 24/7', es: 'Emergencias, 24/7' },
    services: ['emergency-plumbing'],
  },
  {
    id: 'drains',
    name: { en: 'Drains and sewer lines', es: 'Drenajes y líneas de drenaje' },
    services: ['drain-cleaning', 'hydro-jetting', 'sewer-lines', 'sewer-line-replacement', 'plumbing-inspections', 'sump-pumps'],
  },
  {
    id: 'water-heaters',
    name: { en: 'Water heaters and hot water', es: 'Calentadores y agua caliente' },
    services: ['water-heaters', 'tankless-water-heaters', 'recirculation-pumps'],
  },
  {
    id: 'water-gas',
    name: { en: 'Water lines and gas lines', es: 'Líneas de agua y de gas' },
    services: ['leaks-water-lines', 'repiping', 'gas-lines', 'backflow-preventers'],
  },
  {
    id: 'fixtures',
    name: { en: 'Kitchens, bathrooms and remodels', es: 'Cocinas, baños y remodelaciones' },
    services: ['fixtures', 'toilets', 'faucets-sinks', 'garbage-disposals', 'showers-bathtubs', 'remodel-plumbing'],
  },
];

/** The six services on the home pages and in the short menus, in this order. */
export const coreServices: ServiceSlug[] = [
  'emergency-plumbing',
  'drain-cleaning',
  'water-heaters',
  'sewer-lines',
  'leaks-water-lines',
  'fixtures',
];
