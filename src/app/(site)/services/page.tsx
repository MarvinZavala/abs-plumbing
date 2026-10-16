import type { Metadata } from 'next';
import { EstimateSection } from '@/components/estimate-section';
import { JsonLd } from '@/components/json-ld';
import { FaqList } from '@/components/faq-list';
import { PageHero } from '@/components/page-hero';
import { ProcessSteps } from '@/components/process-steps';
import { ReviewsSection } from '@/components/reviews-section';
import { ServicesDirectory } from '@/components/services-directory';
import { services } from '@/content/services';
import { photoById } from '@/content/work';
import { languageAlternates } from '@/lib/i18n-routes';
import { breadcrumbJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Plumbing Services in Oakland & the Bay Area',
  description:
    'Drain cleaning, water heaters, sewer, gas and water lines, toilets, faucets and more. AB’s Plumbing is open 24/7 across the Bay Area. Call (510) 753-8649.',
  alternates: { canonical: '/services', languages: languageAlternates('/services', '/es/servicios') },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])} />
      <PageHero
        title="Plumbing services for Bay Area homes and businesses"
        lead="Repairs, replacements and emergencies, handled by our own crew. Pick the problem you’re dealing with."
        photo={photoById('tankless-water-heater-shingle-wall')}
        placement="services"
      />

      <section aria-labelledby="list-title" className="bg-concrete">
        <div className="wrap py-14 lg:py-20">
          <h2 id="list-title" className="type-h2">
            What we fix
          </h2>
          <p className="type-lead measure mt-4">
            {services.length} services, each with its own page. Pick the one that matches what you’re dealing with.
          </p>
          <div className="mt-10">
            <ServicesDirectory />
          </div>
        </div>
      </section>

      <ReviewsSection ids={['jeffrey-j', 'james-p', 'cheryl-r', 'seiji-n', 'connie-b', 'robert-w']} />
      <ProcessSteps />
      <EstimateSection />
      <FaqList />
    </>
  );
}
