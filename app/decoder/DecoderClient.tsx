'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';
import { DOCUMENTS } from '../../lib/documents';

/**
 * The Visual Document Decoder: "which of these does your letter look like?"
 * Each card is a CSS-drawn SAMPLE layout (clearly watermarked — these are
 * teaching mockups, not reproductions of any real document). Tap one and
 * the panel translates it using the verified document registry.
 */

interface VisualSpec {
  slug: string;
  letterhead: string;
  docTitle: string;
  accent?: string; // a distinctive line on the mockup
  blogHref: string;
  blogLabel: string;
}

const VISUALS: VisualSpec[] = [
  {
    slug: 'notice-of-intention',
    letterhead: 'YOUR MORTGAGE SERVICER · CERTIFIED MAIL',
    docTitle: 'NOTICE OF INTENTION TO FORECLOSE',
    accent: 'Amount required to cure: $______',
    blogHref: '/blog/i-got-a-notice-of-intention-to-foreclose-nj',
    blogLabel: 'The NOI, decoded in full',
  },
  {
    slug: 'summons-and-complaint',
    letterhead: 'SUPERIOR COURT OF NEW JERSEY · CHANCERY DIVISION',
    docTitle: 'SUMMONS AND COMPLAINT',
    accent: 'You have 35 days to answer',
    blogHref: '/blog/served-foreclosure-summons-and-complaint-nj',
    blogLabel: 'Being served, decoded in full',
  },
  {
    slug: 'entry-of-default',
    letterhead: 'SUPERIOR COURT OF NEW JERSEY',
    docTitle: 'REQUEST & ENTRY OF DEFAULT',
    blogHref: '/blog/entry-of-default-foreclosure-nj',
    blogLabel: 'Default, decoded in full',
  },
  {
    slug: 'final-judgment',
    letterhead: 'SUPERIOR COURT OF NEW JERSEY · OFFICE OF FORECLOSURE',
    docTitle: 'FINAL JUDGMENT OF FORECLOSURE',
    accent: 'Total due: $______ · Sale authorized',
    blogHref: '/blog/final-judgment-of-foreclosure-nj',
    blogLabel: 'Final judgment, decoded in full',
  },
  {
    slug: 'notice-of-sheriff-sale',
    letterhead: 'OFFICE OF THE COUNTY SHERIFF',
    docTitle: 'NOTICE OF SHERIFF’S SALE',
    accent: 'Sale date: ____ at ____ · Location: ____',
    blogHref: '/blog/sheriff-sale-notice-nj-what-to-do',
    blogLabel: 'The sale notice, decoded in full',
  },
  {
    slug: 'writ-of-possession',
    letterhead: 'SUPERIOR COURT OF NEW JERSEY',
    docTitle: 'WRIT OF POSSESSION',
    blogHref: '/blog/letters-after-sheriff-sale-nj',
    blogLabel: 'The after-sale letters, decoded',
  },
];

export default function DecoderClient() {
  const [sel, setSel] = useState<string | null>(null);
  const doc = sel ? DOCUMENTS.find((d) => d.slug === sel) : null;
  const vis = sel ? VISUALS.find((v) => v.slug === sel) : null;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {VISUALS.map((v) => {
          const d = DOCUMENTS.find((x) => x.slug === v.slug)!;
          const active = sel === v.slug;
          return (
            <button
              key={v.slug}
              onClick={() => { setSel(v.slug); trackEvent('decoder_pick', { doc: v.slug }); }}
              className={`text-left group rounded-xl transition ${active ? 'ring-4 ring-amber-400' : 'hover:-translate-y-0.5'}`}
              aria-pressed={active}
            >
              {/* paper mockup */}
              <div className="relative bg-white border border-slate-300 rounded-lg shadow-md overflow-hidden aspect-[3/4] px-3 py-3">
                <p className="absolute inset-0 flex items-center justify-center -rotate-[24deg] text-slate-200 font-black text-2xl tracking-widest select-none" aria-hidden>
                  SAMPLE
                </p>
                <p className="text-[6px] sm:text-[7px] font-bold tracking-wider text-slate-500 truncate">{v.letterhead}</p>
                <div className="h-px bg-slate-200 my-1.5" />
                <p className="text-[8px] sm:text-[10px] font-black text-slate-900 leading-tight">{v.docTitle}</p>
                <div className="mt-2 space-y-1" aria-hidden>
                  {[92, 100, 84, 96, 70, 88, 60].map((w, i) => (
                    <div key={i} className="h-1 rounded bg-slate-200" style={{ width: `${w}%` }} />
                  ))}
                </div>
                {v.accent && (
                  <p className="mt-2 text-[6px] sm:text-[8px] font-bold text-amber-800 bg-amber-50 border border-amber-200 rounded px-1 py-0.5 leading-tight">
                    {v.accent}
                  </p>
                )}
                <div className="mt-2 space-y-1" aria-hidden>
                  {[95, 78, 90].map((w, i) => (
                    <div key={i} className="h-1 rounded bg-slate-200" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </div>
              <p className={`mt-2 text-xs font-bold text-center ${active ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                {d.shortName}
              </p>
            </button>
          );
        })}
      </div>

      {doc && vis ? (
        <div className="rounded-2xl border-2 border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-white px-6 py-5">
            <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">{doc.stageLabel}</p>
            <h2 className="font-serif text-2xl font-bold">{doc.name}</h2>
          </div>
          <div className="px-6 py-5 bg-white space-y-5">
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">First, breathe</p>
              <p className="text-slate-700 text-sm leading-relaxed">{doc.panic}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">What this actually is</p>
              <p className="text-slate-700 text-sm leading-relaxed">{doc.whatItIs}</p>
            </div>
            <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1">Your clock</p>
              <p className="text-slate-700 text-sm leading-relaxed">{doc.clock}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Do this now</p>
              <ul className="space-y-1.5">
                {doc.whatToDo.map((t, i) => (
                  <li key={i} className="text-slate-700 text-sm leading-relaxed flex gap-2">
                    <span className="text-amber-600 font-bold flex-shrink-0">→</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Still open at this stage</p>
              <p className="text-slate-700 text-sm leading-relaxed">{doc.stillOpen}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <Link href={`/documents/${doc.slug}`} className="flex-1 text-center bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm">
                Full Line-by-Line Decode
              </Link>
              <Link href={vis.blogHref} className="flex-1 text-center border border-slate-300 text-slate-800 px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-50 transition text-sm">
                {vis.blogLabel}
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-8 py-12 text-center">
          <p className="font-serif text-2xl font-bold text-slate-900 mb-2">Tap the one that looks like yours.</p>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            These are simplified sample layouts for recognition only — your document&rsquo;s exact
            wording will differ. Ten seconds from &ldquo;what is this?&rdquo; to a plain-English answer.
          </p>
        </div>
      )}

      <p className="text-slate-400 text-xs leading-relaxed mt-6">
        The cards above are illustrative sample layouts created for education — not reproductions of
        any court&rsquo;s or company&rsquo;s actual documents. General education, not legal advice; your own
        papers control your deadlines, and a licensed NJ attorney can confirm what applies to you.
      </p>
    </div>
  );
}
