import { getImageProps } from 'next/image';
import Link from 'next/link';
import flyerTall from '@/assets/offers/fall-plumbing-specials-tall.png';
import flyerWide from '@/assets/offers/fall-plumbing-specials-wide.png';
import { business, telHref } from '@/content/business';
import type { Locale } from '@/content/i18n';
import { campaign, isRunning } from '@/content/offers';
import { cn } from '@/lib/utils';
import { TrackedLink } from './tracked-link';

type Box = { left: number; top: number; width: number; height: number };

/**
 * The flyers for each campaign: a tall one for phones and a wide one from tablets up, each with the box of
 * its "Call to claim your offer" button in percent of the image (measured from the button's blue fill).
 */
const flyers = {
  'fall-specials': {
    tall: { image: flyerTall, button: { left: 9.2, top: 75.2, width: 81.4, height: 5.3 } },
    wide: { image: flyerWide, button: { left: 4.5, top: 68, width: 34, height: 7.8 } },
    alt: {
      en: 'AB’s Plumbing fall plumbing specials, save up to $150: $35 off any plumbing service of $250 or more, $75 off any plumbing service of $500 or more, $150 off any plumbing service of $1,000 or more, and $125 off a new water heater installation. Call to claim your offer.',
      es: 'Especiales de plomería de otoño de AB’s Plumbing, ahorre hasta $150: $35 de descuento en servicios de $250 o más, $75 en servicios de $500 o más, $150 en servicios de $1,000 o más y $125 en la instalación de un calentador de agua nuevo. Llame para usar su oferta.',
    },
  },
};

/** The wide flyer takes over from this width (Tailwind md). */
const WIDE_FROM = '(min-width: 768px)';

const ButtonGlow = ({ box, className }: { box: Box; className: string }) => (
  <span
    aria-hidden="true"
    className={cn('absolute rounded-[0.6rem] ring-cyan transition-shadow group-hover:ring-4 group-focus-visible:ring-4', className)}
    style={{ left: `${box.left}%`, top: `${box.top}%`, width: `${box.width}%`, height: `${box.height}%` }}
  />
);

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
  const alt = flyer.alt[locale];
  // Art direction: the browser downloads only the flyer that fits the screen.
  const common = { alt, priority, quality: 80 };
  const {
    props: { srcSet: wideSrcSet, sizes: wideSizes, width: wideWidth, height: wideHeight },
  } = getImageProps({ ...common, src: flyer.wide.image, sizes: '(min-width: 1280px) 1216px, calc(100vw - 2rem)' });
  const { props: tallProps } = getImageProps({ ...common, src: flyer.tall.image, sizes: 'calc(100vw - 2rem)' });
  return (
    <figure className={className}>
      <TrackedLink
        href={telHref}
        event="call_click"
        placement={placement}
        aria-label={c.label}
        className="group relative block overflow-hidden rounded-plate shadow-[0_18px_40px_-20px_rgb(10_34_57/0.45)] outline-offset-4"
      >
        <picture>
          <source media={WIDE_FROM} srcSet={wideSrcSet} sizes={wideSizes} width={wideWidth} height={wideHeight} />
          {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
          <img {...tallProps} className="h-auto w-full" />
        </picture>
        <ButtonGlow box={flyer.tall.button} className="md:hidden" />
        <ButtonGlow box={flyer.wide.button} className="hidden md:block" />
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
