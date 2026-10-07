import type { Metadata } from 'next';
import AdminClient from './AdminClient';

/**
 * Private owner portal (2026-10-07).
 *
 * This page holds no data of its own. It frames the Data Studio visitor
 * dashboard, and Google enforces the login: the report is shared only with
 * the owner's Google account, so anyone else who finds this URL sees a
 * Google "request access" screen inside the frame, never the numbers.
 *
 * Kept out of search three ways: robots.txt already disallows /admin/,
 * this page sends noindex/nofollow, and it is not in app/sitemap.ts.
 */
export const metadata: Metadata = {
  title: 'Owner dashboard | NJ Foreclosure Guide',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function AdminPage() {
  return <AdminClient />;
}
