import { areas } from '@/content/areas';
import { PlacePlate } from './bits';
import { CoverageMap } from './coverage-map';

/**
 * The full list of cities, grouped by region, next to the coverage map.
 * Lives on /service-areas (useful for search engines and AI assistants); the home page only shows the map.
 */
export function CityDirectory() {
  return (
    <section id="cities" aria-labelledby="cities-title" className="scroll-mt-20 bg-concrete">
      <div className="wrap grid gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="cities-title" className="type-h2">
            Every city we serve
          </h2>
          <p className="type-lead measure mt-4">
            These are the cities our crew works in most. If yours is in the Bay Area and isn’t listed, call and ask.
          </p>
          <CoverageMap titleId="cities-map" className="mt-8 w-full max-w-[520px]" />
        </div>
        <div className="grid content-start gap-9">
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
