import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';

const TAG_ID = /^(AW|G|GT)-[A-Z0-9]+$/;

/**
 * Google tags, driven by environment variables (nothing loads until they are set):
 * - NEXT_PUBLIC_GTM_ID: Google Tag Manager container (preferred when an agency manages tags).
 * - otherwise NEXT_PUBLIC_GOOGLE_ADS_ID (AW-...) and/or NEXT_PUBLIC_GA_ID (G-...) via gtag.js.
 * Use one approach or the other, not both, or conversions are counted twice.
 */
export function Analytics() {
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  if (gtm && /^GTM-[A-Z0-9]+$/.test(gtm)) return <GoogleTagManager gtmId={gtm} />;

  const ids = [process.env.NEXT_PUBLIC_GOOGLE_ADS_ID, process.env.NEXT_PUBLIC_GA_ID].filter(
    (id): id is string => !!id && TAG_ID.test(id),
  );
  if (ids.length === 0) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());${ids
          .map((id) => `gtag('config','${id}');`)
          .join('')}`}
      </Script>
    </>
  );
}
