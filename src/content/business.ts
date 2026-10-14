/**
 * Single source of truth for business facts shown across the site.
 * Everything here must be true and verifiable — Google Ads and CA contractor rules both care.
 */
export const business = {
  name: 'AB’s Plumbing Services',
  shortName: 'AB’s Plumbing',
  phone: {
    display: '(510) 753-8649',
    e164: '+15107538649',
  },
  /** Reviews mention the crew texting customers; confirm this number accepts SMS before launch. */
  acceptsTexts: true,
  email: 'absplumbing00@gmail.com',
  /** Base of operations as listed on Yelp. */
  base: {
    neighborhood: 'Fruitvale',
    city: 'Oakland',
    region: 'CA',
    postalCode: '94601',
  },
  hours: 'Open 24 hours, 7 days a week',
  /**
   * California CSLB license number. Contractors must show it in advertising.
   * Leave null until the real number is confirmed: the site then says "Licensed & insured" without a number.
   */
  license: null as string | null,
  /** Snapshot of the Yelp listing. Update the numbers when you refresh them. */
  yelp: {
    url: 'https://www.yelp.com/biz/abs-plumbing-services-oakland-13',
    rating: 4.9,
    reviewCount: 677,
    checkedOn: '2026-10-13',
  },
  /** Current offer shown on the site. Must match whatever the ads promise. */
  offer: {
    enabled: true,
    short: '10% off for new customers',
    detail: 'New customers get 10% off their first service. Mention the website when you call.',
  },
  payments: ['Cash', 'Credit cards', 'Zelle'],
  /** From the Yelp listing amenities. */
  aslProficient: true,
} as const;

export const telHref = `tel:${business.phone.e164}`;
export const smsHref = `sms:${business.phone.e164}`;
