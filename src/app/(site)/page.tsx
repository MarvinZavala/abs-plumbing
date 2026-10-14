import type { Metadata } from 'next';
import Link from 'next/link';
import { CoverageSection } from '@/components/coverage-section';
import { CrewSection } from '@/components/crew-section';
import { EstimateSection } from '@/components/estimate-section';
import { FaqList } from '@/components/faq-list';
import { FeaturedWork } from '@/components/featured-work';
import { HomeHero } from '@/components/home-hero';
import { ProcessSteps } from '@/components/process-steps';
import { ReviewsSection } from '@/components/reviews-section';
import { ServiceList } from '@/components/service-list';
import { WorkLog } from '@/components/work-log';
import { languageAlternates } from '@/lib/i18n-routes';

export const metadata: Metadata = {
  alternates: { canonical: '/', languages: languageAlternates('/', '/es') },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WorkLog />

      <section aria-labelledby="services-title" className="bg-white">
        <div className="wrap grid gap-8 py-14 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="services-title" className="type-h2">
              What we fix
            </h2>
            <p className="type-lead measure mt-4">
              From a dripping faucet to a sewer line under the street. Pick the problem to see how we handle it.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      <ProcessSteps />

      <ReviewsSection ids={['mary-s', 'jeffrey-j', 'james-p', 'claude-q', 'natalye-b', 'avi-j']} />

      <section aria-labelledby="work-title" className="bg-white">
        <div className="wrap py-14 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <div>
              <h2 id="work-title" className="type-h2">
                Real jobs, real photos
              </h2>
              <p className="type-lead measure mt-4">No stock photos. These are jobs our crew has done around the Bay Area.</p>
            </div>
            <Link href="/gallery" className="font-medium text-blue underline underline-offset-4">
              See more of our work
            </Link>
          </div>
          <div className="mt-10">
            <FeaturedWork
              ids={[
                'commercial-kitchen-drain-line',
                'tankless-water-heater-shingle-wall',
                'sewer-lateral-street-patch',
                'gas-water-heater-replacement',
                'kitchen-sink-faucet-install',
              ]}
            />
          </div>
        </div>
      </section>

      <CrewSection />
      <CoverageSection />
      <EstimateSection />
      <FaqList />
    </>
  );
}
