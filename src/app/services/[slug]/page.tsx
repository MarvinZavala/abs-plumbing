import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Check, TriangleAlert } from 'lucide-react';
import { EstimateSection } from '@/components/estimate-section';
import { FaqList } from '@/components/faq-list';
import { PageHero } from '@/components/page-hero';
import { ProcessSteps } from '@/components/process-steps';
import { ReviewsSection } from '@/components/reviews-section';
import { ServiceList } from '@/components/service-list';
import { WorkGrid } from '@/components/work-grid';
import { reviewsFor } from '@/content/reviews';
import { serviceBySlug, services } from '@/content/services';
import { photoById, work } from '@/content/work';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = serviceBySlug((await params).slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: `/services/${service.slug}` },
    // No page-level openGraph on purpose: it would replace the inherited share image.
  };
}

const emergencySteps = [
  {
    title: 'Water everywhere?',
    body: 'Turn off the main water shut-off. It’s usually near the water meter, in the garage, or where the line enters the house.',
  },
  { title: 'Toilet overflowing?', body: 'Turn the small valve behind the toilet clockwise until the water stops.' },
  { title: 'Sewage backing up?', body: 'Stop using water in the house (no flushing, showers or laundry) until we get there.' },
];

export default async function ServicePage({ params }: Props) {
  const service = serviceBySlug((await params).slug);
  if (!service) notFound();

  const [heroPhoto, ...morePhotos] = service.photos.map(photoById);
  // Featured reviews first, then any other review that mentions this service.
  const reviewIds = [
    ...service.featuredReviews,
    ...reviewsFor(service.slug)
      .map((r) => r.id)
      .filter((id) => !service.featuredReviews.includes(id)),
  ].slice(0, 6);
  // Photos tagged for this service that aren't already shown, to fill the grid.
  const gridPhotos = [
    ...morePhotos,
    ...work.filter((p) => p.services.includes(service.slug) && !service.photos.includes(p.id)),
  ].slice(0, 8);
  const isEmergency = service.slug === 'emergency-plumbing';

  return (
    <>
      <PageHero
        title={service.headline}
        lead={service.lead}
        photo={heroPhoto}
        placement={`lp-${service.slug}`}
        back={{ href: '/services', label: 'All services' }}
      />

      {isEmergency && (
        <section aria-labelledby="while-title" className="border-y border-line bg-white">
          <div className="wrap py-10">
            <h2 id="while-title" className="type-h3">
              While you wait for us
            </h2>
            <ul className="mt-5 grid gap-5 md:grid-cols-3">
              {emergencySteps.map((s) => (
                <li key={s.title}>
                  <p className="font-display text-[1.25rem] font-semibold text-ink">{s.title}</p>
                  <p className="mt-1">{s.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex gap-3 rounded-control border-2 border-alert/40 bg-alert/5 p-4 text-ink">
              <TriangleAlert className="mt-0.5 size-5 shrink-0 text-alert" aria-hidden="true" />
              <span>
                <strong>Smell gas?</strong> Leave the building without flipping any switches, then call PG&amp;E at{' '}
                <a href="tel:+18007435000" className="font-semibold underline underline-offset-4">
                  1-800-743-5000
                </a>{' '}
                or 911 from outside.
              </span>
            </p>
          </div>
        </section>
      )}

      <section aria-labelledby="fit-title" className="bg-concrete">
        <div className="wrap grid gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <h2 id="fit-title" className="type-h2">
              Sound familiar?
            </h2>
            <ul className="mt-6 space-y-3">
              {service.problems.map((p) => (
                <li key={p} className="flex gap-3 text-[1.08rem] text-ink">
                  <Check className="mt-1 size-5 shrink-0 text-blue" strokeWidth={3} aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="type-h2">What we do about it</h2>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {service.includes.map((item) => (
                <div key={item.title} className="py-4">
                  <dt className="type-h3">{item.title}</dt>
                  <dd className="mt-1">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <ReviewsSection ids={reviewIds} title={`${service.name}, in our customers’ words`} />

      {gridPhotos.length > 0 && (
        <section aria-labelledby="photos-title" className="bg-white">
          <div className="wrap py-14 lg:py-20">
            <h2 id="photos-title" className="type-h2">
              Recent {service.name.toLowerCase()} work
            </h2>
            <div className="mt-8">
              <WorkGrid photos={gridPhotos} />
            </div>
          </div>
        </section>
      )}

      <ProcessSteps />
      <EstimateSection defaultService={service.slug} defaultUrgency={isEmergency ? 'emergency' : 'soon'} />
      <FaqList />

      <section aria-labelledby="other-title" className="bg-concrete">
        <div className="wrap py-14 lg:py-20">
          <h2 id="other-title" className="type-h2">
            Other things we fix
          </h2>
          <div className="mt-8">
            <ServiceList exclude={service.slug} />
          </div>
        </div>
      </section>
    </>
  );
}
