import { Check, TriangleAlert } from 'lucide-react';
import { serviceEs } from '@/content/es';
import type { Locale } from '@/content/i18n';
import { reviewsFor } from '@/content/reviews';
import { serviceBySlug, type ServiceSlug } from '@/content/services';
import { inLocale, photoById, work } from '@/content/work';
import { breadcrumbJsonLd, serviceJsonLd, spanishServiceJsonLd } from '@/lib/structured-data';
import { EstimateSection } from './estimate-section';
import { FaqList } from './faq-list';
import { JsonLd } from './json-ld';
import { PageHero } from './page-hero';
import { ProcessSteps } from './process-steps';
import { ReviewsSection } from './reviews-section';
import { ServiceList } from './service-list';
import { WorkGrid } from './work-grid';

const copy = {
  en: {
    home: { name: 'Home', path: '/' },
    services: { name: 'Services', path: '/services' },
    back: { href: '/services', label: 'All services' },
    whileTitle: 'While you wait for us',
    emergencySteps: [
      {
        title: 'Water everywhere?',
        body: 'Turn off the main water shut-off. It’s usually near the water meter, in the garage, or where the line enters the house.',
      },
      { title: 'Toilet overflowing?', body: 'Turn the small valve behind the toilet clockwise until the water stops.' },
      { title: 'Sewage backing up?', body: 'Stop using water in the house (no flushing, showers or laundry) until we get there.' },
    ],
    gas: {
      lead: 'Smell gas?',
      before: 'Leave the building without flipping any switches, then call PG&E at',
      after: 'or 911 from outside.',
    },
    familiar: 'Sound familiar?',
    whatWeDo: 'What we do about it',
    reviewsTitle: (name: string) => `${name}, in our customers’ words`,
    photosTitle: (name: string) => `Recent ${name.toLowerCase()} work`,
    other: 'Other things we fix',
  },
  es: {
    home: { name: 'Inicio', path: '/es' },
    services: null,
    back: { href: '/es#servicios', label: 'Todos los servicios' },
    whileTitle: 'Mientras llegamos',
    emergencySteps: [
      {
        title: '¿Agua por todos lados?',
        body: 'Cierre la llave principal del agua. Normalmente está cerca del medidor, en el garaje o donde la línea entra a la casa.',
      },
      {
        title: '¿Se desborda el inodoro?',
        body: 'Gire la llavecita que está detrás del inodoro hacia la derecha hasta que pare el agua.',
      },
      {
        title: '¿Se regresan las aguas negras?',
        body: 'Deje de usar agua en la casa (no use el inodoro, la regadera ni la lavadora) hasta que lleguemos.',
      },
    ],
    gas: {
      lead: '¿Huele a gas?',
      before: 'Salga del edificio sin prender ni apagar ningún interruptor, y desde afuera llame a PG&E al',
      after: 'o al 911.',
    },
    familiar: '¿Le suena familiar?',
    whatWeDo: 'Lo que hacemos',
    reviewsTitle: (name: string) => `${name}, en palabras de nuestros clientes`,
    photosTitle: (name: string) => `Trabajos recientes de ${name.toLowerCase()}`,
    other: 'Otras cosas que reparamos',
  },
};

/** A service landing page (the Google Ads destination), in English or Spanish. */
export function ServiceLanding({ slug, locale = 'en' }: { slug: ServiceSlug; locale?: Locale }) {
  const service = serviceBySlug(slug)!;
  const es = serviceEs(slug);
  const c = copy[locale];
  const text =
    locale === 'es'
      ? { name: es.name, headline: es.headline, lead: es.lead, problems: es.problems, includes: es.includes, path: `/es/servicios/${es.slugEs}` }
      : { ...service, path: `/services/${slug}` };

  const [heroPhoto, ...morePhotos] = service.photos.map((id) => photoById(id, locale));
  // Featured reviews first, then any other review that mentions this service.
  const reviewIds = [
    ...service.featuredReviews,
    ...reviewsFor(slug)
      .map((r) => r.id)
      .filter((id) => !service.featuredReviews.includes(id)),
  ].slice(0, 6);
  // Photos tagged for this service that aren't already shown, to fill the grid.
  const gridPhotos = [
    ...morePhotos,
    ...work.filter((p) => p.services.includes(slug) && !service.photos.includes(p.id)).map((p) => inLocale(p, locale)),
  ].slice(0, 8);
  const isEmergency = slug === 'emergency-plumbing';

  return (
    <>
      <JsonLd data={locale === 'es' ? spanishServiceJsonLd(slug) : serviceJsonLd(service)} />
      <JsonLd data={breadcrumbJsonLd([c.home, ...(c.services ? [c.services] : []), { name: text.name, path: text.path }])} />
      <PageHero
        locale={locale}
        title={text.headline}
        lead={text.lead}
        photo={heroPhoto}
        placement={locale === 'es' ? `lp-es-${slug}` : `lp-${slug}`}
        back={c.back}
      />

      {isEmergency && (
        <section aria-labelledby="while-title" className="border-y border-line bg-white">
          <div className="wrap py-10">
            <h2 id="while-title" className="type-h3">
              {c.whileTitle}
            </h2>
            <ul className="mt-5 grid gap-5 md:grid-cols-3">
              {c.emergencySteps.map((s) => (
                <li key={s.title}>
                  <p className="font-display text-[1.25rem] font-semibold text-ink">{s.title}</p>
                  <p className="mt-1">{s.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex gap-3 rounded-control border-2 border-alert/40 bg-alert/5 p-4 text-ink">
              <TriangleAlert className="mt-0.5 size-5 shrink-0 text-alert" aria-hidden="true" />
              <span>
                <strong>{c.gas.lead}</strong> {c.gas.before}{' '}
                <a href="tel:+18007435000" className="font-semibold whitespace-nowrap underline underline-offset-4">
                  1-800-743-5000
                </a>{' '}
                {c.gas.after}
              </span>
            </p>
          </div>
        </section>
      )}

      <section aria-labelledby="fit-title" className="bg-concrete">
        <div className="wrap grid gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <h2 id="fit-title" className="type-h2">
              {c.familiar}
            </h2>
            <ul className="mt-6 space-y-3">
              {text.problems.map((p) => (
                <li key={p} className="flex gap-3 text-[1.08rem] text-ink">
                  <Check className="mt-1 size-5 shrink-0 text-blue" strokeWidth={3} aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="type-h2">{c.whatWeDo}</h2>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {text.includes.map((item) => (
                <div key={item.title} className="py-4">
                  <dt className="type-h3">{item.title}</dt>
                  <dd className="mt-1">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <ReviewsSection locale={locale} ids={reviewIds} title={c.reviewsTitle(text.name)} />

      {gridPhotos.length > 0 && (
        <section aria-labelledby="photos-title" className="bg-white">
          <div className="wrap py-14 lg:py-20">
            <h2 id="photos-title" className="type-h2">
              {c.photosTitle(text.name)}
            </h2>
            <div className="mt-8">
              <WorkGrid photos={gridPhotos} locale={locale} />
            </div>
          </div>
        </section>
      )}

      <ProcessSteps locale={locale} />
      <EstimateSection locale={locale} defaultService={slug} defaultUrgency={isEmergency ? 'emergency' : 'soon'} />
      <FaqList locale={locale} />

      <section aria-labelledby="other-title" className="bg-concrete">
        <div className="wrap py-14 lg:py-20">
          <h2 id="other-title" className="type-h2">
            {c.other}
          </h2>
          <div className="mt-8">
            <ServiceList locale={locale} exclude={slug} />
          </div>
        </div>
      </section>
    </>
  );
}
