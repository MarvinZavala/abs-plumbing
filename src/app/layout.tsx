import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AB's Plumbing Services | 24/7 Emergency Plumber | San Francisco Bay Area",
  description: "Professional plumbing services across the entire San Francisco Bay Area. 24/7 emergency service, 500+ 5-star reviews, licensed & insured. Fair pricing, quality work.",
  keywords: "plumbing, plumber, emergency plumbing, San Francisco, Bay Area, water heater, drain cleaning, pipe repair",
  openGraph: {
    title: "AB's Plumbing Services | 24/7 Emergency Plumber | San Francisco Bay Area",
    description: "Professional plumbing services across the entire San Francisco Bay Area. 24/7 emergency service, 500+ 5-star reviews, licensed & insured.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
