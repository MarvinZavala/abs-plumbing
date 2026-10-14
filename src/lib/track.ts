/**
 * Conversion tracking for Google Ads / GTM.
 * - Always pushes a dataLayer event (for Google Tag Manager triggers).
 * - Also fires a gtag conversion when NEXT_PUBLIC_GOOGLE_ADS_ID and the matching label are set.
 */
export type TrackEvent = 'call_click' | 'text_click' | 'estimate_click' | 'lead_submit' | 'language_switch';

const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const conversionLabels: Partial<Record<TrackEvent, string | undefined>> = {
  call_click: process.env.NEXT_PUBLIC_ADS_LABEL_CALL,
  text_click: process.env.NEXT_PUBLIC_ADS_LABEL_TEXT,
  lead_submit: process.env.NEXT_PUBLIC_ADS_LABEL_LEAD,
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: TrackEvent, params: Record<string, string> = {}): void {
  if (typeof window === 'undefined') return;
  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event, ...params });
    const label = conversionLabels[event];
    if (adsId && label && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', { send_to: `${adsId}/${label}` });
    }
  } catch {
    // Tracking must never break a call or a form submission.
  }
}

const ATTRIBUTION_KEY = 'ab-attribution';
const ATTRIBUTION_PARAMS = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term'];

/** Remember ad click ids for this visit so the estimate form can pass them along with the lead. */
export function captureAttribution(search: string): void {
  try {
    const params = new URLSearchParams(search);
    const found = Object.fromEntries(ATTRIBUTION_PARAMS.filter((p) => params.get(p)).map((p) => [p, params.get(p)!]));
    if (Object.keys(found).length > 0) sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(found));
  } catch {
    // Storage can be unavailable (private mode); attribution is a nice-to-have.
  }
}

export function readAttribution(): Record<string, string> {
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}
