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
  | 'fixtures'
  | 'hydro-jetting'
  | 'plumbing-inspections'
  | 'sump-pumps'
  | 'backflow-preventers'
  | 'tankless-water-heaters'
  | 'recirculation-pumps'
  | 'gas-lines'
  | 'remodel-plumbing'
  | 'toilets'
  | 'faucets-sinks'
  | 'garbage-disposals'
  | 'showers-bathtubs'
  | 'repiping'
  | 'sewer-line-replacement';

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
  /** Questions about this service, shown before the general FAQ. */
  faqs?: { q: string; a: string }[];
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
    photos: [
      'sewer-lateral-street-patch',
      'burst-pipe-before',
      'burst-pipe-repaired',
      'crew-at-work',
      'commercial-kitchen-drain-line',
      'water-line-trench-front-yard',
    ],
    seo: {
      title: '24/7 Emergency Plumber in Oakland & Bay Area',
      description:
        'Burst pipe, sewer backup or no hot water? AB’s Plumbing is open 24 hours, 7 days. 4.9 stars from 676 Yelp reviews. Call (510) 753-8649.',
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
    photos: [
      'kitchen-sink-drain-disposal',
      'drain-machine-outdoor-cleanout',
      'sewer-camera-view',
      'toilet-clog-auger',
      'roots-sewer-cleanout',
      'commercial-kitchen-drain-line',
      'apartment-complex-new-line',
    ],
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
      'two-tankless-water-heaters',
      'navien-tankless-water-heater',
      'rheem-50-gallon-water-heater',
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
      'sewer-line-replacement-abs',
      'roots-sewer-cleanout',
      'sewer-camera-setup',
      'new-sdr-sewer-pipe-trench',
      'sewer-lateral-street-patch',
      'trench-apartment-building',
      'apartment-complex-new-line',
    ],
    seo: {
      title: 'Sewer Line Repair in Oakland & the Bay Area',
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
    photos: [
      'water-line-trench-front-yard',
      'burst-pipe-before',
      'burst-pipe-repaired',
      'pressure-regulator-irrigation-line',
      'copper-laundry-water-lines',
      'outdoor-faucet-water-line',
      'whole-house-water-filter',
      'water-softener-install',
    ],
    seo: {
      title: 'Leak & Water Line Repair in Oakland, CA',
      description:
        'Pipe leaks, water line replacement and pressure regulators by AB’s Plumbing. 4.9 stars from 676 Yelp reviews. Call (510) 753-8649, open 24/7.',
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
    photos: [
      'kitchen-sink-faucet-install',
      'kitchen-faucet-stainless-sink',
      'moen-shower-valve',
      'bathtub-shower-remodel',
      'new-toilet-install',
      'garbage-disposal-replacement',
      'toilet-install',
      'kitchen-sink-drain-disposal',
    ],
    seo: {
      title: 'Toilet, Faucet & Disposal Repair in Oakland',
      description:
        'Running toilet, leaky faucet or broken disposal? AB’s Plumbing repairs and installs fixtures. Call (510) 753-8649, open 24/7.',
    },
  },
  {
    slug: 'hydro-jetting',
    name: 'Hydro-jetting',
    summary: 'High-pressure water that scours grease, scale and roots out of drain and sewer lines.',
    headline: 'Same clog every few months? Hydro-jetting cleans the whole pipe.',
    lead: 'A snake cuts a path through a clog. Hydro-jetting uses high-pressure water to scour grease, scale and roots off the pipe walls. When it helps, we run a camera first so you see what’s in the line and know jetting is the right fix.',
    problems: [
      'Kitchen line that keeps clogging with grease',
      'Main line backing up again after it was snaked',
      'Tree roots growing back into the sewer line',
      'Slow drains all over the house',
      'Restaurant or apartment building lines full of buildup',
    ],
    includes: [
      {
        title: 'Look first',
        body: 'When it helps, we run a camera down the line so you see the grease, scale or roots before we jet.',
      },
      {
        title: 'Clean wall to wall',
        body: 'High-pressure water scours buildup off the pipe walls instead of just punching a hole through it.',
      },
      {
        title: 'A price before the work',
        body: 'You hear what we found and what it costs before we start. Estimates are free.',
      },
    ],
    seo: {
      title: 'Hydro-Jetting & Sewer Cleaning in Oakland',
      description: 'Grease, scale or roots keep clogging your line? AB’s Plumbing hydro-jets drain and sewer lines, with a camera when needed. Open 24/7. Call (510) 753-8649.',
    },
    faqs: [
      {
        q: 'What’s the difference between snaking and hydro-jetting?',
        a: 'A snake (cable machine) cuts a path through the clog. Hydro-jetting uses high-pressure water to scour grease, scale and roots off the pipe walls, so the whole pipe gets cleaned, not just the spot that was blocked.',
      },
      {
        q: 'Do I need a camera inspection first?',
        a: 'Not always. When a line keeps clogging, or we suspect roots or a break, we run a camera first so you see what’s inside and we can tell you whether jetting is the right fix.',
      },
      {
        q: 'What if the pipe is broken?',
        a: 'Jetting cleans a pipe; it doesn’t fix a cracked or collapsed one. If the camera shows a break, we explain your repair options and the price before any work starts.',
      },
    ],
    featuredReviews: [],
    photos: ['sewer-camera-view', 'sewer-camera-setup', 'roots-sewer-cleanout'],
  },
  {
    slug: 'plumbing-inspections',
    name: 'Plumbing inspections',
    summary: 'Camera inspections of drain and sewer lines, so you see the problem before any repair.',
    headline: 'Not sure what’s wrong down there? We’ll show you on camera.',
    lead: 'We run an inspection camera through your drain or sewer line and show you on screen where it’s blocked, broken, sagging or full of roots. You see what’s going on before anyone talks about a repair or digging.',
    problems: [
      'Drain that keeps clogging no matter what',
      'Sewer smell with no clear cause',
      'Tree roots suspected in the sewer line',
      'Sewage backing up into a tub or floor drain',
    ],
    includes: [
      {
        title: 'Camera down the line',
        body: 'We feed an inspection camera through the drain or cleanout and follow the line.',
      },
      { title: 'You watch with us', body: 'We show you on screen what we find: roots, breaks, sags or buildup.' },
      {
        title: 'Straight answers',
        body: 'If the line just needs cleaning, we say so. If it needs repair, you get the options and the price before work starts.',
      },
    ],
    seo: {
      title: 'Sewer Camera Inspection in Oakland, CA',
      description: 'Clogs that keep coming back or a sewer smell? AB’s Plumbing runs a camera through your line and shows you the cause on screen. Call (510) 753-8649.',
    },
    faqs: [
      {
        q: 'Can I watch the camera inspection?',
        a: 'Yes. We show you on screen what the camera finds, so you see the roots, break or buildup for yourself.',
      },
      {
        q: 'When does a camera inspection make sense?',
        a: 'When a clog keeps coming back, when you smell sewer and can’t find why, when roots are suspected, or before you decide on a sewer repair.',
      },
      {
        q: 'What happens if the camera finds a problem?',
        a: 'We explain what we found and your options, from cleaning the line to repairing or replacing it, and give you a price before any work starts.',
      },
    ],
    featuredReviews: ['natalye-b', 'jeff-j'],
    photos: ['sewer-camera-setup', 'sewer-camera-view'],
  },
  {
    slug: 'sump-pumps',
    name: 'Sump pumps',
    summary: 'Sump pumps for water under the house, and sewage pump boxes for low drains.',
    headline: 'Water under the house? We put in a sump pump to get it out.',
    lead: 'Standing water under the house, a wet crawl space or basement, a pump that quit. We install sump pumps and sewage pump boxes, dug in where the water collects and piped to carry it away.',
    problems: [
      'Standing water under the house',
      'Wet crawl space or basement after rain',
      'Old sump pump that stopped running',
      'Bathroom or laundry that sits below the sewer line',
      'Sewage pump box that needs replacing',
    ],
    includes: [
      {
        title: 'Pump and basin',
        body: 'A new pump set in its basin where the water collects, even if that means digging through concrete.',
      },
      { title: 'Discharge piping', body: 'New discharge piping so the water goes where it should.' },
      {
        title: 'A price before the work',
        body: 'You hear what’s needed and what it costs before we start. Estimates are free.',
      },
    ],
    seo: {
      title: 'Sump Pump Installation in Oakland, CA',
      description: 'Standing water under the house? AB’s Plumbing installs new sump pumps and sewage pump boxes. 4.9 stars on Yelp. Open 24/7. Call (510) 753-8649.',
    },
    faqs: [
      {
        q: 'What’s the difference between a sump pump and a sewage pump?',
        a: 'A sump pump moves groundwater or rainwater out from under the house or a basement. A sewage pump lifts wastewater from drains that sit lower than the sewer line up into it.',
      },
      {
        q: 'Can you put in a sump pump where there’s concrete?',
        a: 'Yes. We can dig down through concrete to set the basin and pump where the water collects.',
      },
      {
        q: 'My sump pump stopped working. Can you come now?',
        a: 'We’re open 24 hours, 7 days. Tell us what you’re seeing and we’ll tell you when the crew can be there.',
      },
    ],
    featuredReviews: ['cheryl-r'],
    photos: ['sump-pump-basin', 'sewer-pump-box'],
  },
  {
    slug: 'backflow-preventers',
    name: 'Backflow preventers',
    summary: 'Backflow preventers installed to keep irrigation water out of your drinking water.',
    headline: 'Need a backflow preventer? We install and replace them.',
    lead: 'A backflow preventer lets water flow one way only, so water from sprinklers, irrigation and other equipment can’t flow back into the water you drink. We install new ones and replace old ones that leak.',
    problems: [
      'New sprinkler or irrigation line that needs a backflow preventer',
      'Backflow preventer leaking or dripping',
      'Cracked or damaged backflow device',
      'Remodel or new water line that calls for backflow protection',
      'Not sure whether your water line has one',
    ],
    includes: [
      { title: 'New installs', body: 'Backflow preventers on irrigation, sprinkler and other water lines.' },
      { title: 'Replacements', body: 'The leaking or damaged device comes out and a new one goes in.' },
      {
        title: 'A price before the work',
        body: 'You hear what’s needed and what it costs before we start. Estimates are free.',
      },
    ],
    seo: {
      title: 'Backflow Preventer Installation in Oakland',
      description: 'Need a backflow preventer installed or replaced? AB’s Plumbing installs them on irrigation and other water lines. Open 24/7. Call (510) 753-8649.',
    },
    faqs: [
      {
        q: 'What does a backflow preventer do?',
        a: 'It lets water flow one way only, so water from sprinklers, irrigation or other equipment can’t be pulled back into your drinking water.',
      },
      {
        q: 'Can you replace a leaking backflow preventer?',
        a: 'Yes. We take out the old device and install a new one, and give you the price before we start.',
      },
      {
        q: 'Will I know the price before you start?',
        a: 'Yes. We look at the line, explain what it needs and give you a price before any work starts. Estimates are free.',
      },
    ],
    featuredReviews: [],
    photos: ['backflow-valve-new', 'backflow-valve-old'],
  },
  {
    slug: 'tankless-water-heaters',
    name: 'Tankless water heaters',
    summary: 'Tankless water heaters installed, replaced and repaired, indoors or outdoors.',
    headline: 'Ready for tankless? Tankless water heater installation and repair.',
    lead: 'Switching from a tank, replacing an old tankless unit, or adding a second one. We mount the heater on a garage or outside wall and hook up the venting, gas and water lines.',
    problems: [
      'Hot water runs out with your tank heater',
      'Switching from a tank to tankless',
      'Tankless unit not firing or showing an error',
      'Hot water going cold in the middle of a shower',
      'You want the heater off the floor, on a wall inside or outside',
    ],
    includes: [
      {
        title: 'Indoor or outdoor',
        body: 'On a garage wall or an outside wall, with the venting, gas and water connections it needs.',
      },
      {
        title: 'One unit or two',
        body: 'A single tankless unit, or two side by side when you need more hot water at the same time.',
      },
      {
        title: 'Repair or replace, honestly',
        body: 'If your tankless can be repaired we say so. If it’s time for a new one, you hear the price before we start.',
      },
    ],
    seo: {
      title: 'Tankless Water Heater Install in Oakland',
      description: 'Tankless water heaters installed, replaced and repaired, indoors or outdoors. Free estimates, open 24/7. Call AB’s Plumbing at (510) 753-8649.',
    },
    faqs: [
      {
        q: 'Can you switch my tank water heater to tankless?',
        a: 'Yes. We take out the old tank and install the tankless unit with the venting, gas and water connections it needs. We look at your setup first and give you the price before any work starts.',
      },
      {
        q: 'Which tankless brands do you install?',
        a: 'Our recent installs include Navien and Rheem tankless units. Call us and we’ll talk through what fits your home.',
      },
      {
        q: 'Do you repair tankless water heaters too?',
        a: 'Yes. Call or text us what the unit is doing (a photo of any error on the display helps) and we’ll tell you the next step. Repair or replacement, you get the price first.',
      },
    ],
    featuredReviews: [],
    photos: [
      'navien-tankless-water-heater',
      'two-tankless-water-heaters',
      'rheem-tankless-insulated-lines',
      'tankless-indoor-service-valves',
      'tankless-outdoor-gas-meter',
      'tankless-water-heater-shingle-wall',
    ],
  },
  {
    slug: 'recirculation-pumps',
    name: 'Recirculation pumps',
    summary: 'Hot water recirculation pumps installed and replaced, so hot water reaches the tap sooner.',
    headline: 'Tired of waiting for hot water? We install recirculation pumps.',
    lead: 'If you run the shower or the kitchen faucet for a long time before it turns hot, a hot water recirculation pump keeps hot water moving through the lines so it gets there sooner. We look at your water heater and pipes and tell you what will work.',
    problems: [
      'Long wait for hot water at the shower or kitchen sink',
      'Running the tap and wasting water while it warms up',
      'Bathroom at the far end of the house from the water heater',
      'Old recirculation pump that stopped working',
      'Pump running all the time or making noise',
    ],
    includes: [
      {
        title: 'We look at your setup first',
        body: 'Where the water heater sits, how the lines run and which fixtures wait longest for hot water.',
      },
      {
        title: 'Installed and tested',
        body: 'We install the pump, make the connections and run the hot water before we leave.',
      },
      {
        title: 'A price before the work',
        body: 'You hear what it costs before we start, with no hidden fees. Estimates are free.',
      },
    ],
    seo: {
      title: 'Hot Water Recirculation Pumps in Oakland',
      description: 'Waiting too long for hot water? AB’s Plumbing installs and replaces hot water recirculation pumps. Free estimates, open 24/7. Call (510) 753-8649.',
    },
    faqs: [
      {
        q: 'What does a hot water recirculation pump do?',
        a: 'It keeps hot water moving through your pipes so it reaches the faucet or shower sooner, instead of you waiting while cold water runs down the drain.',
      },
      {
        q: 'Will a recirculation pump work in my home?',
        a: 'We look at your water heater and how your lines run, then tell you what will work and what it costs before any work starts.',
      },
      {
        q: 'Can you fix or replace a pump that stopped working?',
        a: 'Yes. Tell us what it’s doing and we’ll check it. If it can be repaired we say so; if not, you get the price for a new one first.',
      },
    ],
    featuredReviews: [],
    photos: [],
  },
  {
    slug: 'gas-lines',
    name: 'Gas lines',
    summary: 'Gas line repair and new gas lines for appliances, including water heater hookups.',
    headline: 'New appliance or old gas line? We repair and install gas lines.',
    lead: 'New gas lines for appliances, gas hookups for tank and tankless water heaters, new gas valves, and repairs to old lines.',
    problems: [
      'Gas line needed for a new appliance',
      'Gas hookup for a new water heater or tankless unit',
      'Gas valve that needs replacing',
      'Old or corroded gas pipe',
    ],
    includes: [
      {
        title: 'Safety first',
        body: 'If you smell gas, leave and call PG&E at 1-800-743-5000 or 911 before anything else. We handle the repair once it’s safe.',
      },
      {
        title: 'New lines and repairs',
        body: 'New gas lines to appliances, and repairs or replacement of old sections of pipe.',
      },
      {
        title: 'Water heater hookups',
        body: 'Gas connections for tank and tankless water heaters, done as part of the install.',
      },
    ],
    seo: {
      title: 'Gas Line Repair & Installation in Oakland',
      description: 'Gas line repair and new gas lines for appliances and water heaters. Price before any work starts, open 24/7. Call AB’s Plumbing at (510) 753-8649.',
    },
    faqs: [
      {
        q: 'What should I do if I smell gas?',
        a: 'Leave the building without flipping any switches, then call PG&E at 1-800-743-5000 or 911 from outside. Once it’s safe, call us for the repair.',
      },
      {
        q: 'Can you run a gas line for a new appliance?',
        a: 'Yes. Tell us what you’re installing and where, and we’ll give you a price before any work starts. Estimates are free.',
      },
      {
        q: 'Do you hook up the gas when you install a water heater?',
        a: 'Yes. The gas connection is part of our tank and tankless water heater installs.',
      },
    ],
    featuredReviews: [],
    photos: [
      'gas-line-valve-water-heater',
      'gas-line-bradford-white-water-heater',
      'rheem-50-gallon-water-heater',
      'navien-tankless-water-heater',
      'tankless-outdoor-gas-meter',
    ],
  },
  {
    slug: 'remodel-plumbing',
    name: 'Remodel plumbing',
    summary: 'New plumbing for bathroom, kitchen and laundry remodels, working with your designer.',
    headline: 'Remodeling? We handle the plumbing and work with your designer.',
    lead: 'New supply and drain lines, shower valves, tubs and fixtures for remodels. We handle permitted renovation plumbing and work well with designers.',
    problems: [
      'Bathroom remodel with a new tub or shower',
      'Moving a sink, toilet or shower to a new spot',
      'New shower valve to go in with the new tile',
      'Laundry room that needs new hot and cold lines',
      'Your designer needs a plumber for the project',
    ],
    includes: [
      {
        title: 'Permitted renovation plumbing',
        body: 'New supply and drain lines, valves and fixtures for your remodel.',
      },
      {
        title: 'Working with your designer',
        body: 'We work well with designers, so the plumbing fits the plan for the space.',
      },
      {
        title: 'Fixtures in and tested',
        body: 'Tubs, showers, shower valves, sinks and toilets installed and tested for leaks.',
      },
    ],
    seo: {
      title: 'Remodel Plumbing in Oakland & the Bay Area',
      description: 'New plumbing for bathroom, kitchen and laundry remodels. We work well with designers. Free estimates, open 24/7. Call AB’s Plumbing at (510) 753-8649.',
    },
    faqs: [
      {
        q: 'Do you work with designers?',
        a: 'Yes. We work well with designers and plan the plumbing around the design for your remodel.',
      },
      {
        q: 'Do you handle permitted remodel plumbing?',
        a: 'Yes. We handle permitted renovation plumbing. Tell us about your project and we’ll explain the plumbing side and give you a price before any work starts.',
      },
      {
        q: 'Can I get an estimate for my remodel?',
        a: 'Yes, estimates are free. Send us your plans or photos of the space and we’ll go over the plumbing with you.',
      },
    ],
    featuredReviews: [],
    photos: ['bathtub-shower-remodel', 'moen-shower-valve', 'copper-laundry-water-lines'],
  },
  {
    slug: 'toilets',
    name: 'Toilets',
    summary: 'Running, leaking and clogged toilets repaired, and new toilets installed.',
    headline: 'Toilet running, leaking or rocking? We fix it or put in a new one.',
    lead: 'Toilets that run all night, leak at the base, wobble on the floor or clog again and again. We repair what can be repaired, and when it can’t, we install a new toilet and test it for leaks.',
    problems: [
      'Toilet runs nonstop or refills on its own',
      'Water leaking around the base',
      'Toilet rocks or feels loose on the floor',
      'Clogs that keep coming back',
      'Old toilet you want replaced',
    ],
    includes: [
      { title: 'Repairs first', body: 'Flappers, fill valves, wax rings and seals before anything gets replaced.' },
      {
        title: 'Clogs cleared',
        body: 'We clear stubborn clogs with a drain auger, and look further down the line when they keep returning.',
      },
      {
        title: 'New toilets',
        body: 'Old toilet out, new one set, connected and tested for leaks. Shoe covers on, clean-up after.',
      },
    ],
    seo: {
      title: 'Toilet Repair & Installation in Oakland',
      description: 'Running, leaking or clogged toilet? AB’s Plumbing repairs and installs toilets, with the price before any work starts. Open 24/7. Call (510) 753-8649.',
    },
    faqs: [
      {
        q: 'My toilet is overflowing. What should I do right now?',
        a: 'Turn the shutoff valve behind the toilet clockwise to stop the water, then call us. We’re open 24 hours, 7 days.',
      },
      {
        q: 'Should I repair my toilet or replace it?',
        a: 'Often a new flapper, fill valve or seal is all it needs. We look at it first, tell you honestly whether it’s worth repairing, and give you the price before any work starts.',
      },
      {
        q: 'Is water around the base of the toilet a big deal?',
        a: 'It’s worth fixing soon. It usually means the seal under the toilet has failed, and the leak can damage the floor over time. We reset the toilet on a new seal and check that it sits solid.',
      },
    ],
    featuredReviews: ['sam-i', 'robert-w'],
    photos: ['new-toilet-install', 'toilet-install', 'toilet-clog-auger'],
  },
  {
    slug: 'faucets-sinks',
    name: 'Faucets & sinks',
    summary: 'Dripping faucets fixed, and new kitchen and bathroom sinks and faucets installed.',
    headline: 'Dripping faucet or a new sink to put in? We handle both.',
    lead: 'Kitchen and bathroom faucets that drip, leak underneath or lose pressure, plus new sinks and faucets installed and checked for leaks before we leave.',
    problems: [
      'Faucet drips or won’t shut off all the way',
      'Leak under the sink from a supply line or drain',
      'Low water pressure at one faucet',
      'Faucet loose or wobbly at the counter',
      'New kitchen sink, bathroom sink or faucet to install',
    ],
    includes: [
      { title: 'Repairs', body: 'Cartridges, seals and supply lines replaced so the drip or the leak stops.' },
      {
        title: 'New sinks and faucets',
        body: 'Kitchen and bathroom sinks and faucets installed, including filtered-water taps.',
      },
      {
        title: 'Outdoor faucets too',
        body: 'Leaky or rusty outdoor faucets replaced, with a new water line when it needs one.',
      },
    ],
    seo: {
      title: 'Faucet & Sink Repair in Oakland, CA',
      description: 'Dripping faucet, leak under the sink or a new sink to install? AB’s Plumbing repairs and installs faucets and sinks. Open 24/7. Call (510) 753-8649.',
    },
    faqs: [
      {
        q: 'There’s water under my sink. What should I do?',
        a: 'Close the shutoff valves under the sink, put a towel or bucket down, and call us. We find out whether it’s the faucet, a supply line or the drain, and fix the source.',
      },
      {
        q: 'Why does my faucet keep dripping?',
        a: 'Usually a worn cartridge or seal inside the faucet. We replace the worn part, and if the faucet is past repair we explain your options and the price before any work starts.',
      },
      {
        q: 'Can you install a new sink and faucet at the same time?',
        a: 'Yes. We install kitchen and bathroom sinks and faucets, connect the supply and drain lines, and check everything for leaks before we leave.',
      },
    ],
    featuredReviews: ['seiji-n', 'michelle-y', 'avi-j'],
    photos: [
      'kitchen-sink-faucet-install',
      'kitchen-faucet-stainless-sink',
      'kitchen-sink-drain-disposal',
      'outdoor-faucet-water-line',
    ],
  },
  {
    slug: 'garbage-disposals',
    name: 'Garbage disposals',
    summary: 'Jammed, leaking or dead garbage disposals repaired or replaced.',
    headline: 'Disposal jammed, leaking or dead? Repaired or replaced.',
    lead: 'A disposal that hums but won’t spin, leaks under the sink or won’t turn on at all. We find out why, fix it when it’s worth fixing, or put in a new one and hook it up to the sink drain.',
    problems: [
      'Disposal hums but won’t spin',
      'Won’t turn on at all',
      'Leaking under the sink',
      'Sink backs up when the disposal runs',
      'Old disposal you want replaced',
    ],
    includes: [
      {
        title: 'Repair or replace, honestly',
        body: 'If it’s a jam or a loose connection, we fix it. If the unit is worn out, we tell you.',
      },
      {
        title: 'New disposal installed',
        body: 'Old unit out, new one mounted, connected to the sink drain and tested for leaks.',
      },
      { title: 'Drain hookup', body: 'Leaking or clogged trap and drain connections under the sink redone.' },
    ],
    seo: {
      title: 'Garbage Disposal Repair & Install in Oakland',
      description: 'Garbage disposal jammed, leaking or dead? AB’s Plumbing repairs and replaces disposals, price before any work starts. Open 24/7. Call (510) 753-8649.',
    },
    faqs: [
      {
        q: 'My disposal hums but won’t spin. What should I do?',
        a: 'Turn it off at the switch and don’t reach inside. Something is usually jamming it. Call us and we clear the jam and check whether the unit is still good.',
      },
      {
        q: 'Should I repair my disposal or replace it?',
        a: 'If it’s jammed or a connection is loose, a repair usually does it. If the unit itself is leaking or the motor is gone, a new one makes more sense. We tell you which, and the price, before we start.',
      },
      {
        q: 'What shouldn’t go down a disposal?',
        a: 'Grease and oil are the big ones: they build up in the drain line and cause clogs. Fibrous peels and coffee grounds are trouble too. Run cold water while the disposal is on.',
      },
    ],
    featuredReviews: ['jackie-r', 'cola-c'],
    photos: ['garbage-disposal-replacement', 'kitchen-sink-drain-disposal'],
  },
  {
    slug: 'showers-bathtubs',
    name: 'Showers & bathtubs',
    summary: 'Shower valves, tub spouts, and new bathtubs and showers, including remodel plumbing.',
    headline: 'Leaky shower valve or a new tub? We do the plumbing.',
    lead: 'Showers that drip, handles that stick, water that won’t stay at the right temperature, and new bathtubs and showers, including the plumbing for a bathroom remodel.',
    problems: [
      'Shower head or tub spout keeps dripping',
      'Shower handle stiff, stuck or leaking',
      'Water too hot or too cold and hard to adjust',
      'Tub spout won’t send water up to the shower',
      'Old tub or shower to replace in a remodel',
    ],
    includes: [
      {
        title: 'Shower valves',
        body: 'Cartridges replaced, or a new valve with new trim and tub spout when the old one is done.',
      },
      { title: 'New tubs and showers', body: 'Bathtubs and showers installed, connected and tested for leaks.' },
      {
        title: 'Remodel plumbing',
        body: 'New supply lines, valves and drains placed where your new bathroom layout needs them.',
      },
    ],
    seo: {
      title: 'Shower & Bathtub Plumbing in Oakland, CA',
      description: 'Dripping shower, stuck valve or a new tub for your remodel? AB’s Plumbing repairs and installs showers and bathtubs. Open 24/7. Call (510) 753-8649.',
    },
    faqs: [
      {
        q: 'Can you fix a dripping shower without opening the wall?',
        a: 'Often, yes. A drip usually comes from a worn cartridge, which we can reach through the handle. If the valve itself has failed, we explain what it takes and the price before any work starts.',
      },
      {
        q: 'Do you do the plumbing for a bathroom remodel?',
        a: 'Yes. New plumbing for remodels is one of our services, including new shower valves, bathtubs and showers.',
      },
      {
        q: 'Is the estimate free?',
        a: 'Yes. We look at the shower or tub, explain what it needs and give you the price before any work starts.',
      },
    ],
    featuredReviews: [],
    photos: ['moen-shower-valve', 'bathtub-shower-remodel'],
  },
  {
    slug: 'repiping',
    name: 'Repiping',
    summary: 'Old galvanized or leaking water pipes replaced with new copper lines, from the main to the fixtures.',
    headline: 'Leak after leak, low pressure, rusty water? Time to repipe.',
    lead: 'When old galvanized or worn-out pipes keep leaking, we replace them with new copper water lines: the main line from the meter, and the lines to your kitchen, bathrooms, laundry and water heater.',
    problems: [
      'Leak after leak in the same old pipes',
      'Low water pressure all over the house',
      'Rusty or discolored water',
      'Old galvanized main line',
      'Remodel that needs new water lines',
    ],
    includes: [
      {
        title: 'New main line',
        body: 'A new copper main line from the meter to the house, like the old galvanized mains we’ve replaced.',
      },
      {
        title: 'New lines inside',
        body: 'New copper lines to the kitchen, bathrooms, laundry and water heater, with new valves.',
      },
      {
        title: 'A price before the work',
        body: 'You see the plan and the price before we open a wall. Estimates are free.',
      },
    ],
    seo: {
      title: 'Repiping & Water Line Replacement in Oakland',
      description: 'Old galvanized or leaking pipes? AB’s Plumbing repipes homes with new copper water lines, from the main to every fixture. Open 24/7. Call (510) 753-8649.',
    },
    faqs: [
      {
        q: 'What does repiping include?',
        a: 'Replacing old water pipes with new ones. Depending on what your house needs, that can be the main line from the meter, the lines inside the house, or both. We look first and tell you what’s worth replacing.',
      },
      {
        q: 'What pipe do you use?',
        a: 'Our recent repipes use copper, including copper with press-fit (ProPress) fittings.',
      },
      {
        q: 'Will I know the price before you start?',
        a: 'Yes. We look at your pipes, explain what needs replacing and give you a price before any work starts. Estimates are free.',
      },
    ],
    featuredReviews: [],
    photos: [
      'copper-repipe-laundry-sink',
      'galvanized-main-line-replaced',
      'copper-repipe-inside-wall',
      'copper-repipe-crawl-space',
      'new-copper-main-line-trench',
      'new-copper-main-line-yard',
    ],
  },
  {
    slug: 'sewer-line-replacement',
    name: 'Sewer line replacement',
    summary: 'Broken clay or cast-iron sewer lines replaced with new pipe, from the house to the city main.',
    headline: 'Sewer line broken or full of roots? We replace it, house to street.',
    lead: 'Old clay and cast-iron sewer lines crack, sag and fill with roots. We put a camera down first, then replace the broken section or the whole line with new pipe, all the way to the connection at the street when it needs it.',
    problems: [
      'Roots keep coming back in an old clay line',
      'Cracked or collapsed sewer pipe',
      'Broken cast-iron sewer line',
      'Backups that snaking no longer fixes for long',
      'Broken connection at the city main',
    ],
    includes: [
      { title: 'Camera first', body: 'You see the break on screen before anyone talks about digging.' },
      {
        title: 'New pipe, house to street',
        body: 'The broken section or the whole line replaced with new ABS or SDR sewer pipe, with a new cleanout where it helps.',
      },
      { title: 'Clean finish', body: 'Trench backfilled, concrete or the street patched, and the site cleaned up.' },
    ],
    seo: {
      title: 'Sewer Line Replacement in Oakland, CA',
      description: 'Broken clay or cast-iron sewer line? AB’s Plumbing replaces it with new pipe, from the house to the city main, camera first. Open 24/7. Call (510) 753-8649.',
    },
    faqs: [
      {
        q: 'Do I need the whole sewer line replaced?',
        a: 'Not always. We run a camera first and show you where the line is broken. Sometimes replacing one section is enough; when an old line is failing in several places, replacing it makes more sense. You decide with the price in hand.',
      },
      {
        q: 'What pipe do you replace it with?',
        a: 'Our recent sewer replacements use new ABS and SDR sewer pipe, with new cleanouts where they help.',
      },
      {
        q: 'Can you replace the connection at the street?',
        a: 'Yes. We’ve replaced broken sewer lines and the Y connection at the city main, and patched the street afterward.',
      },
    ],
    featuredReviews: ['anthony-r', 'natalye-b'],
    photos: [
      'clay-sewer-line-roots',
      'crew-removing-old-sewer-line',
      'new-sewer-line-to-street',
      'sewer-replacement-at-city-main',
      'broken-clay-sewer-line',
      'sewer-line-replacement-abs',
    ],
  },
];

/** Other work the crew handles (from the services verified on Yelp), without dedicated pages. */
/**
 * Every service AB's offers: Yelp "Services Offered, verified by business" (checked 2026-10-16), plus remodel
 * plumbing and repiping the client confirmed. Don't add anything that isn't on that list or confirmed by the client.
 */
export const allServices = [
  'Plumbing repair',
  'Plumbing installation and replacement',
  'Plumbing inspections',
  'Drain cleaning',
  'Hydro-jetting',
  'Sewer lines',
  'Water pipes',
  'Repiping',
  'Water heater repair',
  'Water heater installation',
  'Hot water recirculation pumps',
  'Gas lines',
  'Backflow preventers',
  'Sump pumps',
  'Faucets',
  'Sinks',
  'Toilets',
  'Garbage disposals',
  'Showers',
  'Bathtubs',
  'New plumbing for remodels',
];

export function serviceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
