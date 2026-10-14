// Builds src/content/bay-map.ts for the coverage map: coastline, home base, a dot for every city in
// src/content/areas.ts, and where each name goes so no label covers another label or a dot. Placement is
// worked out twice, for phones and for wider screens, because labels take up more of a small map.
//
// Data (U.S. Census Bureau, public domain):
//   Coastline: 2023 cartographic boundary counties, clipped and simplified with mapshaper:
//     curl -L -o counties.zip https://www2.census.gov/geo/tiger/GENZ2023/shp/cb_2023_us_county_500k.zip && unzip counties.zip
//     npx mapshaper@0.6.113 -i cb_2023_us_county_500k.shp -filter 'STATEFP == "06"' \
//       -clip bbox=-122.66,37.20,-121.70,38.18 -dissolve -simplify 70% keep-shapes \
//       -o format=geojson precision=0.0001 bay-land.json
//   City points: 2023 Gazetteer, California places (each place's internal point):
//     curl -O https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2023_Gazetteer/2023_gaz_place_06.txt
//   Large cities use their downtown instead, because their internal point can sit far from it
//   (San Francisco's is out at the Farallon Islands).
//
// Label widths: label-widths.json, measured in Chrome with Barlow Condensed (measure-labels.mjs). Add new names there.
//
// usage: node scripts/bay-map/build-map.mjs <bay-land.json> <2023_gaz_place_06.txt>
// Projection: equirectangular scaled by cos(lat0). Accurate enough for a ~1° illustrative map, and circles stay
// round, so the distance rings are honest.
import { readFileSync, writeFileSync } from 'node:fs';
import { areas } from '../../src/content/areas.ts';
import { ui } from '../../src/content/i18n.ts';

const [, , landPath, gazetteerPath] = process.argv;
const OUT = new URL('../../src/content/bay-map.ts', import.meta.url);
const WIDTHS = JSON.parse(readFileSync(new URL('./label-widths.json', import.meta.url), 'utf8'));

// --- projection --------------------------------------------------------------
const BBOX = { west: -122.66, south: 37.2, east: -121.7, north: 38.18 };
const K = Math.cos((((BBOX.south + BBOX.north) / 2) * Math.PI) / 180);
const SCALE = 1000; // viewBox units per projected degree
const W = (BBOX.east - BBOX.west) * K * SCALE;
const H = (BBOX.north - BBOX.south) * SCALE;
const project = ([lon, lat]) => [(lon - BBOX.west) * K * SCALE, (BBOX.north - lat) * SCALE];
const pct = ([x, y]) => ({ x: Math.round((x / W) * 10000) / 100, y: Math.round((y / H) * 10000) / 100 });
const r1 = (n) => Math.round(n * 10) / 10;
const MILES_TO_UNITS = (1.609344 / 111.32) * SCALE;

// --- coastline ---------------------------------------------------------------
const land = JSON.parse(readFileSync(landPath, 'utf8'));
const geometries =
  land.type === 'FeatureCollection' ? land.features.map((f) => f.geometry)
  : land.type === 'GeometryCollection' ? land.geometries
  : land.type === 'Feature' ? [land.geometry] : [land];
const polygons = geometries.flatMap((g) => (g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : []));
const ringToPath = (ring) => ring.map((pt, i) => { const [x, y] = project(pt); return `${i ? 'L' : 'M'}${r1(x)} ${r1(y)}`; }).join('') + 'Z';
const landD = polygons.map((poly) => poly.map(ringToPath).join('')).join('');
const inRing = ([x, y], ring) => {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};
const onLand = (pt) => polygons.some((poly) => inRing(pt, poly[0]) && !poly.slice(1).some((hole) => inRing(pt, hole)));

// --- cities ------------------------------------------------------------------
const BASE = { name: 'Oakland', lat: 37.784, lon: -122.214 }; // Foothill Blvd, Oakland
const DOWNTOWN = {
  'San Francisco': [37.7793, -122.4193],
  Berkeley: [37.8701, -122.2681],
  Richmond: [37.9358, -122.3477],
  Hayward: [37.6688, -122.0808],
  Fremont: [37.5485, -121.9886],
  'San Jose': [37.3382, -121.8863],
  'Palo Alto': [37.4443, -122.1598],
  'Mountain View': [37.3936, -122.079],
  'Los Altos': [37.3793, -122.115],
  'Walnut Creek': [37.9101, -122.0652],
  Concord: [37.978, -122.0311],
  'Redwood City': [37.4852, -122.2364],
  'San Mateo': [37.563, -122.3255],
  'South San Francisco': [37.6547, -122.4077],
  'San Rafael': [37.9735, -122.5311],
  Novato: [38.1074, -122.5697],
  Tiburon: [37.8735, -122.4566],
  Vallejo: [38.1041, -122.2566],
};
const gazetteer = readFileSync(gazetteerPath, 'utf8').split('\n').slice(1).map((line) => line.split('\t'));
function locate(name) {
  if (DOWNTOWN[name]) return DOWNTOWN[name];
  const inBay = gazetteer.filter((r) => {
    const lat = Number(r[10]);
    const lon = Number(r[11]);
    return r[3]?.replace(/ (city|town|CDP)$/, '') === name && lat > BBOX.south && lat < BBOX.north && lon > BBOX.west && lon < BBOX.east;
  });
  // Prefer the incorporated city over a same-named CDP (Mountain View city vs Mountain View CDP).
  const pick = inBay.length === 1 ? inBay : inBay.filter((r) => / (city|town)$/.test(r[3]));
  if (pick.length !== 1) throw new Error(`${name}: ${inBay.length} places found in the map area`);
  return [Number(pick[0][10]), Number(pick[0][11])];
}

/** Bigger, bolder names: the cities people use to find their way around the Bay. */
const MAJOR = new Set(['San Francisco', 'San Jose', 'Berkeley', 'Walnut Creek', 'San Rafael', 'Fremont', 'Palo Alto', 'Vallejo', 'Hayward', 'Pleasanton', 'San Mateo', 'Richmond', 'Concord']);
/** Asked for by name: always keep their dot, and label them before smaller towns. */
const REQUESTED = new Set(['Sausalito', 'Tiburon', 'Mill Valley', 'San Rafael', 'Atherton', 'Los Altos', 'Milpitas', 'Union City']);
/** Label order: who gets a name first when space runs out. The rest still get a dot. */
const LABEL_RANK = [
  'San Francisco', 'San Jose', 'Berkeley', 'Walnut Creek', 'San Rafael', 'Fremont', 'Palo Alto', 'Vallejo',
  'Pleasanton', 'Hayward', 'San Mateo', 'Richmond', 'Concord',
  'Sausalito', 'Tiburon', 'Mill Valley', 'Atherton', 'Los Altos', 'Milpitas', 'Union City',
  // well-known, high-end towns next
  'Hillsborough', 'Piedmont', 'Orinda', 'Danville', 'Los Gatos', 'Saratoga', 'Woodside', 'Lafayette', 'Novato',
  'Menlo Park', 'Mountain View', 'Sunnyvale', 'Cupertino', 'Santa Clara', 'Redwood City', 'Daly City', 'San Ramon',
  'Dublin', 'Benicia', 'Burlingame', 'Alameda', 'San Leandro', 'Campbell', 'Larkspur', 'Corte Madera', 'Foster City',
  'Castro Valley', 'Moraga', 'Pleasant Hill', 'Alamo', 'Blackhawk', 'Newark', 'Belmont', 'San Carlos', 'Millbrae',
  'South San Francisco', 'Portola Valley', 'Los Altos Hills', 'Emeryville', 'Albany', 'El Cerrito', 'Pinole',
  'Hercules', 'San Anselmo', 'Kentfield', 'Ross', 'Belvedere',
];

const served = areas.flatMap((a) => [...a.cities]).filter((name) => name !== BASE.name);
const missingRank = served.filter((name) => !LABEL_RANK.includes(name));
if (missingRank.length) throw new Error(`Add to LABEL_RANK: ${missingRank.join(', ')}`);

const cities = served.map((name) => {
  const [lat, lon] = locate(name);
  if (!onLand([lon, lat])) console.warn(`warning: ${name} falls in the water on the simplified coastline`);
  const [x, y] = project([lon, lat]);
  return { name, tier: MAJOR.has(name) ? 'major' : 'minor', px: x, py: y };
});

// --- fixed labels: water and regions -------------------------------------------
const PLACES = [
  { id: 'pacific', kind: 'water', lat: 37.47, lon: -122.648, align: 'start' },
  { id: 'sf-bay', kind: 'water', lat: 37.6, lon: -122.235, align: 'center' },
  { id: 'san-pablo-bay', kind: 'water', lat: 38.055, lon: -122.39, align: 'center' },
  { id: 'north-bay', kind: 'region', lat: 38.035, lon: -122.652, align: 'start' },
  { id: 'east-bay', kind: 'region', lat: 37.885, lon: -121.82, align: 'center' },
  { id: 'peninsula', kind: 'region', lat: 37.39, lon: -122.34, align: 'center' },
  { id: 'south-bay', kind: 'region', lat: 37.235, lon: -121.79, align: 'center' },
];

// --- label placement ---------------------------------------------------------
/**
 * Sizes in CSS px at the narrowest map each profile covers (a 360px phone; a two-column desktop layout).
 * The map component reads these same numbers, so what is checked here is what renders.
 */
const PROFILES = {
  mobile: { width: 328, major: 12, minor: 11, place: 11, offset: 5, plate: 12, plateGap: 14, maxLabels: 15 },
  desktop: { width: 440, major: 14, minor: 12, place: 12.5, offset: 6, plate: 14, plateGap: 18, maxLabels: 32 },
};
const DOT_R = { major: 5.5, minor: 4.5, base: 11 }; // viewBox units
const REGION_TRACKING = 0.06; // em, letter-spacing of region names
const ANCHORS = ['right', 'upper-right', 'lower-right', 'left', 'upper-left', 'lower-left', 'above', 'below'];

const emWidth = (text, weight) => {
  const w = WIDTHS[weight]?.[text];
  if (w == null) throw new Error(`No measured width for "${text}" (${weight}); add it to label-widths.json`);
  return w;
};

function labelBox(anchor, x, y, w, h, off) {
  const d = off * 0.75;
  switch (anchor) {
    case 'right': return [x + off, y - h / 2];
    case 'left': return [x - off - w, y - h / 2];
    case 'above': return [x - w / 2, y - off - h];
    case 'below': return [x - w / 2, y + off];
    case 'upper-right': return [x + d, y - d - h];
    case 'lower-right': return [x + d, y + d];
    case 'upper-left': return [x - d - w, y - d - h];
    case 'lower-left': return [x - d - w, y + d];
  }
}

function placeLabels(profile) {
  const s = profile.width / W;
  const mapH = H * s;
  const PAD = 1.5;
  const obstacles = [];
  const labeled = new Set();
  const hiddenDots = new Set();
  const collides = (b) =>
    b.x0 < 1 || b.y0 < 1 || b.x1 > profile.width - 1 || b.y1 > mapH - 1 ||
    obstacles.some((o) => b.x0 < o.x1 + PAD && b.x1 + PAD > o.x0 && b.y0 < o.y1 + PAD && b.y1 + PAD > o.y0);
  const rect = (x0, y0, w, h, tag) => ({ x0, y0, x1: x0 + w, y1: y0 + h, tag });

  for (const c of cities) {
    const r = DOT_R[c.tier] * s + 1;
    obstacles.push(rect(c.px * s - r, c.py * s - r, 2 * r, 2 * r, `dot:${c.name}`));
  }
  // A dot a major city's name may cover (the dot is then left off at this size): small, unlabeled, not asked for.
  const yields = (o) => {
    if (!o.tag.startsWith('dot:')) return false;
    const name = o.tag.slice(4);
    const city = cities.find((c) => c.name === name);
    return city.tier === 'minor' && !REQUESTED.has(name) && !labeled.has(name);
  };
  const hits = (b) =>
    obstacles.filter((o) => b.x0 < o.x1 + PAD && b.x1 + PAD > o.x0 && b.y0 < o.y1 + PAD && b.y1 + PAD > o.y0);
  const outside = (b) => b.x0 < 1 || b.y0 < 1 || b.x1 > profile.width - 1 || b.y1 > mapH - 1;
  const [bx, by] = project([BASE.lon, BASE.lat]).map((v) => v * s);
  obstacles.push(rect(bx - 10, by - 10, 20, 20, 'base'));
  // Street-sign plate under the base marker (PlacePlate in coverage-map.tsx: 31px of padding and border across,
  // 23px down). Phones show just "Oakland"; wider screens "Home base: Oakland" / "Base: Oakland".
  const plateText = profile === PROFILES.mobile ? [BASE.name] : [ui.en.mapBase, ui.es.mapBase];
  const plateW = Math.max(...plateText.map((t) => emWidth(t, '600'))) * profile.plate + 31;
  const plate = rect(bx - plateW / 2, by + profile.plateGap, plateW, profile.plate + 23, 'plate');
  // Dots under the plate are left off at this size rather than peeking out from behind it.
  for (const o of [...obstacles]) {
    if (!o.tag.startsWith('dot:') || !(plate.x0 < o.x1 && plate.x1 > o.x0 && plate.y0 < o.y1 && plate.y1 > o.y0)) continue;
    const name = o.tag.slice(4);
    if (MAJOR.has(name) || REQUESTED.has(name)) console.warn(`warning: the plate covers ${name} (${profile.width}px)`);
    hiddenDots.add(name);
    obstacles.splice(obstacles.indexOf(o), 1);
  }
  obstacles.push(plate);

  const places = {};
  for (const p of PLACES) {
    const [px, py] = project([p.lon, p.lat]).map((v) => v * s);
    const lines = [ui.en.mapPlaces[p.id], ui.es.mapPlaces[p.id]];
    const tracking = p.kind === 'region' ? REGION_TRACKING : 0;
    const width = Math.max(...lines.flat().map((t) => (emWidth(t, p.kind === 'region' ? '600' : '500') + tracking * t.length) * profile.place));
    const height = Math.max(...lines.map((l) => l.length)) * profile.place * 1.1;
    const box = rect(p.align === 'start' ? px : px - width / 2, py - height / 2, width, height, `place:${p.id}`);
    const fits = !collides(box);
    if (fits) obstacles.push(box);
    else console.warn(`${profile === PROFILES.mobile ? 'mobile' : 'desktop'}: no room for ${p.id}`);
    places[p.id] = fits;
  }

  const anchors = {};
  let count = 0;
  for (const name of LABEL_RANK) {
    const c = cities.find((city) => city.name === name);
    // A name needs its dot: skip cities whose dot was moved aside for a neighbour.
    if (!c || count >= profile.maxLabels || hiddenDots.has(name)) continue;
    const size = c.tier === 'major' ? profile.major : profile.minor;
    const w = emWidth(name, c.tier === 'major' ? '600' : '500') * size;
    const h = size * 1.15;
    const r = DOT_R[c.tier] * s;
    const own = `dot:${name}`;
    const candidates = ANCHORS.map((anchor) => {
      const [x0, y0] = labelBox(anchor, c.px * s, c.py * s, w, h, profile.offset + r);
      const box = rect(x0, y0, w, h, `label:${name}`);
      return { anchor, box, blockers: outside(box) ? null : hits(box).filter((o) => o.tag !== own) };
    }).filter((cand) => cand.blockers);
    if (process.env.DEBUG_LABEL === name) {
      console.log(profile.width, name, candidates.map((cand) => `${cand.anchor}: ${cand.blockers.map((o) => o.tag).join(' ') || 'clear'}`));
    }
    const clear = candidates.find((cand) => cand.blockers.length === 0);
    // Major cities may push aside the dots of tiny neighbours rather than go unnamed, preferring the
    // least-known neighbours (the end of LABEL_RANK).
    const cost = (cand) => cand.blockers.reduce((sum, o) => sum + LABEL_RANK.length - LABEL_RANK.indexOf(o.tag.slice(4)), 0);
    const pushy =
      !clear && c.tier === 'major'
        ? candidates.filter((cand) => cand.blockers.every(yields)).sort((a, b) => cost(a) - cost(b))[0]
        : undefined;
    const pick = clear ?? pushy;
    if (!pick) continue;
    for (const o of pick.blockers) {
      hiddenDots.add(o.tag.slice(4));
      obstacles.splice(obstacles.indexOf(o), 1);
    }
    obstacles.push(pick.box);
    anchors[name] = pick.anchor;
    labeled.add(name);
    count++;
  }
  return { anchors, places, hiddenDots };
}

const mobile = placeLabels(PROFILES.mobile);
const desktop = placeLabels(PROFILES.desktop);

// --- output ------------------------------------------------------------------
const [bx, by] = project([BASE.lon, BASE.lat]);
const data = {
  viewBox: `0 0 ${r1(W)} ${r1(H)}`,
  width: r1(W),
  height: r1(H),
  land: landD,
  base: { name: BASE.name, cx: r1(bx), cy: r1(by), ...pct([bx, by]) },
  milesToUnits: Math.round(MILES_TO_UNITS * 1000) / 1000,
  dotRadius: DOT_R,
  labelSizes: Object.fromEntries(
    Object.entries(PROFILES).map(([k, p]) => [k, { width: p.width, major: p.major, minor: p.minor, place: p.place, offset: p.offset }]),
  ),
  regionTracking: REGION_TRACKING,
  cities: cities.map((c) => ({
    name: c.name,
    tier: c.tier,
    ...pct([c.px, c.py]),
    mobile: mobile.anchors[c.name] ?? null,
    desktop: desktop.anchors[c.name] ?? null,
    // false = this dot is left off at that size, to make room for a bigger neighbour's name
    dotMobile: !mobile.hiddenDots.has(c.name),
    dotDesktop: !desktop.hiddenDots.has(c.name),
  })),
  places: PLACES.map((p) => ({
    id: p.id,
    kind: p.kind,
    align: p.align,
    ...pct(project([p.lon, p.lat])),
    mobile: mobile.places[p.id],
    desktop: desktop.places[p.id],
  })),
};

const header = `/**
 * Bay Area map data for the coverage illustration (generated by scripts/bay-map/build-map.mjs, do not edit by hand).
 * Coastline: U.S. Census Bureau 2023 cartographic boundary files, clipped to lon ${BBOX.west}..${BBOX.east} /
 * lat ${BBOX.south}..${BBOX.north} and simplified with mapshaper. City points: U.S. Census Bureau 2023 Gazetteer
 * (downtown for the largest cities). Label positions are precomputed so names never overlap: \`mobile\` and
 * \`desktop\` say where each city's name sits next to its dot (null = dot only at that size).
 */
export type MapAnchor = ${ANCHORS.map((a) => `'${a}'`).join(' | ')};

export const bayMap = `;
writeFileSync(OUT, `${header}${JSON.stringify(data, null, 2)} as const;\n`);

const labeled = (k) => data.cities.filter((c) => c[k]).map((c) => c.name);
console.log(`${data.cities.length} city dots`);
console.log(`desktop labels (${labeled('desktop').length}): ${labeled('desktop').join(', ')}`);
console.log(`mobile labels (${labeled('mobile').length}): ${labeled('mobile').join(', ')}`);
console.log(`unlabeled on desktop: ${data.cities.filter((c) => !c.desktop).map((c) => c.name).join(', ')}`);
console.log(`dots left off: mobile ${[...mobile.hiddenDots].join(', ') || 'none'} | desktop ${[...desktop.hiddenDots].join(', ') || 'none'}`);
