import { business } from './business';

export type Faq = { q: string; a: string };

const license = business.license
  ? `Yes. AB’s Plumbing is licensed in California (CSLB #${business.license}) and insured.`
  : 'Yes. AB’s Plumbing is licensed and insured in California.';

export const faqs: Faq[] = [
  {
    q: 'How fast can you get here?',
    a: 'It depends on where you are and what’s going on, but for emergencies we head out right away. Reviewers regularly mention the crew arriving within the hour.',
  },
  {
    q: 'Are you really open 24/7?',
    a: 'Yes. Call any time, including nights and weekends.',
  },
  {
    q: 'Will I know the price before you start?',
    a: 'Yes. We look at the problem, explain what’s going on, and give you a price before any work starts. Estimates are free.',
  },
  {
    q: 'Are you licensed and insured?',
    a: license,
  },
  {
    q: 'Can you show me what’s wrong with my drain or sewer line?',
    a: 'Yes. For drain and sewer problems we can run a camera through the line and show you on screen what’s causing it.',
  },
  {
    q: 'Do you work on apartment buildings and businesses?',
    a: 'Yes. Along with houses, our crew works on apartment buildings, restaurants and other commercial spaces.',
  },
  {
    q: 'How can I pay?',
    a: 'Cash, credit card or Zelle.',
  },
];
