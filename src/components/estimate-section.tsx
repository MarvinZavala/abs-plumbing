import { business, smsHref } from '@/content/business';
import type { ServiceChoice, Urgency } from '@/lib/lead';
import { CallButton } from './cta';
import { EstimateForm } from './estimate-form';
import { TrackedLink } from './tracked-link';

export function EstimateSection({
  defaultService,
  defaultUrgency,
  heading = 'Get a free estimate',
}: {
  defaultService?: ServiceChoice;
  defaultUrgency?: Urgency;
  heading?: string;
}) {
  return (
    <section id="estimate" aria-labelledby="estimate-title" className="scroll-mt-20 bg-ink text-white">
      <div className="wrap grid gap-8 py-14 lg:grid-cols-[1fr_1.2fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-0 lg:py-20">
        <div>
          <h2 id="estimate-title" className="type-h2 text-white">
            {heading}
          </h2>
          <p className="type-lead measure mt-4 text-white/85">
            Tell us what’s going on and we’ll call you back. If something is flooding or backing up right now,
            calling is fastest.
          </p>
        </div>
        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <EstimateForm defaultService={defaultService} defaultUrgency={defaultUrgency} />
        </div>
        <div className="lg:col-start-1 lg:row-start-2">
          <p className="font-display text-[1.3rem] font-semibold text-white lg:hidden">Rather talk to someone?</p>
          <CallButton placement="estimate" className="mt-3 w-full sm:w-auto lg:mt-7" />
          {business.acceptsTexts && (
            <p className="mt-4 text-white/75">
              Or{' '}
              <TrackedLink href={smsHref} event="text_click" placement="estimate" className="font-semibold text-white underline underline-offset-4">
                text us a photo
              </TrackedLink>{' '}
              of the problem.
            </p>
          )}
          {business.offer.enabled && (
            <p className="mt-8 inline-block rounded-plate border border-white/25 px-4 py-3 text-[0.98rem] text-white/90">
              {business.offer.detail}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
