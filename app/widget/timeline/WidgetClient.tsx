'use client';

import { useState } from 'react';

/**
 * The embeddable NJ Foreclosure Timeline Checker.
 *
 * Lives inside third-party iframes (counselors, nonprofits, attorneys), so:
 * no site header, no external requests, no storage, self-contained styling,
 * every outbound link target=_blank with the widget utm. Compact by design —
 * comfortable at 320px wide and ~460px tall. Tone and claims follow site
 * rules: deadlines framed as "generally," free help first, no promises.
 */

type StageKey = 'behind' | 'noi' | 'served' | 'judgment' | 'sale';

const STAGES: {
  v: StageKey;
  label: string;
  clock: string;
  truth: string;
  moves: string[];
}[] = [
  {
    v: 'behind',
    label: "I'm behind on payments — nothing filed",
    clock: 'Generally no court case can start until you are 120+ days behind, plus a 30-day notice.',
    truth: 'This is the cheapest stage to fix — no legal fees exist yet.',
    moves: [
      'Call your servicer and ask for "loss mitigation"',
      'Book a free HUD counselor: 800-569-4287',
    ],
  },
  {
    v: 'noi',
    label: 'I got a Notice of Intention (NOI)',
    clock: 'The lender must generally wait at least 30 days after this notice before filing in court.',
    truth: 'The NOI must state the exact amount to catch up — paying it in this window generally ends the matter.',
    moves: [
      'Get the exact reinstatement amount in writing',
      'Free counselor to build a plan: 800-569-4287',
    ],
  },
  {
    v: 'served',
    label: 'I was served a court complaint',
    clock: 'You generally have 35 days from service to file an answer.',
    truth: 'Filing an answer — even a simple one — keeps every option open and unlocks free court mediation.',
    moves: [
      'File your answer (free forms: njcourts.gov)',
      'Free lawyers if you qualify: 1-888-576-5529',
    ],
  },
  {
    v: 'judgment',
    label: 'Final judgment was entered',
    clock: 'A sheriff sale is usually scheduled next; NJ generally allows two adjournments of up to 30 days each.',
    truth: 'You can generally still pay off the debt, sell, or negotiate — the case is not over.',
    moves: [
      "Call the county sheriff's foreclosure unit for exact dates",
      'Get a real market valuation — equity changes everything',
    ],
  },
  {
    v: 'sale',
    label: 'A sheriff sale is scheduled',
    clock: 'Adjournments can generally add up to 60 days; a 10-day redemption window follows the sale.',
    truth: 'Even now: adjournments, redemption, and surplus funds (auction money above the debt is yours).',
    moves: [
      'Use adjournments with a purpose — a closing or a deal',
      'Free legal help if you qualify: 1-888-576-5529',
    ],
  },
];

export default function WidgetClient() {
  const [stage, setStage] = useState<StageKey | ''>('');
  const s = STAGES.find((x) => x.v === stage);

  return (
    <div className="min-h-full bg-slate-950 text-white p-4 flex flex-col" style={{ fontFamily: 'Georgia, serif' }}>
      <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase" style={{ fontFamily: 'Arial, sans-serif' }}>
        NJ Foreclosure Timeline Checker · Free
      </p>
      <p className="font-bold text-lg mt-1 mb-3">Where are you in the process?</p>

      <select
        value={stage}
        onChange={(e) => setStage(e.target.value as StageKey)}
        className="w-full rounded-lg bg-white text-slate-900 px-3 py-2.5 text-sm"
        style={{ fontFamily: 'Arial, sans-serif' }}
        aria-label="Select your foreclosure stage"
      >
        <option value="">Choose your stage…</option>
        {STAGES.map((x) => (
          <option key={x.v} value={x.v}>{x.label}</option>
        ))}
      </select>

      {s ? (
        <div className="mt-4 space-y-3 text-sm flex-1">
          <div className="rounded-lg bg-white/[0.07] border border-white/10 px-3 py-2.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400" style={{ fontFamily: 'Arial, sans-serif' }}>Your clock</p>
            <p className="text-slate-200 leading-snug mt-0.5">{s.clock}</p>
          </div>
          <div className="rounded-lg bg-white/[0.07] border border-white/10 px-3 py-2.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400" style={{ fontFamily: 'Arial, sans-serif' }}>What&rsquo;s true right now</p>
            <p className="text-slate-200 leading-snug mt-0.5">{s.truth}</p>
          </div>
          <div className="rounded-lg bg-white/[0.07] border border-white/10 px-3 py-2.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400" style={{ fontFamily: 'Arial, sans-serif' }}>Two free moves</p>
            <ul className="text-slate-200 leading-snug mt-0.5 list-disc pl-4 space-y-1">
              {s.moves.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
          <a
            href={`https://njforeclosureguide.org/command-center?utm_source=widget&stage=${stage === 'behind' ? 'missed' : stage === 'judgment' ? 'judgment' : stage === 'sale' ? 'scheduled' : stage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-amber-400 text-slate-950 font-bold rounded-lg px-4 py-2.5 hover:bg-amber-300 transition"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            Build my full free plan →
          </a>
        </div>
      ) : (
        <p className="text-slate-400 text-xs mt-4 flex-1">
          Pick a stage to see your deadlines, what&rsquo;s still true, and your two best free moves.
          Nothing you select leaves this box.
        </p>
      )}

      <p className="text-slate-500 text-[10px] mt-3 leading-snug" style={{ fontFamily: 'Arial, sans-serif' }}>
        Educational, not legal advice. Deadlines are general NJ rules — your court papers control.{' '}
        <a href="https://njforeclosureguide.org/?utm_source=widget" target="_blank" rel="noopener noreferrer" className="underline">
          njforeclosureguide.org
        </a>
      </p>
    </div>
  );
}
