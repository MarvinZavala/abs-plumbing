/**
 * llms.txt (https://llmstxt.org) and a fuller companion file, generated from the same content files as the
 * site so AI assistants get exactly the facts visitors see. Facts only: no instructions aimed at the model.
 */
import { areas } from '../content/areas.ts';
import { business } from '../content/business.ts';
import { faqs } from '../content/faqs.ts';
import { steps } from '../content/process.ts';
import { formatReviewDate, reviewById, reviews } from '../content/reviews.ts';
import { moreServices, services } from '../content/services.ts';

const abs = (base: string, path: string) => new URL(path, base).toString();
const checked = formatReviewDate(business.factsCheckedOn);

function summary(): string {
  return (
    `> ${business.name} is a family-owned plumbing company based in ${business.base.neighborhood}, ` +
    `${business.base.city}, California, serving the entire San Francisco Bay Area 24 hours a day, 7 days a week. ` +
    `${business.acceptsTexts ? 'Call or text' : 'Call'} ${business.phone.display}.`
  );
}

function keyFacts(base: string): string[] {
  return [
    `- Phone: ${business.phone.display}${business.acceptsTexts ? ' (calls and texts)' : ''}, open 24 hours, 7 days a week`,
    `- Home base: ${business.base.neighborhood}, ${business.base.city}, ${business.base.region} ${business.base.postalCode}`,
    '- Service area: the whole San Francisco Bay Area (East Bay, San Francisco and the Peninsula, South Bay, and north to Vallejo)',
    `- ${business.license ? `Licensed (California CSLB #${business.license}) and insured` : 'Licensed and insured in California'}`,
    '- Free estimates, with the price given before any work starts',
    '- Payment: cash, credit cards and Zelle',
    `- Reviews: ${business.yelp.rating} out of 5 stars from ${business.yelp.reviewCount} reviews on Yelp (checked ${checked})`,
    ...(business.aslProficient ? ['- ASL proficient'] : []),
    `- Email: ${business.email}`,
    `- Website: ${abs(base, '/')}`,
  ];
}

export function buildLlmsTxt(base: string): string {
  return [
    `# ${business.name}`,
    '',
    summary(),
    '',
    'Key facts:',
    '',
    ...keyFacts(base),
    '',
    '## Services',
    '',
    ...services.map((s) => `- [${s.name}](${abs(base, `/services/${s.slug}`)}): ${s.summary}`),
    `- Also: ${moreServices.join(', ').toLowerCase()}.`,
    '',
    '## Company',
    '',
    `- [Home](${abs(base, '/')}): overview, recent reviewed jobs, how a job goes and the free estimate form`,
    `- [All services](${abs(base, '/services')}): every service with links to the details`,
    `- [Service areas](${abs(base, '/service-areas')}): every city served, with customer reviews grouped by city`,
    `- [Our work](${abs(base, '/gallery')}): photos from real jobs`,
    `- [About the crew](${abs(base, '/about')}): who we are and how we work`,
    '',
    '## Optional',
    '',
    `- [Full details](${abs(base, '/llms-full.txt')}): services, process, cities, FAQs and customer quotes in one file`,
    `- [Reviews on Yelp](${business.yelp.url}): all ${business.yelp.reviewCount} reviews`,
    `- [Privacy policy](${abs(base, '/privacy')})`,
    '',
  ].join('\n');
}

export function buildLlmsFullTxt(base: string): string {
  const out: string[] = [`# ${business.name}: full details`, '', summary(), '', `Facts checked: ${checked}.`, '', '## Contact and key facts', '', ...keyFacts(base), ''];

  out.push('## Services', '');
  for (const s of services) {
    out.push(`### ${s.name}`, '', `Page: ${abs(base, `/services/${s.slug}`)}`, '', `${s.headline} ${s.lead}`, '', 'Common problems:', '');
    out.push(...s.problems.map((p) => `- ${p}`), '', 'What the crew does:', '');
    out.push(...s.includes.map((i) => `- ${i.title}: ${i.body}`), '');
  }
  out.push('### Other work', '', ...moreServices.map((m) => `- ${m}`), '');

  out.push('## How a job goes', '');
  steps.forEach((step, i) => {
    const r = reviewById(step.proof.reviewId);
    out.push(`${i + 1}. ${step.title}. ${step.body} A customer wrote: “${step.proof.quote}” (${r.name}, ${r.city.replace(/, CA$/, '')}, on Yelp)`);
  });
  out.push('');

  out.push('## Service area', '', `Home base: ${business.base.neighborhood}, ${business.base.city}. The crew serves the entire San Francisco Bay Area.`, '');
  for (const area of areas) out.push(`- ${area.region}: ${area.cities.join(', ')}`);
  out.push('', `If a Bay Area city is not listed, call ${business.phone.display} to confirm.`, '');

  out.push('## Frequently asked questions', '');
  for (const f of faqs) out.push(`### ${f.q}`, '', f.a, '');

  out.push('## What customers say', '', 'Verbatim excerpts from reviews on Yelp. “…” marks skipped sentences.', '');
  for (const r of reviews) {
    out.push(`- “${r.quote}” (${r.name}, ${r.city.replace(/, CA$/, '')}, ${formatReviewDate(r.date)}; job: ${r.job.toLowerCase()})`);
  }
  out.push('', `All reviews: ${business.yelp.url}`, '');
  return out.join('\n');
}
