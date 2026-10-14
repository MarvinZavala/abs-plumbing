'use server';

import { business } from '@/content/business';
import { handleLeadSubmission, type FormState } from '@/lib/lead';

/**
 * Server Action behind the estimate form. Delivery is configured with environment variables
 * (see .env.example): RESEND_API_KEY + LEAD_TO_EMAIL for email, LEAD_WEBHOOK_URL for anything else.
 */
export async function submitLead(_previous: FormState, formData: FormData): Promise<FormState> {
  const fields: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === 'string') fields[key] = value;
  }

  return handleLeadSubmission(fields, {
    now: Date.now(),
    production: process.env.NODE_ENV === 'production',
    businessPhone: business.phone.display,
    config: {
      resendApiKey: process.env.RESEND_API_KEY,
      to: process.env.LEAD_TO_EMAIL || business.email,
      from: process.env.LEAD_FROM_EMAIL,
      webhookUrl: process.env.LEAD_WEBHOOK_URL,
    },
    log: (message) => console.warn(message),
  });
}
