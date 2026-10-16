import './globals.css';
import type { Metadata } from 'next';
import { NotFoundContent } from '@/components/not-found-content';
import { business } from '@/content/business';
import { RootDocument } from '@/components/root-document';
import { SiteChrome } from '@/components/site-chrome';
import { rootMetadata, rootViewport } from '@/lib/metadata';

export const metadata: Metadata = {
  ...rootMetadata('en'),
  title: `Page not found${business.titleSuffix}`,
  robots: { index: false },
};
export const viewport = rootViewport;

/** 404 for any URL that matches no page, in either language. */
export default function GlobalNotFound() {
  return (
    <RootDocument locale="en">
      <SiteChrome locale="en">
        <NotFoundContent locale="en" />
      </SiteChrome>
    </RootDocument>
  );
}
