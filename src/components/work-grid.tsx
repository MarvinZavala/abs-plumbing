import Image from 'next/image';
import type { Locale } from '@/content/i18n';
import { inLocale, photoById, type WorkPhoto } from '@/content/work';

export function WorkGrid({ ids, photos, locale = 'en' }: { ids?: string[]; photos?: WorkPhoto[]; locale?: Locale }) {
  const list = (photos ?? (ids ?? []).map((id) => photoById(id))).map((p) => inLocale(p, locale));
  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-5">
      {list.map((p) => (
        <li key={p.id}>
          <figure>
            <Image
              src={p.image}
              alt={p.alt}
              placeholder="blur"
              sizes="(min-width: 1280px) 290px, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="aspect-[3/4] w-full rounded-[4px] object-cover"
            />
            <figcaption className="mt-2 text-[0.92rem] leading-snug text-slate">
              {p.caption}
              {p.place && <span className="block text-mute">{p.place}</span>}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
