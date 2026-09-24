/**
 * Default social-share image. Next.js replaces a parent's whole `openGraph`
 * object when a page defines its own, so any page that sets openGraph
 * (title/description/url) silently lost the image and shared as a blank
 * card — 418 of 444 sitemap pages as of 2026-09-24. Spread this into every
 * page-level openGraph object. scripts/check-seo.mjs fails the build if an
 * indexable page ships without og:image.
 */
export const OG_IMAGES = [
  {
    url: '/images/og-image.png',
    width: 1200,
    height: 630,
    alt: 'NJ Foreclosure Guide: seven ways out of a New Jersey foreclosure, five of them keep your home.',
  },
];
