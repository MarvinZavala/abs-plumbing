import Image from 'next/image';
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
 * The rating line used in heroes: Yelp's icon, then "4.9 ★★★★★ 677 reviews on Yelp".
 * Yelp's brand rules let businesses use its favicon as a shortcut to their Yelp page, but not the standalone
 * Yelp logo or Yelp's star images, so the stars stay ours. The link opens a new tab so ad visitors keep this page.
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
  return (
    <p className={cn('flex flex-wrap items-center gap-x-2.5 gap-y-1', className)}>
      <TrackedLink
        href={business.yelp.url}
        target="_blank"
        rel="noopener noreferrer"
        event="yelp_click"
        placement="rating"
        className="shrink-0 rounded-full transition-transform hover:scale-105"
      >
        <Image src={yelpIcon} alt="" width={26} height={26} loading="eager" className="size-[26px]" />
        <span className="sr-only">
          {t(locale).yelpPage} {t(locale).opensNewTab}
        </span>
      </TrackedLink>
      <span className={cn('font-display text-2xl font-bold leading-none', tone === 'dark' ? 'text-white' : 'text-ink')}>
        {business.yelp.rating}
      </span>
      <Stars className="text-xl" />
      <span className={cn('text-[0.98rem]', tone === 'dark' ? 'text-white/80' : 'text-mute')}>
        {t(locale).reviewsOnYelp(business.yelp.reviewCount)}
      </span>
    </p>
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
