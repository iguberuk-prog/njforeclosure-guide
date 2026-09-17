'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';

/**
 * Myth Busters: 12 statements, tap Myth or Fact, get the honest answer.
 * In-memory state only. Every "truth" matches site legal conventions.
 */

interface Myth {
  statement: string;
  isMyth: boolean;
  headline: string;
  explain: string;
}

const MYTHS: Myth[] = [
  {
    statement: 'The bank wants to take your house.',
    isMyth: true,
    headline: 'Myth. Foreclosure usually LOSES the bank money.',
    explain:
      'A year-plus of missed interest, legal fees, property costs, then an auction discount — that’s why loss-mitigation departments exist. The bank’s best case is very often your loan performing again, which is leverage you can use.',
  },
  {
    statement: 'You have to move out when you get served foreclosure papers.',
    isMyth: true,
    headline: 'Myth. You have the legal right to stay through the whole case.',
    explain:
      'The court process runs for months, and you can lawfully live in your home the entire time. Leaving early helps nobody and costs you options — and money.',
  },
  {
    statement: 'If I ignore the papers, everything slows down.',
    isMyth: true,
    headline: 'Myth. Silence is the fast lane.',
    explain:
      'Unanswered cases go to default and get processed administratively — faster, on the lender’s schedule. Filing an answer inside the 35 days is what actually slows the case and keeps your options open.',
  },
  {
    statement: 'Free foreclosure help is worthless — you get what you pay for.',
    isMyth: true,
    headline: 'Myth. Free is the real product; paid is usually a markup on it.',
    explain:
      'NJ court mediation is free. HUD counselors (800-569-4287) build the same applications paid firms charge four figures for. Legal Services of NJ (1-888-576-5529) provides real lawyers to income-qualifying homeowners. Charging upfront fees for this is generally illegal.',
  },
  {
    statement: 'Once a sheriff sale date is set, it’s over.',
    isMyth: true,
    headline: 'Myth. A date is a deadline, not an ending.',
    explain:
      'NJ practice generally allows two homeowner adjournments of up to 30 days each, banks postpone their own sales constantly, a sale you close before the auction keeps your equity — and there’s a 10-day redemption window even after.',
  },
  {
    statement: 'You can still sell your house during a foreclosure.',
    isMyth: false,
    headline: 'Fact. Until the auction happens, the house is yours to sell.',
    explain:
      'A closing pays off the judgment at the settlement table and every dollar above it is yours — at market price instead of auction mechanics. The pending case just sets the deadline.',
  },
  {
    statement: 'You can be thrown out the day after the sheriff sale.',
    isMyth: true,
    headline: 'Myth. Removal is a court process with notice — never a same-day event.',
    explain:
      'After the sale come the 10-day redemption window, the deed, and then a possession process through the courts. Buyers usually prefer paying for an agreed move-out over litigating one.',
  },
  {
    statement: 'Paying a company upfront to "save your home" is how it’s done.',
    isMyth: true,
    headline: 'Myth. Upfront fees for foreclosure rescue are generally ILLEGAL.',
    explain:
      'Federal and NJ law generally prohibit charging before delivering mortgage-relief results — because that industry was so reliably fraudulent regulators shut its model down. Anyone demanding money now, or your deed, is a red flag, not a rescuer.',
  },
  {
    statement: 'New Jersey courts offer foreclosure mediation for free.',
    isMyth: false,
    headline: 'Fact. Free for eligible homeowners — and the bank must send a decision-maker.',
    explain:
      'The state’s mediation program costs eligible owner-occupants nothing and requires the lender’s side to appear with settlement authority. It’s requested when you answer the complaint — one more reason answering matters.',
  },
  {
    statement: 'A foreclosure ruins your credit forever.',
    isMyth: true,
    headline: 'Myth. It’s a slope, not a life sentence.',
    explain:
      'The notation ages off in seven years and its weight fades much sooner with clean payment behavior. Lending programs readmit past-foreclosure borrowers after documented waiting periods. People come back from this constantly.',
  },
  {
    statement: 'If the auction brings more than you owed, you get the difference.',
    isMyth: false,
    headline: 'Fact. Surplus funds belong to the former owner — and go unclaimed all the time.',
    explain:
      'Bids above the judgment create surplus, deposited with the court for junior lienholders and then you. It’s the most abandoned asset in the whole process, mostly because nobody tells families it exists.',
  },
  {
    statement: 'Renters must leave when their landlord gets foreclosed.',
    isMyth: true,
    headline: 'Myth. NJ tenant protections generally survive the sale.',
    explain:
      'A foreclosure changes the landlord, not the tenancy. "New owner, everybody out" letters overstate the law. Tenants keep paying rent, keep their rights, and should get independent advice before signing anything.',
  },
];

export default function MythsClient() {
  const [i, setI] = useState(0);
  const [answered, setAnswered] = useState<boolean | null>(null); // user's pick: true = "myth"
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

  const m = MYTHS[i];
  const correct = answered !== null && answered === m.isMyth;

  function pick(saysMyth: boolean) {
    if (answered !== null) return;
    setAnswered(saysMyth);
    if (saysMyth === m.isMyth) setScore((s) => s + 1);
    if (i === 0) trackEvent('myths_started');
  }
  function next() {
    if (i + 1 >= MYTHS.length) {
      setDone(true);
      trackEvent('myths_finished', { score });
    } else {
      setI(i + 1);
      setAnswered(null);
    }
  }
  async function share() {
    const text = `I scored ${score}/${MYTHS.length} on the NJ Foreclosure Myth Busters quiz. Most people believe at least a few of these myths — and they cost homeowners real money. Try it: njforeclosureguide.org/myths`;
    try {
      if (navigator.share) { await navigator.share({ text }); return; }
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch { /* user cancelled */ }
  }

  if (done) {
    const verdict =
      score >= 10 ? 'You’d make a good housing counselor.' :
      score >= 7 ? 'Better informed than most of New Jersey.' :
      'The myths got you — which is exactly why they work.';
    return (
      <div className="rounded-2xl border-2 border-slate-200 px-8 py-10 text-center">
        <p className="text-amber-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">Final score</p>
        <p className="font-serif text-6xl font-bold text-slate-900 mb-2">{score}<span className="text-2xl text-slate-400">/{MYTHS.length}</span></p>
        <p className="text-slate-700 font-semibold mb-8">{verdict}</p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
          <button onClick={share} className="flex-1 bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition">
            {copied ? 'Copied!' : 'Share Your Score'}
          </button>
          <button onClick={() => { setI(0); setAnswered(null); setScore(0); setDone(false); }}
            className="flex-1 border border-slate-300 text-slate-800 px-6 py-3 rounded-lg font-bold hover:bg-slate-50 transition">
            Play Again
          </button>
        </div>
        <p className="text-slate-600 text-sm mt-8 leading-relaxed">
          The myths cost people real houses. The facts are free:{' '}
          <Link href="/case-map" className="font-semibold underline underline-offset-4 text-slate-900">see the whole map</Link>
          {' '}or{' '}
          <Link href="/quiz" className="font-semibold underline underline-offset-4 text-slate-900">rank your 7 options in 2 minutes</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border-2 border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-6 py-3 flex items-center justify-between border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500">Statement {i + 1} of {MYTHS.length}</p>
        <p className="text-xs font-bold text-slate-500">Score: {score}</p>
      </div>
      <div className="px-6 py-8 bg-white">
        <p className="font-serif text-2xl md:text-3xl font-bold text-slate-900 text-center leading-snug mb-8">
          &ldquo;{m.statement}&rdquo;
        </p>

        {answered === null ? (
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <button onClick={() => pick(true)}
              className="flex-1 bg-slate-900 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition">
              Myth
            </button>
            <button onClick={() => pick(false)}
              className="flex-1 bg-amber-400 text-slate-950 px-6 py-4 rounded-xl font-bold text-lg hover:bg-amber-300 transition">
              Fact
            </button>
          </div>
        ) : (
          <div>
            <div className={`rounded-xl px-5 py-4 mb-4 border ${correct ? 'bg-emerald-50 border-emerald-300' : 'bg-red-50 border-red-300'}`}>
              <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${correct ? 'text-emerald-800' : 'text-red-800'}`}>
                {correct ? 'You got it' : 'Not quite'}
              </p>
              <p className="font-bold text-slate-900">{m.headline}</p>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm mb-6">{m.explain}</p>
            <button onClick={next} className="w-full bg-slate-900 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-slate-800 transition">
              {i + 1 >= MYTHS.length ? 'See My Score' : 'Next Statement →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
