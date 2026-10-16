/**
 * Offers and discounts shown on /offers and /es/ofertas.
 * Every offer here must be real and match what the ads and the phone team promise. Write the terms the client
 * gave us, word for word; don't add conditions they didn't set. Dates are in Pacific time and inclusive.
 * Pure TypeScript so `node --test` can run it.
 */
import { business } from './business.ts';
import type { ServiceSlug } from './services.ts';

type Text = { en: string; es: string };

export type Offer = {
  /** Stable id: used for click tracking ("offer-<id>") and React keys. */
  id: string;
  /** The saving, big on the coupon: "10% off", "$50 off", "Free". */
  amount: Text;
  /** What the saving is on. */
  title: Text;
  /** Who can use it, when it is limited to some customers. */
  who?: Text;
  /** How to claim it. */
  howTo: Text;
  /** Fine print, exactly as the client set it. */
  terms?: Text[];
  /** The service page the offer is about, when it is about one. */
  service?: ServiceSlug;
  /** First and last day the offer runs (YYYY-MM-DD, Pacific time). Leave out for an ongoing offer. */
  startsOn?: string;
  endsOn?: string;
};

const newCustomer: Offer = {
  id: 'new-customer',
  amount: { en: `${business.offer.percent}% off`, es: `${business.offer.percent}% de descuento` },
  title: { en: 'Your first service with us', es: 'En su primer servicio con nosotros' },
  who: { en: 'New customers', es: 'Clientes nuevos' },
  howTo: { en: 'Mention the website when you call.', es: 'Mencione la página web cuando llame.' },
};

const mentionIt: Text = { en: 'Mention the offer when booking.', es: 'Mencione la oferta al hacer su cita.' };

/** Minimum-spend offer on any plumbing service (from the client's fall flyer). */
const spend = (off: number, minimum: string): Offer => ({
  id: `fall-${off}-off`,
  amount: { en: `$${off} off`, es: `$${off} de descuento` },
  title: { en: `Any plumbing service of ${minimum} or more`, es: `Cualquier servicio de plomería de ${minimum} o más` },
  howTo: mentionIt,
});

/**
 * A set of offers that run together: a heading over the coupons, a one-line teaser for the site-wide
 * pop-up, and shared dates. The flyer image is matched by id in components/offers-page.tsx.
 */
export type Campaign = {
  id: string;
  heading: Text;
  teaser: Text;
  startsOn?: string;
  endsOn?: string;
};

/** The client's flyer ("Fall Plumbing Specials, save up to $150"). Set endsOn once the client confirms it. */
export const campaign: Campaign = {
  id: 'fall-specials',
  heading: { en: 'Fall plumbing specials', es: 'Especiales de plomería de otoño' },
  teaser: {
    en: 'Save up to $150 on plumbing work, and $150 off a new water heater.',
    es: 'Ahorre hasta $150 en trabajos de plomería, y $150 en un calentador de agua nuevo.',
  },
};

const inCampaign = (offer: Offer): Offer => ({ ...offer, startsOn: campaign.startsOn, endsOn: campaign.endsOn });

const fallSpecials: Offer[] = ([
  spend(35, '$250'),
  spend(75, '$500'),
  spend(150, '$1,000'),
  {
    id: 'fall-water-heater',
    amount: { en: '$150 off', es: '$150 de descuento' },
    title: { en: 'New water heater installation', es: 'Instalación de un calentador de agua nuevo' },
    howTo: mentionIt,
    service: 'water-heaters',
  },
] satisfies Offer[]).map(inCampaign);

export const offers: Offer[] = [...fallSpecials, ...(business.offer.enabled ? [newCustomer] : [])];

/** Shown once under the offers. Word for word from the client's flyer. */
export const offerTerms: Text[] = [
  { en: 'One offer per job.', es: 'Una oferta por trabajo.' },
  { en: 'Cannot be combined with other discounts.', es: 'No se puede combinar con otros descuentos.' },
  {
    en: 'Minimum service amounts apply before taxes and discounts.',
    es: 'Los montos mínimos de servicio aplican antes de impuestos y descuentos.',
  },
];

/** Today's date in the Bay Area as YYYY-MM-DD, so offers start and end on local days. */
export function pacificDate(now: Date): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles' }).format(now);
}

/** Whether something with optional first and last days is running on the given day. */
export function isRunning(dated: { startsOn?: string; endsOn?: string }, now: Date): boolean {
  const today = pacificDate(now);
  return (!dated.startsOn || dated.startsOn <= today) && (!dated.endsOn || today <= dated.endsOn);
}

/** Offers running on the given day, in the order they are listed. */
export function activeOffers(now: Date, list: Offer[] = offers): Offer[] {
  return list.filter((o) => isRunning(o, now));
}

/** "Ends November 30, 2026" / "Termina el 30 de noviembre de 2026". */
export function endsLabel(endsOn: string, locale: 'en' | 'es'): string {
  const date = new Date(`${endsOn}T12:00:00Z`).toLocaleDateString(locale === 'es' ? 'es-US' : 'en-US', {
    timeZone: 'UTC',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return locale === 'es' ? `Termina el ${date}` : `Ends ${date}`;
}
