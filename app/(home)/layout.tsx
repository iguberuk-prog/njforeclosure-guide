import type { Metadata } from 'next';
import { OG_IMAGES } from '../../lib/og';

/**
 * Homepage-only metadata. The route group "(home)" does not change the URL;
 * it exists so the homepage can declare canonical "/" without every other
 * page inheriting it from the root layout (which is what once made 14 key
 * pages claim to be duplicates of the homepage).
 */
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://njforeclosureguide.org/',
    languages: { en: 'https://njforeclosureguide.org/', es: 'https://njforeclosureguide.org/es/', 'x-default': 'https://njforeclosureguide.org/' },
  },
  openGraph: {
    images: OG_IMAGES,
    type: 'website',
    locale: 'en_US',
    url: 'https://njforeclosureguide.org/',
    siteName: 'NJ Foreclosure Guide',
    title: 'NJ Foreclosure Guide | Free Help for New Jersey Homeowners',
    description:
      'A free, independent guide to every option a New Jersey homeowner has in foreclosure, including the ones that keep you in your home.',
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
