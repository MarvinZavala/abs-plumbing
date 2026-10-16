import type { Metadata } from 'next';
import Link from 'next/link';
import { EstimateSection } from '@/components/estimate-section';
import { PageHero } from '@/components/page-hero';
import { WorkGrid } from '@/components/work-grid';
import { serviceGroups } from '@/content/service-groups';
import { serviceBySlug, type ServiceSlug } from '@/content/services';
import { photoById, work } from '@/content/work';

export const metadata: Metadata = {
  title: 'Our Work: Real Plumbing Jobs in the Bay Area',
  description:
    'Photos from real AB’s Plumbing jobs: tankless and tank water heaters, sewer laterals, drain lines, water lines and fixtures across the Bay Area.',
  alternates: { canonical: '/gallery' },
};

/** Gallery sections, each tied to a service group (content/service-groups.ts) and its main service page. */
const groups: { title: string; service: ServiceSlug; group: string }[] = [
  { title: 'Water heaters', service: 'water-heaters', group: 'water-heaters' },
  { title: 'Sewer and drain lines', service: 'sewer-lines', group: 'drains' },
  { title: 'Water lines, gas lines and water quality', service: 'leaks-water-lines', group: 'water-gas' },
  { title: 'Kitchens and bathrooms', service: 'fixtures', group: 'fixtures' },
];
const groupOf = (slug: ServiceSlug) => serviceGroups.find((g) => g.services.includes(slug))?.id;

export default function GalleryPage() {
  const shown = new Set<string>();
  const sections = groups.map((group) => {
    const photos = work.filter((p) => {
      // A photo goes in the section of its first service's group (emergency photos fall to their second service).
      const primary = groupOf(p.services[0]) === group.group || (p.services[0] === 'emergency-plumbing' && !!p.services[1] && groupOf(p.services[1]) === group.group);
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
