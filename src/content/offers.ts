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
  /** Who can use it. */
  who: Text;
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

export const offers: Offer[] = [...(business.offer.enabled ? [newCustomer] : [])];

/** Today's date in the Bay Area as YYYY-MM-DD, so offers start and end on local days. */
export function pacificDate(now: Date): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles' }).format(now);
}

/** Offers running on the given day, in the order they are listed. */
export function activeOffers(now: Date, list: Offer[] = offers): Offer[] {
  const today = pacificDate(now);
  return list.filter((o) => (!o.startsOn || o.startsOn <= today) && (!o.endsOn || today <= o.endsOn));
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
