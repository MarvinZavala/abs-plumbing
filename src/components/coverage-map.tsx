import { bayMap, type MapAnchor } from '@/content/bay-map';
import { t, type Locale } from '@/content/i18n';
import { cn } from '@/lib/utils';
import { PlacePlate } from './bits';

const RINGS_MILES = [10, 25, 40];
type Size = keyof typeof bayMap.labelSizes;
type Tier = keyof typeof bayMap.dotRadius;

/** Where a name sits next to its dot. Mirrors labelBox() in scripts/bay-map/build-map.mjs, which checked it fits. */
function anchorTransform(anchor: MapAnchor, size: Size, tier: Tier) {
  const s = bayMap.labelSizes[size];
  const off = s.offset + (bayMap.dotRadius[tier] * s.width) / bayMap.width;
  const d = off * 0.75;
  switch (anchor) {
    case 'right':
      return `translate(${off}px, -50%)`;
    case 'left':
      return `translate(calc(-100% - ${off}px), -50%)`;
    case 'above':
      return `translate(-50%, calc(-100% - ${off}px))`;
    case 'below':
      return `translate(-50%, ${off}px)`;
    case 'upper-right':
      return `translate(${d}px, calc(-100% - ${d}px))`;
    case 'lower-right':
      return `translate(${d}px, ${d}px)`;
    case 'upper-left':
      return `translate(calc(-100% - ${d}px), calc(-100% - ${d}px))`;
    case 'lower-left':
      return `translate(calc(-100% - ${d}px), ${d}px)`;
  }
}

const visibility: Record<Size, string> = { mobile: 'sm:hidden', desktop: 'hidden sm:block' };

/**
 * Illustrative map of the Bay Area: real coastline, a dot for every city we serve, the Oakland home base and
 * distance rings. Names are HTML laid over the SVG, at positions precomputed so they never overlap
 * (one set for phones, one for wider screens).
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
  const { viewBox, width, height, land, base, cities, places, milesToUnits, dotRadius, labelSizes } = bayMap;
  const outer = RINGS_MILES[RINGS_MILES.length - 1] * milesToUnits;
  const sizes = Object.keys(labelSizes) as Size[];
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
              r={dotRadius[c.tier]}
              stroke="#ffffff"
              strokeWidth={1.5}
              className={cn(
                // Named cities in ink; the rest, still served, in a quieter grey.
                c.mobile ? 'fill-ink' : 'fill-mute',
                c.desktop ? 'sm:fill-ink' : 'sm:fill-mute',
                !c.dotMobile && 'max-sm:hidden',
                !c.dotDesktop && 'sm:hidden',
              )}
            />
          ))}
          <circle cx={base.cx} cy={base.cy} r={dotRadius.base} className="fill-action stroke-ink" strokeWidth={3} />
          <circle cx={base.cx} cy={base.cy} r={3.5} fill="#ffffff" />
        </svg>

        <div aria-hidden="true">
          {places.map((p) =>
            sizes.map(
              (size) =>
                p[size] && (
                  <span
                    key={`${p.id}-${size}`}
                    style={{
                      left: `${p.x}%`,
                      top: `${p.y}%`,
                      fontSize: `${labelSizes[size].place}px`,
                      letterSpacing: p.kind === 'region' ? `${bayMap.regionTracking}em` : undefined,
                      transform: p.align === 'center' ? 'translate(-50%, -50%)' : 'translateY(-50%)',
                    }}
                    className={cn(
                      'absolute font-display leading-[1.1] whitespace-nowrap',
                      p.align === 'center' && 'text-center',
                      p.kind === 'water' ? 'map-water font-medium text-water' : 'map-label font-semibold text-mute',
                      visibility[size],
                    )}
                  >
                    {copy.mapPlaces[p.id].map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                ),
            ),
          )}

          {cities.map((c) =>
            sizes.map((size) => {
              const anchor = c[size];
              if (!anchor) return null;
              return (
                <span
                  key={`${c.name}-${size}`}
                  style={{
                    left: `${c.x}%`,
                    top: `${c.y}%`,
                    fontSize: `${labelSizes[size][c.tier]}px`,
                    transform: anchorTransform(anchor, size, c.tier),
                  }}
                  className={cn(
                    'map-label absolute font-display leading-none whitespace-nowrap text-ink',
                    c.tier === 'major' ? 'font-semibold' : 'font-medium',
                    visibility[size],
                  )}
                >
                  {c.name}
                </span>
              );
            }),
          )}

          <span
            style={{ left: `${base.x}%`, top: `${base.y}%` }}
            className="base-pulse absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
          />
          {/* Phones: just the city. Wider screens: "Home base: Oakland". Sizes match build-map.mjs. */}
          <span
            style={{ left: `${base.x}%`, top: `${base.y}%` }}
            className="absolute -translate-x-1/2 translate-y-[14px] sm:hidden"
          >
            <PlacePlate className="text-[12px] whitespace-nowrap">{base.name}</PlacePlate>
          </span>
          <span
            style={{ left: `${base.x}%`, top: `${base.y}%` }}
            className="absolute hidden -translate-x-1/2 translate-y-[18px] sm:block"
          >
            <PlacePlate className="text-[14px] whitespace-nowrap">{copy.mapBase}</PlacePlate>
          </span>
        </div>
      </div>
      <figcaption className="mt-2 text-[0.85rem] leading-snug text-mute">{copy.mapCaption}</figcaption>
    </figure>
  );
}
