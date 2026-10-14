import { allCities } from '@/content/areas';
import { formatReviewDate, reviews, type Review } from '@/content/reviews';

/**
 * Real reviews grouped by the reviewer's city. This is what makes the service-area page genuinely local
 * (as opposed to thin "plumber in {city}" doorway pages, which Google treats as spam).
 */
export function CityReviews() {
  const byCity = new Map<string, Review[]>();
  for (const review of reviews) {
    const city = review.city.replace(/, CA$/, '');
    if (!allCities.includes(city)) continue;
    byCity.set(city, [...(byCity.get(city) ?? []), review]);
  }
  const groups = [...byCity.entries()].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

  return (
    <section aria-labelledby="city-reviews-title" className="bg-white">
      <div className="wrap py-14 lg:py-20">
        <h2 id="city-reviews-title" className="type-h2 measure">
          Recent jobs around the Bay, city by city
        </h2>
        <p className="type-lead measure mt-4">What customers in each city wrote about our crew on Yelp.</p>
        <div className="mt-10 grid gap-x-14 gap-y-10 md:grid-cols-2">
          {groups.map(([city, list]) => (
            <article key={city} aria-labelledby={`city-${city.replace(/\s+/g, '-').toLowerCase()}`}>
              <h3 id={`city-${city.replace(/\s+/g, '-').toLowerCase()}`} className="type-h3">
                {city}
              </h3>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {list.slice(0, 2).map((review) => (
                  <li key={review.id} className="py-4">
                    <p className="font-display text-[1.15rem] font-semibold leading-tight text-ink">{review.job}</p>
                    <blockquote className="mt-1.5 leading-relaxed">“{review.quote}”</blockquote>
                    <p className="mt-2 text-[0.9rem] text-mute">
                      {review.name}, <time dateTime={review.date}>{formatReviewDate(review.date)}</time>, on Yelp
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
