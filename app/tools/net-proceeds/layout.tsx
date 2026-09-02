import type { Metadata } from 'next';

/**
 * The page itself is a client component, which cannot export metadata, so the
 * title and description live here. Without this file the page inherited the
 * section default and 14 pages shared one title tag — bad for search and
 * worse for anyone with ten tabs open.
 */

export const metadata: Metadata = {
  title: "NJ Home Sale Net Proceeds Calculator | What You'd Walk Away With",
  description: 'Enter your home value and mortgage balance to see what you would actually pocket from a market sale, short sale, or cash offer in New Jersey.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
