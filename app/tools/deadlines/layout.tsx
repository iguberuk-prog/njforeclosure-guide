import type { Metadata } from 'next';

/**
 * The page itself is a client component, which cannot export metadata, so the
 * title and description live here. Without this file the page inherited the
 * section default and 14 pages shared one title tag — bad for search and
 * worse for anyone with ten tabs open.
 */

export const metadata: Metadata = {
  title: 'NJ Foreclosure Deadline Calculator: Your Dates From Any Notice',
  description: 'Type in the date on the letter you received and get every New Jersey foreclosure deadline that flows from it, with what each one means.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
