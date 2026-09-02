import type { Metadata } from 'next';

/**
 * The page itself is a client component, which cannot export metadata, so the
 * title and description live here. Without this file the page inherited the
 * section default and 14 pages shared one title tag — bad for search and
 * worse for anyone with ten tabs open.
 */

export const metadata: Metadata = {
  title: 'Selling to a Cash Buyer Before a NJ Sheriff Sale',
  description: 'How a fast cash sale actually works in New Jersey foreclosure: real timelines, what it costs versus a market sale, and the questions to ask before signing.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
