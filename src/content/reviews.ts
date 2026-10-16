/**
 * Verbatim excerpts from AB's Plumbing Services reviews on Yelp
 * (https://www.yelp.com/biz/abs-plumbing-services-oakland-13), collected 2026-10-13.
 *
 * Rules for this file:
 * - Quotes are copied word for word (typos included). Trim only at sentence boundaries, never mid-sentence.
 * - Name and city exactly as Yelp displays the reviewer. Dates are the review dates on Yelp.
 * - `job` is our own plain-language label of what the review describes.
 * Yelp's guidance is to quote verbatim and in context; asking the reviewer first is the courteous route.
 */
import type { ServiceSlug } from './services';

export type Review = {
  id: string;
  name: string;
  city: string;
  date: string; // ISO yyyy-mm-dd
  job: string;
  /** The same label in Spanish, for the Spanish pages. Quotes are never translated. */
  jobEs: string;
  services: ServiceSlug[];
  quote: string;
};

export const reviews: Review[] = [
  {
    id: 'mary-s',
    name: 'Mary S.',
    city: 'San Francisco, CA',
    date: '2026-10-06',
    job: 'Weekend emergency',
    jobEs: 'Emergencia en fin de semana',
    services: ['emergency-plumbing'],
    quote: 'I had a weekend emergency and they were at my house in 30 minutes.',
  },
  {
    id: 'jeffrey-j',
    name: 'Jeffrey J.',
    city: 'Oakland, CA',
    date: '2026-10-12',
    job: 'Clog flooding the driveway',
    jobEs: 'Tapón que inundaba la entrada',
    services: ['drain-cleaning', 'emergency-plumbing'],
    quote:
      "Called AB's Plumbing Service for a clog flooding out our driveway. They came out within 45min. … Ab, Issac and Omar were very knowledgeable and helpful. They are considerate about pricing.",
  },
  {
    id: 'jeff-j',
    name: 'Jeff J.',
    city: 'Hayward, CA',
    date: '2026-10-12',
    job: 'Backup cleared, shown on camera',
    jobEs: 'Drenaje destapado y revisado con cámara',
    services: ['drain-cleaning', 'sewer-lines', 'emergency-plumbing', 'plumbing-inspections'],
    quote:
      'They came out within the hour which was really helpful. They responded on the first call and gave text updates. They sent out multiple people, After 3hrs~ they cleared the issue and showed me with the camera where the issue started.',
  },
  {
    id: 'jacob-s',
    name: 'Jacob S.',
    city: 'Pasadena, CA',
    date: '2026-10-11',
    job: 'Failed water heater replaced',
    jobEs: 'Cambio de un calentador descompuesto',
    services: ['water-heaters'],
    quote:
      'Very kind group that showed up quickly, replaced the failed water heater quickly, and were clean and tidy throughout their time spent working.',
  },
  {
    id: 'jackie-r',
    name: 'Jackie R.',
    city: 'Walnut Creek, CA',
    date: '2026-10-08',
    job: 'Garbage disposal replaced',
    jobEs: 'Cambio de triturador de basura',
    services: ['fixtures', 'garbage-disposals'],
    quote:
      'We needed a garbage disposal replaced. They came out on the same day I called and everything works great now. Very fast and efficient service',
  },
  {
    id: 'cheryl-r',
    name: 'Cheryl R.',
    city: 'Oakland, CA',
    date: '2026-10-08',
    job: 'Sump pump for water under the house',
    jobEs: 'Bomba de sumidero para el agua bajo la casa',
    services: ['sewer-lines', 'sump-pumps'],
    quote:
      'Came out right away, fit me in for work the next day, fixed my standing water under the house problem by digging down through concrete & placing a sump pump then tied it into the sewer line. He and his team were professional, efficient, cleaned up perfectly afterward, all at a good price.',
  },
  {
    id: 'james-p',
    name: 'James P.',
    city: 'Berkeley, CA',
    date: '2026-10-05',
    job: 'Water heater replaced and brought up to code',
    jobEs: 'Calentador cambiado y puesto según el código',
    services: ['water-heaters', 'emergency-plumbing'],
    quote:
      "I called AB's Plumbing Services at around 10 PM, and Abraham responded within 10 minutes. … Not only did they replace the water heater, but they also updated all the fittings to bring everything up to code.",
  },
  {
    id: 'claude-q',
    name: 'Claude Q.',
    city: 'Union City, CA',
    date: '2026-10-05',
    job: 'Clogged kitchen sink cleared',
    jobEs: 'Fregadero de cocina destapado',
    services: ['drain-cleaning'],
    quote:
      'They snaked the pipe and cleared out all the grease and oil buildup that was causing the problem. Even better, they took the time to explain how to prevent it from happening again, which I really appreciated. … They wore shoe covers in the house and cleaned up thoroughly afterward.',
  },
  {
    id: 'anthony-r',
    name: 'Anthony R.',
    city: 'Del Mar, CA',
    date: '2026-10-05',
    job: 'Kitchen drain line replaced',
    jobEs: 'Cambio de la línea de drenaje de la cocina',
    services: ['drain-cleaning', 'sewer-lines'],
    quote:
      'They were back on Tuesday to complete the repair, which involved replacing a significant section of our existing 2" drain line with new 3" ABS, correcting the slope, and adding a new cleanout.',
  },
  {
    id: 'wesley-b',
    name: 'Wesley B.',
    city: 'El Cerrito, CA',
    date: '2026-09-12',
    job: 'Leaking water heater replaced',
    jobEs: 'Cambio de un calentador con fuga',
    services: ['water-heaters'],
    quote:
      'We were tired and not looking forward to going through the process of replacing a leaking water heater, but they made it so easy.',
  },
  {
    id: 'cola-c',
    name: 'Cola C.',
    city: 'San Francisco, CA',
    date: '2026-09-28',
    job: 'Garbage disposal replaced',
    jobEs: 'Cambio de triturador de basura',
    services: ['fixtures', 'garbage-disposals'],
    quote:
      'He responded to my request almost immediately on Sunday night and came out the next day. He was polite, courteous, and left everything clean.',
  },
  {
    id: 'michelle-l',
    name: 'Michelle L.',
    city: 'Danville, CA',
    date: '2026-09-21',
    job: 'Last-minute service call',
    jobEs: 'Servicio de último momento',
    services: ['emergency-plumbing'],
    quote: 'Quick and efficient call back. Good pricing. Worked with us and expedited service last minute!',
  },
  {
    id: 'connie-b',
    name: 'Connie B.',
    city: 'San Francisco, CA',
    date: '2026-08-31',
    job: 'Repair, plus help with faucet pressure',
    jobEs: 'Reparación y ayuda con la presión de una llave',
    services: ['fixtures', 'leaks-water-lines', 'faucets-sinks'],
    quote:
      'The job was done cleanly and quickly and Issac was really great about giving helpful advice for next time as well as answering a lot of other questions I had. … Estimates were accurate and totally transparent.',
  },
  {
    id: 'michelle-y',
    name: 'Michelle Y.',
    city: 'San Francisco, CA',
    date: '2026-08-25',
    job: 'Sink fixed',
    jobEs: 'Fregadero o lavabo reparado',
    services: ['drain-cleaning', 'fixtures', 'faucets-sinks'],
    quote:
      'Came right away within an hour of calling and fixed my sink immediately! Super responsive and handled everything immaculately!',
  },
  {
    id: 'robert-w',
    name: 'Robert W.',
    city: 'Oakland, CA',
    date: '2026-08-24',
    job: 'Toilet reseated',
    jobEs: 'Inodoro reinstalado',
    services: ['fixtures', 'toilets'],
    quote:
      'They showed up about an hour after I called and had things completed right away. Fast and efficient service at a reasonable price.',
  },
  {
    id: 'sam-i',
    name: 'Sam I.',
    city: 'Oakland, CA',
    date: '2026-08-17',
    job: 'Leaking toilet fixed',
    jobEs: 'Fuga del inodoro reparada',
    services: ['fixtures', 'toilets'],
    quote:
      'Worked with us quickly and sent some great plumbers who were considerate and able to fix our leaking toilet no problem.',
  },
  {
    id: 'ahmer-s',
    name: 'Ahmer S.',
    city: 'Oakland, CA',
    date: '2026-08-02',
    job: 'Emergency leak',
    jobEs: 'Fuga de emergencia',
    services: ['leaks-water-lines', 'emergency-plumbing'],
    quote:
      'We had an emergency leak issue and called AB\'s Plumbing. Abraham was prompt, super thorough in their troubleshooting and isolated the issue quickly. He even fixed a few other unrelated items he discovered during the investigation without additional charge.',
  },
  {
    id: 'seiji-n',
    name: 'Seiji N.',
    city: 'Oakland, CA',
    date: '2026-07-27',
    job: 'After-hours faucet line leak',
    jobEs: 'Fuga en la línea de una llave, fuera de horario',
    services: ['leaks-water-lines', 'fixtures', 'faucets-sinks'],
    quote:
      'We had a slow leak coming from a kitchen faucet line, after hours. Guy came on time, and did the job very quickly. The plumber they sent was super polite, used shoe coverings to enter the home, explained everything carefully, and cleaned up after himself.',
  },
  {
    id: 'avi-j',
    name: 'Avi J.',
    city: 'Albany, CA',
    date: '2026-07-03',
    job: 'Three outdoor faucets replaced',
    jobEs: 'Cambio de tres llaves de afuera',
    services: ['leaks-water-lines', 'fixtures', 'faucets-sinks'],
    quote:
      'These guys are terrific. Every time they come over, they outdo themselves. I wish I could give them ten stars.',
  },
  {
    id: 'natalye-b',
    name: 'Natalye B.',
    city: 'Oakland, CA',
    date: '2026-06-01',
    job: 'Sewer backup from tree roots',
    jobEs: 'Drenaje tapado por raíces de árbol',
    services: ['sewer-lines', 'emergency-plumbing', 'plumbing-inspections'],
    quote:
      "He told me he'd be there within about an hour, and he was. … He then ran a camera through the line and showed me exactly what was causing the backup: tree roots had intruded into the sewer pipe.",
  },
];

export function reviewById(id: string): Review {
  const review = reviews.find((r) => r.id === id);
  if (!review) throw new Error(`Unknown review id: ${id}`);
  return review;
}

export function reviewsFor(service: ServiceSlug): Review[] {
  return reviews.filter((r) => r.services.includes(service));
}

export function formatReviewDate(iso: string, locale: 'en' | 'es' = 'en'): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale === 'es' ? 'es-US' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
