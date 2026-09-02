import type { Metadata } from 'next';

/**
 * The page itself is a client component, which cannot export metadata, so the
 * title and description live here. Without this file the page inherited the
 * section default and 14 pages shared one title tag — bad for search and
 * worse for anyone with ten tabs open.
 */

export const metadata: Metadata = {
  title: 'Free NJ Foreclosure Help: HUD Counselors, Legal Aid & More',
  description: 'Where New Jersey homeowners get real help: free HUD-approved counselors, legal services, court mediation, and vetted professionals for every path.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
