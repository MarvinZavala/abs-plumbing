import type { Metadata } from 'next';
import { CoverageSection } from '@/components/coverage-section';
import { CrewSection } from '@/components/crew-section';
import { EstimateSection } from '@/components/estimate-section';
import { FaqList } from '@/components/faq-list';
import { FeaturedWork } from '@/components/featured-work';
import { HomeHero } from '@/components/home-hero';
import { ProcessSteps } from '@/components/process-steps';
import { ReviewsSection } from '@/components/reviews-section';
import { ServiceList } from '@/components/service-list';
import { business } from '@/content/business';
import { moreServicesEs } from '@/content/es';
import { languageAlternates } from '@/lib/i18n-routes';

export const metadata: Metadata = {
  title: { absolute: 'Plomero 24/7 en Oakland y la Bahía | AB’s Plumbing Services' },
  description: `Plomeros de Oakland, abiertos 24/7: fugas, drenajes tapados, calentadores de agua y líneas de drenaje en toda la Bahía. Hablamos español. Llame al ${business.phone.display}.`,
  alternates: { canonical: '/es', languages: languageAlternates('/', '/es') },
};

/** The home page in Spanish. Section ids match the Spanish menu (/es#servicios, #como-trabajamos, ...). */
export default function SpanishHomePage() {
  return (
    <>
      <HomeHero locale="es" />

      <section id="servicios" aria-labelledby="services-title" className="scroll-mt-20 bg-white">
        <div className="wrap grid gap-8 py-14 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="services-title" className="type-h2">
              Lo que reparamos
            </h2>
            <p className="type-lead measure mt-4">
              Desde una llave que gotea hasta la línea de drenaje debajo de la calle. Elija el problema para ver cómo lo
              resolvemos.
            </p>
          </div>
          <div>
            <ServiceList locale="es" />
            <p className="measure mt-6 text-slate">
              <span className="font-semibold text-ink">También hacemos:</span> {moreServicesEs.join(', ').toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      <ProcessSteps locale="es" id="como-trabajamos" />

      <ReviewsSection locale="es" ids={['mary-s', 'jeffrey-j', 'james-p', 'claude-q', 'natalye-b', 'avi-j']} />

      <section aria-labelledby="work-title" className="bg-white">
        <div className="wrap py-14 lg:py-20">
          <h2 id="work-title" className="type-h2">
            Trabajos reales, fotos reales
          </h2>
          <p className="type-lead measure mt-4">
            No usamos fotos de catálogo. Son trabajos que nuestro equipo ha hecho en el Área de la Bahía.
          </p>
          <div className="mt-10">
            <FeaturedWork
              locale="es"
              ids={[
                'commercial-kitchen-drain-line',
                'tankless-water-heater-shingle-wall',
                'sewer-lateral-street-patch',
                'gas-water-heater-replacement',
                'kitchen-sink-faucet-install',
              ]}
            />
          </div>
        </div>
      </section>

      <CrewSection locale="es" />
      <CoverageSection locale="es" id="cobertura" />
      <EstimateSection locale="es" />
      <FaqList locale="es" />
    </>
  );
}
