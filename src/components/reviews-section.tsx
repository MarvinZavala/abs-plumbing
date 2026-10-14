import { business } from '@/content/business';
import { t, type Locale } from '@/content/i18n';
import { formatReviewDate, reviewById, type Review } from '@/content/reviews';
import { cn } from '@/lib/utils';
import { Stars } from './bits';

function ReviewCard({ review, locale, className }: { review: Review; locale: Locale; className?: string }) {
  return (
    <li className={className}>
      <figure className="flex h-full flex-col rounded-plate bg-ink-soft p-5 lg:p-6">
        {/* Quotes stay in the reviewer's own words (English), so mark them as English on Spanish pages. */}
        <blockquote lang="en" className="text-[1.05rem] leading-relaxed text-white">
          “{review.quote}”
        </blockquote>
        <figcaption className="mt-auto pt-5 text-[0.92rem] leading-snug text-white/70">
          <span className="block font-semibold text-white">
            {review.name}, {review.city.replace(/, CA$/, '')}
          </span>
          <span className="block">
            {locale === 'es' ? review.jobEs : review.job},{' '}
            <time dateTime={review.date}>{formatReviewDate(review.date, locale)}</time>
          </span>
        </figcaption>
      </figure>
    </li>
  );
}

/**
 * Real Yelp reviews on the ink band. Phones see three plus a "show more" toggle;
 * wide screens see all of them.
 */
export function ReviewsSection({
  ids,
  locale = 'en',
  title = t(locale).reviewsTitle(business.yelp.reviewCount),
}: {
  ids: string[];
  locale?: Locale;
  title?: string;
}) {
  const copy = t(locale);
  const list = ids.map(reviewById);
  const first = list.slice(0, 3);
  const rest = list.slice(3);
  return (
    <section id={copy.reviewsAnchor} aria-labelledby="reviews-title" className="scroll-mt-20 bg-ink text-white">
      <div className="wrap py-14 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <h2 id="reviews-title" className="type-h2 text-white">
              {title}
            </h2>
            <div className="mt-5 flex items-center gap-4">
              <span className="font-display text-[3.5rem] font-bold leading-none text-cyan">{business.yelp.rating}</span>
              <span>
                <Stars className="text-2xl" />
                <span className="mt-1 block text-[0.95rem] text-white/75">{copy.averageFrom(business.yelp.reviewCount)}</span>
              </span>
            </div>
          </div>
          <a
            href={business.yelp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
          >
            {copy.readAllOnYelp}
            <span className="sr-only"> {copy.opensNewTab}</span>
          </a>
        </div>

        {copy.reviewsLanguageNote && <p className="mt-6 text-[0.95rem] text-white/75">{copy.reviewsLanguageNote}</p>}

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {first.map((r) => (
            <ReviewCard key={r.id} review={r} locale={locale} />
          ))}
          {rest.map((r) => (
            <ReviewCard key={r.id} review={r} locale={locale} className="hidden lg:block" />
          ))}
        </ul>

        {rest.length > 0 && (
          <details className="group mt-4 lg:hidden">
            <summary
              className={cn(
                'flex min-h-12 cursor-pointer items-center justify-center rounded-button border-2 border-white/80',
                'font-display text-[1.15rem] font-semibold text-white group-open:hidden',
              )}
            >
              {copy.showMore(rest.length)}
            </summary>
            <ul className="grid gap-4 md:grid-cols-2">
              {rest.map((r) => (
                <ReviewCard key={r.id} review={r} locale={locale} />
              ))}
            </ul>
          </details>
        )}
      </div>
    </section>
  );
}
