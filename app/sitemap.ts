import type { MetadataRoute } from 'next';
import { getAllLocations } from '../lib/nj-locations';
import { SHERIFF_SOURCES } from '../lib/sheriff-sales';
import { DOCUMENTS } from '../lib/documents';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://njforeclosureguide.org';
  const staticPages = [
    '',
    '/quiz',
    '/compare',
    '/scams',
    '/servicers',
    '/statistics',
    '/es',
    '/es/opciones',
    '/es/documentos',
    '/es/estafas',
    '/tools/deadlines',
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
    '/answers',
    '/tools/timeline',
    '/tools/net-proceeds',
    '/resources',
    '/glossary',
    '/documents',
    '/sheriff-sales',
    '/premium-properties',
    '/scenarios',
    '/reviews',
    '/reviews/submit',
    '/companies',
    '/companies/njoffer',
    '/companies/fire-home-buyers',
    '/companies/private-sale-group',
    '/companies/urbni',
    '/companies/brc-corcoran-sawyer-smith',
    '/companies/clik-offer',
    '/privacy',
    '/terms',
    '/disclaimer',
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

  const sheriffPages = SHERIFF_SOURCES.map((s) => ({
    url: `${base}/sheriff-sales/${s.slug}/`,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const documentPages = DOCUMENTS.map((d) => ({
    url: `${base}/documents/${d.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...locationPages, ...sheriffPages, ...documentPages];
}
