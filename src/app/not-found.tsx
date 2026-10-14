import Link from 'next/link';
import { CtaGroup } from '@/components/cta';
import { services } from '@/content/services';

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="wrap py-14 lg:py-20">
        <h1 className="type-page">This page doesn’t exist. Your plumbing problem does, and we can fix that.</h1>
        <CtaGroup placement="not-found" estimateHref="/#estimate" className="mt-8" />
        <h2 className="type-h3 mt-12">Or pick what you need</h2>
        <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="text-blue underline underline-offset-4">
                {s.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/" className="text-blue underline underline-offset-4">
              Home page
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
