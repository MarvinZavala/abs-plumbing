import { allCities } from '@/content/areas';
import { business } from '@/content/business';
import { siteUrl } from '@/lib/site';

/** LocalBusiness (Plumber) structured data for Google. Ratings are left out on purpose: self-hosted review markup is not eligible. */
export function BusinessJsonLd() {
  const url = siteUrl();
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': new URL('/#business', url).toString(),
    name: business.name,
    url: url.toString(),
    telephone: business.phone.e164,
    email: business.email,
    image: new URL('/icon.png', url).toString(),
    logo: new URL('/icon.png', url).toString(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.base.city,
      addressRegion: business.base.region,
      postalCode: business.base.postalCode,
      addressCountry: 'US',
    },
    areaServed: allCities.map((city) => ({ '@type': 'City', name: `${city}, CA` })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    paymentAccepted: 'Cash, Credit Card, Zelle',
    sameAs: [business.yelp.url],
  };
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output with "<" escaped cannot break out of the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
