/**
 * Estimate-request ("lead") handling: validation, normalization and spam checks.
 * Kept free of Next.js imports so it runs under `node --test` (see tests/lead.test.ts).
 */
import { services, type ServiceSlug } from '../content/services.ts';

export type ServiceChoice = ServiceSlug | 'not-sure';
export type Urgency = 'emergency' | 'soon' | 'quote';
export type LeadField = 'name' | 'phone' | 'zip';
export type Language = 'en' | 'es';

export type Attribution = {
  gclid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
};

export type Lead = {
  name: string;
  phone: string;
  zip: string;
  service: ServiceChoice;
  urgency: Urgency;
  details: string;
  page: string;
  /** Language of the form the visitor used, so the crew calls back in it. */
  language: Language;
  attribution: Attribution;
};

export type ParseResult =
  | { ok: true; lead: Lead }
  | { ok: false; errors: Partial<Record<LeadField, string>> }
  | { ok: false; spam: true };

export const urgencyLabels: Record<Urgency, string> = {
  emergency: 'Emergency, right now',
  soon: 'In the next day or two',
  quote: 'Just getting a quote',
};

/** What the visitor reads, in the language of the form they used. */
const text = {
  en: {
    errors: { name: 'Enter your name.', phone: 'Enter a 10-digit phone number.', zip: 'Enter a 5-digit ZIP code.' },
    invalid: 'Check the highlighted fields.',
    failed: (phone: string) => `We couldn’t send your request. Please call us at ${phone}, we’re open 24/7.`,
  },
  es: {
    errors: {
      name: 'Escriba su nombre.',
      phone: 'Escriba un teléfono de 10 dígitos.',
      zip: 'Escriba un código postal (ZIP) de 5 dígitos.',
    },
    invalid: 'Revise los campos marcados.',
    failed: (phone: string) => `No pudimos enviar su solicitud. Llámenos al ${phone}, abrimos 24/7.`,
  },
} satisfies Record<Language, { errors: Record<LeadField, string>; invalid: string; failed: (phone: string) => string }>;

const languageOf = (fields: Record<string, string | undefined>): Language => (fields.lang === 'es' ? 'es' : 'en');

/** Humans need a few seconds to fill the form; scripts don't. */
const MIN_FILL_MS = 2_500;

const ATTRIBUTION_KEYS: [string, keyof Attribution][] = [
  ['gclid', 'gclid'],
  ['utm_source', 'utmSource'],
  ['utm_medium', 'utmMedium'],
  ['utm_campaign', 'utmCampaign'],
  ['utm_term', 'utmTerm'],
];

function clean(value: string | undefined, max: number, { keepNewlines = false } = {}): string {
  const text = (value ?? '')
    // drop control characters (keep line breaks only where asked)
    .replace(keepNewlines ? /[\u0000-\u0009\u000B-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g, ' ')
    .replace(keepNewlines ? /[^\S\n]+/g : /\s+/g, ' ')
    .trim();
  return text.slice(0, max);
}

/** 10-digit NANP number formatted as (510) 555-0142, or null. */
export function normalizePhone(raw: string | undefined): string | null {
  let digits = (raw ?? '').replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
  if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(digits)) return null;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function normalizeZip(raw: string | undefined): string | null {
  const match = (raw ?? '').trim().match(/^(\d{5})(?:-\d{4})?$/);
  return match ? match[1] : null;
}

function normalizePage(raw: string | undefined): string {
  const path = (raw ?? '').trim().split(/[?#]/)[0];
  if (!path.startsWith('/') || path.startsWith('//')) return '/';
  return path.slice(0, 200);
}

function isSpam(fields: Record<string, string | undefined>, now: number): boolean {
  // The trap field has a deliberately meaningless name: browsers won't autofill it, bots fill everything.
  if (clean(fields.ab_check, 200)) return true;
  const startedAt = Number(fields.startedAt);
  if (fields.startedAt && Number.isFinite(startedAt) && now - startedAt < MIN_FILL_MS) return true;
  return false;
}

export function parseLead(fields: Record<string, string | undefined>, now: number): ParseResult {
  if (isSpam(fields, now)) return { ok: false, spam: true };

  const name = clean(fields.name, 80);
  const phone = normalizePhone(fields.phone);
  const zip = normalizeZip(fields.zip);

  const language = languageOf(fields);
  const errors: Partial<Record<LeadField, string>> = {};
  if (!name) errors.name = text[language].errors.name;
  if (!phone) errors.phone = text[language].errors.phone;
  if (!zip) errors.zip = text[language].errors.zip;
  if (!phone || !zip || !name) return { ok: false, errors };

  const service = services.some((s) => s.slug === fields.service) ? (fields.service as ServiceSlug) : 'not-sure';
  const urgency = (Object.keys(urgencyLabels) as Urgency[]).find((u) => u === fields.urgency) ?? 'soon';

  const attribution: Attribution = {};
  for (const [param, key] of ATTRIBUTION_KEYS) {
    const value = clean(fields[param], 200);
    if (value) attribution[key] = value;
  }

  return {
    ok: true,
    lead: {
      name,
      phone,
      zip,
      service,
      urgency,
      details: clean(fields.details, 1_000, { keepNewlines: true }),
      page: normalizePage(fields.page),
      language,
      attribution,
    },
  };
}

export type DeliveryConfig = { resendApiKey?: string; to?: string; from?: string; webhookUrl?: string };
export type DeliveryResult = { ok: true; channels: string[] } | { ok: false; reason: 'not-configured' | 'failed' };

const DEFAULT_FROM = 'AB’s Plumbing website <onboarding@resend.dev>';

function serviceName(choice: ServiceChoice): string {
  return services.find((s) => s.slug === choice)?.name ?? 'Not sure yet';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function telLink(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, '')}`;
}

function leadRows(lead: Lead): [string, string][] {
  const source = Object.entries(lead.attribution)
    .map(([key, value]) => `${key}=${value}`)
    .join(', ');
  return [
    ['Name', lead.name],
    ['Phone', lead.phone],
    ['ZIP', lead.zip],
    ['Service', serviceName(lead.service)],
    ['Urgency', urgencyLabels[lead.urgency]],
    ['Details', lead.details || '(none)'],
    ['Language', lead.language === 'es' ? 'Spanish (call back in Spanish)' : 'English'],
    ['Page', lead.page],
    ['Ad source', source || '(direct or organic)'],
  ];
}

export function formatLeadEmail(lead: Lead): { subject: string; text: string; html: string } {
  const subject = `New website lead: ${serviceName(lead.service)} (${urgencyLabels[lead.urgency]}), ZIP ${lead.zip}${lead.language === 'es' ? ', Spanish speaker' : ''}`;
  const rows = leadRows(lead);
  const text = [...rows.map(([label, value]) => `${label}: ${value}`), '', `Call back: ${telLink(lead.phone)}`].join('\n');
  const html = `<!doctype html><html><body style="font-family:Arial,sans-serif;color:#0a2239">
<p><a href="${telLink(lead.phone)}" style="display:inline-block;background:#149ad6;color:#0a2239;font-weight:bold;padding:12px 18px;border-radius:8px;text-decoration:none">Call ${escapeHtml(lead.name)} at ${escapeHtml(lead.phone)}</a></p>
<table cellpadding="6" style="border-collapse:collapse">
${rows.map(([label, value]) => `<tr><th align="left" valign="top">${label}</th><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join('\n')}
</table></body></html>`;
  return { subject, text, html };
}

async function post(fetchImpl: typeof fetch, url: string, body: unknown, headers: Record<string, string> = {}): Promise<boolean> {
  try {
    const response = await fetchImpl(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...headers },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8_000),
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Sends the lead to every configured channel. Succeeds if at least one channel accepted it,
 * so a hiccup in one provider doesn't lose the customer.
 */
export async function deliverLead(lead: Lead, config: DeliveryConfig, fetchImpl: typeof fetch = fetch): Promise<DeliveryResult> {
  const attempts: Promise<[string, boolean]>[] = [];

  if (config.resendApiKey && config.to) {
    const email = formatLeadEmail(lead);
    attempts.push(
      post(
        fetchImpl,
        'https://api.resend.com/emails',
        { from: config.from || DEFAULT_FROM, to: [config.to], subject: email.subject, text: email.text, html: email.html },
        { authorization: `Bearer ${config.resendApiKey}` },
      ).then((ok) => ['email', ok]),
    );
  }

  if (config.webhookUrl) {
    attempts.push(
      post(fetchImpl, config.webhookUrl, {
        type: 'lead',
        ...lead,
        ...lead.attribution,
        serviceName: serviceName(lead.service),
        urgencyLabel: urgencyLabels[lead.urgency],
        callBack: telLink(lead.phone),
      }).then((ok) => ['webhook', ok]),
    );
  }

  if (attempts.length === 0) return { ok: false, reason: 'not-configured' };

  const channels = (await Promise.all(attempts)).filter(([, ok]) => ok).map(([channel]) => channel);
  return channels.length > 0 ? { ok: true, channels } : { ok: false, reason: 'failed' };
}

export type FormState =
  | { status: 'idle' }
  | { status: 'success'; firstName: string; phone: string }
  | { status: 'error'; message: string; fieldErrors?: Partial<Record<LeadField, string>> };

export type SubmissionDeps = {
  now: number;
  production: boolean;
  businessPhone: string;
  config: DeliveryConfig;
  deliver?: (lead: Lead, config: DeliveryConfig) => Promise<DeliveryResult>;
  log: (message: string) => void;
};

export async function handleLeadSubmission(
  fields: Record<string, string | undefined>,
  deps: SubmissionDeps,
): Promise<FormState> {
  const parsed = parseLead(fields, deps.now);

  // Bots get the same answer as people, so they learn nothing; nothing is sent.
  if (!parsed.ok && 'spam' in parsed) return { status: 'success', firstName: '', phone: '' };
  if (!parsed.ok) return { status: 'error', message: text[languageOf(fields)].invalid, fieldErrors: parsed.errors };

  const { lead } = parsed;
  const result = await (deps.deliver ?? deliverLead)(lead, deps.config);
  const success: FormState = { status: 'success', firstName: lead.name.split(' ')[0], phone: lead.phone };

  if (result.ok) return success;

  if (result.reason === 'not-configured' && !deps.production) {
    deps.log(`[lead] Delivery not configured (dev only, not sent): ${formatLeadEmail(lead).text.replace(/\n/g, ' | ')}`);
    return success;
  }

  deps.log(`[lead] Delivery ${result.reason}: ${lead.phone} ${lead.zip} ${lead.service}`);
  return { status: 'error', message: text[lead.language].failed(deps.businessPhone) };
}
