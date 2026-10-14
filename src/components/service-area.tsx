import { areas } from '@/content/areas';
import { telHref } from '@/content/business';
import { OpenStatus, PlacePlate } from './bits';
import { CtaGroup } from './cta';
import { TrackedLink } from './tracked-link';

export function ServiceArea({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const Heading = headingLevel;
  return (
    <section aria-labelledby="area-title" className="bg-white">
      <div className="wrap grid gap-10 py-14 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading id="area-title" className={headingLevel === 'h1' ? 'type-page' : 'type-h2'}>
            Where we work
          </Heading>
          <p className="type-lead measure mt-4">
            Based in Fruitvale, Oakland, and out on jobs all over the Bay Area, from Vallejo to San Jose.
          </p>
          {headingLevel === 'h1' && (
            <>
              <OpenStatus className="mt-5" />
              <CtaGroup placement="service-areas" className="mt-5" />
            </>
          )}
          <p className="mt-6">
            Don’t see your city?{' '}
            <TrackedLink href={telHref} event="call_click" placement="service-area" className="font-semibold text-blue underline underline-offset-4">
              Call and ask
            </TrackedLink>
            . If it’s in the Bay Area, chances are we cover it.
          </p>
        </div>
        <div className="grid gap-9">
          {areas.map((area) => (
            <div key={area.region}>
              <h3 className="type-h3">{area.region}</h3>
              {'note' in area && <p className="mt-1 text-[0.95rem] text-mute">{area.note}</p>}
              <ul className="mt-4 flex flex-wrap gap-2">
                {area.cities.map((city) => (
                  <li key={city}>
                    <PlacePlate>{city}</PlacePlate>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
