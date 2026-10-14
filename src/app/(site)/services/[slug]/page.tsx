import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceLanding } from '@/components/service-landing';
import { serviceEs } from '@/content/es';
import { serviceBySlug, services } from '@/content/services';
import { languageAlternates } from '@/lib/i18n-routes';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = serviceBySlug((await params).slug);
  if (!service) return {};
  const path = `/services/${service.slug}`;
  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: path, languages: languageAlternates(path, `/es/servicios/${serviceEs(service.slug).slugEs}`) },
    // No page-level openGraph on purpose: it would replace the inherited share image.
  };
}

export default async function ServicePage({ params }: Props) {
  const service = serviceBySlug((await params).slug);
  if (!service) notFound();
  return <ServiceLanding slug={service.slug} locale="en" />;
}
