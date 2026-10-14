/**
 * Real job photos from AB's Plumbing. Captions describe only what is visible in the photo;
 * a place is named only when it can be read in the picture itself (street signs).
 */
import type { StaticImageData } from 'next/image';
import type { ServiceSlug } from './services';

import apartmentComplexNewLine from '@/assets/work/apartment-complex-new-line.jpg';
import commercialKitchenDrainLine from '@/assets/work/commercial-kitchen-drain-line.jpg';
import commercialWaterHeatersCopper from '@/assets/work/commercial-water-heaters-copper.jpg';
import gasWaterHeaterReplacement from '@/assets/work/gas-water-heater-replacement.jpg';
import kitchenSinkDrainDisposal from '@/assets/work/kitchen-sink-drain-disposal.jpg';
import kitchenSinkFaucetInstall from '@/assets/work/kitchen-sink-faucet-install.jpg';
import outdoorFaucetWaterLine from '@/assets/work/outdoor-faucet-water-line.jpg';
import rheemTanklessInsulatedLines from '@/assets/work/rheem-tankless-insulated-lines.jpg';
import sewerLateralStreetPatch from '@/assets/work/sewer-lateral-street-patch.jpg';
import sewerLineFoothillBlvdOakland from '@/assets/work/sewer-line-foothill-blvd-oakland.jpg';
import tanklessAndNewLinesOutdoor from '@/assets/work/tankless-and-new-lines-outdoor.jpg';
import tanklessIndoorServiceValves from '@/assets/work/tankless-indoor-service-valves.jpg';
import tanklessOutdoorGasMeter from '@/assets/work/tankless-outdoor-gas-meter.jpg';
import tanklessWaterHeaterShingleWall from '@/assets/work/tankless-water-heater-shingle-wall.jpg';
import toiletInstall from '@/assets/work/toilet-install.jpg';
import trenchApartmentBuilding from '@/assets/work/trench-apartment-building.jpg';
import waterLineTrenchFrontYard from '@/assets/work/water-line-trench-front-yard.jpg';
import waterSoftenerInstall from '@/assets/work/water-softener-install.jpg';
import wholeHouseWaterFilter from '@/assets/work/whole-house-water-filter.jpg';

export type WorkPhoto = {
  id: string;
  image: StaticImageData;
  /** Short caption shown under the photo. */
  caption: string;
  /** Alt text: what the photo shows, for screen readers and image search. */
  alt: string;
  /** Readable place, only when visible in the photo. */
  place?: string;
  services: ServiceSlug[];
};

export const work: WorkPhoto[] = [
  {
    id: 'sewer-line-foothill-blvd-oakland',
    image: sewerLineFoothillBlvdOakland,
    caption: 'Street-side pipe replacement, crew in hard hats and hi-vis',
    alt: 'Crew in hard hats and hi-vis vests at an open trench with new white pipe on Foothill Blvd in Oakland, with traffic cones and a work truck behind',
    place: 'Foothill Blvd, Oakland',
    services: ['sewer-lines'],
  },
  {
    id: 'commercial-water-heaters-copper',
    image: commercialWaterHeatersCopper,
    caption: 'Three commercial water heaters on a copper manifold',
    alt: 'Three Lochinvar commercial water heaters connected by copper piping and blue valves in a utility room',
    services: ['water-heaters'],
  },
  {
    id: 'commercial-kitchen-drain-line',
    image: commercialKitchenDrainLine,
    caption: 'New drain line trenched through a commercial kitchen',
    alt: 'Open trench in a commercial kitchen floor with a new black ABS drain line running beside the cooking equipment',
    services: ['drain-cleaning', 'emergency-plumbing'],
  },
  {
    id: 'tankless-water-heater-shingle-wall',
    image: tanklessWaterHeaterShingleWall,
    caption: 'Tankless water heater installed on a shingle wall',
    alt: 'White tankless water heater mounted on a gray shingle exterior wall with insulated supply lines below',
    services: ['water-heaters'],
  },
  {
    id: 'sewer-lateral-street-patch',
    image: sewerLateralStreetPatch,
    caption: 'Sewer connection at the street, patched and coned off',
    alt: 'Fresh asphalt patch in the street surrounded by orange traffic cones after a sewer lateral connection, work truck behind',
    services: ['sewer-lines', 'emergency-plumbing'],
  },
  {
    id: 'gas-water-heater-replacement',
    image: gasWaterHeaterReplacement,
    caption: 'Gas water heater replaced, strapped and vented',
    alt: 'New Bradford White gas water heater with seismic straps, new vent pipe and gas connector in a kitchen closet',
    services: ['water-heaters'],
  },
  {
    id: 'trench-apartment-building',
    image: trenchApartmentBuilding,
    caption: 'Trenching for a new line along an apartment building',
    alt: 'Long trench dug beside an apartment building with an old pipe exposed, tools and traffic cones nearby',
    services: ['sewer-lines'],
  },
  {
    id: 'rheem-tankless-insulated-lines',
    image: rheemTanklessInsulatedLines,
    caption: 'Rheem tankless with insulated lines',
    alt: 'Rheem tankless water heater on a brown exterior wall with black insulated pipes and a yellow gas line',
    services: ['water-heaters'],
  },
  {
    id: 'water-line-trench-front-yard',
    image: waterLineTrenchFrontYard,
    caption: 'New water service line run through the front yard',
    alt: 'Narrow trench across a front yard with a new blue water service line laid at the bottom',
    services: ['leaks-water-lines', 'emergency-plumbing'],
  },
  {
    id: 'kitchen-sink-faucet-install',
    image: kitchenSinkFaucetInstall,
    caption: 'Kitchen sink and faucet, with a filtered-water tap',
    alt: 'New stainless steel kitchen sink with a pull-down faucet and a separate filtered-water tap in a granite counter',
    services: ['fixtures'],
  },
  {
    id: 'apartment-complex-new-line',
    image: apartmentComplexNewLine,
    caption: 'New line going in at an apartment complex',
    alt: 'Long white PVC pipe laid across an apartment complex parking lot, crew and materials in the background',
    services: ['sewer-lines', 'drain-cleaning'],
  },
  {
    id: 'tankless-and-new-lines-outdoor',
    image: tanklessAndNewLinesOutdoor,
    caption: 'Outdoor tankless with new drain and water lines',
    alt: 'Tankless water heater on wood siding with new black drain pipes, copper and blue water lines running into the ground',
    services: ['water-heaters'],
  },
  {
    id: 'kitchen-sink-drain-disposal',
    image: kitchenSinkDrainDisposal,
    caption: 'Kitchen sink drain and disposal hookup',
    alt: 'Under-sink view of a new drain trap and garbage disposal connection with copper supply lines',
    services: ['fixtures', 'drain-cleaning'],
  },
  {
    id: 'whole-house-water-filter',
    image: wholeHouseWaterFilter,
    caption: 'Whole-house water filter with bypass valves',
    alt: 'Blue whole-house water filter housing with a pressure gauge and copper bypass valves',
    services: ['leaks-water-lines'],
  },
  {
    id: 'outdoor-faucet-water-line',
    image: outdoorFaucetWaterLine,
    caption: 'New water line to an outdoor faucet',
    alt: 'New copper and blue water line running along a stucco wall to an outdoor faucet, with a shallow trench',
    services: ['leaks-water-lines'],
  },
  {
    id: 'tankless-indoor-service-valves',
    image: tanklessIndoorServiceValves,
    caption: 'Indoor tankless with service valves',
    alt: 'Tankless water heater mounted on a garage wall with copper piping and red and blue service valves',
    services: ['water-heaters'],
  },
  {
    id: 'tankless-outdoor-gas-meter',
    image: tanklessOutdoorGasMeter,
    caption: 'Outdoor tankless next to the gas meter',
    alt: 'White tankless water heater on blue siding next to a gas meter and electrical panel',
    services: ['water-heaters'],
  },
  {
    id: 'toilet-install',
    image: toiletInstall,
    caption: 'New toilet installed',
    alt: 'Newly installed white toilet in a bathroom with dark tile floor',
    services: ['fixtures'],
  },
  {
    id: 'water-softener-install',
    image: waterSoftenerInstall,
    caption: 'Water softener installed',
    alt: 'Water softener resin tank and brine tank installed in a utility corner',
    services: ['leaks-water-lines'],
  },
];

export function photoById(id: string): WorkPhoto {
  const photo = work.find((p) => p.id === id);
  if (!photo) throw new Error(`Unknown photo id: ${id}`);
  return photo;
}
