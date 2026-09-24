'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  buildLetter,
  timingNotes,
  EMPTY_INPUT,
  LETTERS,
  HARDSHIP_REASONS,
  LOSS_MIT_REQUESTS,
  HARDSHIP_HELPERS,
  COMMITMENT_STARTERS,
  RFI_ITEMS,
  ERROR_TYPES,
  APPEAL_GROUNDS,
  REMINDERS,
  SENDING_CHECKLIST,
  type LetterInput,
  type LetterKind,
} from '../../../lib/letters';
import { trackEvent } from '../../../lib/analytics';

/**
 * The letter builder. Runs entirely in the browser: nothing typed is stored
 * or sent anywhere. The one analytics event fires on first interaction and
 * carries no inputs. Templates and legal wording live in lib/letters.ts
 * (tested by scripts/test-letters.mjs).
 */

type StrKey = { [K in keyof LetterInput]: LetterInput[K] extends string ? K : never }[keyof LetterInput];
type ListKey = 'hardshipHelpers' | 'rfiItems' | 'appealGrounds';

const inputCls =
  'w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent';

const todayIso = () => {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, '0')}-${String(n.getDate()).padStart(2, '0')}`;
};

const PRINT_CSS = `
@media print {
  @page { margin: 0.9in; }
  body * { visibility: hidden !important; }
  #lb-letter, #lb-letter * { visibility: visible !important; }
  #lb-letter { position: absolute; left: 0; top: 0; width: 100%; margin: 0; padding: 0; border: 0 !important; box-shadow: none !important; background: #fff !important; font-size: 12pt; }
  #lb-letter mark { background: none !important; color: #000 !important; }
  body *:not(:has(#lb-letter)):not(#lb-letter):not(#lb-letter *) { display: none !important; }
}
`;

function Field({ id, label, hint, children }: { id: string; label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-800 mb-1.5">{label}</label>
      {children}
      {hint && <p id={`${id}-hint`} className="text-xs text-slate-500 mt-1 leading-relaxed">{hint}</p>}
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="rounded-2xl border border-slate-200 p-5 space-y-4">
      <legend className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500">{title}</legend>
      {children}
    </fieldset>
  );
}

export default function LetterBuilder() {
  const [kind, setKind] = useState<LetterKind>('hardship');
  const [input, setInput] = useState<LetterInput>(EMPTY_INPUT);
  const [copied, setCopied] = useState(false);
  const tracked = useRef(false);
  const touch = () => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent('calculator_use', { tool: 'letter-builder' });
    }
  };

  // Today's date is set after mount so the static HTML never bakes in the build date.
  useEffect(() => {
    setInput((p) => (p.letterDate ? p : { ...p, letterDate: todayIso() }));
    try {
      const want = new URLSearchParams(window.location.search).get('letter');
      if (want && LETTERS.some((l) => l.kind === want)) setKind(want as LetterKind);
    } catch {
      // ignore
    }
  }, []);

  const set = <K extends keyof LetterInput>(k: K, v: LetterInput[K]) => {
    touch();
    setCopied(false);
    setInput((p) => ({ ...p, [k]: v }));
  };
  const toggle = (k: ListKey, id: string) => {
    touch();
    setCopied(false);
    setInput((p) => ({ ...p, [k]: p[k].includes(id) ? p[k].filter((x) => x !== id) : [...p[k], id] }));
  };

  const letter = useMemo(() => buildLetter(kind, input), [kind, input]);
  const notes = useMemo(() => timingNotes(kind, input), [kind, input]);
  const meta = LETTERS.find((l) => l.kind === kind)!;

  const text = (k: StrKey, label: string, opts: { hint?: string; placeholder?: string; type?: string; autoComplete?: string } = {}) => (
    <Field id={`lb-${k}`} label={label} hint={opts.hint}>
      <input
        id={`lb-${k}`}
        type={opts.type ?? 'text'}
        autoComplete={opts.autoComplete ?? 'off'}
        aria-describedby={opts.hint ? `lb-${k}-hint` : undefined}
        value={input[k]}
        placeholder={opts.placeholder}
        onChange={(e) => set(k, e.target.value)}
        className={inputCls}
      />
    </Field>
  );
  const area = (k: StrKey, label: string, opts: { hint?: string; placeholder?: string; rows?: number } = {}) => (
    <Field id={`lb-${k}`} label={label} hint={opts.hint}>
      <textarea
        id={`lb-${k}`}
        rows={opts.rows ?? 3}
        aria-describedby={opts.hint ? `lb-${k}-hint` : undefined}
        value={input[k]}
        placeholder={opts.placeholder}
        onChange={(e) => set(k, e.target.value)}
        className={`${inputCls} leading-relaxed`}
      />
    </Field>
  );
  const select = (k: StrKey, label: string, options: { id: string; label: string }[], opts: { hint?: string; empty?: string } = {}) => (
    <Field id={`lb-${k}`} label={label} hint={opts.hint}>
      <select
        id={`lb-${k}`}
        aria-describedby={opts.hint ? `lb-${k}-hint` : undefined}
        value={input[k]}
        onChange={(e) => set(k, e.target.value)}
        className={inputCls}
      >
        {opts.empty !== undefined && <option value="">{opts.empty}</option>}
        {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
      </select>
    </Field>
  );
  const checks = (k: ListKey, legend: string, options: { id: string; label: string }[]) => (
    <div>
      <p className="text-sm font-semibold text-slate-800 mb-2">{legend}</p>
      <div className="space-y-2">
        {options.map((o) => (
          <label key={o.id} className="flex gap-3 items-start text-slate-700 text-[15px] leading-snug cursor-pointer">
            <input type="checkbox" checked={input[k].includes(o.id)} onChange={() => toggle(k, o.id)} className="mt-0.5 w-4 h-4 accent-slate-900 shrink-0" />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const copy = async () => {
    touch();
    try {
      await navigator.clipboard.writeText(letter.text);
      setCopied(true);
    } catch {
      try {
        const ta = document.createElement('textarea');
        ta.value = letter.text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        setCopied(true);
      } catch {
        setCopied(false);
      }
    }
  };

  const parts = letter.text.split(/(\[[^\]]*\])/);

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />

      <div role="radiogroup" aria-label="Choose a letter" className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8 print:hidden">
        {LETTERS.map((l) => {
          const on = l.kind === kind;
          return (
            <button
              key={l.kind}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => { touch(); setCopied(false); setKind(l.kind); }}
              className={`text-left rounded-xl border-2 px-4 py-3 transition ${on ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-900 hover:border-slate-400'}`}
            >
              <span className="block font-bold leading-snug">{l.name}</span>
              <span className={`hidden sm:block text-xs mt-1 leading-snug ${on ? 'text-slate-300' : 'text-slate-500'}`}>{l.blurb}</span>
            </button>
          );
        })}
      </div>

      <p className="lg:hidden -mt-4 mb-6 text-sm print:hidden">
        <a href="#lb-output" className="font-semibold text-slate-900 underline underline-offset-4">Jump to your letter</a>
        <span className="text-slate-500"> · it updates as you type</span>
      </p>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6 print:hidden">
          <Group title={`About this letter: ${meta.name}`}>
            {kind === 'hardship' && (
              <>
                {select('hardshipReason', 'What caused the hardship?', HARDSHIP_REASONS, { empty: 'Choose one…' })}
                {input.hardshipReason === 'other' && text('hardshipOther', 'Describe the hardship in a few words', { placeholder: 'e.g. my business closed' })}
                {text('hardshipStart', 'When did it start?', { placeholder: 'e.g. March 2026' })}
                {area('hardshipChanged', 'What changed?', { hint: 'Facts only: what income stopped or dropped, or what expense rose, and by roughly how much.', placeholder: 'e.g. My hours were cut from 40 to 20 a week in March.' })}
                {area('incomeNow', 'Your income now', { hint: 'Who in the household earns what, from what source. Your servicer will ask for proof.', placeholder: 'e.g. I now earn about $2,400 a month; my daughter contributes $600.' })}
                {select('hardshipDuration', 'Do you expect the hardship to last?', [
                  { id: 'temporary', label: 'Temporary' },
                  { id: 'long', label: 'Long term' },
                ], { empty: 'Leave this out' })}
                {select('lossMitRequest', 'What are you asking for?', LOSS_MIT_REQUESTS, { empty: 'Choose one…', hint: 'The letter also asks to be reviewed for every option available.' })}
                {area('commitment', 'One sentence on your commitment', { placeholder: 'In your own words' })}
                <div className="flex flex-wrap gap-2 -mt-2">
                  {COMMITMENT_STARTERS.map((s, n) => (
                    <button key={s} type="button" onClick={() => set('commitment', s)} className="text-xs border border-slate-300 rounded-full px-3 py-1.5 text-slate-700 hover:bg-slate-50">
                      Use starter {n + 1}
                    </button>
                  ))}
                  <span className="text-xs text-slate-500 self-center">Edit it so it is true for you.</span>
                </div>
                {checks('hardshipHelpers', 'Optional sentences', HARDSHIP_HELPERS)}
              </>
            )}

            {kind === 'quote' && (
              <>
                {select('quoteType', 'What do you need?', [
                  { id: 'both', label: 'Both a reinstatement quote and a payoff statement' },
                  { id: 'reinstatement', label: 'Reinstatement quote only (catch up)' },
                  { id: 'payoff', label: 'Payoff statement only (pay in full)' },
                ])}
                {text('goodThrough', 'Figures good through', { type: 'date', hint: 'The date you expect to pay or close by. Quotes change daily.' })}
                {text('saleDate', 'Sheriff sale date, if one is scheduled (optional)', { type: 'date' })}
                {text('docketNumber', 'Foreclosure docket number (optional)', { placeholder: 'F-012345-25' })}
              </>
            )}

            {kind === 'rfi' && (
              <>
                {select('rfiMode', 'What is this letter?', [
                  { id: 'rfi', label: 'Request for information' },
                  { id: 'noe', label: 'Notice of error' },
                  { id: 'both', label: 'Both' },
                ])}
                {input.rfiMode !== 'noe' && (
                  <>
                    {checks('rfiItems', 'Information to request', RFI_ITEMS)}
                    {text('rfiOther', 'Anything else, specifically (optional)', { hint: 'Be specific. Very broad requests can be refused as overbroad.' })}
                  </>
                )}
                {input.rfiMode !== 'rfi' && (
                  <>
                    {select('errorType', 'Type of error', ERROR_TYPES, { empty: 'Choose one…', hint: 'Sets the response deadline the letter describes.' })}
                    {area('errorDescription', 'What is the error?', { placeholder: 'e.g. My payment of $1,812.44 sent August 1, 2026 was not credited.' })}
                    {area('errorCorrection', 'How should they fix it?', { placeholder: 'e.g. Credit the payment as of August 1 and remove the late fee.' })}
                  </>
                )}
                {text('docketNumber', 'Foreclosure docket number (optional)', { placeholder: 'F-012345-25' })}
              </>
            )}

            {kind === 'postpone' && (
              <>
                {text('saleDate', 'Sheriff sale date', { type: 'date' })}
                {text('completeAppDate', 'Date the servicer received your complete application', { type: 'date', hint: 'Use the date on the servicer’s “application complete” letter. Regulation X requires that notice to state the date it received the complete application.' })}
                {text('docketNumber', 'Foreclosure docket number', { placeholder: 'F-012345-25', hint: 'On your summons, complaint, or sale notice.' })}
                {text('attorneyName', 'Plaintiff’s foreclosure attorney or firm', { hint: 'The law firm named on your court papers. They get a copy.' })}
                {area('attorneyAddress', 'Attorney’s address', { rows: 2 })}
              </>
            )}

            {kind === 'appeal' && (
              <>
                {text('denialDate', 'Date on the denial notice', { type: 'date' })}
                {area('denialReason', 'The reason the notice gave', { placeholder: 'Copy it in their words', rows: 2 })}
                {checks('appealGrounds', 'Why you believe it is wrong', APPEAL_GROUNDS)}
                {area('appealExplanation', 'Explain the mistake', { hint: 'The correct figures or facts, and which documents show them.', rows: 4 })}
                <label className="flex gap-3 items-start text-slate-700 text-[15px] leading-snug cursor-pointer">
                  <input type="checkbox" checked={input.requestNpv} onChange={(e) => set('requestNpv', e.target.checked)} className="mt-0.5 w-4 h-4 accent-slate-900 shrink-0" />
                  <span>Ask for the net present value (NPV) inputs they used</span>
                </label>
                {text('completeAppDate', 'Date your complete application was received (optional)', { type: 'date' })}
                {text('saleDate', 'Sheriff sale date, if scheduled (optional)', { type: 'date' })}
                {text('docketNumber', 'Foreclosure docket number (optional)', { placeholder: 'F-012345-25' })}
              </>
            )}

            <label className="flex gap-3 items-start text-slate-700 text-[15px] leading-snug cursor-pointer">
              <input type="checkbox" checked={input.enclosures} onChange={(e) => set('enclosures', e.target.checked)} className="mt-0.5 w-4 h-4 accent-slate-900 shrink-0" />
              <span>I am enclosing documents with this letter</span>
            </label>
          </Group>

          <Group title="You and your loan">
            {text('letterDate', 'Letter date', { type: 'date' })}
            <div className="grid sm:grid-cols-2 gap-4">
              {text('borrower1', 'Your full name', { autoComplete: 'name' })}
              {text('borrower2', 'Co-borrower (optional)')}
            </div>
            {text('propertyAddress', 'Property address', { placeholder: 'Street, town, NJ ZIP' })}
            {area('mailingAddress', 'Mailing address, if different (optional)', { rows: 2 })}
            <div className="grid sm:grid-cols-2 gap-4">
              {text('phone', 'Phone', { type: 'tel', autoComplete: 'tel' })}
              {text('email', 'Email (optional)', { type: 'email', autoComplete: 'email' })}
            </div>
            {text('loanNumber', 'Loan number', { hint: 'On your monthly statement.' })}
          </Group>

          <Group title="Your servicer">
            {text('servicerName', 'Servicer name', { hint: 'The company you send payments to, as shown on your statement.' })}
            {area('servicerAddress', kind === 'rfi' ? 'Servicer’s designated address for notices of error / information requests' : 'Servicer mailing address', {
              rows: 3,
              hint: kind === 'rfi'
                ? 'Look on your statement or the servicer’s website for an address labeled for “notices of error,” “requests for information,” or “qualified written requests.” If one exists, use it; it is often different from the payment address.'
                : 'Use the loss-mitigation or correspondence address from your statement or recent letters, not the payment address.',
            })}
          </Group>
        </div>

        <div id="lb-output" className="lg:sticky lg:top-6 print:static scroll-mt-4">
          {notes.length > 0 && (
            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 px-5 py-4 mb-5 space-y-2 print:hidden" aria-live="polite">
              {notes.map((n) => <p key={n} className="text-slate-800 text-sm leading-relaxed">{n}</p>)}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 mb-3 print:hidden">
            <button type="button" onClick={copy} className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-slate-800 transition">
              {copied ? 'Copied' : 'Copy letter'}
            </button>
            <button type="button" onClick={() => { touch(); window.print(); }} className="border border-slate-300 text-slate-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-50 transition">
              Print
            </button>
            <p className="text-xs text-slate-500" aria-live="polite">
              {letter.missing.length === 0
                ? 'Every blank is filled.'
                : `${letter.missing.length} blank${letter.missing.length === 1 ? '' : 's'} still in [brackets].`}
            </p>
          </div>

          <div
            id="lb-letter"
            className="rounded-2xl border border-slate-200 bg-white shadow-sm px-6 py-7 font-serif text-[15px] leading-relaxed text-slate-900 whitespace-pre-wrap break-words max-h-[80vh] overflow-y-auto lg:max-h-[75vh] print:max-h-none print:overflow-visible"
          >
            {parts.map((p, n) =>
              n % 2 === 1 ? (
                <mark key={n} className="bg-amber-100 text-amber-900 rounded px-0.5">{p}</mark>
              ) : (
                <span key={n}>{p}</span>
              )
            )}
          </div>

          <div className="mt-6 space-y-2 print:hidden">
            {REMINDERS[kind].map((r) => (
              <p key={r} className="text-sm text-slate-600 leading-relaxed border-l-2 border-amber-400 pl-4">{r}</p>
            ))}
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-5 mt-6 print:hidden">
            <p className="font-bold text-slate-900 mb-3">Sending checklist</p>
            <ul className="space-y-2">
              {SENDING_CHECKLIST.map((s) => (
                <li key={s} className="flex gap-3 text-slate-700 text-[15px] leading-relaxed">
                  <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              Nothing you type here is saved or sent anywhere. Servicers do not always follow these rules on time, so the
              copy and the proof of delivery are your record.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
