/**
 * schema.org JSON-LD builders. Pure functions (no Next imports) so tests can run them directly.
 * Follows Google's LocalBusiness guidance: 24/7 hours as 00:00–23:59, and no self-serving ratings or reviews.
 */
import { allCities } from '../content/areas.ts';
import { business } from '../content/business.ts';
import { serviceEs } from '../content/es.ts';
import { services, type Service, type ServiceSlug } from '../content/services.ts';
import { siteUrl } from './site.ts';

type Crumb = { name: string; path: string };

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const abs = (base: string, path: string) => new URL(path, base).toString();
const defaultBase = () => siteUrl().toString();

export const businessId = (base: string) => abs(base, '/#business');

export function businessJsonLd(base: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': businessId(base),
    name: business.name,
    alternateName: business.shortName,
    description:
      'Family-owned plumbing company based in Oakland, California. Open 24 hours for emergency plumbing, drain cleaning, water heaters, sewer lines, leaks and fixtures across the San Francisco Bay Area.',
    url: abs(base, '/'),
    telephone: business.phone.e164,
    email: business.email,
    image: abs(base, '/opengraph-image.jpg'),
    logo: abs(base, '/icon.png'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.base.city,
      addressRegion: business.base.region,
      postalCode: business.base.postalCode,
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'San Francisco Bay Area' },
      ...allCities.map((city) => ({ '@type': 'City', name: `${city}, CA` })),
    ],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: DAYS, opens: '00:00', closes: '23:59' },
    ],
    paymentAccepted: 'Cash, Credit Card, Zelle',
    knowsLanguage: ['en', 'es'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: business.phone.e164,
        contactType: 'customer service',
        availableLanguage: [...business.languages],
        areaServed: 'San Francisco Bay Area',
      },
    ],
    sameAs: [business.yelp.url],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plumbing services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.summary,
          url: abs(base, `/services/${s.slug}`),
        },
      })),
    },
    ...(business.license
      ? {
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'license',
            name: `California contractor license #${business.license}`,
            recognizedBy: { '@type': 'GovernmentOrganization', name: 'Contractors State License Board' },
          },
        }
      : {}),
  };
}

export function websiteJsonLd(base: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': abs(base, '/#website'),
    url: abs(base, '/'),
    name: business.name,
    inLanguage: ['en-US', 'es-US'],
    publisher: { '@id': businessId(base) },
  };
}

export function serviceJsonLd(service: Service, base: string = defaultBase()) {
  const url = abs(base, `/services/${service.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.lead,
    url,
    provider: { '@id': businessId(base) },
    areaServed: { '@type': 'AdministrativeArea', name: 'San Francisco Bay Area' },
  };
}

/** The Spanish landing page for a service: same business, Spanish name, description and URL. */
export function spanishServiceJsonLd(slug: ServiceSlug, base: string = defaultBase()) {
  const service = serviceEs(slug);
  const url = abs(base, `/es/servicios/${service.slugEs}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.lead,
    url,
    inLanguage: 'es-US',
    provider: { '@id': businessId(base) },
    areaServed: { '@type': 'AdministrativeArea', name: 'San Francisco Bay Area' },
  };
}

export function breadcrumbJsonLd(items: Crumb[], base: string = defaultBase()) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(base, item.path),
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
