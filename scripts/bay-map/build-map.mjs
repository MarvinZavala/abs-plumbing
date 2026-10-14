// Turns the clipped Bay Area land GeoJSON into SVG path data + positioned points for src/content/bay-map.ts.
//
// How the land GeoJSON was made (U.S. Census Bureau data is public domain):
//   curl -L -o counties.zip https://www2.census.gov/geo/tiger/GENZ2023/shp/cb_2023_us_county_500k.zip && unzip counties.zip
//   npx mapshaper@0.6.113 -i cb_2023_us_county_500k.shp -filter 'STATEFP == "06"' \
//     -clip bbox=-122.66,37.20,-121.70,38.18 -dissolve -simplify 70% keep-shapes \
//     -o format=geojson precision=0.0001 bay-land.json
//
// usage: node build-map.mjs <bay-land.json> <out.json> [preview.svg]
// Then copy viewBox/width/height/land/base/cities from out.json into src/content/bay-map.ts.
// Projection: equirectangular scaled by cos(lat0) — accurate enough for a ~1° illustrative map,
// and it keeps circles round so distance rings are honest.
import { readFileSync, writeFileSync } from 'node:fs';

const [, , landPath, outPath, previewPath] = process.argv;
const land = JSON.parse(readFileSync(landPath, 'utf8'));

const BBOX = { west: -122.66, south: 37.2, east: -121.7, north: 38.18 };
const LAT0 = (BBOX.south + BBOX.north) / 2;
const K = Math.cos((LAT0 * Math.PI) / 180);
const SCALE = 1000; // viewBox units per projected degree
const project = ([lon, lat]) => [(lon - BBOX.west) * K * SCALE, (BBOX.north - lat) * SCALE];
const W = (BBOX.east - BBOX.west) * K * SCALE;
const H = (BBOX.north - BBOX.south) * SCALE;
const KM_PER_DEG = 111.32;

const r1 = (n) => Math.round(n * 10) / 10;
const ringToPath = (ring) => ring.map((pt, i) => { const [x, y] = project(pt); return `${i ? 'L' : 'M'}${r1(x)} ${r1(y)}`; }).join('') + 'Z';
const polys = [];
const geometries =
  land.type === 'FeatureCollection' ? land.features.map((f) => f.geometry)
  : land.type === 'GeometryCollection' ? land.geometries
  : land.type === 'Feature' ? [land.geometry] : [land];
for (const g of geometries) {
  const list = g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
  for (const poly of list) polys.push(poly.map(ringToPath).join(''));
}
const landD = polys.join('');

const BASE = { name: 'Oakland', lat: 37.784, lon: -122.214 }; // Foothill Blvd, Oakland
const cities = [
  { name: 'San Francisco', lat: 37.7749, lon: -122.4194, mobile: true },
  { name: 'Berkeley', lat: 37.8716, lon: -122.2727, mobile: false },
  { name: 'Richmond', lat: 37.9358, lon: -122.3477, mobile: false },
  { name: 'Vallejo', lat: 38.1041, lon: -122.2566, mobile: true },
  { name: 'Walnut Creek', lat: 37.9101, lon: -122.0652, mobile: true },
  { name: 'Hayward', lat: 37.6688, lon: -122.0808, mobile: false },
  { name: 'Fremont', lat: 37.5485, lon: -121.9886, mobile: true },
  { name: 'San Mateo', lat: 37.563, lon: -122.3255, mobile: false },
  { name: 'Palo Alto', lat: 37.4419, lon: -122.143, mobile: true },
  { name: 'San Jose', lat: 37.3382, lon: -121.8863, mobile: true, align: 'left' },
];
const pct = ([x, y]) => ({ x: Math.round((x / W) * 10000) / 100, y: Math.round((y / H) * 10000) / 100 });
const [bx, by] = project([BASE.lon, BASE.lat]);
const rings = [20, 40, 60].map((km) => ({ km, r: r1((km / KM_PER_DEG) * SCALE) }));

const out = {
  viewBox: `0 0 ${r1(W)} ${r1(H)}`,
  width: r1(W),
  height: r1(H),
  land: landD,
  base: { ...BASE, cx: r1(bx), cy: r1(by), ...pct([bx, by]) },
  rings,
  cities: cities.map((c) => ({ ...c, ...pct(project([c.lon, c.lat])) })),
};
writeFileSync(outPath, JSON.stringify(out, null, 1));
console.log('viewBox', out.viewBox, '| land path chars:', landD.length, '| polygons:', polys.length);

if (previewPath) {
  const pts = out.cities.map((c) => { const x = (c.x / 100) * W, y = (c.y / 100) * H; return `<circle cx="${x}" cy="${y}" r="4" fill="#0a2239"/><text x="${x + 7}" y="${y + 4}" font-size="13" font-family="Helvetica" fill="#0a2239">${c.name}</text>`; }).join('');
  const ringsSvg = rings.map((g) => `<circle cx="${bx}" cy="${by}" r="${g.r}" fill="none" stroke="#149ad6" stroke-dasharray="6 6" stroke-width="2"/>`).join('');
  writeFileSync(previewPath, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${out.viewBox}" width="${W}" height="${H}"><rect width="100%" height="100%" fill="#dff1f9"/><path d="${landD}" fill="#ffffff" stroke="#9fb1c1" stroke-width="1.2"/>${ringsSvg}${pts}<circle cx="${bx}" cy="${by}" r="7" fill="#149ad6" stroke="#0a2239" stroke-width="2"/></svg>`);
}
