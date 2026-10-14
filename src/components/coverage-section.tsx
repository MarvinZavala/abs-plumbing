import Link from 'next/link';
import { telHref } from '@/content/business';
import { CoverageMap } from './coverage-map';
import { TrackedLink } from './tracked-link';

/** Home page coverage: one clear statement plus the map, instead of a wall of city names. */
export function CoverageSection() {
  return (
    <section aria-labelledby="coverage-title" className="bg-white">
      <div className="wrap grid items-center gap-10 py-14 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-20">
        <div>
          <h2 id="coverage-title" className="type-h2">
            Serving all of the San Francisco Bay Area
          </h2>
          <p className="type-lead measure mt-5">
            Our crew is based in Fruitvale, Oakland, right in the middle of the Bay. From here we cover San Francisco
            and the Peninsula, the East Bay, the South Bay and north to Vallejo.
          </p>
          <p className="mt-7 flex flex-wrap items-baseline gap-x-6 gap-y-3">
            <Link href="/service-areas" className="font-semibold text-blue underline underline-offset-4">
              See every city we serve
            </Link>
            <span className="text-slate">
              Not sure about your address?{' '}
              <TrackedLink href={telHref} event="call_click" placement="coverage" className="font-semibold text-blue underline underline-offset-4">
                Call and ask
              </TrackedLink>
            </span>
          </p>
        </div>
        <CoverageMap className="w-full max-w-[560px] justify-self-center lg:max-w-[520px] lg:justify-self-end" />
      </div>
    </section>
  );
}
