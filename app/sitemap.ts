import type { MetadataRoute } from 'next';
import { getAllLocations } from '../lib/nj-locations';
import { SHERIFF_SOURCES } from '../lib/sheriff-sales';
import { SERVICERS, SERVICER_DATA_VERIFIED_ISO } from '../lib/servicers';
import { TOWN_PAGES } from '../lib/town-sales';
import { PLAINTIFFS } from '../lib/plaintiffs';
import { DOCUMENTS } from '../lib/documents';
import { QUESTIONS } from '../lib/questions';
import { QUESTIONS_ES } from '../lib/questions-es';
import { ALL_POSTS } from '../lib/posts';
import { esPosts } from '../lib/blog-es';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://njforeclosureguide.org';
  const staticPages = [
    '',
    '/quiz',
    '/compare',
    '/commercial',
    '/commercial/options',
    '/commercial/process',
    '/commercial/assessment',
    '/scams',
    '/servicers',
    '/statistics',
    '/es',
    '/es/opciones',
    '/es/documentos',
    '/es/estafas',
    '/es/evaluacion',
    '/es/preguntas',
    '/es/blog',
    '/es/centro-de-mando',
    '/es/mi-plan',
    '/blog',
    '/sell-my-house-fast-nj',
    '/sell-house-before-sheriff-sale',
    '/sell-inherited-house-nj',
    '/tenants',
    '/guides/surplus-funds',
    '/guides/after-sheriff-sale',
    '/guides/foreclosure-mediation',
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
    '/tools/surplus-funds',
    '/tools/catch-up',
    '/tools/sheriff-sale-countdown',
    '/tools/sheriff-sale-date',
    '/sheriff-sales/calendar',
    '/es/ventas-del-sheriff',
    '/tools/letter-builder',
    '/tools/scam-checker',
    '/reports/nj-sheriff-sales',
    '/reports/nj-foreclosure-index',
    '/who-is-suing-me',
    '/es/herramientas/cuenta-regresiva',
    '/es/herramientas/ponerse-al-dia',
    '/es/herramientas/constructor-de-cartas',
    '/es/herramientas/verificador-de-estafas',
    '/es/guias/despues-de-la-subasta',
    '/es/guias/mediacion',
    '/es/herramientas/fondos-sobrantes',
    '/resources',
    '/free-checklist',
    '/start',
    '/report',
    '/partners',
    '/about',
    '/case-map',
    '/command-center',
    '/decoder',
    '/nj-map',
    '/my-plan',
    '/myths',
    '/tools/cost-of-waiting',
    '/glossary',
    '/documents',
    '/sheriff-sales',
    '/premium-properties',
    '/scenarios',
    '/reviews',
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

  // County hubs only; town pages are noindex (see foreclosure-help/[slug]).
  const locationPages = getAllLocations()
    .filter((loc) => loc.type === 'county')
    .map((loc) => ({
      url: `${base}/foreclosure-help/${loc.slug}/`,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  const sheriffPages = SHERIFF_SOURCES.map((s) => ({
    url: `${base}/sheriff-sales/${s.slug}/`,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const bidderPages = SHERIFF_SOURCES.map((s) => ({
    url: `${base}/sheriff-sales/${s.slug}/how-to-bid/`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const sheriffEsPages = SHERIFF_SOURCES.map((s) => ({
    url: `${base}/es/ventas-del-sheriff/${s.slug}/`,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const townPages = TOWN_PAGES.map((t) => ({
    url: `${base}/sheriff-sales/${t.countySlug}/${t.slug}/`,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const plaintiffPages = PLAINTIFFS.map((p) => ({
    url: `${base}/who-is-suing-me/${p.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const servicerPages = SERVICERS.map((s) => ({
    url: `${base}/servicers/${s.slug}/`,
    lastModified: SERVICER_DATA_VERIFIED_ISO,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const questionPages = QUESTIONS.map((x) => ({
    url: `${base}/answers/${x.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const documentPages = DOCUMENTS.map((d) => ({
    url: `${base}/documents/${d.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const questionEsPages = QUESTIONS_ES.map((x) => ({
    url: `${base}/es/preguntas/${x.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages = ALL_POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: p.updated,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogEsPages = esPosts().map((p) => ({
    url: `${base}/es/blog/${p.slug}/`,
    lastModified: p.updated,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...locationPages, ...sheriffPages, ...sheriffEsPages, ...bidderPages, ...townPages, ...servicerPages, ...plaintiffPages, ...documentPages, ...questionPages, ...questionEsPages, ...blogPages, ...blogEsPages];
}
