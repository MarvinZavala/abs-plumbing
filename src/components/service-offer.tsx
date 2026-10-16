import Link from 'next/link';
import { Scissors } from 'lucide-react';
import { business } from '@/content/business';
import type { Locale } from '@/content/i18n';
import { activeOffers, campaign, isRunning, offerTerms, type Offer } from '@/content/offers';
import type { ServiceSlug } from '@/content/services';

const copy = {
  en: {
    upTo: 'Up to',
    off: 'off',
    anyJob: 'any plumbing job',
    tierMin: (min: string) => `jobs ${min}`,
    plus: 'Plus up to $150 off any other plumbing job of $250 or more.',
    newCustomer: `New customer? Or take ${business.offer.percent}% off your first service.`,
    claim: 'Mention the offer when you book.',
    details: 'See offer details',
    href: '/offers',
  },
  es: {
    upTo: 'Hasta',
    off: 'de descuento',
    anyJob: 'en trabajos de plomería',
    tierMin: (min: string) => `en trabajos de ${min}`,
    plus: 'Y hasta $150 de descuento en cualquier otro trabajo de $250 o más.',
    newCustomer: `¿Cliente nuevo? O tome ${business.offer.percent}% de descuento en su primer servicio.`,
    claim: 'Mencione la oferta al hacer su cita.',
    details: 'Ver los detalles',
    href: '/es/ofertas',
  },
};

/** "$250 or more" from "Any plumbing service of $250 or more". */
const minimumOf = (o: Offer) => o.title.en.match(/\$[\d,]+/)?.[0] ?? '';

/**
 * The running offers for one service, as a coupon right under the hero buttons, so an ad visitor sees the
 * saving before scrolling. A service with its own offer (water heaters) leads with it; every other page leads
 * with "up to $150 off" and the three spend tiers. Renders nothing when no campaign is running.
 */
export function ServiceOffer({ slug, locale = 'en', className }: { slug: ServiceSlug; locale?: Locale; className?: string }) {
  const now = new Date();
  if (!isRunning(campaign, now)) return null;
  const c = copy[locale];
  const running = activeOffers(now);
  const own = running.find((o) => o.appliesTo?.includes(slug));
  const tiers = running.filter((o) => o.id.startsWith('fall-') && !o.appliesTo);
  const top = tiers.at(-1);
  const showNewCustomer = business.offer.enabled && running.some((o) => o.id === 'new-customer');

  return (
    <aside
      aria-label={campaign.heading[locale]}
      className={`relative rounded-plate bg-ink p-1.5 text-white shadow-[0_18px_40px_-20px_rgb(10_34_57/0.6)] ${className ?? ''}`}
    >
      <div className="rounded-[4px] border-2 border-dashed border-cyan/60 px-5 py-4 sm:px-6">
        <Scissors className="absolute -top-2.5 left-7 size-5 rounded-sm bg-white px-0.5 text-ink" aria-hidden="true" />
        <p className="text-[0.95rem] font-semibold text-cyan">{campaign.heading[locale]}</p>

        {own ? (
          <>
            <p className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-display text-[2.6rem] font-bold leading-none sm:text-[3rem]">{own.amount[locale]}</span>
              <span className="font-display text-[1.35rem] font-semibold leading-tight">{own.title[locale]}</span>
            </p>
            <p className="mt-2 text-[0.98rem] text-white/85">{c.plus}</p>
          </>
        ) : (
          top && (
            <>
              <p className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-[1.35rem] font-semibold">{c.upTo}</span>
                <span className="font-display text-[2.6rem] font-bold leading-none text-white sm:text-[3rem]">
                  {top.amount[locale].replace(/ (off|de descuento)$/, '')}
                </span>
                <span className="font-display text-[1.35rem] font-semibold">
                  {c.off} {c.anyJob}
                </span>
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {tiers.map((o) => (
                  <li key={o.id} className="rounded-full border border-white/30 px-3 py-1 text-[0.92rem]">
                    <b className="font-semibold">{locale === 'es' ? o.amount.es.replace(/ de descuento$/, '') : o.amount.en}</b>{' '}
                    <span className="text-white/80">{c.tierMin(minimumOf(o).replace(/$/, '+'))}</span>
                  </li>
                ))}
              </ul>
            </>
          )
        )}

        {showNewCustomer && <p className="mt-3 text-[0.95rem] text-white/85">{c.newCustomer}</p>}
        <p className="mt-3 text-[0.82rem] leading-snug text-white/65">
          {c.claim} {offerTerms.map((t) => t[locale]).join(' ')}{' '}
          <Link href={c.href} className="font-semibold whitespace-nowrap text-white underline underline-offset-4">
            {c.details}
          </Link>
        </p>
      </div>
    </aside>
  );
}
