/**
 * Estimate form strings. The form is a client component, so these live apart from the rest of the copy
 * (no imports) to keep the browser bundle small.
 */
import type { Locale } from './i18n.ts';

export const formUi = {
  en: {
    name: 'Your name',
    phone: 'Phone',
    zip: 'ZIP code',
    service: 'What do you need help with?',
    notSure: 'Not sure yet',
    urgency: 'How soon do you need us?',
    urgencyLabels: { emergency: 'Emergency, right now', soon: 'In the next day or two', quote: 'Just getting a quote' },
    details: 'Anything we should know?',
    optional: '(optional)',
    detailsPlaceholder: 'What’s happening, where, and since when',
    trap: 'Leave this field empty',
    submit: 'Send my request',
    sending: 'Sending…',
    privacyNote: 'We only use your details to answer this request.',
    privacyLink: 'Privacy policy',
    gotIt: (firstName: string) => (firstName ? `Got it, ${firstName}.` : 'Got it.'),
    callBackAt: 'We’ll call you back at',
    callBackSoon: 'We’ll call you back soon.',
    dontWait: 'If water is still running or a drain is backing up, don’t wait for us to call. Call now:',
    call: (phone: string) => `Call ${phone}`,
  },
  es: {
    name: 'Su nombre',
    phone: 'Teléfono',
    zip: 'Código postal (ZIP)',
    service: '¿Con qué necesita ayuda?',
    notSure: 'Todavía no sé',
    urgency: '¿Qué tan pronto nos necesita?',
    urgencyLabels: { emergency: 'Emergencia, ahora mismo', soon: 'En uno o dos días', quote: 'Solo quiero una cotización' },
    details: '¿Algo que debamos saber?',
    optional: '(opcional)',
    detailsPlaceholder: 'Qué pasa, dónde y desde cuándo',
    trap: 'Deje este campo vacío',
    submit: 'Enviar mi solicitud',
    sending: 'Enviando…',
    privacyNote: 'Solo usamos sus datos para responder a esta solicitud.',
    privacyLink: 'Política de privacidad (en inglés)',
    gotIt: (firstName: string) => (firstName ? `Listo, ${firstName}.` : 'Listo.'),
    callBackAt: 'Le llamamos al',
    callBackSoon: 'Le llamamos pronto.',
    dontWait: 'Si sigue saliendo agua o un drenaje se está regresando, no espere nuestra llamada. Llame ahora:',
    call: (phone: string) => `Llamar al ${phone}`,
  },
} satisfies Record<Locale, unknown>;
