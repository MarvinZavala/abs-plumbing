import { business } from '@/content/business';

const facts: [string, string][] = [
  ['Based in', `${business.base.neighborhood}, ${business.base.city}`],
  ['Hours', business.hours],
  ['License', business.license ? `CA #${business.license}, insured` : 'Licensed and insured in California'],
  ['Estimates', 'Free, with the price before any work starts'],
  ['Payment', 'Cash, credit cards and Zelle'],
  ...(business.aslProficient ? ([['Accessibility', 'ASL proficient']] as [string, string][]) : []),
  ['On Yelp', `${business.yelp.rating} stars from ${business.yelp.reviewCount} reviews`],
];

/** The team, not a single person, is the brand. */
export function CrewSection() {
  return (
    <section aria-labelledby="crew-title" className="bg-concrete">
      <div className="wrap grid gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <h2 id="crew-title" className="type-h2">
            A local crew, not a call center.
          </h2>
          <p className="type-lead measure mt-5">
            AB’s Plumbing is a family-owned plumbing company from Fruitvale, Oakland. Our crew works on houses,
            apartment buildings and restaurants all over the Bay Area, and we’re on call around the clock.
          </p>
          <figure className="mt-8 border-l-4 border-action pl-5">
            <blockquote className="font-display text-[1.65rem] font-semibold leading-tight text-ink">
              “Ab, Issac and Omar were very knowledgeable and helpful. They are considerate about pricing.”
            </blockquote>
            <figcaption className="mt-2 text-mute">Jeffrey J., Oakland, on Yelp</figcaption>
          </figure>
        </div>
        <dl className="self-start divide-y divide-line border-y border-line">
          {facts.map(([term, detail]) => (
            <div key={term} className="grid grid-cols-[7.5rem_1fr] gap-4 py-3.5 sm:grid-cols-[9rem_1fr]">
              <dt className="font-semibold text-ink">{term}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
