import type { Metadata } from 'next';
import { CrewSection } from '@/components/crew-section';
import { EstimateSection } from '@/components/estimate-section';
import { PageHero } from '@/components/page-hero';
import { ReviewsSection } from '@/components/reviews-section';
import { WorkGrid } from '@/components/work-grid';
import { photoById } from '@/content/work';

export const metadata: Metadata = {
  title: 'About Our Crew',
  description:
    'AB’s Plumbing is a family-owned plumbing company from Fruitvale, Oakland, on call 24/7 across the Bay Area. Licensed, insured, 4.9 stars on Yelp.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A family-owned plumbing crew from Fruitvale, Oakland"
        lead="We fix leaks, clogs, water heaters and sewer lines for homeowners, landlords and restaurants across the Bay Area, around the clock."
        photo={photoById('sewer-line-foothill-blvd-oakland')}
        placement="about"
      />

      <section aria-labelledby="why-title" className="bg-white">
        <div className="wrap grid gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <h2 id="why-title" className="type-h2">
              Why AB’s Plumbing exists
            </h2>
            <p className="type-lead measure mt-5">
              Too many people get overcharged for poor work by big plumbing companies. AB’s Plumbing started as the
              alternative: honest prices, work done right, and a crew that treats your home like their own.
            </p>
          </div>
          <figure className="self-center border-l-4 border-action pl-6">
            <blockquote className="font-display text-[1.75rem] font-semibold leading-tight text-ink">
              “Our success isn’t measured just by our profits, but by the trust our customers place in us and the
              relationships we build along the way.”
            </blockquote>
            <figcaption className="mt-3 text-mute">Abraham G., founder</figcaption>
          </figure>
        </div>
      </section>

      <CrewSection />
      <ReviewsSection
        ids={['jeffrey-j', 'connie-b', 'jacob-s', 'sam-i', 'avi-j', 'michelle-l']}
        title="The crew, according to our customers"
      />

      <section aria-labelledby="about-work-title" className="bg-white">
        <div className="wrap py-14 lg:py-20">
          <h2 id="about-work-title" className="type-h2">
            On the job
          </h2>
          <div className="mt-8">
            <WorkGrid
              ids={[
                'trench-apartment-building',
                'apartment-complex-new-line',
                'commercial-kitchen-drain-line',
                'sewer-lateral-street-patch',
              ]}
            />
          </div>
        </div>
      </section>

      <EstimateSection />
    </>
  );
}
