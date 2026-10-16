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
import rheem50GallonWaterHeater from '@/assets/work/rheem-50-gallon-water-heater.jpg';
import twoTanklessWaterHeaters from '@/assets/work/two-tankless-water-heaters.jpg';
import fortyGallonWaterHeaterReplacement from '@/assets/work/40-gallon-water-heater-replacement.jpg';
import navienTanklessWaterHeater from '@/assets/work/navien-tankless-water-heater.jpg';
import burstPipeBefore from '@/assets/work/burst-pipe-before.jpg';
import burstPipeRepaired from '@/assets/work/burst-pipe-repaired.jpg';
import pressureRegulatorIrrigationLine from '@/assets/work/pressure-regulator-irrigation-line.jpg';
import wrappedWaterLineWall from '@/assets/work/wrapped-water-line-wall.jpg';
import waterLinesTrenchAlongHouse from '@/assets/work/water-lines-trench-along-house.jpg';
import copperLaundryWaterLines from '@/assets/work/copper-laundry-water-lines.jpg';
import rootsSewerCleanout from '@/assets/work/roots-sewer-cleanout.jpg';
import newSdrSewerPipeTrench from '@/assets/work/new-sdr-sewer-pipe-trench.jpg';
import sewerLineReplacementAbs from '@/assets/work/sewer-line-replacement-abs.jpg';
import sewerCameraView from '@/assets/work/sewer-camera-view.jpg';
import sewerCameraSetup from '@/assets/work/sewer-camera-setup.jpg';
import drainMachineOutdoorCleanout from '@/assets/work/drain-machine-outdoor-cleanout.jpg';
import toiletClogAuger from '@/assets/work/toilet-clog-auger.jpg';
import sumpPumpBasin from '@/assets/work/sump-pump-basin.jpg';
import sewerPumpBox from '@/assets/work/sewer-pump-box.jpg';
import bathtubShowerRemodel from '@/assets/work/bathtub-shower-remodel.jpg';
import moenShowerValve from '@/assets/work/moen-shower-valve.jpg';
import kitchenFaucetStainlessSink from '@/assets/work/kitchen-faucet-stainless-sink.jpg';
import garbageDisposalReplacement from '@/assets/work/garbage-disposal-replacement.jpg';
import newToiletInstall from '@/assets/work/new-toilet-install.jpg';
import crewAtWork from '@/assets/work/crew-at-work.jpg';

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
  // Added 2026-10-16 from AB's own captioned photos on Yelp (originals, upscaled 1.5x).
  {
    id: 'rheem-50-gallon-water-heater',
    image: rheem50GallonWaterHeater,
    caption: 'New 50-gallon Rheem gas water heater',
    alt: 'New 50-gallon Rheem gas water heater with seismic straps, a new vent and a yellow gas line in a garage corner',
    es: {
      caption: 'Calentador de agua Rheem nuevo de 50 galones',
      alt: 'Calentador de agua de gas Rheem nuevo de 50 galones con correas sísmicas, ventilación nueva y línea de gas amarilla en una esquina del garaje',
    },
    services: ['water-heaters'],
  },
  {
    id: 'two-tankless-water-heaters',
    image: twoTanklessWaterHeaters,
    caption: 'Two tankless water heaters, side by side',
    alt: 'Two white tankless water heaters mounted side by side on a wall, with new vent pipes and copper lines below',
    es: {
      caption: 'Dos calentadores sin tanque, uno junto al otro',
      alt: 'Dos calentadores de agua sin tanque blancos montados uno junto al otro en la pared, con ventilación nueva y tubería de cobre abajo',
    },
    services: ['water-heaters'],
  },
  {
    id: '40-gallon-water-heater-replacement',
    image: fortyGallonWaterHeaterReplacement,
    caption: 'Replacement 40-gallon water heater',
    alt: 'New 40-gallon tank water heater with seismic straps, set on a stand in a utility closet',
    es: {
      caption: 'Calentador de 40 galones de reemplazo',
      alt: 'Calentador de agua nuevo de 40 galones con correas sísmicas, sobre una base en un clóset de servicio',
    },
    services: ['water-heaters'],
  },
  {
    id: 'navien-tankless-water-heater',
    image: navienTanklessWaterHeater,
    caption: 'New Navien tankless water heater',
    alt: 'White Navien tankless water heater on a wooden wall, with a yellow gas line and new water connections below',
    es: {
      caption: 'Calentador sin tanque Navien nuevo',
      alt: 'Calentador de agua sin tanque Navien blanco en una pared de madera, con línea de gas amarilla y conexiones de agua nuevas abajo',
    },
    services: ['water-heaters'],
  },
  {
    id: 'burst-pipe-before',
    image: burstPipeBefore,
    caption: 'Before: a burst pipe spraying water',
    alt: 'A white plastic water pipe bursting and spraying water beside a house wall, among tall green plants',
    es: {
      caption: 'Antes: un tubo reventado echando agua',
      alt: 'Un tubo de agua blanco de plástico reventado, echando agua junto a la pared de una casa, entre plantas altas',
    },
    services: ['leaks-water-lines', 'emergency-plumbing'],
  },
  {
    id: 'burst-pipe-repaired',
    image: burstPipeRepaired,
    caption: 'After: the same line rebuilt with new pipe',
    alt: 'The same spot after the repair: new white pipe and fittings with a brass hose bib against the house wall',
    es: {
      caption: 'Después: la misma línea con tubería nueva',
      alt: 'El mismo lugar después de la reparación: tubería y conexiones blancas nuevas con una llave de manguera de bronce junto a la pared',
    },
    services: ['leaks-water-lines', 'emergency-plumbing'],
  },
  {
    id: 'pressure-regulator-irrigation-line',
    image: pressureRegulatorIrrigationLine,
    caption: 'Pressure regulator, gauge and shutoff on a water line',
    alt: 'Brass pressure regulator, pressure gauge and red shutoff valve on a wrapped water line against a gray house wall',
    es: {
      caption: 'Regulador de presión, manómetro y llave de paso',
      alt: 'Regulador de presión de bronce, manómetro y llave de paso roja en una línea de agua forrada junto a la pared gris de una casa',
    },
    services: ['leaks-water-lines'],
  },
  {
    id: 'wrapped-water-line-wall',
    image: wrappedWaterLineWall,
    caption: 'New water line, wrapped where it enters the wall',
    alt: 'New water line wrapped in blue protective tape with a red shutoff valve, entering a stucco wall above an open trench',
    es: {
      caption: 'Línea de agua nueva, forrada donde entra a la pared',
      alt: 'Línea de agua nueva forrada con cinta protectora azul y llave de paso roja, entrando a una pared de estuco sobre una zanja abierta',
    },
    services: ['leaks-water-lines'],
  },
  {
    id: 'water-lines-trench-along-house',
    image: waterLinesTrenchAlongHouse,
    caption: 'New water lines in a trench along the house',
    alt: 'Two new blue-sleeved water lines laid in a long open trench beside a brick wall',
    es: {
      caption: 'Líneas de agua nuevas en una zanja junto a la casa',
      alt: 'Dos líneas de agua nuevas con funda azul en una zanja larga abierta junto a una pared de ladrillo',
    },
    services: ['leaks-water-lines'],
  },
  {
    id: 'copper-laundry-water-lines',
    image: copperLaundryWaterLines,
    caption: 'New copper lines and valves for a laundry hookup',
    alt: 'New copper hot and cold water lines with red-handled valves, checked with a blue level on a white wall',
    es: {
      caption: 'Líneas de cobre y llaves nuevas para la lavadora',
      alt: 'Líneas de cobre nuevas de agua fría y caliente con llaves de manija roja, revisadas con un nivel azul en una pared blanca',
    },
    services: ['leaks-water-lines'],
  },
  {
    id: 'roots-sewer-cleanout',
    image: rootsSewerCleanout,
    caption: 'Roots pulled out of a sewer line at the cleanout',
    alt: 'A mass of tree roots pulled from a sewer line, lying on the ground next to an open cleanout among plants',
    es: {
      caption: 'Raíces sacadas de una línea de drenaje',
      alt: 'Un montón de raíces de árbol sacadas de una línea de drenaje, en el suelo junto a un registro abierto entre plantas',
    },
    services: ['sewer-lines', 'drain-cleaning'],
  },
  {
    id: 'new-sdr-sewer-pipe-trench',
    image: newSdrSewerPipeTrench,
    caption: 'New sewer pipe going into an open trench',
    alt: 'New white sewer pipe and fittings set in a deep open trench, before backfill',
    es: {
      caption: 'Tubo de drenaje nuevo en una zanja abierta',
      alt: 'Tubo y conexiones de drenaje blancos nuevos colocados en una zanja profunda abierta, antes de rellenar',
    },
    services: ['sewer-lines'],
  },
  {
    id: 'sewer-line-replacement-abs',
    image: sewerLineReplacementAbs,
    caption: 'Crew replacing a sewer line with new ABS pipe',
    alt: 'Crew members around an open trench where a new black ABS sewer line runs from the house, with shovels and tools nearby',
    es: {
      caption: 'El equipo cambiando una línea de drenaje por tubo ABS',
      alt: 'Miembros del equipo alrededor de una zanja abierta con una línea de drenaje nueva de tubo negro ABS que sale de la casa, con palas y herramientas cerca',
    },
    services: ['sewer-lines'],
  },
  {
    id: 'sewer-camera-view',
    image: sewerCameraView,
    caption: 'Camera view from inside a sewer line',
    alt: 'Screen of a RIDGID inspection camera showing the inside of a sewer pipe',
    es: {
      caption: 'Vista de la cámara dentro de una línea de drenaje',
      alt: 'Pantalla de una cámara de inspección RIDGID que muestra el interior de un tubo de drenaje',
    },
    services: ['sewer-lines', 'drain-cleaning'],
  },
  {
    id: 'sewer-camera-setup',
    image: sewerCameraSetup,
    caption: 'Inspection camera set up to find the problem',
    alt: 'Sewer inspection camera reel and monitor set up on a floor mat, with the cable running to the drain',
    es: {
      caption: 'Cámara de inspección lista para encontrar el problema',
      alt: 'Carrete y monitor de una cámara de inspección de drenaje sobre un tapete, con el cable hacia el drenaje',
    },
    services: ['sewer-lines', 'drain-cleaning'],
  },
  {
    id: 'drain-machine-outdoor-cleanout',
    image: drainMachineOutdoorCleanout,
    caption: 'Drain machine clearing a main line from an outdoor cleanout',
    alt: 'Red drain cleaning machine on the grass with its cable fed into an outdoor cleanout',
    es: {
      caption: 'Máquina destapando la línea principal desde el registro de afuera',
      alt: 'Máquina destapadora roja sobre el pasto con el cable metido en un registro de afuera',
    },
    services: ['drain-cleaning', 'sewer-lines'],
  },
  {
    id: 'toilet-clog-auger',
    image: toiletClogAuger,
    caption: 'Clearing a clogged toilet with a drain auger',
    alt: 'A red power drain auger fed into a clogged toilet, plumber wearing shoe covers',
    es: {
      caption: 'Destapando un inodoro con una sonda',
      alt: 'Una sonda eléctrica roja metida en un inodoro tapado, el plomero con cubrezapatos',
    },
    services: ['drain-cleaning', 'fixtures'],
  },
  {
    id: 'sump-pump-basin',
    image: sumpPumpBasin,
    caption: 'New sump pump in its basin',
    alt: 'New sump pump sitting in an orange basin set into gravel, with its discharge pipe',
    es: {
      caption: 'Bomba de sumidero nueva en su depósito',
      alt: 'Bomba de sumidero nueva dentro de un depósito naranja enterrado en grava, con su tubo de descarga',
    },
    services: ['drain-cleaning'],
  },
  {
    id: 'sewer-pump-box',
    image: sewerPumpBox,
    caption: 'New sewage pump box',
    alt: 'New black sewage pump and basin set in a pit, with new black discharge piping',
    es: {
      caption: 'Caja de bomba de drenaje nueva',
      alt: 'Bomba y depósito de drenaje negros nuevos dentro de un foso, con tubería de descarga negra nueva',
    },
    services: ['sewer-lines'],
  },
  {
    id: 'bathtub-shower-remodel',
    image: bathtubShowerRemodel,
    caption: 'New bathtub and shower in a bathroom remodel',
    alt: 'New white bathtub and shower walls with a chrome shower head and grab bar, during a bathroom remodel',
    es: {
      caption: 'Tina y regadera nuevas en una remodelación de baño',
      alt: 'Tina y paredes de regadera blancas nuevas con regadera cromada y barra de apoyo, durante una remodelación de baño',
    },
    services: ['fixtures'],
  },
  {
    id: 'moen-shower-valve',
    image: moenShowerValve,
    caption: 'New Moen shower valve and tub spout',
    alt: 'New chrome Moen shower valve handle and tub spout on brown marble tile',
    es: {
      caption: 'Llave de regadera Moen nueva',
      alt: 'Manija de llave de regadera Moen cromada nueva y salida de tina sobre azulejo de mármol café',
    },
    services: ['fixtures'],
  },
  {
    id: 'kitchen-faucet-stainless-sink',
    image: kitchenFaucetStainlessSink,
    caption: 'New faucet on a stainless kitchen sink',
    alt: 'New tall stainless kitchen faucet running into a deep stainless sink, with white tile behind',
    es: {
      caption: 'Llave nueva en un fregadero de acero inoxidable',
      alt: 'Llave de cocina alta de acero inoxidable nueva con agua corriendo en un fregadero hondo de acero inoxidable, con azulejo blanco atrás',
    },
    services: ['fixtures'],
  },
  {
    id: 'garbage-disposal-replacement',
    image: garbageDisposalReplacement,
    caption: 'Replacement garbage disposal under the sink',
    alt: 'New gray garbage disposal and drain connections under a kitchen sink',
    es: {
      caption: 'Triturador de basura de reemplazo',
      alt: 'Triturador de basura gris nuevo y conexiones de drenaje debajo de un fregadero de cocina',
    },
    services: ['fixtures'],
  },
  {
    id: 'new-toilet-install',
    image: newToiletInstall,
    caption: 'New toilet, installed',
    alt: 'New white one-piece toilet with the lid open, installed on a wood-look floor',
    es: {
      caption: 'Inodoro nuevo, instalado',
      alt: 'Inodoro blanco nuevo de una pieza con la tapa abierta, instalado en un piso tipo madera',
    },
    services: ['fixtures'],
  },
  {
    id: 'crew-at-work',
    image: crewAtWork,
    caption: 'The crew at work',
    alt: 'Three people kneeling on a floor during a repair, one in an AB’s Plumbing shirt, with tools and an open floor section',
    es: {
      caption: 'El equipo trabajando',
      alt: 'Tres personas arrodilladas en el piso durante una reparación, una con camiseta de AB’s Plumbing, con herramientas y una sección del piso abierta',
    },
    services: ['emergency-plumbing'],
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
