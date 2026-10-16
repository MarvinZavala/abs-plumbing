import type { Metadata } from 'next';
import { EstimateSection } from '@/components/estimate-section';
import { FaqList } from '@/components/faq-list';
import { JsonLd } from '@/components/json-ld';
import { PageHero } from '@/components/page-hero';
import { ProcessSteps } from '@/components/process-steps';
import { ReviewsSection } from '@/components/reviews-section';
import { ServicesDirectory } from '@/components/services-directory';
import { business } from '@/content/business';
import { servicesEs } from '@/content/es';
import { photoById } from '@/content/work';
import { languageAlternates } from '@/lib/i18n-routes';
import { breadcrumbJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Servicios de plomería en Oakland y la Bahía',
  description: `Destape de drenajes, calentadores de agua, líneas de drenaje y de gas, fugas, inodoros y más. Abierto 24/7. Hablamos español. Llame al ${business.phone.display}.`,
  alternates: { canonical: '/es/servicios', languages: languageAlternates('/services', '/es/servicios') },
};

/** Every service in Spanish, grouped, each linking to its Spanish landing page. */
export default function ServiciosPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Inicio', path: '/es' }, { name: 'Servicios', path: '/es/servicios' }])} />
      <PageHero
        locale="es"
        title="Servicios de plomería para casas y negocios en la Bahía"
        lead="Reparaciones, instalaciones y emergencias, con nuestro propio equipo. Elija el problema que tiene."
        photo={photoById('tankless-water-heater-shingle-wall', 'es')}
        placement="servicios"
      />

      <section aria-labelledby="list-title" className="bg-concrete">
        <div className="wrap py-14 lg:py-20">
          <h2 id="list-title" className="type-h2">
            Lo que reparamos
          </h2>
          <p className="type-lead measure mt-4">
            {servicesEs.length} servicios, cada uno con su propia página. Elija el que corresponde a lo que le pasa.
          </p>
          <div className="mt-10">
            <ServicesDirectory locale="es" />
          </div>
        </div>
      </section>

      <ReviewsSection locale="es" ids={['jeffrey-j', 'james-p', 'cheryl-r', 'seiji-n', 'connie-b', 'robert-w']} />
      <ProcessSteps locale="es" />
      <EstimateSection locale="es" />
      <FaqList locale="es" />
    </>
  );
}
