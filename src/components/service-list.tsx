import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { serviceEs } from '@/content/es';
import type { Locale } from '@/content/i18n';
import { services, type ServiceSlug } from '@/content/services';
import { photoById } from '@/content/work';

/** Thumbnail for services that have no job photo of their own yet. */
const fallbackPhoto: Partial<Record<ServiceSlug, string>> = {
  'recirculation-pumps': 'two-tankless-water-heaters',
};

/** Services as list rows with a real job photo each (not a grid of identical icon cards). */
export function ServiceList({
  exclude,
  slugs,
  locale = 'en',
}: {
  exclude?: ServiceSlug;
  /** Which services to list, in this order (default: all). */
  slugs?: ServiceSlug[];
  locale?: Locale;
}) {
  const list = slugs ? slugs.map((slug) => services.find((s) => s.slug === slug)!) : services;
  const items = list.map((s) => {
    const es = serviceEs(s.slug);
    return {
      slug: s.slug,
      photo: s.photos[0] ?? fallbackPhoto[s.slug] ?? 'crew-at-work',
      ...(locale === 'es'
        ? { href: `/es/servicios/${es.slugEs}`, name: es.name, summary: es.summary }
        : { href: `/services/${s.slug}`, name: s.name, summary: s.summary }),
    };
  });
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items
        .filter((s) => s.slug !== exclude)
        .map((s) => {
          const photo = photoById(s.photo);
          return (
            <li key={s.slug}>
              <Link
                href={s.href}
                className="group grid grid-cols-[4.75rem_1fr_auto] items-center gap-4 py-4 md:grid-cols-[7.5rem_1fr_auto] md:gap-6"
              >
                <Image
                  src={photo.image}
                  alt=""
                  sizes="(min-width: 768px) 120px, 76px"
                  placeholder="blur"
                  className="aspect-square w-full rounded-[4px] object-cover"
                />
                <span>
                  <span className="type-h3 block text-ink decoration-2 underline-offset-4 group-hover:underline">{s.name}</span>
                  <span className="mt-1 block text-[0.98rem] leading-snug text-slate">{s.summary}</span>
                </span>
                <ChevronRight className="size-6 text-ink transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
