import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    // English and Spanish have separate root layouts (for <html lang>), so the site-wide 404 is
    // app/global-not-found.tsx instead of a not-found page inside one shared root layout.
    globalNotFound: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Linked from the old footer; keep it working for anyone who bookmarked it.
      { source: '/emergency', destination: '/services/emergency-plumbing', permanent: true },
      // The production .vercel.app alias would otherwise serve a duplicate copy of the site to search engines.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'abs-plumbing.vercel.app' }],
        destination: 'https://www.abs-plumbingservices.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
