import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import MarsNotice from '../components/MarsNotice';
import { OG_IMAGES } from '../../lib/og';

/**
 * /partners — the embed page for counselors, nonprofits, attorneys, and
 * local sites. One copy-paste iframe, clear rules, no signup. Every embed
 * is a referral pipe from exactly the right audience and a live link.
 */

export const metadata: Metadata = {
  title: 'Embed the Free NJ Foreclosure Timeline Checker | Partners',
  description:
    'Housing counselors, legal aid, nonprofits, attorneys, and local news: embed our free NJ Foreclosure Timeline Checker on your site with one line of code. No signup, no tracking of your visitors, always free.',
  alternates: { canonical: 'https://njforeclosureguide.org/partners/' },
  openGraph: {
    images: OG_IMAGES,
    title: 'Embed the Free NJ Foreclosure Timeline Checker',
    description: 'One line of code gives your visitors stage-by-stage NJ deadlines and the free help. Always free.',
    url: 'https://njforeclosureguide.org/partners/',
  },
};

const EMBED_CODE = `<iframe
  src="https://njforeclosureguide.org/widget/timeline/"
  title="NJ Foreclosure Timeline Checker"
  width="100%" height="520" style="max-width:420px;border:0;border-radius:16px;overflow:hidden"
  loading="lazy"></iframe>`;

export default function PartnersPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            For Counselors · Nonprofits · Attorneys · Local Sites
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Put the Timeline Checker on Your Site
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            One line of code gives your visitors the thing they need first: which NJ deadline
            applies to them, what is still true at their stage, and the free help. No signup, no
            cost, and nothing your visitors select ever leaves the box.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">The embed code</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Paste this anywhere HTML is allowed — a sidebar, a resources page, an article. It
              sizes itself to its container up to 420px wide.
            </p>
            <pre className="rounded-xl bg-slate-950 text-slate-100 text-xs px-4 py-4 overflow-x-auto whitespace-pre-wrap break-all">
              {EMBED_CODE}
            </pre>
            <p className="text-slate-600 leading-relaxed mt-4 text-sm">
              <strong className="text-slate-900">En español:</strong> the same widget is available in Spanish — just
              change <code className="text-xs bg-slate-100 px-1 rounded">/widget/timeline/</code> to{' '}
              <code className="text-xs bg-slate-100 px-1 rounded">/widget/cronologia/</code> in the code above. It links
              to our full Spanish guide and Command Center.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Live preview</h2>
            <iframe
              src="/widget/timeline/"
              title="NJ Foreclosure Timeline Checker preview"
              width="100%"
              height={520}
              style={{ maxWidth: 420, border: 0, borderRadius: 16, overflow: 'hidden' }}
              loading="lazy"
            />
          </div>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">The ground rules</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
          <p>
            <strong className="text-slate-900">It is free, permanently.</strong> No signup, no key, no quota, and we do
            not track your visitors — the widget makes no external requests and stores nothing.
            Selections stay in the visitor&rsquo;s browser.
          </p>
          <p>
            <strong className="text-slate-900">It is educational, not legal advice</strong> — the widget says so on its
            face, frames deadlines as general New Jersey rules, and points people to the free help
            first: HUD counselors, Legal Services of NJ, and the courts&rsquo; own mediation program.
          </p>
          <p>
            <strong className="text-slate-900">Please leave the attribution link in place.</strong> That link is the
            entire price of the widget. If your organization needs a version with different sizing
            or a white background, write to{' '}
            <a href="mailto:help@njforeclosureguide.org" className="underline underline-offset-2 font-semibold text-slate-900">
              help@njforeclosureguide.org
            </a>{' '}
            and we will build it — usually within a couple of days, also free.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-slate-200 px-6 py-6">
          <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">Who this is for</h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            HUD-approved counseling agencies, legal aid organizations, county and municipal help
            pages, libraries, faith and community groups, attorneys, and local news sites covering
            housing. If your audience includes New Jersey homeowners in trouble, this belongs on
            your resources page — and if you would like printed materials to go with it, our free{' '}
            <a href="/free-checklist" className="underline underline-offset-2 font-semibold text-slate-900">Survival Kit PDF</a>{' '}
            is designed to be handed out.
          </p>
        </div>
      </article>

      <MarsNotice />
    </div>
  );
}
