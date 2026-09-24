import type { Metadata } from 'next';
import { fitTitle, fitDescription } from '../../../lib/seo';

/**
 * The page itself is a client component, which cannot export metadata, so the
 * title and description live here. Without this file the page inherited the
 * section default and 14 pages shared one title tag — bad for search and
 * worse for anyone with ten tabs open.
 */

export const metadata: Metadata = {
  alternates: { canonical: 'https://njforeclosureguide.org/guides/refinancing/' },
  title: fitTitle('Refinancing Out of Foreclosure Trouble in NJ | Honest Guide'),
  description: fitDescription('When refinancing can still save a New Jersey home in default, what lenders require, and when the math says a refinance no longer works.'),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
