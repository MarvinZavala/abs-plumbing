/**
 * Real job photos from AB's Plumbing. Captions describe only what is visible in the photo;
 * a place is named only when it can be read in the picture itself (street signs).
 */
import type { StaticImageData } from 'next/image';
import type { Locale } from './i18n';
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
  /** Spanish caption and alt text, held to the same rule: only what is visible. */
  es: { caption: string; alt: string };
};

export const work: WorkPhoto[] = [
  {
    id: 'sewer-line-foothill-blvd-oakland',
    image: sewerLineFoothillBlvdOakland,
    caption: 'Street-side pipe replacement, crew in hard hats and hi-vis',
    alt: 'Crew in hard hats and hi-vis vests at an open trench with new white pipe on Foothill Blvd in Oakland, with traffic cones and a work truck behind',
    place: 'Foothill Blvd, Oakland',
    es: {
      caption: 'Cambio de tubería junto a la calle, equipo con cascos y chalecos reflectantes',
      alt: 'Equipo con cascos y chalecos reflectantes junto a una zanja abierta con tubo blanco nuevo en Foothill Blvd en Oakland, con conos de tráfico y un camión de trabajo atrás',
    },
    services: ['sewer-lines'],
  },
  {
    id: 'commercial-water-heaters-copper',
    image: commercialWaterHeatersCopper,
    caption: 'Three commercial water heaters on a copper manifold',
    alt: 'Three Lochinvar commercial water heaters connected by copper piping and blue valves in a utility room',
    es: {
      caption: 'Tres calentadores de agua comerciales en un múltiple de cobre',
      alt: 'Tres calentadores de agua comerciales Lochinvar conectados con tubería de cobre y válvulas azules en un cuarto de máquinas',
    },
    services: ['water-heaters'],
  },
  {
    id: 'commercial-kitchen-drain-line',
    image: commercialKitchenDrainLine,
    caption: 'New drain line trenched through a commercial kitchen',
    alt: 'Open trench in a commercial kitchen floor with a new black ABS drain line running beside the cooking equipment',
    es: {
      caption: 'Línea de drenaje nueva en una zanja dentro de una cocina comercial',
      alt: 'Zanja abierta en el piso de una cocina comercial con una línea de drenaje nueva de ABS negro junto al equipo de cocina',
    },
    services: ['drain-cleaning', 'emergency-plumbing'],
  },
  {
    id: 'tankless-water-heater-shingle-wall',
    image: tanklessWaterHeaterShingleWall,
    caption: 'Tankless water heater installed on a shingle wall',
    alt: 'White tankless water heater mounted on a gray shingle exterior wall with insulated supply lines below',
    es: {
      caption: 'Calentador sin tanque instalado en una pared de tejas',
      alt: 'Calentador de agua sin tanque blanco montado en una pared exterior de tejas grises, con líneas de suministro aisladas abajo',
    },
    services: ['water-heaters'],
  },
  {
    id: 'sewer-lateral-street-patch',
    image: sewerLateralStreetPatch,
    caption: 'Sewer connection at the street, patched and coned off',
    alt: 'Fresh asphalt patch in the street surrounded by orange traffic cones after a sewer lateral connection, work truck behind',
    es: {
      caption: 'Conexión del drenaje en la calle, parchada y con conos',
      alt: 'Parche de asfalto nuevo en la calle rodeado de conos naranjas después de conectar una línea lateral de drenaje, con un camión de trabajo atrás',
    },
    services: ['sewer-lines', 'emergency-plumbing'],
  },
  {
    id: 'gas-water-heater-replacement',
    image: gasWaterHeaterReplacement,
    caption: 'Gas water heater replaced, strapped and vented',
    alt: 'New Bradford White gas water heater with seismic straps, new vent pipe and gas connector in a kitchen closet',
    es: {
      caption: 'Calentador de gas cambiado, con correas y ventilación',
      alt: 'Calentador de agua de gas Bradford White nuevo con correas sísmicas, tubo de ventilación nuevo y conector de gas en un clóset de la cocina',
    },
    services: ['water-heaters'],
  },
  {
    id: 'trench-apartment-building',
    image: trenchApartmentBuilding,
    caption: 'Trenching for a new line along an apartment building',
    alt: 'Long trench dug beside an apartment building with an old pipe exposed, tools and traffic cones nearby',
    es: {
      caption: 'Zanja para una línea nueva junto a un edificio de departamentos',
      alt: 'Zanja larga junto a un edificio de departamentos con un tubo viejo expuesto, herramientas y conos de tráfico cerca',
    },
    services: ['sewer-lines'],
  },
  {
    id: 'rheem-tankless-insulated-lines',
    image: rheemTanklessInsulatedLines,
    caption: 'Rheem tankless with insulated lines',
    alt: 'Rheem tankless water heater on a brown exterior wall with black insulated pipes and a yellow gas line',
    es: {
      caption: 'Calentador sin tanque Rheem con líneas aisladas',
      alt: 'Calentador de agua sin tanque Rheem en una pared exterior café con tubos negros aislados y una línea de gas amarilla',
    },
    services: ['water-heaters'],
  },
  {
    id: 'water-line-trench-front-yard',
    image: waterLineTrenchFrontYard,
    caption: 'New water service line run through the front yard',
    alt: 'Narrow trench across a front yard with a new blue water service line laid at the bottom',
    es: {
      caption: 'Línea de agua nueva a través del jardín de enfrente',
      alt: 'Zanja angosta a lo ancho de un jardín de enfrente con una línea de agua azul nueva en el fondo',
    },
    services: ['leaks-water-lines', 'emergency-plumbing'],
  },
  {
    id: 'kitchen-sink-faucet-install',
    image: kitchenSinkFaucetInstall,
    caption: 'Kitchen sink and faucet, with a filtered-water tap',
    alt: 'New stainless steel kitchen sink with a pull-down faucet and a separate filtered-water tap in a granite counter',
    es: {
      caption: 'Fregadero y llave de cocina, con llave de agua filtrada',
      alt: 'Fregadero nuevo de acero inoxidable con llave extraíble y una llave aparte para agua filtrada en una cubierta de granito',
    },
    services: ['fixtures'],
  },
  {
    id: 'apartment-complex-new-line',
    image: apartmentComplexNewLine,
    caption: 'New line going in at an apartment complex',
    alt: 'Long white PVC pipe laid across an apartment complex parking lot, crew and materials in the background',
    es: {
      caption: 'Línea nueva en un complejo de departamentos',
      alt: 'Tubo largo de PVC blanco tendido en el estacionamiento de un complejo de departamentos, con el equipo y materiales al fondo',
    },
    services: ['sewer-lines', 'drain-cleaning'],
  },
  {
    id: 'tankless-and-new-lines-outdoor',
    image: tanklessAndNewLinesOutdoor,
    caption: 'Outdoor tankless with new drain and water lines',
    alt: 'Tankless water heater on wood siding with new black drain pipes, copper and blue water lines running into the ground',
    es: {
      caption: 'Calentador sin tanque exterior con líneas nuevas de drenaje y de agua',
      alt: 'Calentador de agua sin tanque en una pared de madera con tubos de drenaje negros nuevos y líneas de agua de cobre y azules que entran al suelo',
    },
    services: ['water-heaters'],
  },
  {
    id: 'kitchen-sink-drain-disposal',
    image: kitchenSinkDrainDisposal,
    caption: 'Kitchen sink drain and disposal hookup',
    alt: 'Under-sink view of a new drain trap and garbage disposal connection with copper supply lines',
    es: {
      caption: 'Drenaje del fregadero y conexión del triturador',
      alt: 'Vista debajo del fregadero de una trampa de drenaje nueva y la conexión del triturador de basura con líneas de suministro de cobre',
    },
    services: ['fixtures', 'drain-cleaning'],
  },
  {
    id: 'whole-house-water-filter',
    image: wholeHouseWaterFilter,
    caption: 'Whole-house water filter with bypass valves',
    alt: 'Blue whole-house water filter housing with a pressure gauge and copper bypass valves',
    es: {
      caption: 'Filtro de agua para toda la casa con válvulas de desvío',
      alt: 'Filtro de agua azul para toda la casa con manómetro y válvulas de desvío de cobre',
    },
    services: ['leaks-water-lines'],
  },
  {
    id: 'outdoor-faucet-water-line',
    image: outdoorFaucetWaterLine,
    caption: 'New water line to an outdoor faucet',
    alt: 'New copper and blue water line running along a stucco wall to an outdoor faucet, with a shallow trench',
    es: {
      caption: 'Línea de agua nueva para una llave de afuera',
      alt: 'Línea de agua nueva de cobre y azul a lo largo de una pared de estuco hasta una llave de afuera, con una zanja poco profunda',
    },
    services: ['leaks-water-lines'],
  },
  {
    id: 'tankless-indoor-service-valves',
    image: tanklessIndoorServiceValves,
    caption: 'Indoor tankless with service valves',
    alt: 'Tankless water heater mounted on a garage wall with copper piping and red and blue service valves',
    es: {
      caption: 'Calentador sin tanque interior con válvulas de servicio',
      alt: 'Calentador de agua sin tanque montado en la pared de un garaje con tubería de cobre y válvulas de servicio rojas y azules',
    },
    services: ['water-heaters'],
  },
  {
    id: 'tankless-outdoor-gas-meter',
    image: tanklessOutdoorGasMeter,
    caption: 'Outdoor tankless next to the gas meter',
    alt: 'White tankless water heater on blue siding next to a gas meter and electrical panel',
    es: {
      caption: 'Calentador sin tanque exterior junto al medidor de gas',
      alt: 'Calentador de agua sin tanque blanco en una pared azul junto a un medidor de gas y un tablero eléctrico',
    },
    services: ['water-heaters'],
  },
  {
    id: 'toilet-install',
    image: toiletInstall,
    caption: 'New toilet installed',
    alt: 'Newly installed white toilet in a bathroom with dark tile floor',
    es: {
      caption: 'Inodoro nuevo instalado',
      alt: 'Inodoro blanco recién instalado en un baño con piso de azulejo oscuro',
    },
    services: ['fixtures'],
  },
  {
    id: 'water-softener-install',
    image: waterSoftenerInstall,
    caption: 'Water softener installed',
    alt: 'Water softener resin tank and brine tank installed in a utility corner',
    es: {
      caption: 'Suavizador de agua instalado',
      alt: 'Tanque de resina y tanque de salmuera de un suavizador de agua instalados en una esquina de servicio',
    },
    services: ['leaks-water-lines'],
  },
];

/** The photo with its caption and alt text in the given language. */
export function inLocale(photo: WorkPhoto, locale: Locale): WorkPhoto {
  return locale === 'es' ? { ...photo, caption: photo.es.caption, alt: photo.es.alt } : photo;
}

export function photoById(id: string, locale: Locale = 'en'): WorkPhoto {
  const photo = work.find((p) => p.id === id);
  if (!photo) throw new Error(`Unknown photo id: ${id}`);
  return inLocale(photo, locale);
}
