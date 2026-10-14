import { Plus } from 'lucide-react';
import { faqsEs } from '@/content/es';
import { faqs, type Faq } from '@/content/faqs';
import { t, type Locale } from '@/content/i18n';
import { faqJsonLd } from '@/lib/structured-data';
import { JsonLd } from './json-ld';

/** Native <details> disclosure: works without JavaScript and with screen readers. */
export function FaqList({
  locale = 'en',
  items = locale === 'es' ? faqsEs : faqs,
  title = t(locale).faqTitle,
}: {
  locale?: Locale;
  items?: Faq[];
  title?: string;
}) {
  return (
    <section aria-labelledby="faq-title" className="bg-white">
      <JsonLd data={faqJsonLd(items)} />
      <div className="wrap grid gap-8 py-14 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-20">
        <h2 id="faq-title" className="type-h2">
          {title}
        </h2>
        <div className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 py-3 font-display text-[1.3rem] font-semibold leading-tight text-ink">
                {item.q}
                <Plus className="size-6 shrink-0 transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="measure pb-5">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
