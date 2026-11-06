import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import CallMeBox from '../components/CallMeBox';

/**
 * /call — the full "have Samantha call me" form, on a page of its own.
 *
 * Why this page exists: GoHighLevel's A2P compliance review reads the HOME
 * page and fails it if anything there collects a phone number besides
 * GoHighLevel's own chat widget ("Multiple Opt-ins"). So the home page shows
 * a button instead of the form, and the button and the phone bar's "Samantha,
 * call me" both lead here.
 *
 * noindex and left out of the sitemap: it is a one-form page with nothing for
 * a searcher, and it must never compete with the home page.
 */

export const metadata: Metadata = {
  title: 'Have Samantha Call You | NJ Foreclosure Guide',
  description: 'Ask for a free, no-obligation call about your New Jersey foreclosure options.',
  alternates: { canonical: 'https://njforeclosureguide.org/call/' },
  robots: { index: false, follow: true },
};

export default function CallPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />
      <section className="px-4 pt-12 pb-6">
        <div className="max-w-3xl mx-auto">
          <CallMeBox sourcePage="/call" headline="Rather talk to a person? Samantha can call you today." />
          <p className="text-sm text-slate-500">
            Not ready to talk?{' '}
            <Link href="/quiz" className="text-slate-900 font-semibold underline underline-offset-2">
              See your options in 2 minutes
            </Link>{' '}
            instead.
          </p>
        </div>
      </section>
    </div>
  );
}
