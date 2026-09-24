import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import GuideFaq, { FaqItem } from '../../components/GuideFaq';
import { OG_IMAGES } from '../../../lib/og';

/**
 * PILLAR: what happens after a New Jersey sheriff sale.
 *
 * Built 2026-09-24 because "what happens after sheriff sale NJ", "how long
 * can I stay", "can I get my house back", and "deficiency judgment NJ" are
 * answered today mostly by attorney lead pages that contradict each other.
 * This page puts the whole post-sale arc in one order, in plain English.
 *
 * Sources (primary first): N.J. Court Rule 4:65-5 (10-day objection period
 * before the deed is delivered); N.J.S.A. 2A:50-2 and 2A:50-3 (deficiency
 * action within three months; fair-market-value credit); the NJ Anti-Eviction
 * Act (N.J.S.A. 2A:18-61.1) for tenants. Consistent with lib/questions.ts
 * answers on the same topics — keep them in sync if either changes.
 * Rules: "generally" where courts have discretion, no outcome promises,
 * free legal help listed, not legal advice.
 */

export const metadata: Metadata = {
  title: 'What Happens After a Sheriff Sale in NJ? Timeline, Rights & Money',
  description:
    'After a New Jersey sheriff sale: the 10-day window, when the deed transfers, how long you can stay, the writ of possession, cash for keys, surplus funds, and deficiency judgments — in order.',
  alternates: { canonical: 'https://njforeclosureguide.org/guides/after-sheriff-sale/' },
  openGraph: {
    images: OG_IMAGES,
    title: 'What Happens After a Sheriff Sale in New Jersey',
    description: 'The whole post-sale timeline in order: your rights, your deadlines, and the money that may still be yours.',
    url: 'https://njforeclosureguide.org/guides/after-sheriff-sale/',
  },
};

const STEPS: { when: string; what: string; body: string }[] = [
  {
    when: 'Sale day',
    what: 'The auction happens',
    body: 'The property is sold to the highest bidder, often the lender itself bidding up to what it is owed. Nothing changes at your front door that day: you are still lawfully in the home, and no one can change the locks or shut off utilities because of the auction.',
  },
  {
    when: 'Days 1–10',
    what: 'The objection and redemption window',
    body: 'New Jersey court rules generally give 10 days after the sale for objections before the sheriff delivers the deed. During that window the sale can be challenged for real problems (defective notice, irregularities at the sale), and the owner can generally still redeem by paying what is owed in full. Redemption requires the full amount, so it is realistic mainly when a refinance, sale, or family money is already lined up.',
  },
  {
    when: 'After day 10',
    what: 'The sheriff’s deed is delivered',
    body: 'Once the objection period passes and the buyer pays the balance of the bid, the sheriff delivers the deed and ownership transfers. This is the point after which getting the house back is generally no longer possible.',
  },
  {
    when: 'Weeks later',
    what: 'The buyer asks the court for a writ of possession',
    body: 'A new owner cannot remove anyone on its own. It must obtain a writ of possession from the court, and the sheriff, not the buyer, carries it out after giving notice of the removal date. The whole transition typically takes weeks.',
  },
  {
    when: 'Before removal',
    what: 'You can ask for more time',
    body: 'A homeowner can file a motion asking the court for a short hardship stay. Many buyers would also rather pay for a scheduled, clean move-out than go through the sheriff, which is where cash-for-keys offers come from.',
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'How long can I stay in my house after a sheriff sale in New Jersey?',
    a: 'Usually weeks, not days. The sale is followed by a 10-day objection period before the deed is delivered, and after that the buyer must obtain a court writ of possession, which the sheriff carries out after giving notice of the removal date. The buyer cannot lock you out or shut off utilities on its own. Courts can grant short hardship stays, and buyers often offer cash for keys in exchange for a scheduled move-out.',
  },
  {
    q: 'Can I get my house back after a sheriff sale in NJ?',
    a: 'Generally only during the short window before the sheriff’s deed is delivered — commonly described as 10 days after the sale — by paying what is owed in full, or if a court sets the sale aside for a real defect such as improper notice. After the deed is delivered, getting the house back is generally no longer possible, which is why the sale date itself is the deadline to plan around.',
  },
  {
    q: 'Can the lender still sue me after the house is sold?',
    a: 'Possibly. If the sale brought less than the debt, a lender can pursue a deficiency, but New Jersey requires a separate lawsuit filed within three months of the sale, and the homeowner can ask the court to credit the home’s fair market value rather than just the auction price. In practice many residential deficiencies are never pursued. A short sale or deed in lieu with a written waiver, or a bankruptcy discharge, can remove the risk.',
  },
  {
    q: 'What if the sheriff sale brought more than I owed?',
    a: 'The surplus belongs to the former owner after any junior liens are paid. It is deposited with the court and must be claimed by motion in the foreclosure case; it is not mailed automatically. Be careful with finder companies charging a large percentage for what is fundamentally a court filing.',
  },
  {
    q: 'I rent the home. Does the sheriff sale end my lease?',
    a: 'Not by itself. Residential tenants in New Jersey are generally protected by the Anti-Eviction Act, which means a new owner usually needs a legal cause recognized by that law to remove a tenant. Keep paying rent as directed in writing, and contact Legal Services of New Jersey (1-888-576-5529) if anyone pressures you to leave.',
  },
];

export default function AfterSheriffSalePage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">After the Auction</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            What Happens After a Sheriff Sale in New Jersey
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            The gavel is not the end of the story. Here is the whole post-sale timeline in order: what
            you can still do, how long you can stay, and the money that may still be yours.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 px-6 py-5 mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800 mb-2">The short answer</p>
          <p className="text-slate-800 leading-relaxed">
            After a New Jersey sheriff sale there is generally a 10-day objection and redemption window
            before the sheriff&apos;s deed is delivered. After that, the buyer must get a court writ of
            possession, carried out by the sheriff with notice, before anyone can be required to leave,
            so the transition usually takes weeks. Any surplus above the judgment belongs to you, and a
            lender that wants a deficiency must sue within three months of the sale.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">The timeline, step by step</h2>
        <ol className="space-y-5 mb-12">
          {STEPS.map((s, i) => (
            <li key={s.what} className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700">{s.when}</p>
                <p className="font-bold text-slate-900">{s.what}</p>
                <p className="text-slate-600 leading-relaxed mt-1">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">If the sale has not happened yet</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            Everything above is harder than acting before the auction. New Jersey homeowners are generally
            entitled to two adjournments of a scheduled sale of up to 30 days each, and a sale of the home,
            a completed loss-mitigation review, or a Chapter 13 filing can all still change the outcome
            before the gavel. Start with your{' '}
            <Link href="/sheriff-sales" className="text-slate-900 underline underline-offset-4 font-semibold">county&apos;s official sale list</Link>{' '}
            and the{' '}
            <Link href="/blog/sheriff-sale-adjournment-playbook/" className="text-slate-900 underline underline-offset-4 font-semibold">adjournment playbook</Link>.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Cash for keys: optional, negotiable, in writing</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            Because removal through the sheriff takes the buyer time and money, many buyers offer a payment
            in exchange for leaving by an agreed date with the home broom-clean. You never have to accept,
            and the amount and date are negotiable. If you do agree, get it in writing: the amount, the
            move-out date, how and when you are paid, and what condition is expected. Photograph the home
            when you leave.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">The money: surplus and deficiency</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            <strong className="text-slate-900">If the sale brought more than the judgment,</strong> the
            surplus is deposited with the court. After valid junior liens (a second mortgage, a HELOC,
            judgment creditors), what remains is yours, and it has to be claimed.{' '}
            <Link href="/guides/surplus-funds" className="text-slate-900 underline underline-offset-4 font-semibold">How to claim surplus funds yourself</Link>.
          </p>
          <p>
            <strong className="text-slate-900">If it brought less,</strong> the lender may pursue the
            difference, but New Jersey makes that burdensome: a separate lawsuit filed within three months
            of the sale, and your right to have the home&apos;s fair market value, not just the auction
            price, credited against the debt. If you are served with a deficiency complaint, that credit is
            the first thing to raise with an attorney, and the response deadline is real.
          </p>
          <p>
            <strong className="text-slate-900">Taxes:</strong> a foreclosure can generate an IRS Form
            1099-A or 1099-C. Whether any canceled debt is taxable depends on your situation and current
            federal law, so ask a tax professional or a free VITA tax clinic before filing.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Your rights while you are still there</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 leading-relaxed mb-10">
          <li>No lockouts, utility shutoffs, or removal of belongings by the buyer. Removal happens only through a court writ carried out by the sheriff.</li>
          <li>Keep every notice. The dates on the writ and the sheriff&apos;s notice are the ones that count.</li>
          <li>Tenants in the home are generally protected by New Jersey&apos;s Anti-Eviction Act. See the <Link href="/tenants" className="text-slate-900 underline underline-offset-4">tenant guide</Link>.</li>
          <li>A bankruptcy filing triggers an automatic stay, but whether it helps after the deed has transferred is a question for a bankruptcy attorney, not a do-it-yourself move.</li>
        </ul>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 mb-10">
          <p className="font-bold text-slate-900 mb-2">Free legal help</p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Legal Services of New Jersey (1-888-576-5529) helps income-qualifying homeowners and tenants
            for free, including after a sale. A HUD-approved counselor (800-569-4287) can help you plan the
            move and the money.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/command-center?stage=scheduled" className="bg-amber-400 text-slate-950 px-6 py-3 rounded-lg font-bold text-center hover:bg-amber-300 transition">
              Build my free plan →
            </Link>
            <Link href="/documents/writ-of-possession" className="border border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-white transition">
              The writ of possession, decoded
            </Link>
          </div>
        </div>
      </article>

      <GuideFaq items={FAQ_ITEMS} />

      <div className="max-w-3xl mx-auto px-4 pb-14">
        <p className="text-slate-400 text-xs leading-relaxed">
          Educational information, not legal or tax advice. Post-sale rights depend on your case, your
          court papers, and the judge; a licensed New Jersey attorney can confirm what applies to you.
          Sources: N.J. Court Rule 4:65-5; N.J.S.A. 2A:50-2 and 2A:50-3; N.J.S.A. 2A:18-61.1.
        </p>
      </div>
    </div>
  );
}
