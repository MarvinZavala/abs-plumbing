import { steps } from '@/content/process';
import { reviewById } from '@/content/reviews';

export function ProcessSteps() {
  return (
    <section aria-labelledby="process-title" className="bg-concrete">
      <div className="wrap py-14 lg:py-20">
        <h2 id="process-title" className="type-h2 measure">
          How a job goes
        </h2>
        <p className="type-lead measure mt-4">Four steps, each one backed by a customer’s own words.</p>
        <ol className="mt-10 grid gap-0 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => {
            const reviewer = reviewById(step.proof.reviewId);
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
                  <figure className="mt-4 border-l-[3px] border-action pl-4">
                    <blockquote className="text-[0.98rem] leading-relaxed text-ink">“{step.proof.quote}”</blockquote>
                    <figcaption className="mt-1.5 text-[0.88rem] text-mute">
                      {reviewer.name}, {reviewer.city.replace(/, CA$/, '')}, on Yelp
                    </figcaption>
                  </figure>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
