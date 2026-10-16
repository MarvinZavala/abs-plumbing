/**
 * Content for the Spanish pages (/es and /es/servicios/*). Facts mirror business.ts and services.ts; keep them in sync.
 * Customer reviews are not translated: they are quoted in English exactly as written on Yelp.
 * Wording follows how Bay Area Spanish speakers talk about plumbing: llave (faucet), fregadero (kitchen sink),
 * regadera (shower), coladera (floor drain), registro (cleanout), and "boiler" for a water heater.
 */
import { business } from './business.ts';
import { spanishSlugs } from './es-slugs.ts';
import { services, type ServiceSlug } from './services.ts';

export type ServiceEs = {
  slug: ServiceSlug;
  /** The Spanish page lives at /es/servicios/[slugEs] (see es-slugs.ts). */
  slugEs: string;
  name: string;
  summary: string;
  headline: string;
  lead: string;
  problems: string[];
  includes: { title: string; body: string }[];
  seo: { title: string; description: string };
};

const bySlug: Record<ServiceSlug, Omit<ServiceEs, 'slug' | 'slugEs'>> = {
  'emergency-plumbing': {
    name: 'Plomería de emergencia',
    summary: 'Tuberías rotas, aguas negras que se regresan, inodoros que se desbordan. Abierto 24 horas, los 7 días.',
    headline: '¿Emergencia de plomería? Estamos abiertos ahora mismo.',
    lead:
      'Una tubería rota, aguas negras saliendo por un drenaje, agua donde no debería haber. Llame a cualquier hora y nuestro equipo se pone en camino. Muchos clientes cuentan en sus reseñas que llegamos en menos de una hora.',
    problems: [
      'Tubería rota o con fuga',
      'Aguas negras que se regresan por la tina, la regadera o una coladera',
      'Inodoro que se desborda y no para',
      'Calentador de agua con fuga, o sin agua caliente',
      'Tapón en la línea principal que inunda el patio o la entrada',
    ],
    includes: [
      {
        title: 'Salimos hacia su casa',
        body: 'De día, de noche o en fin de semana. Cuéntenos qué está pasando y le decimos cuándo puede llegar el equipo.',
      },
      {
        title: 'Primero, parar el daño',
        body: 'Controlamos el agua y después buscamos la causa, en lugar de solo tratar el síntoma.',
      },
      { title: 'El precio antes del trabajo', body: 'Le explicamos qué falla y cuánto cuesta antes de empezar la reparación.' },
    ],
    seo: {
      title: 'Plomero de emergencia 24/7 en Oakland',
      description:
        '¿Tubería rota, drenaje que se regresa o sin agua caliente? Abierto 24 horas, los 7 días. Hablamos español. 4.9 estrellas en Yelp. Llame al (510) 753-8649.',
    },
  },
  'drain-cleaning': {
    name: 'Destape de drenajes',
    summary: 'Fregaderos, tinas, inodoros y líneas principales. Inspección con cámara cuando el tapón regresa.',
    headline: '¿Drenaje tapado? Lo destapamos y le mostramos la causa.',
    lead:
      'Fregaderos, tinas, inodoros, coladeras y líneas principales. Destapamos la línea con máquina de cable o con agua a alta presión (hydro-jetting), y cuando el tapón sigue regresando metemos una cámara para que usted vea la causa.',
    problems: [
      'Fregadero de la cocina tapado con grasa',
      'Tina o regadera que drena lento',
      'Inodoro que se tapa una y otra vez',
      'Línea principal o registro que se desborda',
      'Drenajes que hacen ruido y huelen a drenaje',
    ],
    includes: [
      { title: 'Máquina de cable', body: 'Cables del tamaño de cada línea, desde el lavabo del baño hasta la línea principal de 4 pulgadas.' },
      { title: 'Agua a alta presión', body: 'Hydro-jetting para quitar la grasa, el sarro y las raíces de las paredes del tubo.' },
      { title: 'Inspección con cámara', body: 'Le mostramos en la pantalla dónde la línea está rota, hundida o llena de raíces.' },
    ],
    seo: {
      title: 'Destape de drenajes en Oakland y la Bahía',
      description:
        'Destapamos fregaderos, tinas, inodoros y líneas principales, con cámara cuando el tapón regresa. Abierto 24/7. Hablamos español. Llame al (510) 753-8649.',
    },
  },
  'water-heaters': {
    name: 'Calentadores de agua',
    summary: 'Reparación y cambio de calentadores de tanque a gas y sin tanque (tankless), instalados según el código.',
    headline: '¿Sin agua caliente? Reparamos y cambiamos calentadores de agua.',
    lead:
      'Calentadores (boilers) de tanque a gas y sin tanque (tankless), reparados o cambiados e instalados con las correas sísmicas, la ventilación y las conexiones que pide el código.',
    problems: [
      'No hay agua caliente, o se acaba rápido',
      'El calentador gotea por abajo',
      'El piloto se apaga',
      'Un tanque viejo que quiere cambiar antes de que falle',
      'Quiere cambiarse a un calentador sin tanque',
    ],
    includes: [
      {
        title: 'Reparar o cambiar, con honestidad',
        body: 'Si conviene reparar, se lo decimos. Si el tanque ya no sirve, también se lo decimos.',
      },
      { title: 'De tanque y sin tanque', body: 'Calentadores de tanque a gas y sin tanque para casas, departamentos y negocios.' },
      { title: 'Según el código', body: 'Correas sísmicas, ventilación y conexiones de gas y agua bien hechas desde la primera vez.' },
    ],
    seo: {
      title: 'Calentadores de agua: reparación en Oakland',
      description:
        '¿Sin agua caliente? Reparamos y cambiamos calentadores de tanque y sin tanque (tankless), según el código. Hablamos español. Llame al (510) 753-8649.',
    },
  },
  'sewer-lines': {
    name: 'Líneas de drenaje',
    summary: 'Raíces, roturas y tapones encontrados con cámara. Reparación y cambio de la línea lateral (sewer lateral).',
    headline: '¿Se regresa el drenaje? Encontramos el problema con cámara y lo reparamos.',
    lead:
      'Raíces, grietas y tubos hundidos. Revisamos la línea con cámara, destapamos lo que se puede destapar, y cuando no se puede, reparamos o cambiamos la línea lateral (sewer lateral).',
    problems: [
      'Aguas negras que salen por la tina o una coladera',
      'Raíces de árbol dentro de la línea de drenaje',
      'La línea principal se tapa una y otra vez',
      'Agua estancada debajo de la casa',
      'Línea lateral rota o colapsada',
    ],
    includes: [
      { title: 'Primero la cámara', body: 'Usted ve el interior de su línea antes de que se hable de excavar.' },
      { title: 'Reparar o cambiar', body: 'Reparaciones puntuales, registros nuevos o el cambio completo de la línea lateral hasta la calle.' },
      { title: 'Terminado limpio', body: 'Rellenamos las zanjas y dejamos el lugar limpio al irnos.' },
    ],
    seo: {
      title: 'Reparación de líneas de drenaje en Oakland',
      description:
        '¿Se regresa el drenaje o hay raíces en la línea? Revisamos con cámara y reparamos o cambiamos su línea lateral. Abierto 24/7. Hablamos español.',
    },
  },
  'leaks-water-lines': {
    name: 'Fugas y líneas de agua',
    summary: 'Fugas en tuberías, líneas de agua, reguladores de presión, filtros y suavizadores de agua.',
    headline: '¿Fuga de agua o problemas de presión? La encontramos y la reparamos.',
    lead:
      'Tuberías con fuga, líneas de agua que fallan, presión demasiado alta o demasiado baja, y tubería galvanizada vieja que ya cumplió su vida útil.',
    problems: [
      'Fuga debajo de un fregadero o dentro de una pared',
      'El recibo del agua subió sin razón',
      'Presión demasiado alta (tuberías que golpean) o demasiado baja',
      'Llaves de afuera oxidadas o que gotean',
      'Línea de agua galvanizada vieja',
    ],
    includes: [
      { title: 'Encontrar el origen', body: 'Seguimos la fuga hasta donde empieza para que la reparación dure.' },
      {
        title: 'Líneas de agua',
        body: 'Líneas de servicio de agua nuevas, cambio de tubería y líneas nuevas para las llaves de afuera.',
      },
      { title: 'Presión y calidad del agua', body: 'Reguladores de presión, filtros para toda la casa y suavizadores de agua.' },
    ],
    seo: {
      title: 'Reparación de fugas de agua en Oakland',
      description:
        'Fugas, cambio de líneas de agua y reguladores de presión. 4.9 estrellas de 676 reseñas en Yelp. Hablamos español. Llame al (510) 753-8649, abierto 24/7.',
    },
  },
  fixtures: {
    name: 'Inodoros, llaves y trituradores',
    summary: 'Reparación e instalación de inodoros, llaves, fregaderos, regaderas y trituradores de basura.',
    headline: '¿El inodoro no para, la llave gotea o el triturador no sirve? Lo arreglamos rápido.',
    lead: 'Reparaciones e instalaciones nuevas de inodoros, llaves, fregaderos, válvulas de regadera y trituradores de basura.',
    problems: [
      'Inodoro que no deja de correr, se mueve o gotea por la base',
      'Llave que gotea o está floja',
      'Triturador de basura que zumba o no prende',
      'Válvula de la regadera trabada o con fuga',
      'Fregadero o llave nueva por instalar',
    ],
    includes: [
      {
        title: 'Reparamos lo que se puede reparar',
        body: 'Sapos (flappers), válvulas de llenado, cartuchos y empaques antes de cambiar cualquier cosa.',
      },
      { title: 'Instalaciones', body: 'Inodoros, llaves, fregaderos y trituradores instalados y revisados para que no haya fugas.' },
      { title: 'Con cubrezapatos', body: 'Tratamos su cocina y su baño como si fueran nuestros, y limpiamos al terminar.' },
    ],
    seo: {
      title: 'Inodoros, llaves y trituradores en Oakland',
      description:
        '¿Inodoro que no para, llave que gotea o triturador descompuesto? Reparamos e instalamos, a menudo el mismo día. Hablamos español. (510) 753-8649.',
    },
  },
};

/** In the same order as the English services. */
export const servicesEs: ServiceEs[] = services.map((s) => ({ slug: s.slug, slugEs: spanishSlugs[s.slug], ...bySlug[s.slug] }));

export function serviceEs(slug: ServiceSlug): ServiceEs {
  return servicesEs.find((s) => s.slug === slug)!;
}

export function serviceEsBySlugEs(slugEs: string): ServiceEs | undefined {
  return servicesEs.find((s) => s.slugEs === slugEs);
}


export const moreServicesEs = [
  'Líneas de gas',
  'Bombas de sumidero',
  'Válvulas antirretorno',
  'Bombas de recirculación de agua caliente',
  'Inspecciones de plomería',
  'Plomería nueva para remodelaciones',
  'Tinas y regaderas',
];

/** Same list and order as allServices in services.ts. */
export const allServicesEs = [
  'Reparaciones de plomería',
  'Instalación y cambio de plomería',
  'Inspecciones de plomería',
  'Destape de drenajes',
  'Hydro-jetting',
  'Líneas de drenaje',
  'Tuberías de agua',
  'Reparación de calentadores de agua',
  'Instalación de calentadores de agua',
  'Bombas de recirculación de agua caliente',
  'Líneas de gas',
  'Válvulas antirretorno',
  'Bombas de sumidero',
  'Llaves',
  'Fregaderos',
  'Inodoros',
  'Trituradores de basura',
  'Regaderas',
  'Tinas',
  'Plomería nueva para remodelaciones',
];

export const stepsEs = [
  { title: 'Usted llama o manda un texto', body: 'De día o de noche. Cuéntenos qué pasa y mándenos una foto si ayuda.' },
  {
    title: 'Encontramos la causa',
    body: 'Diagnosticamos antes de reparar. En drenajes puede ser con una cámara dentro de la tubería, para que usted también lo vea.',
  },
  { title: 'Le damos el precio primero', body: 'Le explicamos la reparación y cuánto cuesta antes de empezar. Sin cargos ocultos.' },
  { title: 'Reparamos y limpiamos', body: 'Con cubrezapatos, dejamos el área limpia y probamos todo antes de irnos.' },
];

export const faqsEs = [
  { q: '¿Hablan español?', a: 'Sí. Nuestro equipo habla español e inglés. Llame o mande un texto en el idioma que prefiera.' },
  {
    q: '¿Qué tan rápido pueden llegar?',
    a: 'Depende de dónde esté y de qué esté pasando, pero en emergencias salimos de inmediato. Muchos clientes cuentan en sus reseñas que el equipo llegó en menos de una hora.',
  },
  { q: '¿De verdad abren 24/7?', a: 'Sí. Llame a cualquier hora, incluso de noche y en fines de semana.' },
  {
    q: '¿Sabré el precio antes de que empiecen?',
    a: 'Sí. Revisamos el problema, le explicamos qué pasa y le damos el precio antes de empezar cualquier trabajo. Las cotizaciones son gratis.',
  },
  {
    q: '¿Tienen licencia y seguro?',
    a: business.license
      ? `Sí. AB’s Plumbing tiene licencia en California (CSLB #${business.license}) y seguro.`
      : 'Sí. AB’s Plumbing tiene licencia y seguro en California.',
  },
  {
    q: '¿Me pueden mostrar qué tiene mi drenaje?',
    a: 'Sí. En problemas de drenaje podemos pasar una cámara por la tubería y mostrarle en pantalla qué lo está causando.',
  },
  {
    q: '¿Trabajan en edificios de departamentos y negocios?',
    a: 'Sí. Además de casas, trabajamos en edificios de departamentos, restaurantes y otros locales comerciales.',
  },
  { q: '¿Cómo puedo pagar?', a: 'En efectivo, con tarjeta de crédito o por Zelle.' },
];

export const offerEs = `Clientes nuevos: ${business.offer.percent}% de descuento en su primer servicio. Mencione la página web cuando llame.`;
