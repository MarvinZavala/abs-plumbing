/**
 * How a job goes, step by step. Each step is backed by a verbatim sentence from a Yelp review
 * (see reviews.ts for the reviewer details).
 */
export const steps = [
  {
    title: 'You call or text',
    body: 'Day or night. Tell us what’s happening, and send a photo if it helps.',
    proof: { quote: 'They responded on the first call and gave text updates.', reviewId: 'jeff-j' },
  },
  {
    title: 'We find the cause',
    body: 'We diagnose before we fix. For drains and sewers that can mean a camera down the line, so you see it too.',
    proof: {
      quote: 'He then ran a camera through the line and showed me exactly what was causing the backup: tree roots had intruded into the sewer pipe.',
      reviewId: 'natalye-b',
    },
  },
  {
    title: 'You get the price first',
    body: 'We explain the fix and what it costs before any work starts. No hidden fees.',
    proof: { quote: 'Estimates were accurate and totally transparent.', reviewId: 'connie-b' },
  },
  {
    title: 'We fix it and clean up',
    body: 'Shoe covers on, work area cleaned, and everything tested before we leave.',
    proof: { quote: 'They wore shoe covers in the house and cleaned up thoroughly afterward.', reviewId: 'claude-q' },
  },
];
