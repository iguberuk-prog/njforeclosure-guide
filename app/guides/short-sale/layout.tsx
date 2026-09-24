import type { Metadata } from 'next';
import { fitTitle, fitDescription } from '../../../lib/seo';

/**
 * The page itself is a client component, which cannot export metadata, so the
 * title and description live here. Without this file the page inherited the
 * section default and 14 pages shared one title tag — bad for search and
 * worse for anyone with ten tabs open.
 */

export const metadata: Metadata = {
  alternates: { canonical: 'https://njforeclosureguide.org/guides/short-sale/' },
  title: fitTitle('NJ Short Sale Guide: Selling for Less Than You Owe'),
  description: fitDescription('How a short sale works in New Jersey: lender approval, deficiency waivers, credit impact, timelines, and whether it beats letting the foreclosure finish.'),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
