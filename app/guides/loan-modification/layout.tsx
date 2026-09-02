import type { Metadata } from 'next';

/**
 * The page itself is a client component, which cannot export metadata, so the
 * title and description live here. Without this file the page inherited the
 * section default and 14 pages shared one title tag — bad for search and
 * worse for anyone with ten tabs open.
 */

export const metadata: Metadata = {
  title: 'NJ Loan Modification Guide: Keep Your Home, Change the Terms',
  description: 'How loan modification works in New Jersey: what servicers can change, how to apply, realistic timelines, and the mistakes that get applications denied.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
