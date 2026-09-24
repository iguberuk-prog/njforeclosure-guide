'use client';

import { useMemo, useRef, useState } from 'react';
import { estimateSurplus, sheriffCommission } from '../../../lib/surplus';
import { trackEvent } from '../../../lib/analytics';

/**
 * The interactive estimator. Runs entirely in the browser: nothing typed is
 * stored or sent (the one analytics event carries no amounts). Starts empty
 * on purpose — example numbers in a money tool get mistaken for someone's
 * real result.
 */

const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const num = (s: string) => (s ? parseInt(s, 10) : 0);

function Money({
  label, value, onChange, hint, id,
}: { label: string; value: string; onChange: (v: string) => void; hint?: string; id: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-800 mb-1.5">{label}</label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
        <input
          id={id}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          value={value ? Number(value).toLocaleString('en-US') : ''}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, '').slice(0, 10))}
          className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-lg font-semibold text-slate-900"
          placeholder="0"
        />
      </div>
      {hint && <p className="text-xs text-slate-500 mt-1 leading-relaxed">{hint}</p>}
    </div>
  );
}

export default function SurplusCalculator() {
  const [sale, setSale] = useState('');
  const [judgment, setJudgment] = useState('');
  const [added, setAdded] = useState('');
  const [sheriff, setSheriff] = useState('');
  const [sheriffEdited, setSheriffEdited] = useState(false);
  const [second, setSecond] = useState('');
  const [judgments, setJudgments] = useState('');
  const [other, setOther] = useState('');
  const tracked = useRef(false);

  const touch = () => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent('calculator_use', { tool: 'surplus-funds' });
    }
  };
  const on = (setter: (v: string) => void) => (v: string) => {
    touch();
    setter(v);
  };

  const autoSheriff = sheriffCommission(num(sale));
  const sheriffCosts = sheriffEdited ? num(sheriff) : autoSheriff;

  const r = useMemo(
    () =>
      estimateSurplus({
        salePrice: num(sale),
        judgment: num(judgment),
        addedSinceJudgment: num(added),
        sheriffCosts,
        juniorLiens: num(second) + num(judgments) + num(other),
      }),
    [sale, judgment, added, sheriffCosts, second, judgments, other]
  );

  const ready = num(sale) > 0 && num(judgment) > 0;

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 space-y-6">
        <fieldset className="rounded-2xl border border-slate-200 p-5 space-y-5">
          <legend className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500">1 · The sale</legend>
          <Money id="sale" label="What the property sold for (winning bid)" value={sale} onChange={on(setSale)}
            hint="The sheriff's office can tell you the struck-off price. If the lender bought it back, the price is usually at or below what it was owed." />
          <Money id="judgment" label="Final judgment amount" value={judgment} onChange={on(setJudgment)}
            hint="On the Final Judgment in your court papers (or the case file)." />
          <Money id="added" label="Interest, fees and costs added since judgment (optional)" value={added} onChange={on(setAdded)}
            hint="Interest keeps running after judgment. If the sheriff published an 'upset price', the difference between it and the judgment is a good estimate." />
          <div>
            <Money id="sheriff" label="Sheriff's commission and sale costs" value={sheriffEdited ? sheriff : String(autoSheriff || '')}
              onChange={(v) => { touch(); setSheriffEdited(true); setSheriff(v); }}
              hint="Pre-filled with the statutory commission (6% of the first $5,000, 4% above that; N.J.S.A. 22A:4-8). Advertising and deed costs add to it; the sheriff's office has exact figures." />
            {sheriffEdited && (
              <button type="button" onClick={() => { setSheriffEdited(false); setSheriff(''); }} className="text-xs text-slate-600 underline mt-1">
                Reset to the statutory estimate
              </button>
            )}
          </div>
        </fieldset>

        <fieldset className="rounded-2xl border border-slate-200 p-5 space-y-5">
          <legend className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500">2 · Other liens paid before you</legend>
          <Money id="second" label="Second mortgage or HELOC balance" value={second} onChange={on(setSecond)} />
          <Money id="judgments" label="Judgment liens against you (credit cards, lawsuits)" value={judgments} onChange={on(setJudgments)} />
          <Money id="other" label="Other liens (condo/HOA, other recorded claims)" value={other} onChange={on(setOther)}
            hint="A title search or the foreclosure case file shows what is recorded. Leave blank if none." />
        </fieldset>
      </div>

      <div className="lg:col-span-2">
        <div className="lg:sticky lg:top-24 rounded-2xl bg-slate-950 text-white p-6" aria-live="polite">
          <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Your estimate</p>
          {!ready ? (
            <p className="text-slate-300 text-sm leading-relaxed">
              Enter the sale price and the final judgment amount to see whether the auction likely
              produced surplus money, and roughly how much of it could be yours.
            </p>
          ) : r.surplus === 0 ? (
            <>
              <p className="font-serif text-2xl font-bold mb-2">No surplus likely</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                On these numbers the sale brought about {fmt(r.shortfall)} less than the lender was owed
                plus sale costs, so there is probably nothing left over. That is common when the lender
                buys the property back. If you are unsure of the figures, the Trust Fund Unit can confirm
                whether any money was deposited in your case.
              </p>
            </>
          ) : (
            <>
              <p className="text-slate-400 text-xs">Estimated surplus deposited with the court</p>
              <p className="font-serif text-3xl font-bold mb-4">{fmt(r.surplus)}</p>
              <p className="text-slate-400 text-xs">Estimated left for you after the liens you entered</p>
              <p className="font-serif text-4xl font-bold text-amber-400 mb-5">{fmt(r.ownerEstimate)}</p>
              {r.ownerEstimate > 0 && (
                <div className="rounded-lg bg-white/[0.07] border border-white/10 px-4 py-3 text-sm text-slate-200 leading-relaxed">
                  A finder charging 25–33% would take roughly{' '}
                  <strong className="text-white">{fmt(r.finderFeeLow)}–{fmt(r.finderFeeHigh)}</strong> of this for
                  what is fundamentally a court filing.
                </div>
              )}
            </>
          )}
          {ready && (
            <dl className="mt-5 pt-4 border-t border-white/10 text-xs text-slate-400 space-y-1.5">
              <div className="flex justify-between"><dt>Sale price</dt><dd>{fmt(num(sale))}</dd></div>
              <div className="flex justify-between"><dt>Owed to lender</dt><dd>− {fmt(r.amountDueLender)}</dd></div>
              <div className="flex justify-between"><dt>Sheriff&apos;s commission &amp; costs</dt><dd>− {fmt(sheriffCosts)}</dd></div>
              <div className="flex justify-between"><dt>Junior liens</dt><dd>− {fmt(num(second) + num(judgments) + num(other))}</dd></div>
            </dl>
          )}
          <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
            An estimate for education, not a promise of any amount. Lien priority and entitlement are
            decided by the court. Nothing you type leaves this page.
          </p>
        </div>
      </div>
    </div>
  );
}
