'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import AddressInput from '../../components/AddressInput';
import { SITE_EMAIL, RESPONSE_PROMISE } from '../../../lib/contact';
import { trackEvent } from '../../../lib/analytics';
import { appendAttribution } from '../../../lib/attribution';

/**
 * Commercial assessment. Separate from the consumer quiz on purpose: the
 * questions (guarantee, occupancy, loan size, entity) and the results (workout,
 * DPO, bridge, Chapter 11, sale-leaseback, deed in lieu with release) have no
 * consumer equivalent. Leads post to the same Netlify 'lead-quiz' form with
 * leadType=commercial so the inbox tells the two apart instantly.
 */

interface A {
  propertyType?: string;
  stage?: string;
  loanBalance?: string;
  occupancy?: string;
  guarantee?: string;
  equity?: string;
  goal?: string;
  timeline?: string;
}

const QUESTIONS: { key: keyof A; title: string; sub?: string; options: { value: string; label: string }[] }[] = [
  {
    key: 'propertyType',
    title: 'What kind of property is it?',
    options: [
      { value: 'multifamily', label: 'Multifamily (5+ units) or 2-4 units held as investment' },
      { value: 'mixed-use', label: 'Mixed-use (storefront with apartments)' },
      { value: 'retail', label: 'Retail: strip center, standalone, restaurant' },
      { value: 'industrial', label: 'Industrial, warehouse, flex, contractor yard' },
      { value: 'office', label: 'Office or medical' },
      { value: 'land-other', label: 'Land, hospitality, or other' },
    ],
  },
  {
    key: 'stage',
    title: 'Where does the loan stand right now?',
    options: [
      { value: 'behind', label: 'Behind or in covenant default, no lawsuit yet' },
      { value: 'accelerated', label: 'Default or acceleration notice received' },
      { value: 'complaint', label: 'Foreclosure complaint filed or served' },
      { value: 'receiver', label: 'Lender moving for a receiver or collecting rents' },
      { value: 'judgment', label: 'Judgment entered or sheriff sale scheduled' },
    ],
  },
  {
    key: 'loanBalance',
    title: 'Approximate loan balance?',
    options: [
      { value: 'under500k', label: 'Under $500,000' },
      { value: '500k-1.5m', label: '$500,000 to $1.5 million' },
      { value: '1.5m-5m', label: '$1.5 million to $5 million' },
      { value: 'over5m', label: 'Over $5 million' },
    ],
  },
  {
    key: 'occupancy',
    title: 'How is the property performing?',
    sub: 'Cash flow decides which paths a lender will entertain.',
    options: [
      { value: 'stable', label: 'Leased and cash-flowing; the problem is the debt terms or a balloon' },
      { value: 'partial', label: 'Partially vacant or rents below what the loan needs' },
      { value: 'vacant', label: 'Mostly vacant or not producing income' },
      { value: 'owner-occupied', label: 'My own business operates there' },
    ],
  },
  {
    key: 'guarantee',
    title: 'Did you (or a partner) sign a personal guarantee?',
    options: [
      { value: 'full', label: 'Yes, a full personal guarantee' },
      { value: 'partial', label: 'Yes, limited or "bad boy" carve-outs only' },
      { value: 'none', label: 'No, the loan is non-recourse to me' },
      { value: 'unsure', label: 'Not sure' },
    ],
  },
  {
    key: 'equity',
    title: 'Roughly, is the property worth more than the debt?',
    options: [
      { value: 'significant', label: 'Yes, by a comfortable margin' },
      { value: 'thin', label: 'About even, or a thin margin' },
      { value: 'underwater', label: 'No, the debt exceeds the value' },
      { value: 'unknown', label: 'I do not know' },
    ],
  },
  {
    key: 'goal',
    title: 'What outcome are you working toward?',
    options: [
      { value: 'keep', label: 'Keep the asset and restructure the debt' },
      { value: 'exit-clean', label: 'Exit, but protect my equity and my guarantee' },
      { value: 'walk', label: 'Walk away with the least damage possible' },
      { value: 'unsure', label: 'Not sure; I want to see the options' },
    ],
  },
  {
    key: 'timeline',
    title: 'How much time do you realistically have?',
    options: [
      { value: 'weeks', label: 'Weeks: a hearing or sale date is set' },
      { value: 'months', label: 'A few months' },
      { value: 'flexible', label: 'Six months or more' },
    ],
  },
];

interface Result {
  key: string;
  headline: string;
  paths: string[];
  explanation: string;
  thisWeek: string[];
}

function match(a: A): Result {
  const urgent = a.stage === 'judgment' || a.timeline === 'weeks' || a.stage === 'receiver';
  const hasEquity = a.equity === 'significant' || a.equity === 'thin';
  const cashFlows = a.occupancy === 'stable' || a.occupancy === 'owner-occupied';

  if (urgent) {
    return {
      key: 'commercial-urgent',
      headline: 'The calendar is the whole problem, so the plan is built around it',
      paths: hasEquity
        ? ['Sale before the auction (with adjournments buying the time)', 'Chapter 11 to stop a sale or a receiver', 'Payoff or DPO if capital can be raised']
        : ['Deed in lieu with a written guarantee release', 'Chapter 11 if the asset can carry a plan', 'Negotiated settlement of the guarantee'],
      explanation: hasEquity
        ? 'With a date set and equity in the asset, the goal is to convert that equity to cash before the sheriff does it for you at a discount. New Jersey generally allows two sale adjournments of up to 30 days each; used deliberately, that is enough runway to close a sale or a payoff. A Chapter 11 filing stops the sale and any receivership the moment it is filed, and is the tool of choice if the sale needs more time than adjournments provide.'
        : 'With a date set and little or no equity, the property itself is not what you are protecting; the guarantee is. The lender gains from a cooperative handover, and that is the leverage to trade for a written release of the guarantee and deficiency. Do not sign a deed in lieu without that release in hand.',
      thisWeek: [
        'Confirm the real hearing or sale date on the county\'s official listing; they move constantly.',
        'Engage a New Jersey commercial workout or bankruptcy attorney this week, not next; the decisions here are timing-sensitive.',
        'Assemble the package every path needs: rent roll, trailing-12 operating statement, loan documents, guarantee, and a current payoff figure.',
      ],
    };
  }

  if (a.goal === 'keep' && cashFlows) {
    return {
      key: 'commercial-workout',
      headline: 'A workout or refinance is realistic; the property\'s income is your leverage',
      paths: ['Workout or forbearance agreement', 'Refinance or bridge loan to retire the defaulted lender', 'Discounted payoff if the note has been sold'],
      explanation: 'A property that pays its bills is one a lender would rather keep performing than own. That is the basis for a workout: extended maturity, interest-only relief, or capitalized arrears in exchange for a credible plan and tighter reporting. If the relationship with the current lender is past saving, the same cash flow supports a refinance or bridge loan, expensive but decisive. If your note has been sold to a distressed-debt buyer, a discounted payoff may be on the table.',
      thisWeek: [
        'Request the loan documents and a payoff statement, and read the default, cure and guarantee provisions with counsel.',
        'Prepare a one-page plan and current financials before opening the workout conversation; credibility is the currency.',
        'Get one or two bridge-lender term sheets in parallel; a real alternative changes the lender\'s posture.',
      ],
    };
  }

  if (a.goal === 'keep' && !cashFlows) {
    return {
      key: 'commercial-stabilize',
      headline: 'Keeping it means fixing the income first, and buying the time to do it',
      paths: ['Forbearance tied to a lease-up or repositioning plan', 'Chapter 11 (Subchapter V for smaller businesses) to protect the asset while it stabilizes', 'Sale-leaseback if the operating business is viable but the debt is not'],
      explanation: 'A vacant or under-rented property gives the lender the argument for a receiver and gives you little to negotiate with, so the plan has to be about income: signed leases, a repositioning budget, a buyer for the business but not the building. Forbearance buys time if the plan is credible; Chapter 11 protects control while the plan executes; and if your own business is the tenant, a sale-leaseback can retire the debt while you keep operating.',
      thisWeek: [
        'Document rents, insurance and taxes; those facts decide any receivership motion.',
        'Put a number on the stabilization: what it costs, how long, and where the money comes from.',
        'Talk to a Chapter 11 attorney about Subchapter V eligibility before the lender files a receivership motion, not after.',
      ],
    };
  }

  if (a.goal === 'walk' || (a.equity === 'underwater' && a.goal !== 'keep')) {
    return {
      key: 'commercial-release',
      headline: 'The asset is not the priority; your guarantee and your exposure are',
      paths: ['Deed in lieu with a written guarantee and deficiency release', 'Negotiated short payoff with a release', 'Chapter 11 or personal bankruptcy as the backstop'],
      explanation: 'When the debt exceeds the value, the property is already the lender\'s problem; what you control is how you exit. Lenders prefer a clean, cooperative handover over a contested case with a deteriorating asset, and that preference is worth a release of the personal guarantee. Everything in this path is about getting that release in writing before you give up the leverage of the property itself.',
      thisWeek: [
        'Do not sign anything transferring the property until the guarantee release language is agreed.',
        'Have counsel review the guarantee for defenses and carve-out exposure; it changes the negotiation.',
        'Get tax advice on cancellation-of-debt income before a settlement is papered.',
      ],
    };
  }

  return {
    key: 'commercial-sale',
    headline: 'A planned sale protects the most value, and the calendar decides the price',
    paths: ['Market sale before any auction', 'Sale-leaseback if your business operates there', 'Refinance or bridge as a fallback if the sale timeline slips'],
    explanation: 'With equity to protect and time to use it, a controlled sale beats every distressed alternative: you set the marketing, the buyers diligence on your schedule, and the proceeds pay the lender and the guarantee. Commercial sales take 90 to 180 days, so the work is starting early and keeping the lender informed enough to cooperate with adjournments if the case advances.',
    thisWeek: [
      'Get an honest broker opinion of value and a payoff statement; the gap between them is your decision.',
      'Assemble the diligence file now: leases, estoppels, environmental reports, roof and systems; it shortens the sale by weeks.',
      'Tell the lender a sale is underway; a documented sale in process is the strongest basis for cooperation and adjournments.',
    ],
  };
}

function urgency(a: A): string {
  if (a.stage === 'judgment' || a.timeline === 'weeks') return 'HOT';
  if (a.stage === 'receiver' || a.stage === 'complaint') return 'HOT';
  if (a.stage === 'accelerated') return 'WARM';
  return 'STANDARD';
}

export default function CommercialAssessmentPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<A>({});
  const [result, setResult] = useState<Result | null>(null);
  const [contact, setContact] = useState({ name: '', company: '', phone: '', email: '', address: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const field = 'w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent';
  const label = 'block text-sm font-semibold text-slate-700 mb-1.5';

  const submit = async (skip: boolean) => {
    if (!skip && (!contact.name.trim() || (!contact.phone.trim() && !contact.email.trim()))) {
      setError('Please enter your name and at least a phone number or email.');
      return;
    }
    setError('');
    setSubmitting(true);
    const matched = match(answers);
    const score = urgency(answers);
    if (!skip) {
      try {
        const f = new URLSearchParams();
        f.append('form-name', 'lead-quiz');
        f.append('leadType', 'commercial');
        f.append('name', contact.name);
        f.append('company', contact.company);
        f.append('phone', contact.phone);
        f.append('email', contact.email);
        f.append('propertyAddress', contact.address);
        f.append('notes', contact.notes);
        f.append('propertyType', answers.propertyType || '');
        f.append('situation', answers.stage || '');
        f.append('loanBalance', answers.loanBalance || '');
        f.append('occupancy', answers.occupancy || '');
        f.append('personalGuarantee', answers.guarantee || '');
        f.append('homeValue', answers.equity || '');
        f.append('goal', answers.goal || '');
        f.append('timeline', answers.timeline || '');
        f.append('leadScore', score);
        f.append('recommendation', matched.key);
        f.append('sourcePage', '/commercial/assessment');
        appendAttribution(f);
        await fetch('/__forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: f.toString() });
        setSubmitted(true);
        trackEvent('generate_lead', { lead_score: score, recommendation: matched.key, source_page: '/commercial/assessment', lead_type: 'commercial' });
      } catch {
        // show results regardless
      }
    }
    trackEvent('quiz_complete', { recommendation: matched.key, contact_left: skip ? 'no' : 'yes', lead_type: 'commercial' });
    setResult(matched);
    setSubmitting(false);
  };

  if (result) {
    return (
      <div className="min-h-full bg-slate-50">
        <SiteHeader />
        <div className="max-w-2xl mx-auto py-14 px-4">
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200">
            <p className="text-amber-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">Commercial assessment · Results</p>
            <h1 className="font-serif text-3xl font-bold text-slate-900 mb-5">{result.headline}</h1>
            {submitted && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg px-5 py-4 mb-6 text-sm">
                Received. We will reach out within one business day to talk through the asset, confidentially.
              </div>
            )}
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Paths that fit</p>
            <ol className="space-y-2 mb-6">
              {result.paths.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">{i + 1}</span>
                  <p className="text-slate-800 font-medium pt-0.5">{p}</p>
                </li>
              ))}
            </ol>
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-6">
              <p className="text-slate-700 leading-relaxed">{result.explanation}</p>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">This week</p>
            <ul className="space-y-2 mb-8">
              {result.thisWeek.map((t, i) => (
                <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed"><span className="text-amber-500 font-bold">→</span>{t}</li>
              ))}
            </ul>
            <div className="border border-blue-200 bg-blue-50/40 rounded-xl px-5 py-4 mb-6 text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900">If a sale is the path:</strong> the people behind this guide hold an ownership interest in Corcoran Sawyer Smith x Builders Resource Center, a licensed New Jersey brokerage that handles commercial listings and free valuations. We benefit if you list with them, which is why it is labeled a related business, and you are free to interview any broker.{' '}
              <Link href="/companies/brc-corcoran-sawyer-smith" className="underline underline-offset-4 font-semibold">About the brokerage</Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/commercial/options" className="border border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-slate-50 transition">All seven paths in depth</Link>
              <a href={`mailto:${SITE_EMAIL}?subject=Commercial%20property%20consultation`} className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-slate-800 transition">Email us the details</a>
            </div>
            <p className="text-slate-400 text-xs mt-6 leading-relaxed">Educational information, not legal, tax or financial advice. A New Jersey commercial workout attorney and a CPA should review your documents before you act.</p>
          </div>
        </div>
      </div>
    );
  }

  if (step >= QUESTIONS.length) {
    return (
      <div className="min-h-full bg-slate-50">
        <SiteHeader />
        <div className="max-w-2xl mx-auto py-14 px-4">
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200">
            <p className="text-amber-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">Last step · Confidential</p>
            <h1 className="font-serif text-2xl font-bold text-slate-900 mb-3">Where should we send your results?</h1>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">We review every commercial assessment personally and reply within one business day. Nothing is shared with anyone unless you ask for an introduction. You can also skip and see the results now.</p>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className={label}>Your name *</label><input className={field} value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} placeholder="First and last name" /></div>
                <div><label className={label}>Entity or company (optional)</label><input className={field} value={contact.company} onChange={(e) => setContact({ ...contact, company: e.target.value })} placeholder="123 Main Street LLC" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className={label}>Phone</label><input className={field} type="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} placeholder="(555) 555-5555" /></div>
                <div><label className={label}>Email</label><input className={field} type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} placeholder="you@company.com" /></div>
              </div>
              <div>
                <label className={label}>Property address (optional)</label>
                <AddressInput value={contact.address} onChange={(v) => setContact({ ...contact, address: v })} />
              </div>
              <div>
                <label className={label}>Anything else we should know? (optional)</label>
                <textarea className={field} rows={3} value={contact.notes} onChange={(e) => setContact({ ...contact, notes: e.target.value })} placeholder="Lender, hearing or sale dates, what has been offered so far" />
              </div>
              {error && <p className="text-red-700 text-sm">{error}</p>}
              <button onClick={() => submit(false)} disabled={submitting} className="w-full bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition disabled:opacity-60">
                {submitting ? 'Sending…' : 'Get My Results and a Confidential Review'}
              </button>
              <button onClick={() => submit(true)} disabled={submitting} className="w-full text-slate-500 text-sm underline underline-offset-4 hover:text-slate-700">
                Skip, just show my results
              </button>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                By submitting, you agree that NJ Foreclosure Guide may contact you at the phone number and email provided about your inquiry, including by text message. Consent is not a condition of using this site; reply STOP to opt out. We do not sell your information. {RESPONSE_PROMISE}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const q = QUESTIONS[step];
  return (
    <div className="min-h-full bg-slate-50">
      <SiteHeader />
      <div className="max-w-2xl mx-auto py-14 px-4">
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <p className="text-amber-600 text-xs font-semibold tracking-[0.25em] uppercase">Commercial assessment</p>
            <p className="text-slate-400 text-sm">Step {step + 1} of {QUESTIONS.length}</p>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full mb-8">
            <div className="h-1.5 bg-amber-400 rounded-full transition-all" style={{ width: `${(step / QUESTIONS.length) * 100}%` }} />
          </div>
          <h1 className="font-serif text-2xl font-bold text-slate-900 mb-2">{q.title}</h1>
          {q.sub && <p className="text-slate-500 text-sm mb-5">{q.sub}</p>}
          <div className={`space-y-3 ${q.sub ? '' : 'mt-6'}`}>
            {q.options.map((o) => (
              <button
                key={o.value}
                onClick={() => { setAnswers({ ...answers, [q.key]: o.value }); setStep(step + 1); }}
                className="w-full text-left px-5 py-4 border border-slate-200 rounded-xl hover:border-slate-900 hover:bg-slate-50 transition text-slate-800 font-medium"
              >
                {o.label}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button onClick={() => setStep(step - 1)} className="mt-6 text-slate-500 text-sm underline underline-offset-4 hover:text-slate-700">Back</button>
          )}
          <p className="text-slate-400 text-xs mt-6 leading-relaxed">Confidential. Not legal, tax or financial advice, and nothing here obligates you to anything.</p>
        </div>
      </div>
    </div>
  );
}
