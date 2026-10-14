import { business } from '@/content/business';
import type { Locale } from '@/content/i18n';

const copy = {
  en: {
    title: 'A local crew, not a call center.',
    lead: 'AB’s Plumbing is a family-owned plumbing company from Oakland. Our crew works on houses, apartment buildings and restaurants all over the Bay Area, and we’re on call around the clock.',
    facts: [
      ['Based in', business.base.city],
      ['Hours', business.hours],
      ['License', business.license ? `CA #${business.license}, insured` : 'Licensed and insured in California'],
      ['Estimates', 'Free, with the price before any work starts'],
      ['Payment', 'Cash, credit cards and Zelle'],
      ['Languages', 'English and Spanish'],
      ...(business.aslProficient ? [['Accessibility', 'ASL proficient']] : []),
      ['On Yelp', `${business.yelp.rating} stars from ${business.yelp.reviewCount} reviews`],
    ],
  },
  es: {
    title: 'Un equipo local, no un call center.',
    lead: 'AB’s Plumbing es una empresa familiar de plomería de Oakland. Nuestro equipo trabaja en casas, edificios de departamentos y restaurantes en toda el Área de la Bahía, y estamos disponibles a toda hora.',
    facts: [
      ['Con base en', business.base.city],
      ['Horario', 'Abierto 24 horas, los 7 días'],
      ['Licencia', business.license ? `CA #${business.license}, con seguro` : 'Con licencia y seguro en California'],
      ['Cotizaciones', 'Gratis, con el precio antes de empezar'],
      ['Pago', 'Efectivo, tarjetas de crédito y Zelle'],
      ['Idiomas', 'Español e inglés'],
      ...(business.aslProficient ? [['Accesibilidad', 'Lenguaje de señas americano (ASL)']] : []),
      ['En Yelp', `${business.yelp.rating} estrellas de ${business.yelp.reviewCount} reseñas`],
    ],
  },
} satisfies Record<Locale, { title: string; lead: string; facts: string[][] }>;

/** The team, not a single person, is the brand. */
export function CrewSection({ locale = 'en' }: { locale?: Locale }) {
  const c = copy[locale];
  return (
    <section aria-labelledby="crew-title" className="bg-concrete">
      <div className="wrap grid gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <h2 id="crew-title" className="type-h2">
            {c.title}
          </h2>
          <p className="type-lead measure mt-5">{c.lead}</p>
          {locale === 'en' ? (
            <figure className="mt-8 border-l-4 border-action pl-5">
              <blockquote className="font-display text-[1.65rem] font-semibold leading-tight text-ink">
                “Ab, Issac and Omar were very knowledgeable and helpful. They are considerate about pricing.”
              </blockquote>
              <figcaption className="mt-2 text-mute">Jeffrey J., Oakland, on Yelp</figcaption>
            </figure>
          ) : (
            <p className="mt-8 border-l-4 border-action pl-5 font-display text-[1.65rem] font-semibold leading-tight text-ink">
              Hablamos español. Llame o mande un texto y le atendemos en su idioma.
            </p>
          )}
        </div>
        <dl className="self-start divide-y divide-line border-y border-line">
          {c.facts.map(([term, detail]) => (
            <div key={term} className="grid grid-cols-[7.5rem_1fr] gap-4 py-3.5 sm:grid-cols-[9rem_1fr]">
              <dt className="font-semibold text-ink">{term}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
