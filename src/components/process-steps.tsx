import { stepsEs } from '@/content/es';
import { t, type Locale } from '@/content/i18n';
import { steps } from '@/content/process';
import { reviewById } from '@/content/reviews';

/**
 * How a job goes. In English each step is backed by a reviewer's own words; the Spanish version leaves the
 * quotes out rather than mixing English sentences into Spanish steps (the reviews section has them).
 */
export function ProcessSteps({ locale = 'en', id }: { locale?: Locale; id?: string }) {
  const copy = t(locale);
  const list = locale === 'es' ? stepsEs.map((step) => ({ ...step, proof: undefined })) : steps;
  return (
    <section id={id} aria-labelledby="process-title" className="scroll-mt-20 bg-concrete">
      <div className="wrap py-14 lg:py-20">
        <h2 id="process-title" className="type-h2 measure">
          {copy.processTitle}
        </h2>
        <p className="type-lead measure mt-4">{copy.processLead}</p>
        <ol className="mt-10 grid gap-0 lg:grid-cols-4 lg:gap-8">
          {list.map((step, i) => {
            const reviewer = step.proof && reviewById(step.proof.reviewId);
            return (
              <li
                key={step.title}
                className="relative grid grid-cols-[3rem_1fr] gap-x-4 pb-10 last:pb-0 lg:block lg:border-t-4 lg:border-ink lg:pt-5 lg:pb-0"
              >
                {/* vertical rail on mobile connects the steps */}
                <span
                  className="absolute top-12 bottom-2 left-6 w-0.5 -translate-x-1/2 bg-line lg:hidden"
                  aria-hidden="true"
                />
                <span className="relative flex size-12 items-center justify-center rounded-full bg-ink font-display text-2xl font-bold text-white lg:size-auto lg:justify-start lg:rounded-none lg:bg-transparent lg:text-[2.75rem] lg:leading-none lg:text-ink">
                  {i + 1}
                </span>
                <div className="lg:mt-3">
                  <h3 className="type-h3 pt-2.5 lg:pt-0">{step.title}</h3>
                  <p className="mt-2">{step.body}</p>
                  {step.proof && reviewer && (
                    <figure className="mt-4 border-l-[3px] border-action pl-4">
                      <blockquote className="text-[0.98rem] leading-relaxed text-ink">“{step.proof.quote}”</blockquote>
                      <figcaption className="mt-1.5 text-[0.88rem] text-mute">
                        {reviewer.name}, {reviewer.city.replace(/, CA$/, '')}, on Yelp
                      </figcaption>
                    </figure>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
