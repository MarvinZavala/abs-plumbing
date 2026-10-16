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
  faqs?: { q: string; a: string }[];
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
  'hydro-jetting': {
    name: 'Hydro-jetting',
    summary: 'Agua a alta presión para quitar la grasa, el sarro y las raíces de las líneas de drenaje.',
    headline: '¿El mismo tapón cada pocos meses? El hydro-jetting limpia todo el tubo.',
    lead: 'La máquina de cable abre paso a través del tapón. El hydro-jetting usa agua a alta presión para quitar la grasa, el sarro y las raíces de las paredes del tubo. Cuando ayuda, primero pasamos una cámara para que usted vea qué hay en la línea y sepa que el hydro-jetting es la solución correcta.',
    problems: [
      'Línea de la cocina que se tapa con grasa una y otra vez',
      'La línea principal se volvió a tapar después de destaparla con cable',
      'Raíces de árbol que vuelven a crecer dentro de la línea de drenaje',
      'Drenajes lentos en toda la casa',
      'Líneas de restaurantes o edificios de departamentos llenas de grasa y sarro',
    ],
    includes: [
      {
        title: 'Primero revisamos',
        body: 'Cuando ayuda, pasamos una cámara por la línea para que usted vea la grasa, el sarro o las raíces antes del hydro-jetting.',
      },
      {
        title: 'Limpio de pared a pared',
        body: 'El agua a alta presión quita lo acumulado en las paredes del tubo, en lugar de solo abrir un hoyo en el tapón.',
      },
      {
        title: 'El precio antes del trabajo',
        body: 'Le explicamos qué encontramos y cuánto cuesta antes de empezar. Las cotizaciones son gratis.',
      },
    ],
    seo: {
      title: 'Hydro-jetting de drenajes en Oakland',
      description: '¿Grasa, sarro o raíces tapan su línea? Limpiamos drenajes con hydro-jetting, con cámara cuando hace falta. Abierto 24/7. Hablamos español. (510) 753-8649.',
    },
    faqs: [
      {
        q: '¿Qué diferencia hay entre la máquina de cable y el hydro-jetting?',
        a: 'La máquina de cable abre paso a través del tapón. El hydro-jetting usa agua a alta presión para quitar la grasa, el sarro y las raíces de las paredes del tubo, así se limpia todo el tubo y no solo el lugar del tapón.',
      },
      {
        q: '¿Necesito una inspección con cámara primero?',
        a: 'No siempre. Cuando la línea se sigue tapando, o sospechamos raíces o una rotura, primero pasamos una cámara para que usted vea qué hay adentro y podamos decirle si el hydro-jetting es la solución correcta.',
      },
      {
        q: '¿Y si el tubo está roto?',
        a: 'El hydro-jetting limpia el tubo, pero no repara un tubo agrietado o colapsado. Si la cámara muestra una rotura, le explicamos sus opciones de reparación y el precio antes de empezar cualquier trabajo.',
      },
    ],
  },
  'plumbing-inspections': {
    name: 'Inspecciones de plomería',
    summary: 'Inspección con cámara de las líneas de drenaje, para que usted vea el problema antes de reparar.',
    headline: '¿No sabe qué pasa en su drenaje? Se lo mostramos con cámara.',
    lead: 'Pasamos una cámara de inspección por su línea de drenaje y le mostramos en la pantalla dónde está tapada, rota, hundida o llena de raíces. Usted ve qué está pasando antes de que se hable de reparar o de excavar.',
    problems: [
      'Un drenaje que se sigue tapando, haga lo que haga',
      'Olor a drenaje sin una causa clara',
      'Sospecha de raíces de árbol en la línea de drenaje',
      'Aguas negras que se regresan por la tina o una coladera',
    ],
    includes: [
      {
        title: 'La cámara dentro de la línea',
        body: 'Metemos una cámara de inspección por el drenaje o el registro y seguimos la línea.',
      },
      {
        title: 'Usted lo ve con nosotros',
        body: 'Le mostramos en la pantalla lo que encontramos: raíces, roturas, partes hundidas o acumulación.',
      },
      {
        title: 'Respuestas claras',
        body: 'Si la línea solo necesita limpieza, se lo decimos. Si necesita reparación, le damos las opciones y el precio antes de empezar.',
      },
    ],
    seo: {
      title: 'Inspección de drenaje con cámara en Oakland',
      description: '¿El tapón regresa o huele a drenaje? Pasamos una cámara por su línea y le mostramos la causa en pantalla. Hablamos español. Llame al (510) 753-8649.',
    },
    faqs: [
      {
        q: '¿Puedo ver la inspección con cámara?',
        a: 'Sí. Le mostramos en la pantalla lo que encuentra la cámara, para que usted mismo vea las raíces, la rotura o lo acumulado.',
      },
      {
        q: '¿Cuándo conviene una inspección con cámara?',
        a: 'Cuando un tapón sigue regresando, cuando huele a drenaje y no sabe por qué, cuando sospecha raíces, o antes de decidir una reparación de la línea de drenaje.',
      },
      {
        q: '¿Qué pasa si la cámara encuentra un problema?',
        a: 'Le explicamos qué encontramos y sus opciones, desde limpiar la línea hasta repararla o cambiarla, y le damos el precio antes de empezar cualquier trabajo.',
      },
    ],
  },
  'sump-pumps': {
    name: 'Bombas de sumidero',
    summary: 'Bombas de sumidero para el agua bajo la casa, y cajas de bomba de aguas negras para drenajes bajos.',
    headline: '¿Agua debajo de la casa? Le ponemos una bomba de sumidero para sacarla.',
    lead: 'Agua estancada debajo de la casa, el sótano o el espacio bajo el piso mojado, una bomba que dejó de funcionar. Instalamos bombas de sumidero y cajas de bomba de aguas negras, en el lugar donde se junta el agua y con tubería para sacarla.',
    problems: [
      'Agua estancada debajo de la casa',
      'Sótano o espacio bajo el piso mojado después de la lluvia',
      'Bomba de sumidero vieja que ya no prende',
      'Baño o lavandería más bajos que la línea de drenaje',
      'Caja de bomba de aguas negras que hay que cambiar',
    ],
    includes: [
      {
        title: 'Bomba y depósito',
        body: 'Una bomba nueva en su depósito donde se junta el agua, aunque haya que romper el concreto.',
      },
      { title: 'Tubería de descarga', body: 'Tubería de descarga nueva para que el agua se vaya por donde debe.' },
      {
        title: 'El precio antes del trabajo',
        body: 'Le explicamos qué hace falta y cuánto cuesta antes de empezar. Las cotizaciones son gratis.',
      },
    ],
    seo: {
      title: 'Bombas de sumidero en Oakland y la Bahía',
      description: '¿Agua estancada debajo de la casa? Instalamos bombas de sumidero y cajas de bomba de aguas negras. Abierto 24/7. Hablamos español. Llame al (510) 753-8649.',
    },
    faqs: [
      {
        q: '¿Qué diferencia hay entre una bomba de sumidero y una bomba de aguas negras?',
        a: 'La bomba de sumidero saca el agua de lluvia o del subsuelo de debajo de la casa o del sótano. La bomba de aguas negras sube el agua de los drenajes que están más bajos que la línea de drenaje.',
      },
      {
        q: '¿Pueden poner una bomba de sumidero donde hay concreto?',
        a: 'Sí. Podemos romper el concreto y excavar para colocar el depósito y la bomba donde se junta el agua.',
      },
      {
        q: 'Mi bomba de sumidero dejó de funcionar. ¿Pueden venir ahora?',
        a: 'Estamos abiertos 24 horas, los 7 días. Cuéntenos qué está pasando y le decimos cuándo puede llegar el equipo.',
      },
    ],
  },
  'backflow-preventers': {
    name: 'Válvulas antirretorno',
    summary: 'Instalamos válvulas antirretorno (backflow) para que el agua del riego no regrese a su agua potable.',
    headline: '¿Necesita una válvula antirretorno? La instalamos o la cambiamos.',
    lead: 'Una válvula antirretorno (backflow preventer) deja pasar el agua en un solo sentido, para que el agua de los sprinklers, el riego y otros equipos no regrese al agua que usted toma. Instalamos válvulas nuevas y cambiamos las viejas que gotean.',
    problems: [
      'Sprinklers o riego nuevos que necesitan una válvula antirretorno',
      'Válvula antirretorno que gotea o tiene fuga',
      'Válvula antirretorno rota o dañada',
      'Remodelación o línea de agua nueva que necesita protección antirretorno',
      'No sabe si su línea de agua tiene una',
    ],
    includes: [
      {
        title: 'Instalaciones nuevas',
        body: 'Válvulas antirretorno en líneas de riego, sprinklers y otras líneas de agua.',
      },
      { title: 'Cambios', body: 'Quitamos la válvula que gotea o está dañada y ponemos una nueva.' },
      {
        title: 'El precio antes del trabajo',
        body: 'Le explicamos qué hace falta y cuánto cuesta antes de empezar. Las cotizaciones son gratis.',
      },
    ],
    seo: {
      title: 'Válvulas antirretorno (backflow) en Oakland',
      description: '¿Necesita instalar o cambiar una válvula antirretorno (backflow)? La ponemos en líneas de riego y de agua. Abierto 24/7. Hablamos español. (510) 753-8649.',
    },
    faqs: [
      {
        q: '¿Para qué sirve una válvula antirretorno?',
        a: 'Deja pasar el agua en un solo sentido, para que el agua de los sprinklers, el riego u otros equipos no regrese a su agua potable.',
      },
      {
        q: '¿Pueden cambiar una válvula antirretorno que gotea?',
        a: 'Sí. Quitamos la válvula vieja, instalamos una nueva y le damos el precio antes de empezar.',
      },
      {
        q: '¿Sabré el precio antes de que empiecen?',
        a: 'Sí. Revisamos la línea, le explicamos qué necesita y le damos el precio antes de empezar cualquier trabajo. Las cotizaciones son gratis.',
      },
    ],
  },
  'tankless-water-heaters': {
    name: 'Calentadores sin tanque',
    summary: 'Instalación, cambio y reparación de calentadores sin tanque (tankless), adentro o afuera.',
    headline: '¿Listo para un tankless? Instalamos y reparamos calentadores sin tanque.',
    lead: 'Cambiarse de un boiler de tanque, reemplazar un tankless viejo o agregar un segundo. Montamos el calentador en la pared del garaje o en una pared de afuera y conectamos la ventilación, el gas y el agua.',
    problems: [
      'El agua caliente se acaba con su calentador de tanque',
      'Quiere cambiarse de tanque a tankless',
      'El tankless no prende o marca un error',
      'El agua se pone fría a media regadera',
      'Quiere el calentador fuera del piso, en una pared adentro o afuera',
    ],
    includes: [
      {
        title: 'Adentro o afuera',
        body: 'En la pared del garaje o en una pared de afuera, con las conexiones de ventilación, gas y agua que necesita.',
      },
      {
        title: 'Uno o dos',
        body: 'Un solo calentador sin tanque, o dos uno junto al otro cuando necesita más agua caliente al mismo tiempo.',
      },
      {
        title: 'Reparar o cambiar, con honestidad',
        body: 'Si su tankless se puede reparar, se lo decimos. Si ya toca uno nuevo, le damos el precio antes de empezar.',
      },
    ],
    seo: {
      title: 'Calentadores sin tanque en Oakland',
      description: 'Instalamos, cambiamos y reparamos calentadores sin tanque (tankless), adentro o afuera. Cotización gratis. Hablamos español. Llame al (510) 753-8649.',
    },
    faqs: [
      {
        q: '¿Pueden cambiar mi calentador de tanque por uno sin tanque?',
        a: 'Sí. Quitamos el tanque viejo e instalamos el tankless con las conexiones de ventilación, gas y agua que necesita. Primero revisamos su instalación y le damos el precio antes de empezar cualquier trabajo.',
      },
      {
        q: '¿Qué marcas de calentadores sin tanque instalan?',
        a: 'Entre nuestras instalaciones recientes hay calentadores sin tanque Navien y Rheem. Llámenos y vemos juntos qué le conviene a su casa.',
      },
      {
        q: '¿También reparan calentadores sin tanque?',
        a: 'Sí. Llame o mándenos un texto con lo que está haciendo el calentador (una foto del error en la pantalla ayuda) y le decimos el siguiente paso. Sea reparación o cambio, primero le damos el precio.',
      },
    ],
  },
  'recirculation-pumps': {
    name: 'Bombas de recirculación',
    summary: 'Instalación y cambio de bombas de recirculación de agua caliente, para que el agua caliente llegue antes.',
    headline: '¿Cansado de esperar el agua caliente? Instalamos bombas de recirculación.',
    lead: 'Si tiene que dejar correr la regadera o la llave del fregadero mucho tiempo antes de que salga caliente, una bomba de recirculación mantiene el agua caliente moviéndose por las líneas para que llegue antes. Revisamos su calentador (boiler) y su tubería y le decimos qué le funciona.',
    problems: [
      'Mucho tiempo esperando el agua caliente en la regadera o el fregadero',
      'Dejar correr el agua y desperdiciarla mientras se calienta',
      'Un baño lejos del calentador de agua',
      'Una bomba de recirculación vieja que dejó de funcionar',
      'La bomba no se apaga o hace ruido',
    ],
    includes: [
      {
        title: 'Primero revisamos su instalación',
        body: 'Dónde está el calentador, cómo van las líneas y qué llaves tardan más en dar agua caliente.',
      },
      {
        title: 'Instalada y probada',
        body: 'Instalamos la bomba, hacemos las conexiones y probamos el agua caliente antes de irnos.',
      },
      {
        title: 'El precio antes del trabajo',
        body: 'Le decimos cuánto cuesta antes de empezar, sin cargos ocultos. Las cotizaciones son gratis.',
      },
    ],
    seo: {
      title: 'Bombas de recirculación en Oakland',
      description: '¿Espera mucho el agua caliente? Instalamos y cambiamos bombas de recirculación de agua caliente. Cotización gratis. Hablamos español. (510) 753-8649.',
    },
    faqs: [
      {
        q: '¿Qué hace una bomba de recirculación de agua caliente?',
        a: 'Mantiene el agua caliente moviéndose por la tubería para que llegue antes a la llave o a la regadera, en lugar de esperar mientras el agua fría se va por el drenaje.',
      },
      {
        q: '¿Funciona una bomba de recirculación en mi casa?',
        a: 'Revisamos su calentador de agua y cómo van sus líneas, y le decimos qué le funciona y cuánto cuesta antes de empezar cualquier trabajo.',
      },
      {
        q: '¿Pueden reparar o cambiar una bomba que dejó de funcionar?',
        a: 'Sí. Cuéntenos qué está haciendo y la revisamos. Si se puede reparar, se lo decimos; si no, primero le damos el precio de una nueva.',
      },
    ],
  },
  'gas-lines': {
    name: 'Líneas de gas',
    summary: 'Reparación de líneas de gas y líneas nuevas para aparatos, incluida la conexión de calentadores de agua.',
    headline: '¿Aparato nuevo o línea de gas vieja? Reparamos e instalamos líneas de gas.',
    lead: 'Líneas de gas nuevas para aparatos, conexiones de gas para calentadores (boilers) de tanque y sin tanque, válvulas de gas nuevas y reparación de líneas viejas.',
    problems: [
      'Necesita una línea de gas para un aparato nuevo',
      'Conexión de gas para un calentador nuevo o un tankless',
      'Válvula de gas que hay que cambiar',
      'Tubería de gas vieja u oxidada',
    ],
    includes: [
      {
        title: 'Primero, la seguridad',
        body: 'Si huele a gas, salga y llame a PG&E al 1-800-743-5000 o al 911 antes que nada. Nosotros hacemos la reparación cuando ya sea seguro.',
      },
      {
        title: 'Líneas nuevas y reparaciones',
        body: 'Líneas de gas nuevas para aparatos, y reparación o cambio de tramos viejos de tubería.',
      },
      {
        title: 'Conexión de calentadores',
        body: 'Conexiones de gas para calentadores de tanque y sin tanque, como parte de la instalación.',
      },
    ],
    seo: {
      title: 'Líneas de gas: reparación en Oakland',
      description: 'Reparamos líneas de gas e instalamos líneas nuevas para aparatos y calentadores. Precio antes de empezar. Hablamos español. Llame al (510) 753-8649.',
    },
    faqs: [
      {
        q: '¿Qué hago si huele a gas?',
        a: 'Salga del edificio sin prender ni apagar ningún interruptor, y desde afuera llame a PG&E al 1-800-743-5000 o al 911. Cuando ya sea seguro, llámenos para la reparación.',
      },
      {
        q: '¿Pueden instalar una línea de gas para un aparato nuevo?',
        a: 'Sí. Díganos qué va a instalar y dónde, y le damos el precio antes de empezar cualquier trabajo. Las cotizaciones son gratis.',
      },
      {
        q: '¿Conectan el gas cuando instalan un calentador de agua?',
        a: 'Sí. La conexión de gas es parte de nuestras instalaciones de calentadores de tanque y sin tanque.',
      },
    ],
  },
  'remodel-plumbing': {
    name: 'Plomería para remodelaciones',
    summary: 'Plomería nueva para remodelaciones de baño, cocina y lavandería, en coordinación con su diseñador.',
    headline: '¿Va a remodelar? Nos encargamos de la plomería y trabajamos con su diseñador.',
    lead: 'Líneas nuevas de agua y de drenaje, llaves de regadera, tinas y aparatos para remodelaciones. Hacemos plomería para renovaciones con permiso y trabajamos bien con diseñadores.',
    problems: [
      'Remodelación de baño con tina o regadera nueva',
      'Mover un lavabo, un inodoro o la regadera a otro lugar',
      'Llave de regadera nueva para instalar con el azulejo nuevo',
      'Cuarto de lavado que necesita líneas nuevas de agua fría y caliente',
      'Su diseñador necesita un plomero para el proyecto',
    ],
    includes: [
      {
        title: 'Plomería para renovaciones con permiso',
        body: 'Líneas nuevas de agua y de drenaje, válvulas y aparatos para su remodelación.',
      },
      {
        title: 'Trabajamos con su diseñador',
        body: 'Trabajamos bien con diseñadores, para que la plomería vaya de acuerdo con el plan del espacio.',
      },
      {
        title: 'Aparatos instalados y probados',
        body: 'Tinas, regaderas, llaves de regadera, fregaderos e inodoros instalados y revisados para que no haya fugas.',
      },
    ],
    seo: {
      title: 'Plomería para remodelaciones en Oakland',
      description: 'Plomería nueva para remodelaciones de baño, cocina y lavandería. Trabajamos bien con diseñadores. Cotización gratis. Hablamos español. (510) 753-8649.',
    },
    faqs: [
      {
        q: '¿Trabajan con diseñadores?',
        a: 'Sí. Trabajamos bien con diseñadores y planeamos la plomería de acuerdo con el diseño de su remodelación.',
      },
      {
        q: '¿Hacen plomería para remodelaciones con permiso?',
        a: 'Sí. Hacemos plomería para renovaciones con permiso. Cuéntenos de su proyecto y le explicamos la parte de plomería y le damos el precio antes de empezar cualquier trabajo.',
      },
      {
        q: '¿Me pueden dar una cotización para mi remodelación?',
        a: 'Sí, las cotizaciones son gratis. Mándenos sus planos o fotos del espacio y revisamos la plomería con usted.',
      },
    ],
  },
  'toilets': {
    name: 'Inodoros',
    summary: 'Reparación de inodoros que no paran, gotean o se tapan, e instalación de inodoros nuevos.',
    headline: '¿El inodoro no para, gotea o se mueve? Lo reparamos o le ponemos uno nuevo.',
    lead: 'Inodoros que corren toda la noche, gotean por la base, se mueven en el piso o se tapan una y otra vez. Reparamos lo que se puede reparar, y cuando no, instalamos un inodoro nuevo y lo revisamos para que no haya fugas.',
    problems: [
      'El inodoro no deja de correr o se llena solo',
      'Agua alrededor de la base',
      'El inodoro se mueve o está flojo en el piso',
      'Se tapa una y otra vez',
      'Un inodoro viejo que quiere cambiar',
    ],
    includes: [
      {
        title: 'Primero, reparar',
        body: 'Sapos (flappers), válvulas de llenado, anillos de cera y empaques antes de cambiar cualquier cosa.',
      },
      {
        title: 'Destapamos el inodoro',
        body: 'Quitamos los tapones difíciles con una sonda, y si siguen regresando revisamos más adentro de la línea.',
      },
      {
        title: 'Inodoros nuevos',
        body: 'Quitamos el viejo, instalamos el nuevo, lo conectamos y revisamos que no haya fugas. Con cubrezapatos y limpiando al terminar.',
      },
    ],
    seo: {
      title: 'Reparación de inodoros en Oakland',
      description: '¿Inodoro que no para, gotea o se tapa? Reparamos e instalamos inodoros, con el precio antes de empezar. Abierto 24/7. Hablamos español. (510) 753-8649.',
    },
    faqs: [
      {
        q: 'Mi inodoro se está desbordando. ¿Qué hago ahora?',
        a: 'Cierre la llave de paso que está detrás del inodoro, girándola a la derecha, y llámenos. Estamos abiertos 24 horas, los 7 días.',
      },
      {
        q: '¿Conviene reparar el inodoro o cambiarlo?',
        a: 'Muchas veces basta con un sapo, una válvula de llenado o un empaque nuevo. Primero lo revisamos, le decimos con honestidad si vale la pena repararlo y le damos el precio antes de empezar cualquier trabajo.',
      },
      {
        q: '¿Es grave que salga agua por la base del inodoro?',
        a: 'Conviene arreglarlo pronto. Casi siempre quiere decir que el sello de abajo ya falló, y con el tiempo la fuga puede dañar el piso. Volvemos a asentar el inodoro con un sello nuevo y revisamos que quede firme.',
      },
    ],
  },
  'faucets-sinks': {
    name: 'Llaves y fregaderos',
    summary: 'Reparamos llaves que gotean e instalamos fregaderos, lavabos y llaves nuevas.',
    headline: '¿La llave gotea o quiere un fregadero nuevo? Hacemos las dos cosas.',
    lead: 'Llaves de la cocina y del baño que gotean, tienen fuga por debajo o pierden presión, y fregaderos, lavabos y llaves nuevas instalados y revisados para que no haya fugas antes de irnos.',
    problems: [
      'La llave gotea o no cierra bien',
      'Fuga debajo del fregadero o del lavabo, en una línea de agua o en el drenaje',
      'Poca presión en una sola llave',
      'Llave floja o que se mueve',
      'Fregadero, lavabo o llave nueva por instalar',
    ],
    includes: [
      {
        title: 'Reparaciones',
        body: 'Cambiamos cartuchos, empaques y líneas de agua para que se acabe el goteo o la fuga.',
      },
      {
        title: 'Fregaderos y llaves nuevas',
        body: 'Instalamos fregaderos de cocina, lavabos de baño y llaves, incluso llaves para agua filtrada.',
      },
      {
        title: 'También llaves de afuera',
        body: 'Cambiamos llaves de afuera oxidadas o que gotean, con línea de agua nueva cuando hace falta.',
      },
    ],
    seo: {
      title: 'Llaves y fregaderos en Oakland',
      description: '¿Llave que gotea, fuga debajo del fregadero o un lavabo nuevo por instalar? Reparamos e instalamos. Abierto 24/7. Hablamos español. (510) 753-8649.',
    },
    faqs: [
      {
        q: 'Hay agua debajo de mi fregadero. ¿Qué hago?',
        a: 'Cierre las llaves de paso que están debajo del fregadero, ponga una toalla o una cubeta y llámenos. Encontramos si es la llave, una línea de agua o el drenaje, y reparamos el origen.',
      },
      {
        q: '¿Por qué mi llave sigue goteando?',
        a: 'Casi siempre es un cartucho o un empaque gastado dentro de la llave. Cambiamos la pieza gastada, y si la llave ya no tiene arreglo le explicamos sus opciones y el precio antes de empezar cualquier trabajo.',
      },
      {
        q: '¿Pueden instalar el fregadero y la llave al mismo tiempo?',
        a: 'Sí. Instalamos fregaderos de cocina, lavabos de baño y llaves, conectamos las líneas de agua y el drenaje, y revisamos que no haya fugas antes de irnos.',
      },
    ],
  },
  'garbage-disposals': {
    name: 'Trituradores de basura',
    summary: 'Reparación o cambio de trituradores de basura trabados, con fuga o que no prenden.',
    headline: '¿El triturador está trabado, gotea o no prende? Lo reparamos o lo cambiamos.',
    lead: 'Un triturador que zumba pero no gira, que gotea debajo del fregadero o que no prende para nada. Encontramos la causa, lo reparamos cuando vale la pena, o instalamos uno nuevo y lo conectamos al drenaje del fregadero.',
    problems: [
      'El triturador zumba pero no gira',
      'No prende para nada',
      'Gotea debajo del fregadero',
      'El fregadero se regresa cuando prende el triturador',
      'Un triturador viejo que quiere cambiar',
    ],
    includes: [
      {
        title: 'Reparar o cambiar, con honestidad',
        body: 'Si es algo trabado o una conexión floja, lo reparamos. Si el aparato ya no sirve, se lo decimos.',
      },
      {
        title: 'Triturador nuevo instalado',
        body: 'Quitamos el viejo, montamos el nuevo, lo conectamos al drenaje del fregadero y revisamos que no haya fugas.',
      },
      {
        title: 'Conexión del drenaje',
        body: 'Rehacemos la trampa y las conexiones de drenaje debajo del fregadero cuando gotean o se tapan.',
      },
    ],
    seo: {
      title: 'Trituradores de basura en Oakland',
      description: '¿Triturador trabado, con fuga o que no prende? Lo reparamos o lo cambiamos, con el precio antes de empezar. Abierto 24/7. Hablamos español. (510) 753-8649.',
    },
    faqs: [
      {
        q: 'Mi triturador zumba pero no gira. ¿Qué hago?',
        a: 'Apáguelo con el interruptor y no meta la mano. Casi siempre algo lo está trabando. Llámenos y lo destrabamos y revisamos si el aparato sigue bien.',
      },
      {
        q: '¿Conviene reparar el triturador o cambiarlo?',
        a: 'Si está trabado o una conexión está floja, casi siempre basta con repararlo. Si el aparato mismo gotea o el motor ya no sirve, conviene uno nuevo. Le decimos cuál es el caso y el precio antes de empezar.',
      },
      {
        q: '¿Qué no se debe echar al triturador?',
        a: 'Sobre todo grasa y aceite: se acumulan en la línea de drenaje y causan tapones. Las cáscaras fibrosas y el café molido también dan problemas. Deje correr agua fría mientras el triturador está prendido.',
      },
    ],
  },
  'showers-bathtubs': {
    name: 'Regaderas y tinas',
    summary: 'Llaves de regadera, salidas de tina, y tinas y regaderas nuevas, también para remodelaciones.',
    headline: '¿Regadera que gotea o tina nueva? Nosotros hacemos la plomería.',
    lead: 'Regaderas que gotean, manijas que se traban, agua que no se queda a la temperatura correcta, y tinas y regaderas nuevas, incluida la plomería para remodelar su baño.',
    problems: [
      'La regadera o la salida de la tina sigue goteando',
      'La manija de la regadera está dura, trabada o gotea',
      'El agua sale muy caliente o muy fría y cuesta ajustarla',
      'La salida de la tina no manda el agua a la regadera',
      'Una tina o regadera vieja que cambiar en una remodelación',
    ],
    includes: [
      {
        title: 'Llaves de regadera',
        body: 'Cambiamos el cartucho, o ponemos una válvula nueva con manija y salida de tina nuevas cuando la vieja ya no sirve.',
      },
      {
        title: 'Tinas y regaderas nuevas',
        body: 'Instalamos tinas y regaderas, las conectamos y revisamos que no haya fugas.',
      },
      {
        title: 'Plomería para remodelaciones',
        body: 'Líneas de agua, válvulas y drenajes nuevos donde los necesita el nuevo diseño de su baño.',
      },
    ],
    seo: {
      title: 'Regaderas y tinas en Oakland',
      description: '¿Regadera que gotea, llave trabada o una tina nueva para su remodelación? Reparamos e instalamos. Abierto 24/7. Hablamos español. (510) 753-8649.',
    },
    faqs: [
      {
        q: '¿Pueden arreglar una regadera que gotea sin abrir la pared?',
        a: 'Muchas veces, sí. El goteo casi siempre viene de un cartucho gastado, que se cambia por la manija. Si la válvula misma falló, le explicamos lo que hace falta y el precio antes de empezar cualquier trabajo.',
      },
      {
        q: '¿Hacen la plomería para remodelar un baño?',
        a: 'Sí. La plomería nueva para remodelaciones es uno de nuestros servicios, incluidas llaves de regadera, tinas y regaderas nuevas.',
      },
      {
        q: '¿La cotización es gratis?',
        a: 'Sí. Revisamos la regadera o la tina, le explicamos lo que necesita y le damos el precio antes de empezar cualquier trabajo.',
      },
    ],
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
