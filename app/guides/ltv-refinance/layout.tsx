import type { Metadata } from 'next';

/**
 * The page itself is a client component, which cannot export metadata, so the
 * title and description live here. Without this file the page inherited the
 * section default and 14 pages shared one title tag — bad for search and
 * worse for anyone with ten tabs open.
 */

export const metadata: Metadata = {
  title: 'Home Equity Refinance in NJ: Use Equity to Catch Up',
  description: 'How New Jersey homeowners with equity can refinance to cure a default: loan-to-value math, cash-out rules, and what to do when banks say no.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
