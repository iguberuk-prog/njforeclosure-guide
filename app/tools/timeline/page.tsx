'use client';

import { useState } from 'react';
import Link from 'next/link';

const STAGES = [
  {
    id: 'current',
    label: "I'm current, but worried about upcoming payments",
    position: 0,
    headline: 'You are ahead of the problem, which is the best place to be.',
    detail:
      'Nothing negative has happened yet. If you expect hardship (job loss, medical, divorce), contacting your servicer early opens options like forbearance before you ever miss a payment.',
    options: ['Forbearance', 'Refinancing', 'Loan Modification', 'Budget counseling (free HUD counselors)'],
    urgency: 'low',
  },
  {
    id: 'missed',
    label: "I've missed 1-3 payments",
    position: 1,
    headline: 'You have real options and real time. Act now and you keep almost all of them.',
    detail:
      'Late fees are accruing and your servicer is reaching out. In New Jersey, a lender must send a Notice of Intention at least 30 days before filing a foreclosure complaint, and most lenders wait until 120 days of delinquency before starting. Every option is still on the table.',
    options: ['Reinstatement (catch up)', 'Loan Modification', 'Forbearance', 'Refinancing', 'Sale on your terms'],
    urgency: 'medium',
  },
  {
    id: 'notice',
    label: 'I received a Notice of Intention to Foreclose',
    position: 2,
    headline: 'This is a formal warning, not a lawsuit yet. You have at least 30 days before anything is filed.',
    detail:
      'Under the NJ Fair Foreclosure Act, this notice must arrive at least 30 days before the lender can file a complaint. It must state the amount needed to catch up. Curing the default during this window generally stops the process.',
    options: ['Reinstatement', 'Loan Modification', 'Forbearance', 'Short Sale', 'Cash Sale', 'Attorney review'],
    urgency: 'medium-high',
  },
  {
    id: 'complaint',
    label: 'A foreclosure complaint was filed (lis pendens)',
    position: 3,
    headline: 'The lawsuit has started. You have 35 days to respond after being served.',
    detail:
      'New Jersey is a judicial state, so foreclosure goes through Superior Court. After you are served you have 35 days to file an answer. Contested cases take substantially longer, which buys time to work out a solution. NJ also offers a court foreclosure mediation program for eligible homeowners at no cost.',
    options: ['File an answer (attorney)', 'Court mediation program', 'Loan Modification', 'Chapter 13 Bankruptcy', 'Short Sale', 'Cash Sale'],
    urgency: 'high',
  },
  {
    id: 'judgment',
    label: 'Final judgment was entered',
    position: 4,
    headline: 'Serious, but not over. Homes are still saved and sold at this stage.',
    detail:
      'After final judgment the court issues a writ of execution and the sheriff schedules a sale. In New Jersey you can typically request adjournments of the sheriff sale, and a Chapter 13 filing can pause the process. A sale of the home can still close before the sheriff sale.',
    options: ['Chapter 13 Bankruptcy', 'Sheriff sale adjournment', 'Cash Sale (fast close)', 'Redemption (pay in full)'],
    urgency: 'very-high',
  },
  {
    id: 'sale-scheduled',
    label: 'A sheriff sale date is scheduled',
    position: 5,
    headline: 'Days matter now, but people in your exact position still walk away with equity.',
    detail:
      'You can generally request adjournments of the sale, and New Jersey allows redemption for 10 days after the sale. A cash buyer can often close before the sale date, paying off the mortgage and putting remaining equity in your pocket instead of losing it.',
    options: ['Immediate attorney contact', 'Sale adjournment request', 'Chapter 13 (automatic stay)', 'Cash Sale before the sale date'],
    urgency: 'critical',
  },
];

const URGENCY_STYLES: Record<string, { bar: string; badge: string; text: string }> = {
  low: { bar: 'bg-emerald-400', badge: 'bg-emerald-50 border-emerald-200 text-emerald-800', text: 'Low urgency' },
  medium: { bar: 'bg-yellow-400', badge: 'bg-yellow-50 border-yellow-200 text-yellow-800', text: 'Moderate urgency' },
  'medium-high': { bar: 'bg-amber-400', badge: 'bg-amber-50 border-amber-300 text-amber-800', text: 'Elevated urgency' },
  high: { bar: 'bg-orange-400', badge: 'bg-orange-50 border-orange-200 text-orange-800', text: 'High urgency' },
  'very-high': { bar: 'bg-red-400', badge: 'bg-red-50 border-red-200 text-red-700', text: 'Very high urgency' },
  critical: { bar: 'bg-red-600', badge: 'bg-red-50 border-red-300 text-red-800', text: 'Act this week' },
};


const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to figure out where you are in the New Jersey foreclosure process',
  description:
    'Identify your stage in the New Jersey judicial foreclosure process, from missed payments through a scheduled sheriff sale, and see which options remain available at each stage.',
  totalTime: 'PT2M',
  inLanguage: 'en-US',
  step: [
    { '@type': 'HowToStep', name: 'Identify your stage', text: 'Select where you are: current but worried, one to three payments missed, Notice of Intention received, complaint filed, judgment entered, or sheriff sale scheduled.' },
    { '@type': 'HowToStep', name: 'Read what that stage means', text: 'Each stage explains what has legally happened, roughly how much time remains, and the urgency level.' },
    { '@type': 'HowToStep', name: 'Review the options still open', text: 'Options narrow as the case advances. The tool lists what is still realistically available at your stage.' },
    { '@type': 'HowToStep', name: 'Confirm against your court documents', text: 'Your own paperwork controls. Verify deadlines there and with a licensed New Jersey attorney.' },
  ],
};

export default function TimelinePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const stage = STAGES.find((s) => s.id === selected);

  return (
    <div className="min-h-full bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      {/* Header */}
      <div className="bg-slate-950 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Free Interactive Tool</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tight">Where Are You in the NJ Foreclosure Process?</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            New Jersey foreclosure is a court process with defined stages. Select where you are and see what happens next, how much time you realistically have, and which solutions are still available.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14">
        {/* Stage selector */}
        <div className="space-y-3 mb-10">
          {STAGES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelected(s.id)}
              className={`w-full text-left px-6 py-4 rounded-xl border transition font-medium ${
                selected === s.id
                  ? 'border-slate-900 bg-white shadow-lg text-slate-900'
                  : 'border-slate-200 bg-white hover:border-slate-400 text-slate-700'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Result */}
        {stage && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Progress visualization */}
            <div className="px-8 pt-8">
              <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-wider mb-2">
                <span>Start</span>
                <span>Sheriff Sale</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 mb-1">
                <div
                  className={`h-2 rounded-full transition-all ${URGENCY_STYLES[stage.urgency].bar}`}
                  style={{ width: `${((stage.position + 1) / STAGES.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="p-8">
              <span className={`inline-block px-3 py-1 rounded-full border text-xs font-bold mb-4 ${URGENCY_STYLES[stage.urgency].badge}`}>
                {URGENCY_STYLES[stage.urgency].text}
              </span>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">{stage.headline}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{stage.detail}</p>

              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">Options still available to you</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {stage.options.map((o, i) => (
                  <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700">
                    {o}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quiz"
                  className="flex-1 bg-amber-400 text-slate-950 py-3.5 rounded-xl font-bold text-center hover:bg-amber-300 transition"
                >
                  Get My Personalized Match
                </Link>
                <Link
                  href="/professionals"
                  className="flex-1 border border-slate-300 text-slate-800 py-3.5 rounded-xl font-semibold text-center hover:bg-slate-50 transition"
                >
                  See Our Professional Network
                </Link>
              </div>
            </div>
          </div>
        )}

        <p className="text-xs text-slate-400 mt-10 text-center leading-relaxed max-w-xl mx-auto">
          This tool is educational only and describes the general New Jersey judicial foreclosure process. It is not legal advice, and individual timelines vary. Always confirm deadlines in your own court documents and consult a licensed New Jersey attorney about your specific case.
        </p>
      </div>
    </div>
  );
}
