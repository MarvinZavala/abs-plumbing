import type { Metadata } from 'next';
import { EstimateSection } from '@/components/estimate-section';
import { JsonLd } from '@/components/json-ld';
import { FaqList } from '@/components/faq-list';
import { PageHero } from '@/components/page-hero';
import { ProcessSteps } from '@/components/process-steps';
import { ReviewsSection } from '@/components/reviews-section';
import { ServiceList } from '@/components/service-list';
import { moreServices } from '@/content/services';
import { photoById } from '@/content/work';
import { breadcrumbJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Plumbing Services in Oakland & the Bay Area',
  description:
    'Emergency plumbing, drain cleaning, water heaters, sewer lines, leaks and fixtures. AB’s Plumbing is open 24/7 across the Bay Area. Call (510) 753-8649.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])} />
      <PageHero
        title="Plumbing services for Bay Area homes and businesses"
        lead="Repairs, replacements and emergencies, handled by our own crew. Pick the problem you’re dealing with."
        photo={photoById('commercial-water-heaters-copper')}
        placement="services"
      />

      <section aria-labelledby="list-title" className="bg-concrete">
        <div className="wrap grid gap-10 py-14 lg:grid-cols-[1.6fr_1fr] lg:gap-16 lg:py-20">
          <div>
            <h2 id="list-title" className="type-h2">
              What we fix
            </h2>
            <div className="mt-8">
              <ServiceList />
            </div>
          </div>
          <div>
            <h2 className="type-h3">We also handle</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {moreServices.map((item) => (
                <li key={item} className="py-3 text-ink">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.95rem] text-mute">Not listed? Call and ask. If it’s plumbing, we probably do it.</p>
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
