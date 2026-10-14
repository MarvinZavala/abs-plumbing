/**
 * UI strings for components shared by the English site and the Spanish pages (/es).
 * Spanish copy uses "usted": respectful and the norm for home services in the Bay Area's Latino community.
 */
import { business } from './business.ts';
import { offerEs } from './es.ts';

export type Locale = 'en' | 'es';

export const ui = {
  en: {
    skipToContent: 'Skip to content',
    call: (phone: string) => `Call ${phone}`,
    textPhoto: 'Text a photo',
    freeEstimate: 'Free estimate',
    smsBody: 'Hi AB’s Plumbing, I need help with ',
    openStatus: 'Open now. 24 hours, 7 days.',
    reviewsCount: (n: number) => `${n} reviews`,
    onYelp: ' on Yelp',
    yelpRatingLabel: (rating: number, n: number) => `${rating} stars from ${n} reviews on Yelp (opens in a new tab)`,
    actionBarLabel: 'Contact AB’s Plumbing',
    actionCall: 'Call now',
    actionText: 'Text us',
    actionEstimate: 'Estimate',
    tagline: 'Oakland, open 24/7',
    homeHref: '/',
    mainNavLabel: 'Main',
    nav: [
      { href: '/services', label: 'Services' },
      { href: '/gallery', label: 'Our work' },
      { href: '/about', label: 'About us' },
      { href: '/service-areas', label: 'Service areas' },
    ],
    /** Link to the other language, written in that language. */
    otherLanguage: { locale: 'es' as Locale, label: 'Español' },
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mobileNavLabel: 'Mobile',
    whatWeFix: 'What we fix',
    /** In-page anchors, so Spanish URLs read /es#cotizacion rather than /es#estimate. */
    estimateAnchor: 'estimate',
    reviewsAnchor: 'reviews',
    offerDetail: business.offer.detail,
    fromOurJobs: ', from one of our jobs.',
    // Footer
    footerAbout: `Based in ${business.base.city}. Serving the whole San Francisco Bay Area, 24 hours a day.`,
    footerServicesLabel: 'Services',
    footerCompanyLabel: 'Company',
    reviewsOnYelpLink: 'Reviews on Yelp',
    privacyPolicy: 'Privacy policy',
    licensed: business.license ? `CA contractor license #${business.license}. Insured.` : 'Licensed and insured in California.',
    payments: 'We accept cash, credit cards and Zelle.',
    familyOwned: 'Family-owned and operated.',
    // Coverage map
    mapTitle: 'Map of the San Francisco Bay Area',
    mapDesc:
      'AB’s Plumbing is based in Oakland and serves the whole Bay Area: Marin and the North Bay, San Francisco and the Peninsula, the East Bay, and the South Bay down to San Jose.',
    mapBase: 'Home base: Oakland',
    mapCaption: 'Rings mark 10, 25 and 40 miles from our base. Map data: U.S. Census Bureau.',
    /** Water and region names on the map, one entry per line. */
    mapPlaces: {
      pacific: ['Pacific', 'Ocean'],
      'sf-bay': ['San Francisco', 'Bay'],
      'san-pablo-bay': ['San Pablo', 'Bay'],
      'north-bay': ['North Bay'],
      'east-bay': ['East Bay'],
      peninsula: ['Peninsula'],
      'south-bay': ['South Bay'],
    },
    // Coverage section
    coverageTitle: 'Serving all of the San Francisco Bay Area',
    coverageLead:
      'Our crew is based in Oakland, right in the middle of the Bay. From here we cover San Francisco and the Peninsula, the East Bay, the South Bay, and the North Bay from Marin to Vallejo.',
    coverageAllCities: 'See every city we serve',
    coverageNotSure: 'Not sure about your address?',
    coverageCallAndAsk: 'Call and ask',
    // Process
    processTitle: 'How a job goes',
    processLead: 'Four steps, each one backed by a customer’s own words.',
    // Reviews
    reviewsTitle: (n: number) => `${n} reviews. Here are a few.`,
    averageFrom: (n: number) => `average from ${n} reviews on Yelp`,
    readAllOnYelp: 'Read them all on Yelp',
    opensNewTab: '(opens in a new tab)',
    showMore: (n: number) => `Show ${n} more reviews`,
    reviewsLanguageNote: '',
    // Estimate section
    estimateHeading: 'Get a free estimate',
    estimateLead:
      'Tell us what’s going on and we’ll call you back. If something is flooding or backing up right now, calling is fastest.',
    ratherTalk: 'Rather talk to someone?',
    orTextBefore: 'Or',
    orTextLink: 'text us a photo',
    orTextAfter: 'of the problem.',
    // FAQ
    faqTitle: 'Questions people ask before they call',
  },
  es: {
    skipToContent: 'Saltar al contenido',
    call: (phone: string) => `Llamar al ${phone}`,
    textPhoto: 'Mandar foto',
    freeEstimate: 'Cotizar gratis',
    smsBody: 'Hola AB’s Plumbing, necesito ayuda con ',
    openStatus: 'Abierto ahora. 24 horas, 7 días.',
    reviewsCount: (n: number) => `${n} reseñas`,
    onYelp: ' en Yelp',
    yelpRatingLabel: (rating: number, n: number) => `${rating} estrellas de ${n} reseñas en Yelp (se abre en otra pestaña)`,
    actionBarLabel: 'Contactar a AB’s Plumbing',
    actionCall: 'Llamar',
    actionText: 'Texto',
    actionEstimate: 'Cotizar',
    tagline: 'Oakland, abierto 24/7',
    homeHref: '/es',
    mainNavLabel: 'Principal',
    nav: [
      { href: '/es#servicios', label: 'Servicios' },
      { href: '/es#como-trabajamos', label: 'Cómo trabajamos' },
      { href: '/es#cobertura', label: 'Cobertura' },
      { href: '/es#cotizacion', label: 'Cotización' },
    ],
    otherLanguage: { locale: 'en' as Locale, label: 'English' },
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    mobileNavLabel: 'Menú',
    whatWeFix: 'Lo que reparamos',
    estimateAnchor: 'cotizacion',
    reviewsAnchor: 'resenas',
    offerDetail: offerEs,
    fromOurJobs: ', de uno de nuestros trabajos.',
    footerAbout: `Con base en ${business.base.city}. Atendemos toda el Área de la Bahía de San Francisco, las 24 horas.`,
    footerServicesLabel: 'Servicios',
    footerCompanyLabel: 'Empresa',
    reviewsOnYelpLink: 'Reseñas en Yelp',
    privacyPolicy: 'Política de privacidad (en inglés)',
    licensed: business.license
      ? `Licencia de contratista de California #${business.license}. Con seguro.`
      : 'Con licencia y seguro en California.',
    payments: 'Aceptamos efectivo, tarjetas de crédito y Zelle.',
    familyOwned: 'Empresa familiar.',
    mapTitle: 'Mapa del Área de la Bahía de San Francisco',
    mapDesc:
      'AB’s Plumbing tiene su base en Oakland y atiende toda el Área de la Bahía: Marin y el North Bay, San Francisco y la Península, el East Bay y el South Bay hasta San Jose.',
    mapBase: 'Base: Oakland',
    mapCaption: 'Los anillos marcan 10, 25 y 40 millas desde nuestra base. Datos del mapa: Oficina del Censo de EE. UU.',
    mapPlaces: {
      pacific: ['Océano', 'Pacífico'],
      'sf-bay': ['Bahía de', 'San Francisco'],
      'san-pablo-bay': ['Bahía de', 'San Pablo'],
      'north-bay': ['North Bay'],
      'east-bay': ['East Bay'],
      peninsula: ['Península'],
      'south-bay': ['South Bay'],
    },
    coverageTitle: 'Atendemos toda el Área de la Bahía de San Francisco',
    coverageLead:
      'Nuestro equipo tiene su base en Oakland, en el centro de la Bahía. Desde aquí cubrimos San Francisco y la Península, el East Bay, el South Bay y el North Bay, desde Marin hasta Vallejo.',
    coverageAllCities: 'Ver todas las ciudades (en inglés)',
    coverageNotSure: '¿No sabe si llegamos a su dirección?',
    coverageCallAndAsk: 'Llame y pregunte',
    processTitle: 'Cómo trabajamos',
    processLead: 'Cuatro pasos, de su llamada hasta la limpieza final.',
    reviewsTitle: (n: number) => `${n} reseñas. Aquí algunas.`,
    averageFrom: (n: number) => `promedio de ${n} reseñas en Yelp`,
    readAllOnYelp: 'Leer todas en Yelp',
    opensNewTab: '(se abre en otra pestaña)',
    showMore: (n: number) => `Ver ${n} reseñas más`,
    reviewsLanguageNote: 'Las reseñas están en inglés, tal como los clientes las escribieron en Yelp.',
    estimateHeading: 'Pida una cotización gratis',
    estimateLead:
      'Cuéntenos qué pasa y le llamamos. Si algo se está inundando o un drenaje se está regresando ahora mismo, lo más rápido es llamar.',
    ratherTalk: '¿Prefiere hablar con alguien?',
    orTextBefore: 'O',
    orTextLink: 'mándenos una foto',
    orTextAfter: 'del problema por texto.',
    faqTitle: 'Preguntas antes de llamar',
  },
} satisfies Record<Locale, unknown>;

export function t(locale: Locale = 'en') {
  return ui[locale];
}
