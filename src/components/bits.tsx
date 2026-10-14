import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import yelpIcon from '@/assets/brand/yelp-favicon.svg';
import { cn } from '@/lib/utils';
import { business } from '@/content/business';
import { t, type Locale } from '@/content/i18n';
import { TrackedLink } from './tracked-link';

/** Five filled stars. Decorative: the rating is always stated in text next to it. */
export function Stars({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex gap-0.5 text-star', className)} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="size-[1em]" fill="currentColor">
          <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * The rating in heroes, as a button to the Yelp page: Yelp's icon, "4.9 ★★★★★ 677 reviews on Yelp", external-link icon.
 * The proof and the way to check it are one control, so it doesn't compete with the call/text/estimate buttons.
 * Yelp's brand rules let businesses use its favicon as a shortcut to their Yelp page, but not the standalone
 * Yelp logo or Yelp's star images, so the stars stay ours. Opens a new tab so ad visitors keep this page.
 */
export function RatingLine({
  tone = 'light',
  locale = 'en',
  className,
}: {
  tone?: 'light' | 'dark';
  locale?: Locale;
  className?: string;
}) {
  const copy = t(locale);
  const dark = tone === 'dark';
  return (
    <div className={className}>
      <TrackedLink
        href={business.yelp.url}
        target="_blank"
        rel="noopener noreferrer"
        event="yelp_click"
        placement="rating"
        aria-label={copy.yelpRatingLabel(business.yelp.rating, business.yelp.reviewCount)}
        className={cn(
          'group inline-flex min-h-11 items-center gap-2 rounded-full border py-1 pr-3.5 pl-1 transition-colors active:translate-y-px sm:gap-2.5 sm:pr-4',
          dark ? 'border-white/30 hover:bg-white/10' : 'border-line bg-white hover:border-mute/50 hover:bg-concrete',
        )}
      >
        <Image src={yelpIcon} alt="" width={36} height={36} loading="eager" className="size-8 shrink-0 sm:size-9" />
        <span
          className={cn('font-display text-[1.45rem] font-bold leading-none sm:text-[1.6rem]', dark ? 'text-white' : 'text-ink')}
        >
          {business.yelp.rating}
        </span>
        <Stars className="text-[1.05rem] sm:text-[1.15rem]" />
        <span
          className={cn('text-[0.95rem] leading-none whitespace-nowrap sm:text-base', dark ? 'text-white/85' : 'text-slate')}
        >
          {copy.reviewsCount(business.yelp.reviewCount)}
          {/* "on Yelp" drops on the narrowest phones (the Yelp icon already says it) to keep the button on one line. */}
          <span className="max-[379px]:hidden">{copy.onYelp}</span>
        </span>
        <ExternalLink
          className={cn('size-4 shrink-0 transition-colors', dark ? 'text-white/70' : 'text-mute group-hover:text-ink')}
          aria-hidden="true"
        />
      </TrackedLink>
    </div>
  );
}

/** Live-looking but always-true status: the business is open around the clock. */
export function OpenStatus({
  tone = 'light',
  locale = 'en',
  className,
}: {
  tone?: 'light' | 'dark';
  locale?: Locale;
  className?: string;
}) {
  return (
    <p className={cn('flex items-center gap-2 text-[0.95rem] font-medium', tone === 'dark' ? 'text-white/85' : 'text-slate', className)}>
      <span className="status-dot inline-block size-2.5 rounded-full bg-go" aria-hidden="true" />
      {t(locale).openStatus}
    </p>
  );
}

/**
 * Street-sign style plate for place names. Modeled on the green and white street name signs
 * in the crew's own job photos, recolored to the brand ink.
 */
export function PlacePlate({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-plate bg-ink px-1 py-1 font-display text-[1.05rem] font-semibold leading-none text-white',
        className,
      )}
    >
      <span className="rounded-[3px] border-[1.5px] border-white/90 px-2.5 py-1.5">{children}</span>
    </span>
  );
}
