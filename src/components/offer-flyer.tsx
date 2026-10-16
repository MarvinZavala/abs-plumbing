import Image from 'next/image';
import Link from 'next/link';
import fallFlyer from '@/assets/offers/fall-specials-flyer.png';
import { business, telHref } from '@/content/business';
import type { Locale } from '@/content/i18n';
import { campaign, isRunning } from '@/content/offers';
import { cn } from '@/lib/utils';
import { TrackedLink } from './tracked-link';

/** The flyer for each campaign, with the box of its "Call to claim" button in percent of the image. */
const flyers = {
  'fall-specials': {
    image: fallFlyer,
    alt: {
      en: 'AB’s Plumbing fall plumbing specials, save up to $150: $35 off any plumbing service of $250 or more, $75 off any plumbing service of $500 or more, $150 off any plumbing service of $1,000 or more, and $125 off a new water heater installation. Call to claim your offer.',
      es: 'Especiales de otoño de AB’s Plumbing, ahorre hasta $150: $35 de descuento en servicios de $250 o más, $75 en servicios de $500 o más, $150 en servicios de $1,000 o más y $125 en la instalación de un calentador de agua nuevo. Llame para usar su oferta.',
    },
    button: { left: 2.3, top: 69.2, width: 36.8, height: 8.8 },
  },
};

const copy = {
  en: {
    label: `Call ${business.phone.display} to claim your offer`,
    hint: 'Tap the flyer to call and claim your offer.',
    details: 'See offer details',
    offersHref: '/offers',
  },
  es: {
    label: `Llame al ${business.phone.display} para usar su oferta`,
    hint: 'Toque el volante para llamar y usar su oferta.',
    details: 'Ver los detalles de las ofertas',
    offersHref: '/es/ofertas',
  },
};

/**
 * The running campaign's flyer as one big call link: the whole image dials the phone (easy to hit on a phone),
 * and the "Call to claim your offer" button drawn on it lights up on hover. Renders nothing once the campaign ends.
 */
export function CampaignFlyer({
  locale = 'en',
  placement,
  priority = false,
  showDetailsLink = false,
  className,
}: {
  locale?: Locale;
  /** For click tracking, e.g. "home-flyer". */
  placement: string;
  /** Only when the flyer is the first big image on the page. */
  priority?: boolean;
  showDetailsLink?: boolean;
  className?: string;
}) {
  const flyer = flyers[campaign.id as keyof typeof flyers];
  if (!flyer || !isRunning(campaign, new Date())) return null;
  const c = copy[locale];
  const { button } = flyer;
  return (
    <figure className={className}>
      <TrackedLink
        href={telHref}
        event="call_click"
        placement={placement}
        aria-label={c.label}
        className="group relative block overflow-hidden rounded-plate shadow-[0_18px_40px_-20px_rgb(10_34_57/0.45)] outline-offset-4"
      >
        <Image
          src={flyer.image}
          alt={flyer.alt[locale]}
          priority={priority}
          placeholder="blur"
          sizes="(min-width: 1280px) 1216px, calc(100vw - 2rem)"
          className="h-auto w-full"
        />
        <span
          aria-hidden="true"
          className="absolute rounded-[0.6rem] ring-cyan transition-shadow group-hover:ring-4 group-focus-visible:ring-4"
          style={{ left: `${button.left}%`, top: `${button.top}%`, width: `${button.width}%`, height: `${button.height}%` }}
        />
      </TrackedLink>
      <figcaption className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.95rem] text-mute">
        <span>{c.hint}</span>
        {showDetailsLink && (
          <Link href={c.offersHref} className="font-medium text-blue underline underline-offset-4">
            {c.details}
          </Link>
        )}
      </figcaption>
    </figure>
  );
}

/** The flyer as its own band right under a hero. */
export function CampaignFlyerBand({
  locale = 'en',
  placement,
  className,
}: {
  locale?: Locale;
  placement: string;
  className?: string;
}) {
  if (!isRunning(campaign, new Date())) return null;
  return (
    <section aria-label={campaign.heading[locale]} className={cn('bg-white', className)}>
      <div className="wrap pb-12 lg:pb-16">
        <CampaignFlyer locale={locale} placement={placement} showDetailsLink />
      </div>
    </section>
  );
}
