import type { Metadata, Viewport } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import { ActionBar } from '@/components/action-bar';
import { Analytics } from '@/components/analytics';
import { AttributionCapture } from '@/components/attribution-capture';
import { BusinessJsonLd } from '@/components/json-ld';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { business } from '@/content/business';
import { siteUrl } from '@/lib/site';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: siteUrl(),
  title: {
    default: 'AB’s Plumbing Services | 24/7 Plumber in Oakland & the Bay Area',
    template: '%s | AB’s Plumbing Services',
  },
  description: `Family-owned plumbing crew from Oakland, open 24/7 for leaks, clogs, water heaters and sewer lines across the Bay Area. ${business.yelp.rating} stars from ${business.yelp.reviewCount} Yelp reviews. Call ${business.phone.display}.`,
  openGraph: {
    type: 'website',
    siteName: business.name,
    locale: 'en_US',
  },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only z-50 rounded-button bg-ink px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ActionBar />
        <BusinessJsonLd />
        <AttributionCapture />
        <Analytics />
      </body>
    </html>
  );
}
