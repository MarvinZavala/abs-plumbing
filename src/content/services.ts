/**
 * Service pages double as Google Ads landing pages: each headline should match the ad group that points at it
 * (e.g. ads for "water heater replacement" land on /services/water-heaters).
 */
export type ServiceSlug =
  | 'emergency-plumbing'
  | 'drain-cleaning'
  | 'water-heaters'
  | 'sewer-lines'
  | 'leaks-water-lines'
  | 'fixtures';

export type Service = {
  slug: ServiceSlug;
  /** Short name for menus and lists. */
  name: string;
  /** One line for the services list. */
  summary: string;
  /** Landing page headline (message match with the ad). */
  headline: string;
  lead: string;
  /** Problems people search for; shown as a checklist on the landing page. */
  problems: string[];
  /** What the crew does about it. */
  includes: { title: string; body: string }[];
  /** Review ids (see reviews.ts) to feature, in order. */
  featuredReviews: string[];
  /** Photo ids (see work.ts), first one is the hero photo. */
  photos: string[];
  seo: { title: string; description: string };
};

export const services: Service[] = [
  {
    slug: 'emergency-plumbing',
    name: 'Emergency plumbing',
    summary: 'Burst pipes, sewage backups, overflowing toilets. Open 24 hours, 7 days.',
    headline: 'Plumbing emergency? We’re open right now.',
    lead:
      'Burst pipe, sewage coming up a drain, water where it shouldn’t be. Call any hour and our crew gets moving. Reviewers often mention us showing up within the hour.',
    problems: [
      'Burst or leaking pipe',
      'Sewage backing up into a tub, shower or floor drain',
      'Toilet overflowing and won’t stop',
      'Water heater leaking or no hot water',
      'Main line clog flooding the yard or driveway',
    ],
    includes: [
      {
        title: 'Someone heads your way',
        body: 'Day, night or weekend. Tell us what you’re seeing and we’ll tell you when the crew can be there.',
      },
      {
        title: 'Stop the damage first',
        body: 'We get the water under control, then find the cause instead of just treating the symptom.',
      },
      {
        title: 'A price before the work',
        body: 'You hear what’s wrong and what it costs before we start the repair.',
      },
    ],
    featuredReviews: ['mary-s', 'jeffrey-j', 'natalye-b', 'james-p'],
    photos: ['sewer-lateral-street-patch', 'commercial-kitchen-drain-line', 'water-line-trench-front-yard'],
    seo: {
      title: '24/7 Emergency Plumber in Oakland & Bay Area',
      description:
        'Burst pipe, sewer backup or no hot water? AB’s Plumbing is open 24 hours, 7 days. 4.9 stars from 677 Yelp reviews. Call (510) 753-8649.',
    },
  },
  {
    slug: 'drain-cleaning',
    name: 'Drain cleaning',
    summary: 'Sinks, tubs, toilets and main lines cleared. Camera inspection when it keeps coming back.',
    headline: 'Clogged drain? We clear it and show you what caused it.',
    lead:
      'Kitchen sinks, tubs, toilets, floor drains and main lines. We snake or hydro-jet the line, and when a clog keeps returning we put a camera down it so you can see the cause.',
    problems: [
      'Kitchen sink backed up with grease',
      'Slow tub or shower drain',
      'Toilet clogs that keep coming back',
      'Main line or cleanout overflowing',
      'Gurgling drains and sewer smell',
    ],
    includes: [
      { title: 'Snaking', body: 'Cable machines sized for the line, from bathroom sinks to 4-inch mains.' },
      { title: 'Hydro-jetting', body: 'High-pressure water to scour grease, scale and roots off the pipe walls.' },
      { title: 'Camera inspection', body: 'We show you on screen where the line is broken, sagging or full of roots.' },
    ],
    featuredReviews: ['claude-q', 'jeff-j', 'jeffrey-j', 'michelle-y'],
    photos: ['kitchen-sink-drain-disposal', 'commercial-kitchen-drain-line', 'apartment-complex-new-line'],
    seo: {
      title: 'Drain Cleaning & Hydro-Jetting in Oakland',
      description:
        'Clogged sink, tub, toilet or main line cleared fast, with camera inspection when it keeps coming back. Open 24/7. Call AB’s Plumbing at (510) 753-8649.',
    },
  },
  {
    slug: 'water-heaters',
    name: 'Water heaters',
    summary: 'Repair and replacement for gas tank and tankless water heaters, installed to code.',
    headline: 'No hot water? Water heater repair and replacement.',
    lead:
      'Gas tank heaters and tankless units, repaired or replaced and installed with the strapping, venting and fittings that bring them up to code.',
    problems: [
      'No hot water, or it runs out fast',
      'Water heater leaking from the bottom',
      'Pilot keeps going out',
      'Old tank you want to replace before it fails',
      'Switching to tankless',
    ],
    includes: [
      { title: 'Repair or replace, honestly', body: 'If a repair makes sense we say so. If the tank is done, we tell you that too.' },
      { title: 'Tank and tankless', body: 'Gas tank heaters and tankless units for homes, apartments and businesses.' },
      { title: 'Up to code', body: 'Seismic straps, venting, gas and water fittings done right the first time.' },
    ],
    featuredReviews: ['james-p', 'wesley-b', 'jacob-s'],
    photos: [
      'gas-water-heater-replacement',
      'tankless-water-heater-shingle-wall',
      'commercial-water-heaters-copper',
      'rheem-tankless-insulated-lines',
    ],
    seo: {
      title: 'Water Heater Repair & Replacement in Oakland',
      description:
        'No hot water? AB’s Plumbing repairs and replaces tank and tankless water heaters, installed to code. 4.9 stars on Yelp. Call (510) 753-8649.',
    },
  },
  {
    slug: 'sewer-lines',
    name: 'Sewer lines',
    summary: 'Roots, breaks and backups found on camera. Sewer lateral repair and replacement.',
    headline: 'Sewer backing up? We find the problem on camera and fix it.',
    lead:
      'Roots, cracks and sagging pipe. We camera-inspect the line, clear what can be cleared, and repair or replace the sewer lateral when it can’t.',
    problems: [
      'Sewage coming up in a tub or floor drain',
      'Tree roots in the sewer line',
      'Repeated main line clogs',
      'Standing water under the house',
      'Broken or collapsed sewer lateral',
    ],
    includes: [
      { title: 'Camera first', body: 'You see the inside of your line before anyone talks about digging.' },
      { title: 'Repair or replace', body: 'Spot repairs, new cleanouts, or a full lateral replacement to the street.' },
      { title: 'Clean finish', body: 'Trenches backfilled and the site cleaned up when we leave.' },
    ],
    featuredReviews: ['natalye-b', 'cheryl-r', 'anthony-r', 'jeff-j'],
    photos: [
      'sewer-line-foothill-blvd-oakland',
      'sewer-lateral-street-patch',
      'trench-apartment-building',
      'apartment-complex-new-line',
    ],
    seo: {
      title: 'Sewer Line Repair & Replacement in Oakland',
      description:
        'Sewer backup or roots in the line? We inspect with a camera and repair or replace your sewer lateral. Open 24/7. Call AB’s Plumbing at (510) 753-8649.',
    },
  },
  {
    slug: 'leaks-water-lines',
    name: 'Leaks & water lines',
    summary: 'Pipe leaks, water service lines, pressure regulators, filters and softeners.',
    headline: 'Leak or water pressure problem? We track it down and fix it.',
    lead:
      'Leaking pipes, failing water service lines, pressure that’s too high or too low, and old galvanized pipe that’s past its life.',
    problems: [
      'Pipe leaking under a sink or in a wall',
      'Water bill jumped for no reason',
      'Pressure too high (banging pipes) or too low',
      'Rusty, leaky outdoor faucets',
      'Old galvanized water line',
    ],
    includes: [
      { title: 'Find the source', body: 'We trace the leak to where it starts so the fix actually holds.' },
      { title: 'Water lines', body: 'New water service lines, repipes, and new lines to outdoor faucets.' },
      { title: 'Pressure and water quality', body: 'Pressure regulators, whole-house filters and water softeners.' },
    ],
    featuredReviews: ['seiji-n', 'ahmer-s', 'avi-j', 'connie-b'],
    photos: ['water-line-trench-front-yard', 'outdoor-faucet-water-line', 'whole-house-water-filter', 'water-softener-install'],
    seo: {
      title: 'Leak & Water Line Repair in Oakland, CA',
      description:
        'Pipe leaks, water line replacement and pressure regulators by AB’s Plumbing. 4.9 stars from 677 Yelp reviews. Call (510) 753-8649, open 24/7.',
    },
  },
  {
    slug: 'fixtures',
    name: 'Toilets, faucets & disposals',
    summary: 'Repairs and installs for toilets, faucets, sinks, showers and garbage disposals.',
    headline: 'Running toilet, dripping faucet, dead disposal? Fixed fast.',
    lead: 'Repairs and new installs for toilets, faucets, sinks, shower valves and garbage disposals.',
    problems: [
      'Toilet running, rocking or leaking at the base',
      'Faucet dripping or loose',
      'Garbage disposal humming or dead',
      'Shower valve stuck or leaking',
      'New sink or faucet to install',
    ],
    includes: [
      { title: 'Repair what can be repaired', body: 'Flappers, fill valves, cartridges and seals before anything gets replaced.' },
      { title: 'Installs', body: 'Toilets, faucets, sinks and disposals installed and tested for leaks.' },
      { title: 'Shoe covers on', body: 'We treat your kitchen and bathroom like our own and clean up after.' },
    ],
    featuredReviews: ['robert-w', 'jackie-r', 'cola-c', 'sam-i'],
    photos: ['kitchen-sink-faucet-install', 'toilet-install', 'kitchen-sink-drain-disposal'],
    seo: {
      title: 'Toilet, Faucet & Disposal Repair in Oakland',
      description:
        'Running toilet, leaky faucet or broken disposal? AB’s Plumbing repairs and installs fixtures, often same day. Call (510) 753-8649, open 24/7.',
    },
  },
];

/** Other work the crew handles (from the services verified on Yelp), without dedicated pages. */
export const moreServices = [
  'Gas lines and earthquake shut-off valves',
  'Sump pumps',
  'Backflow preventers',
  'Hot water recirculation pumps',
  'Plumbing inspections',
  'New plumbing for remodels',
  'Bathtubs and showers',
];

export function serviceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
