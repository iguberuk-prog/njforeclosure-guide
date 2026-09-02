import type { Metadata } from 'next';

/**
 * The page itself is a client component, which cannot export metadata, so the
 * title and description live here. Without this file the page inherited the
 * section default and 14 pages shared one title tag — bad for search and
 * worse for anyone with ten tabs open.
 */

export const metadata: Metadata = {
  title: 'Free 2-Minute Foreclosure Assessment for NJ Homeowners',
  description: 'Answer a few questions and get a straight answer about where you stand, which options are still open, and what to do this week. Free and confidential.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
