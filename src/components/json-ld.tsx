import { siteUrl } from '@/lib/site';
import { businessJsonLd, websiteJsonLd } from '@/lib/structured-data';

/** Renders schema.org JSON-LD. "<" is escaped so the payload can never close the script tag. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

/** Site-wide graph: the WebSite and the Plumber that publishes it, linked by @id. */
export function SiteJsonLd() {
  const base = siteUrl().toString();
  return <JsonLd data={[websiteJsonLd(base), businessJsonLd(base)]} />;
}
