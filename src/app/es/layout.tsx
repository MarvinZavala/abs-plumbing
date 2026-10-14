import '../globals.css';
import { RootDocument } from '@/components/root-document';
import { SiteChrome } from '@/components/site-chrome';
import { rootMetadata, rootViewport } from '@/lib/metadata';

export const metadata = rootMetadata('es');
export const viewport = rootViewport;

/** Root layout for the Spanish pages: <html lang="es"> and the chrome in Spanish. */
export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <RootDocument locale="es">
      <SiteChrome locale="es">{children}</SiteChrome>
    </RootDocument>
  );
}
