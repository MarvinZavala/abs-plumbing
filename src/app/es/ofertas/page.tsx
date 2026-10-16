import type { Metadata } from 'next';
import { OffersPage } from '@/components/offers-page';
import { business } from '@/content/business';
import { languageAlternates } from '@/lib/i18n-routes';

// Rebuilt every hour, so an offer disappears the day after it ends.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Ofertas y descuentos de plomería en Oakland',
  description: `Ofertas y descuentos vigentes de AB’s Plumbing en Oakland y la Bahía. Cotización gratis, abierto 24/7. Hablamos español. Llame al ${business.phone.display}.`,
  alternates: { canonical: '/es/ofertas', languages: languageAlternates('/offers', '/es/ofertas') },
};

export default function Ofertas() {
  return <OffersPage locale="es" />;
}
