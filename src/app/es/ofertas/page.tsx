import type { Metadata } from 'next';
import { OffersPage } from '@/components/offers-page';
import { business } from '@/content/business';
import { languageAlternates } from '@/lib/i18n-routes';

// Rebuilt every hour, so an offer disappears the day after it ends.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Ofertas y descuentos de plomería en Oakland',
  description: `Especiales de otoño y fiestas de AB’s Plumbing en Oakland: ahorre hasta $150 y $125 en un calentador de agua nuevo. Hablamos español. Llame al ${business.phone.display}.`,
  alternates: { canonical: '/es/ofertas', languages: languageAlternates('/offers', '/es/ofertas') },
};

export default function Ofertas() {
  return <OffersPage locale="es" />;
}
