import type { MetadataRoute } from 'next';
import { getAllLocations } from '../lib/nj-locations';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://njforeclosureguide.org';
  const staticPages = [
    '',
    '/quiz',
    '/guides',
    '/guides/foreclosure-101',
    '/guides/loan-modification',
    '/guides/refinancing',
    '/guides/forbearance',
    '/guides/short-sale',
    '/guides/bankruptcy-chapter-13',
    '/guides/cash-buyer',
    '/guides/ltv-refinance',
    '/professionals',
    '/tools/timeline',
    '/foreclosure-help',
  ].map((p) => ({
    url: `${base}${p}/`.replace(/\/\/$/, '/'),
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : 0.8,
  }));

  const locationPages = getAllLocations().map((loc) => ({
    url: `${base}/foreclosure-help/${loc.slug}/`,
    changeFrequency: 'weekly' as const,
    priority: loc.type === 'county' ? 0.7 : 0.6,
  }));

  return [...staticPages, ...locationPages];
}
