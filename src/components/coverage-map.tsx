import { bayMap } from '@/content/bay-map';
import { t, type Locale } from '@/content/i18n';
import { cn } from '@/lib/utils';
import { PlacePlate } from './bits';

const RINGS_MILES = [10, 25, 40];

/**
 * Illustrative map of the Bay Area: real coastline, the Oakland home base and distance rings.
 * City names are HTML laid over the SVG so they stay readable at any size.
 */
export function CoverageMap({
  className,
  titleId = 'coverage-map',
  locale = 'en',
}: {
  className?: string;
  titleId?: string;
  locale?: Locale;
}) {
  const copy = t(locale);
  const { viewBox, width, height, land, base, cities, milesToUnits } = bayMap;
  const outer = RINGS_MILES[RINGS_MILES.length - 1] * milesToUnits;
  return (
    <figure className={className}>
      <div className="relative overflow-hidden rounded-[6px] border border-line bg-bay">
        <svg
          viewBox={viewBox}
          className="block h-auto w-full"
          role="img"
          aria-labelledby={`${titleId}-title ${titleId}-desc`}
        >
          <title id={`${titleId}-title`}>{copy.mapTitle}</title>
          <desc id={`${titleId}-desc`}>{copy.mapDesc}</desc>
          <defs>
            <clipPath id={`${titleId}-land`}>
              <path d={land} />
            </clipPath>
          </defs>
          {/* Land outside the outer ring is dimmed; land inside it is lit up: that is the covered area. */}
          <path d={land} className="fill-concrete" />
          <circle cx={base.cx} cy={base.cy} r={outer} fill="#ffffff" clipPath={`url(#${titleId}-land)`} />
          <path d={land} fill="none" stroke="#a9bccd" strokeWidth={1.2} strokeLinejoin="round" />
          {RINGS_MILES.map((miles) => (
            <circle
              key={miles}
              cx={base.cx}
              cy={base.cy}
              r={miles * milesToUnits}
              fill="none"
              className="stroke-action"
              strokeOpacity={0.6}
              strokeWidth={1.6}
              strokeDasharray="6 7"
            />
          ))}
          {cities.map((c) => (
            <circle
              key={c.name}
              cx={(c.x / 100) * width}
              cy={(c.y / 100) * height}
              r={5}
              className={cn('fill-ink', !c.mobile && 'hidden sm:block')}
              stroke="#ffffff"
              strokeWidth={1.5}
            />
          ))}
          <circle cx={base.cx} cy={base.cy} r={11} className="fill-action stroke-ink" strokeWidth={3} />
          <circle cx={base.cx} cy={base.cy} r={3.5} fill="#ffffff" />
        </svg>

        <div aria-hidden="true">
          {cities.map((c) => (
            <span
              key={c.name}
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
              className={cn(
                'map-label absolute -translate-y-1/2 font-display text-[0.8rem] font-semibold whitespace-nowrap text-ink sm:text-[0.95rem]',
                c.align === 'left' && '-translate-x-full pr-2',
                c.align === 'right' && 'pl-2',
                c.align === 'above' && '-translate-x-1/2 -translate-y-[150%]',
                !c.mobile && 'hidden sm:block',
              )}
            >
              {c.name}
            </span>
          ))}
          <span
            style={{ left: `${base.x}%`, top: `${base.y}%` }}
            className="base-pulse absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
          />
          <span
            style={{ left: `${base.x}%`, top: `${base.y}%` }}
            className="absolute -translate-x-1/2 translate-y-5"
          >
            <PlacePlate className="text-[0.85rem] whitespace-nowrap sm:text-[1rem]">{copy.mapBase}</PlacePlate>
          </span>
        </div>
      </div>
      <figcaption className="mt-2 text-[0.85rem] leading-snug text-mute">
        {copy.mapCaption}
      </figcaption>
    </figure>
  );
}
