import Link from 'next/link';
import { telHref } from '@/content/business';
import { t, type Locale } from '@/content/i18n';
import { CoverageMap } from './coverage-map';
import { TrackedLink } from './tracked-link';

/** Home page coverage: one clear statement plus the map, instead of a wall of city names. */
export function CoverageSection({ locale = 'en', id }: { locale?: Locale; id?: string }) {
  const copy = t(locale);
  return (
    <section id={id} aria-labelledby="coverage-title" className="scroll-mt-20 bg-white">
      <div className="wrap grid items-center gap-10 py-14 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-20">
        <div>
          <h2 id="coverage-title" className="type-h2">
            {copy.coverageTitle}
          </h2>
          <p className="type-lead measure mt-5">{copy.coverageLead}</p>
          <p className="mt-7 flex flex-wrap items-baseline gap-x-6 gap-y-3">
            <Link
              href="/service-areas"
              hrefLang={locale === 'es' ? 'en' : undefined}
              className="font-semibold text-blue underline underline-offset-4"
            >
              {copy.coverageAllCities}
            </Link>
            <span className="text-slate">
              {copy.coverageNotSure}{' '}
              <TrackedLink href={telHref} event="call_click" placement="coverage" className="font-semibold text-blue underline underline-offset-4">
                {copy.coverageCallAndAsk}
              </TrackedLink>
            </span>
          </p>
        </div>
        <CoverageMap
          locale={locale}
          className="w-full max-w-[560px] justify-self-center lg:max-w-[520px] lg:justify-self-end"
        />
      </div>
    </section>
  );
}
