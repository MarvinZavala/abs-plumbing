import { business } from '@/content/business';
import { formatReviewDate, reviewById, type Review } from '@/content/reviews';
import { cn } from '@/lib/utils';
import { Stars } from './bits';

function ReviewCard({ review, className }: { review: Review; className?: string }) {
  return (
    <li className={className}>
      <figure className="flex h-full flex-col rounded-plate bg-ink-soft p-5 lg:p-6">
        <blockquote className="text-[1.05rem] leading-relaxed text-white">“{review.quote}”</blockquote>
        <figcaption className="mt-auto pt-5 text-[0.92rem] leading-snug text-white/70">
          <span className="block font-semibold text-white">
            {review.name}, {review.city.replace(/, CA$/, '')}
          </span>
          <span className="block">
            {review.job}, <time dateTime={review.date}>{formatReviewDate(review.date)}</time>
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
  title = `${business.yelp.reviewCount} reviews. Here are a few.`,
}: {
  ids: string[];
  title?: string;
}) {
  const list = ids.map(reviewById);
  const first = list.slice(0, 3);
  const rest = list.slice(3);
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="scroll-mt-20 bg-ink text-white">
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
                <span className="mt-1 block text-[0.95rem] text-white/75">
                  average from {business.yelp.reviewCount} reviews on Yelp
                </span>
              </span>
            </div>
          </div>
          <a
            href={business.yelp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
          >
            Read them all on Yelp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {first.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
          {rest.map((r) => (
            <ReviewCard key={r.id} review={r} className="hidden lg:block" />
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
              Show {rest.length} more reviews
            </summary>
            <ul className="grid gap-4 md:grid-cols-2">
              {rest.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </ul>
          </details>
        )}
      </div>
    </section>
  );
}
