import '../globals.css';
import { RootDocument } from '@/components/root-document';
import { SiteChrome } from '@/components/site-chrome';
import { rootMetadata, rootViewport } from '@/lib/metadata';

export const metadata = rootMetadata('en');
export const viewport = rootViewport;

/** Root layout for the English site. The Spanish pages have their own (src/app/es/layout.tsx). */
export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <RootDocument locale="en">
      <SiteChrome locale="en">{children}</SiteChrome>
    </RootDocument>
  );
}
