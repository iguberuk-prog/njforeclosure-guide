import type { Metadata } from 'next';

/**
 * The page itself is a client component, which cannot export metadata, so the
 * title and description live here. Without this file the page inherited the
 * section default and 14 pages shared one title tag — bad for search and
 * worse for anyone with ten tabs open.
 */

export const metadata: Metadata = {
  title: 'Chapter 13 Bankruptcy and NJ Foreclosure: The Automatic Stay',
  description: 'How Chapter 13 stops a New Jersey sheriff sale, what the repayment plan requires, what it costs, and who it genuinely helps.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
