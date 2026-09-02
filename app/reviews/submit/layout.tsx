import type { Metadata } from 'next';

/**
 * The page itself is a client component, which cannot export metadata, so the
 * title and description live here. Without this file the page inherited the
 * section default and 14 pages shared one title tag — bad for search and
 * worse for anyone with ten tabs open.
 */

export const metadata: Metadata = {
  title: 'Leave a Review | NJ Foreclosure Guide',
  description: 'Worked with NJ Foreclosure Guide? Tell other New Jersey homeowners how it went. Reviews are published with your permission.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
