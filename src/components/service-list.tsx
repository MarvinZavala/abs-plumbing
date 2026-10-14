import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { services, type ServiceSlug } from '@/content/services';
import { photoById } from '@/content/work';

/** Services as list rows with a real job photo each (not a grid of identical icon cards). */
export function ServiceList({ exclude }: { exclude?: ServiceSlug }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {services
        .filter((s) => s.slug !== exclude)
        .map((s) => {
          const photo = photoById(s.photos[0]);
          return (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
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
