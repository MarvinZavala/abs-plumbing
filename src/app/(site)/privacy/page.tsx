import type { Metadata } from 'next';
import { business } from '@/content/business';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How AB’s Plumbing Services handles the information you share through this website.',
  alternates: { canonical: '/privacy' },
};

const UPDATED = 'October 13, 2026';

export default function PrivacyPage() {
  return (
    <section className="bg-white">
      <div className="wrap py-12 lg:py-16">
        <h1 className="type-page">Privacy policy</h1>
        <p className="mt-3 text-mute">Last updated {UPDATED}</p>
        <div className="measure mt-8 space-y-6 [&_h2]:type-h3 [&_h2]:mt-10">
          <p>
            This policy explains what {business.name} (“we”) collects through this website and what we do with it.
            The short version: we use your information to answer your request, and we don’t sell it.
          </p>
          <h2>What we collect</h2>
          <p>
            When you send an estimate request we receive your name, phone number, ZIP code, the kind of work you
            need, how urgent it is, and anything you write in the message box. We also note which page you sent it
            from and, if you arrived from an ad, the ad click identifiers in the page address (such as Google’s
            “gclid”).
          </p>
          <h2>How we use it</h2>
          <p>
            To call or text you back about your request, schedule the work, and keep a record of the job. Ad click
            identifiers help us understand which ads bring in real customers.
          </p>
          <h2>Who we share it with</h2>
          <p>
            Only with the services that make this website work: our website host, the email service that delivers
            your request to us, and Google, if advertising measurement is turned on. We don’t sell or rent your
            personal information.
          </p>
          <h2>Cookies and advertising</h2>
          <p>
            We use Google advertising and analytics tools to measure whether our ads lead to calls and requests.
            These tools may set cookies in your browser. You can control ad personalization at{' '}
            <a href="https://adssettings.google.com" className="text-blue underline underline-offset-4">
              adssettings.google.com
            </a>{' '}
            and block cookies in your browser settings.
          </p>
          <h2>Your choices</h2>
          <p>
            California residents can ask us what personal information we have about them, ask us to correct it, or
            ask us to delete it. Email{' '}
            <a href={`mailto:${business.email}`} className="text-blue underline underline-offset-4">
              {business.email}
            </a>{' '}
            or call {business.phone.display}, and we’ll take care of it.
          </p>
          <h2>Contact</h2>
          <p>
            {business.name}, {business.base.city}, {business.base.region} {business.base.postalCode}. Phone{' '}
            {business.phone.display}. Email {business.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
