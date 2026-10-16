import type { Metadata } from 'next';
import { OffersPage } from '@/components/offers-page';
import { business } from '@/content/business';
import { languageAlternates } from '@/lib/i18n-routes';

// Rebuilt every hour, so an offer disappears the day after it ends.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Plumbing Deals & Discounts in Oakland',
  description: `Fall holiday specials from AB’s Plumbing in Oakland: save up to $150, plus $125 off a new water heater. Open 24/7. Call ${business.phone.display}.`,
  alternates: { canonical: '/offers', languages: languageAlternates('/offers', '/es/ofertas') },
};

export default function Offers() {
  return <OffersPage locale="en" />;
}
