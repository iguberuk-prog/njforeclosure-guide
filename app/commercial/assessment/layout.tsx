import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Foreclosure Assessment | Confidential, Free',
  description:
    'Eight questions for New Jersey commercial property owners facing foreclosure: property type, loan stage, occupancy, guarantee, equity and timeline. Shows which exit paths fit and what to do this week. Confidential and free.',
  alternates: { canonical: 'https://njforeclosureguide.org/commercial/assessment/' },
  openGraph: {
    title: 'Commercial Foreclosure Assessment | Confidential, Free',
    description: 'Eight questions; see which commercial exit paths fit your asset and timeline.',
    url: 'https://njforeclosureguide.org/commercial/assessment/',
  },
};

export default function CommercialAssessmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
