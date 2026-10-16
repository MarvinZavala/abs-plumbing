import type { Locale } from '@/content/i18n';
import { serviceGroups } from '@/content/service-groups';
import { ServiceList } from './service-list';

/** Every service, grouped (content/service-groups.ts), each group as a short list of rows with job photos. */
export function ServicesDirectory({ locale = 'en' }: { locale?: Locale }) {
  return (
    <div className="grid gap-x-16 gap-y-12 lg:grid-cols-2">
      {serviceGroups.map((group) => (
        <section key={group.id} aria-labelledby={`group-${group.id}`}>
          <h3 id={`group-${group.id}`} className="type-h3">
            {group.name[locale]}
          </h3>
          <div className="mt-3">
            <ServiceList locale={locale} slugs={group.services} />
          </div>
        </section>
      ))}
    </div>
  );
}
