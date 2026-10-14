import type { Metadata } from 'next';
import { OpenStatus, RatingLine } from '@/components/bits';
import { CityDirectory } from '@/components/city-directory';
import { CityReviews } from '@/components/city-reviews';
import { CoverageMap } from '@/components/coverage-map';
import { CtaGroup } from '@/components/cta';
import { EstimateSection } from '@/components/estimate-section';
import { FaqList } from '@/components/faq-list';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Service Areas: Plumber in Oakland, San Francisco & the Bay Area',
  description:
    'AB’s Plumbing is based in Fruitvale, Oakland and serves the whole San Francisco Bay Area: Oakland, Berkeley, San Francisco, Hayward, Fremont, Walnut Creek, San Jose and more. Open 24/7.',
  alternates: { canonical: '/service-areas' },
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Service areas', path: '/service-areas' }])} />
      <section className="bg-white">
        <div className="wrap grid items-center gap-10 pt-5 pb-12 lg:grid-cols-2 lg:gap-16 lg:pt-12 lg:pb-16">
          <div>
            <OpenStatus />
            <h1 className="type-page mt-3">Plumbers serving Oakland and the entire San Francisco Bay Area</h1>
            <p className="type-lead measure mt-5">
              Our crew is based in Fruitvale, Oakland. From there we cover San Francisco and the Peninsula, the East
              Bay, the South Bay and north to Vallejo, 24 hours a day.
            </p>
            <RatingLine className="mt-5" />
            <CtaGroup placement="service-areas" className="mt-7" />
          </div>
          <CoverageMap titleId="areas-map" className="w-full max-w-[560px] justify-self-center lg:max-w-[520px] lg:justify-self-end" />
        </div>
      </section>
      <CityDirectory />
      <CityReviews />
      <EstimateSection />
      <FaqList />
    </>
  );
}
