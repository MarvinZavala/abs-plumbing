import { reviewById } from '@/content/reviews';

const LOG = ['jeffrey-j', 'jeff-j', 'cheryl-r', 'jackie-r', 'mary-s', 'james-p'];

function shortDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
}

/** A dispatch-board style list of recent jobs, built only from real reviews. */
export function WorkLog() {
  const entries = LOG.map(reviewById);
  return (
    <section aria-labelledby="worklog-title" className="border-y border-line bg-concrete">
      <div className="wrap grid gap-6 py-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-14">
        <div>
          <h2 id="worklog-title" className="type-h3 lg:text-[1.9rem]">
            Recent jobs our customers reviewed
          </h2>
          <p className="mt-2 text-[0.92rem] text-mute">Jobs summarized from reviews posted on Yelp in 2026.</p>
          <a href="#reviews" className="mt-3 inline-block font-medium text-blue underline underline-offset-4">
            Read what they said
          </a>
        </div>
        <ol className="divide-y divide-line border-y border-line">
          {entries.map((r) => (
            <li
              key={r.id}
              className="grid grid-cols-[4.25rem_1fr] gap-x-3 py-3 md:grid-cols-[5.5rem_1fr_auto] md:items-baseline md:gap-x-6"
            >
              <time dateTime={r.date} className="font-display text-[1.1rem] font-semibold text-mute">
                {shortDate(r.date)}
              </time>
              <p className="font-display text-[1.3rem] font-semibold leading-tight text-ink">{r.job}</p>
              <p className="col-start-2 text-[0.95rem] text-mute md:col-start-auto md:text-right">
                {r.name}, {r.city.replace(/, CA$/, '')}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
