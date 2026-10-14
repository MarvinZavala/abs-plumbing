import type { Metadata } from 'next';
import { CityDirectory } from '@/components/city-directory';
import { CityReviews } from '@/components/city-reviews';
import { EstimateSection } from '@/components/estimate-section';
import { FaqList } from '@/components/faq-list';
import { JsonLd } from '@/components/json-ld';
import { PageHero } from '@/components/page-hero';
import { photoById } from '@/content/work';
import { breadcrumbJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Service Areas: Plumber in Oakland, San Francisco & the Bay Area',
  description:
    'AB’s Plumbing is based in Oakland and serves the whole Bay Area: San Francisco, Marin, the Peninsula, the East Bay and San Jose. Open 24/7.',
  alternates: { canonical: '/service-areas' },
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Service areas', path: '/service-areas' }])} />
      <PageHero
        title="Plumbers serving Oakland and the entire San Francisco Bay Area"
        lead="Our crew is based in Oakland. From there we cover San Francisco and the Peninsula, the East Bay, the South Bay, and the North Bay from Marin to Vallejo, 24 hours a day."
        photo={photoById('sewer-line-foothill-blvd-oakland')}
        placement="service-areas"
      />
      <CityDirectory />
      <CityReviews />
      <EstimateSection />
      <FaqList />
    </>
  );
}
