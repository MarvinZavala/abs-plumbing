import Link from 'next/link';
import { Scissors } from 'lucide-react';
import { servicesEs } from '@/content/es';
import { endsLabel, type Offer } from '@/content/offers';
import type { Locale } from '@/content/i18n';
import { CallButton } from './cta';

const labels = {
  en: { who: 'Who', howTo: 'How to claim', about: 'About this service' },
  es: { who: 'Para quién', howTo: 'Cómo usarlo', about: 'Sobre este servicio' },
};

/** One offer, drawn as a clip-out coupon: the saving first, then who gets it and how to claim it. */
export function OfferCoupon({ offer, locale = 'en' }: { offer: Offer; locale?: Locale }) {
  const l = labels[locale];
  const serviceHref = !offer.service
    ? undefined
    : locale === 'es'
      ? `/es/servicios/${servicesEs.find((s) => s.slug === offer.service)?.slugEs}`
      : `/services/${offer.service}`;
  const titleId = `offer-${offer.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="relative flex flex-col rounded-plate border-2 border-dashed border-ink/40 bg-white p-6 sm:p-8"
    >
      <Scissors className="absolute -top-3.5 left-6 size-6 bg-concrete px-0.5 text-ink/60" aria-hidden="true" />
      <p className="font-display text-[3.25rem] font-bold leading-none text-ink sm:text-[4rem]">{offer.amount[locale]}</p>
      <h3 id={titleId} className="type-h3 mt-3">
        {offer.title[locale]}
      </h3>
      {offer.endsOn && <p className="mt-2 font-semibold text-alert">{endsLabel(offer.endsOn, locale)}</p>}

      <dl className="mt-5 grid gap-3 border-t border-line pt-5">
        {offer.who && (
          <div className="grid gap-0.5 sm:grid-cols-[8.5rem_1fr]">
            <dt className="font-semibold text-ink">{l.who}</dt>
            <dd>{offer.who[locale]}</dd>
          </div>
        )}
        <div className="grid gap-0.5 sm:grid-cols-[8.5rem_1fr]">
          <dt className="font-semibold text-ink">{l.howTo}</dt>
          <dd>{offer.howTo[locale]}</dd>
        </div>
      </dl>

      {offer.terms && offer.terms.length > 0 && (
        <ul className="mt-4 grid gap-1 text-[0.92rem] text-mute">
          {offer.terms.map((term) => (
            <li key={term.en}>{term[locale]}</li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-6">
        <CallButton placement={`offer-${offer.id}`} locale={locale} className="w-full" />
        {serviceHref && (
          <Link href={serviceHref} className="mt-4 inline-flex min-h-11 items-center font-medium text-blue underline underline-offset-4">
            {l.about}
          </Link>
        )}
      </div>
    </article>
  );
}
