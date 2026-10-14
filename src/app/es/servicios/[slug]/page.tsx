import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceLanding } from '@/components/service-landing';
import { serviceEsBySlugEs, servicesEs } from '@/content/es';
import { languageAlternates } from '@/lib/i18n-routes';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return servicesEs.map((s) => ({ slug: s.slugEs }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = serviceEsBySlugEs((await params).slug);
  if (!service) return {};
  const path = `/es/servicios/${service.slugEs}`;
  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: path, languages: languageAlternates(`/services/${service.slug}`, path) },
  };
}

/** Spanish landing page for a service, for Spanish-language ad groups and searches. */
export default async function SpanishServicePage({ params }: Props) {
  const service = serviceEsBySlugEs((await params).slug);
  if (!service) notFound();
  return <ServiceLanding slug={service.slug} locale="es" />;
}
