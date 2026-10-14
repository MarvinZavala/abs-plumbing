import type { Metadata } from 'next';
import Link from 'next/link';
import { EstimateSection } from '@/components/estimate-section';
import { PageHero } from '@/components/page-hero';
import { WorkGrid } from '@/components/work-grid';
import { serviceBySlug, type ServiceSlug } from '@/content/services';
import { photoById, work } from '@/content/work';

export const metadata: Metadata = {
  title: 'Our Work: Real Plumbing Jobs Around the Bay Area',
  description:
    'Photos from real AB’s Plumbing jobs: tankless and tank water heaters, sewer laterals, drain lines, water lines and fixtures across the Bay Area.',
  alternates: { canonical: '/gallery' },
};

const groups: { title: string; service: ServiceSlug }[] = [
  { title: 'Water heaters', service: 'water-heaters' },
  { title: 'Sewer and drain lines', service: 'sewer-lines' },
  { title: 'Water lines and water quality', service: 'leaks-water-lines' },
  { title: 'Sinks, toilets and disposals', service: 'fixtures' },
];

export default function GalleryPage() {
  const shown = new Set<string>();
  const sections = groups.map((group) => {
    const photos = work.filter((p) => {
      const primary = p.services[0] === group.service || (group.service === 'sewer-lines' && p.services[0] === 'drain-cleaning');
      if (!primary || shown.has(p.id)) return false;
      shown.add(p.id);
      return true;
    });
    return { ...group, photos };
  });

  return (
    <>
      <PageHero
        title="Our work"
        lead="No stock photos here. Every picture is from a real job our crew did around the Bay Area."
        photo={photoById('commercial-kitchen-drain-line')}
        placement="gallery"
      />

      {sections.map(
        (section, i) =>
          section.photos.length > 0 && (
            <section
              key={section.service}
              aria-labelledby={`g-${section.service}`}
              className={i % 2 === 0 ? 'bg-concrete' : 'bg-white'}
            >
              <div className="wrap py-12 lg:py-16">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h2 id={`g-${section.service}`} className="type-h2">
                    {section.title}
                  </h2>
                  <Link href={`/services/${section.service}`} className="font-medium text-blue underline underline-offset-4">
                    {serviceBySlug(section.service)?.name} service details
                  </Link>
                </div>
                <div className="mt-8">
                  <WorkGrid photos={section.photos} />
                </div>
              </div>
            </section>
          ),
      )}

      <EstimateSection heading="Want work like this? Get a free estimate" />
    </>
  );
}
