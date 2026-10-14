import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { business } from '@/content/business';
import { t, type Locale } from '@/content/i18n';
import type { WorkPhoto } from '@/content/work';
import { OpenStatus, PlacePlate, RatingLine } from './bits';
import { CtaGroup } from './cta';
import { SpanishNote } from './spanish-note';

/** Hero for inner pages and service landing pages: same hierarchy as the home hero, smaller headline budget. */
export function PageHero({
  title,
  lead,
  photo,
  placement,
  back,
  locale = 'en',
}: {
  title: string;
  lead: string;
  /** Already in the page's language (see inLocale in work.ts). */
  photo?: WorkPhoto;
  placement: string;
  back?: { href: string; label: string };
  locale?: Locale;
}) {
  return (
    <section className="bg-white">
      <div className="wrap grid gap-8 pt-5 pb-10 lg:grid-cols-12 lg:gap-12 lg:pt-12 lg:pb-16">
        <div className={photo ? 'lg:col-span-7 lg:self-center' : 'lg:col-span-9'}>
          {back ? (
            <Link
              href={back.href}
              className="-ml-1 inline-flex min-h-11 items-center gap-1 font-medium text-blue underline underline-offset-4"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
              {back.label}
            </Link>
          ) : (
            <OpenStatus locale={locale} />
          )}
          <h1 className="type-page mt-3">{title}</h1>
          <p className="type-lead measure mt-5">{lead}</p>
          <RatingLine locale={locale} className="mt-5" />
          <CtaGroup placement={placement} locale={locale} className="mt-7" />
          {business.offer.enabled && <p className="mt-4 text-[0.95rem] text-mute">{t(locale).offerDetail}</p>}
          {locale === 'en' && <SpanishNote placement={placement} className="mt-2" />}
        </div>
        {photo && (
          <figure className="lg:col-span-5">
            <div className="relative">
              <Image
                src={photo.image}
                alt={photo.alt}
                priority
                placeholder="blur"
                sizes="(min-width: 1280px) 480px, (min-width: 1024px) 38vw, 100vw"
                className="aspect-[4/3] w-full rounded-[4px] object-cover lg:aspect-[3/4]"
              />
              {photo.place && <PlacePlate className="absolute bottom-3 left-3">{photo.place}</PlacePlate>}
            </div>
            <figcaption className="mt-2 text-[0.92rem] text-mute">{photo.caption}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
