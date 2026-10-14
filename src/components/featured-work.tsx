import Image from 'next/image';
import type { Locale } from '@/content/i18n';
import { photoById } from '@/content/work';

/**
 * One lead photo plus four supporting ones. On phones: the lead photo full width over a 2x2 grid.
 * On desktop: the lead photo takes a 2x2 block on the left of a four-column grid.
 */
export function FeaturedWork({ ids, locale = 'en' }: { ids: [string, string, string, string, string]; locale?: Locale }) {
  const [lead, ...rest] = ids.map((id) => photoById(id, locale));
  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-5 lg:grid-cols-4 lg:grid-rows-2 lg:gap-x-5 lg:gap-y-6">
      <li className="col-span-2 lg:row-span-2">
        <figure className="flex h-full flex-col">
          <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-0 lg:flex-1">
            <Image
              src={lead.image}
              alt={lead.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw"
              className="rounded-[4px] object-cover"
            />
          </div>
          <figcaption className="mt-2 text-[0.92rem] leading-snug text-slate">{lead.caption}</figcaption>
        </figure>
      </li>
      {rest.map((p) => (
        <li key={p.id}>
          <figure>
            <Image
              src={p.image}
              alt={p.alt}
              placeholder="blur"
              sizes="(min-width: 1280px) 290px, (min-width: 1024px) 23vw, 50vw"
              className="aspect-[4/3] w-full rounded-[4px] object-cover"
            />
            <figcaption className="mt-2 text-[0.92rem] leading-snug text-slate">{p.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
