import type { Metadata } from 'next';
import { EstimateSection } from '@/components/estimate-section';
import { FaqList } from '@/components/faq-list';
import { ReviewsSection } from '@/components/reviews-section';
import { ServiceArea } from '@/components/service-area';

export const metadata: Metadata = {
  title: 'Service Areas: Oakland, San Francisco, Berkeley & the Bay Area',
  description:
    'AB’s Plumbing is based in Fruitvale, Oakland and works across the Bay Area: Oakland, Berkeley, San Francisco, Hayward, Fremont, San Jose and more. Open 24/7.',
  alternates: { canonical: '/service-areas' },
};

export default function ServiceAreasPage() {
  return (
    <>
      <ServiceArea headingLevel="h1" />
      <ReviewsSection
        ids={['jeff-j', 'jackie-r', 'wesley-b', 'claude-q', 'michelle-y', 'avi-j']}
        title="From Hayward to Walnut Creek"
      />
      <EstimateSection />
      <FaqList />
    </>
  );
}
