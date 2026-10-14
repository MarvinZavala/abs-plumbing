/**
 * Cities served. Sources: the service-area list on the previous site, plus cities where
 * Yelp reviewers live (Albany, El Cerrito, Walnut Creek, Danville, Union City).
 */
export const areas = [
  {
    region: 'East Bay',
    note: 'Home base: Fruitvale, Oakland',
    cities: [
      'Oakland',
      'Berkeley',
      'Alameda',
      'Albany',
      'El Cerrito',
      'Richmond',
      'Hayward',
      'Union City',
      'Fremont',
      'Walnut Creek',
      'Danville',
    ],
  },
  {
    region: 'San Francisco & Peninsula',
    cities: ['San Francisco', 'Daly City', 'San Mateo', 'Redwood City', 'Palo Alto', 'Mountain View'],
  },
  {
    region: 'South Bay',
    cities: ['Sunnyvale', 'Santa Clara', 'San Jose'],
  },
  {
    region: 'North Bay',
    cities: ['Vallejo'],
  },
] as const;

export const allCities: string[] = areas.flatMap((a) => [...a.cities]);
