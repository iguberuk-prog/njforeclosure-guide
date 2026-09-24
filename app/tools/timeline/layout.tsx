import type { Metadata } from 'next';
import { fitTitle, fitDescription } from '../../../lib/seo';

/**
 * The page itself is a client component, which cannot export metadata, so the
 * title and description live here. Without this file the page inherited the
 * section default and 14 pages shared one title tag — bad for search and
 * worse for anyone with ten tabs open.
 */

export const metadata: Metadata = {
  alternates: { canonical: 'https://njforeclosureguide.org/tools/timeline/' },
  title: fitTitle('Where Are You in the NJ Foreclosure Process? | Free Tool'),
  description: fitDescription("Pick the last notice you received and see exactly where you are in New Jersey's foreclosure timeline, what happens next, and how much time you have."),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
