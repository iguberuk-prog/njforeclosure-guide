'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { estimateCatchUp } from '../../../../lib/catchup';
import { trackEvent } from '../../../../lib/analytics';

/**
 * Spanish copy of app/tools/catch-up/CatchUpCalculator.tsx. Same math
 * (lib/catchup.ts), same behavior, Spanish labels. Runs entirely in the
 * browser: nothing typed is stored or sent (the one analytics event carries
 * no amounts). Starts empty on purpose — example numbers in a money tool get
 * mistaken for someone's real result. If the English calculator's copy or
 * behavior changes, keep this one in sync.
 */

const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const fmtCents = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
const num = (s: string) => {
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : 0;
};

/** Keep digits and one decimal point (max 2 decimals): statements show cents. */
const cleanMoney = (s: string) => {
  const d = s.replace(/[^0-9.]/g, '');
  const [whole, ...rest] = d.split('.');
  const w = whole.slice(0, 9);
  return rest.length ? `${w}.${rest.join('').slice(0, 2)}` : w;
};
const showMoney = (v: string) => {
  if (!v) return '';
  const [whole, dec] = v.split('.');
  const w = whole ? Number(whole).toLocaleString('en-US') : '0';
  return dec !== undefined ? `${w}.${dec}` : w;
};

function Money({
  label, value, onChange, hint, id,
}: { label: string; value: string; onChange: (v: string) => void; hint?: string; id: string }) {
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-800 mb-1.5">{label}</label>
      <div className="relative">
        <span aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
        <input
          id={id}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          aria-describedby={hintId}
          value={showMoney(value)}
          onChange={(e) => onChange(cleanMoney(e.target.value))}
          className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-lg font-semibold text-slate-900"
          placeholder="0"
        />
      </div>
      {hint && <p id={hintId} className="text-xs text-slate-500 mt-1 leading-relaxed">{hint}</p>}
    </div>
  );
}

export default function CalculadoraPonerseAlDia() {
  const [payment, setPayment] = useState('');
  const [missed, setMissed] = useState('');
  const [lateFee, setLateFee] = useState('');
  const [attorney, setAttorney] = useState('');
  const [other, setOther] = useState('');
  const [saved, setSaved] = useState('');
  const tracked = useRef(false);

  const touch = () => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent('calculator_use', { tool: 'ponerse-al-dia' });
    }
  };
  const on = (setter: (v: string) => void) => (v: string) => {
    touch();
    setter(v);
  };

  const r = useMemo(
    () =>
      estimateCatchUp({
        monthlyPayment: num(payment),
        paymentsMissed: num(missed),
        lateFeePerPayment: num(lateFee),
        attorneyFees: num(attorney),
        otherFees: num(other),
        setAside: num(saved),
      }),
    [payment, missed, lateFee, attorney, other, saved]
  );

  const ready = num(payment) > 0 && num(missed) > 0;
  const months = Math.floor(num(missed));

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 space-y-6 min-w-0">
        <fieldset className="rounded-2xl border border-slate-200 p-5 space-y-5 min-w-0">
          <legend className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500">1 · Lo que dejó de pagar</legend>
          <Money id="payment" label="Pago mensual de la hipoteca" value={payment} onChange={on(setPayment)}
            hint="La cantidad completa de su estado de cuenta: capital, intereses y depósito en garantía (escrow: impuestos y seguro), todo junto." />
          <div>
            <label htmlFor="missed" className="block text-sm font-semibold text-slate-800 mb-1.5">Número de pagos atrasados</label>
            <input
              id="missed"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              aria-describedby="missed-hint"
              value={missed}
              onChange={(e) => on(setMissed)(e.target.value.replace(/[^0-9]/g, '').slice(0, 3))}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-lg font-semibold text-slate-900"
              placeholder="0"
            />
            <p id="missed-hint" className="text-xs text-slate-500 mt-1 leading-relaxed">
              Pagos mensuales completos que no hizo. Su estado de cuenta normalmente muestra cuántos pagos están vencidos.
            </p>
          </div>
          <Money id="late-fee" label="Cargo por pago tardío, por cada pago atrasado" value={lateFee} onChange={on(setLateFee)}
            hint="Aparece en su estado de cuenta. Su pagaré (note) fija el cargo por pago tardío; déjelo en blanco si no le cobraron ninguno." />
        </fieldset>

        <fieldset className="rounded-2xl border border-slate-200 p-5 space-y-5 min-w-0">
          <legend className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500">2 · Honorarios y costos (opcional)</legend>
          <Money id="attorney" label="Honorarios y costos del abogado de la ejecución hipotecaria (solo si ya presentaron una demanda)" value={attorney} onChange={on(setAttorney)}
            hint="Déjelo en blanco si todavía no hay un caso presentado. Solo la cotización de reinstalación por escrito del banco tiene la cifra real." />
          <Money id="other-fees" label="Otros cargos en su estado de cuenta" value={other} onChange={on(setOther)}
            hint="Inspecciones de la propiedad, mantenimiento de la propiedad y cargos parecidos. Déjelo en blanco si no hay ninguno." />
        </fieldset>

        <fieldset className="rounded-2xl border border-slate-200 p-5 space-y-5 min-w-0">
          <legend className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500">3 · Lo que ya tiene (opcional)</legend>
          <Money id="saved" label="Dinero que ya apartó para ponerse al día" value={saved} onChange={on(setSaved)}
            hint="Ahorros, un préstamo de la familia o cualquier otro dinero que pueda usar para esto. Se resta del total." />
        </fieldset>
      </div>

      <div className="lg:col-span-2 min-w-0">
        <div className="lg:sticky lg:top-24 rounded-2xl bg-slate-950 text-white p-6" aria-live="polite">
          <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Su estimado</p>
          {!ready ? (
            <p className="text-slate-300 text-sm leading-relaxed">
              Escriba su pago mensual y el número de pagos atrasados para ver, más o menos, cuánto se
              necesitaría para poner el préstamo al día y cómo podría verse un plan de pagos.
            </p>
          ) : (
            <>
              {r.amountNeeded === 0 ? (
                <>
                  <p className="font-serif text-2xl font-bold mb-2">Lo que apartó podría alcanzar</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Con estas cifras, el estimado de {fmt(r.arrears)} queda cubierto y le sobran unos{' '}
                    {fmt(r.setAsideLeftOver)}. Las cotizaciones crecen cada día y muchas veces incluyen
                    cargos que el estado de cuenta no muestra, así que pida la cotización de reinstalación
                    por escrito de su administrador del préstamo antes de enviar cualquier dinero.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-slate-400 text-xs">Cantidad estimada para ponerse al día</p>
                  <p className="font-serif text-4xl font-bold text-amber-400 mb-1 break-words">{fmt(r.amountNeeded)}</p>
                  <p className="text-slate-400 text-xs mb-1">
                    {r.setAsideApplied > 0 ? `Después de restar los ${fmt(r.setAsideApplied)} que ya apartó` : 'Antes de restar cualquier dinero que haya apartado'}
                  </p>
                </>
              )}

              <dl className="mt-5 pt-4 border-t border-white/10 text-xs text-slate-400 space-y-1.5">
                <div className="flex justify-between gap-3"><dt>{months} pago{months === 1 ? '' : 's'} atrasado{months === 1 ? '' : 's'}</dt><dd>{fmt(r.missedPayments)}</dd></div>
                <div className="flex justify-between gap-3"><dt>Cargos por pago tardío</dt><dd>+ {fmt(r.lateFees)}</dd></div>
                <div className="flex justify-between gap-3"><dt>Honorarios, costos del abogado y otros cargos</dt><dd>+ {fmt(r.feesAndCosts)}</dd></div>
                <div className="flex justify-between gap-3 text-slate-200 font-semibold"><dt>Atraso estimado</dt><dd>{fmt(r.arrears)}</dd></div>
                <div className="flex justify-between gap-3"><dt>Dinero apartado</dt><dd>− {fmt(r.setAsideApplied)}</dd></div>
              </dl>

              {r.amountNeeded > 0 && (
                <div className="mt-5 rounded-lg bg-white/[0.07] border border-white/10 px-4 py-4 text-sm text-slate-200 leading-relaxed">
                  <p className="font-bold text-white mb-1">Si no puede pagarlo todo de una vez</p>
                  <p className="text-xs text-slate-400 mb-3">
                    Solo un ejemplo. Los bancos no están obligados a ofrecer un plan de pagos, y los
                    términos reales varían.
                  </p>
                  <ul className="space-y-2">
                    {r.plans.map((p) => (
                      <li key={p.months} className="flex justify-between gap-3">
                        <span>En {p.months} meses</span>
                        <span className="text-right">
                          <strong className="text-white">{fmtCents(p.totalPerMonth)}</strong>/mes
                          <span className="block text-xs text-slate-400">su pago + {fmtCents(p.extraPerMonth)}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-400 mt-3">
                    Si eso no le alcanza, pregunte por una{' '}
                    <Link href="/guides/forbearance/" className="underline underline-offset-2 text-slate-200">pausa de pagos (forbearance)</Link> o una{' '}
                    <Link href="/guides/loan-modification/" className="underline underline-offset-2 text-slate-200">modificación del préstamo</Link>{' '}
                    (guías en inglés).
                  </p>
                </div>
              )}
            </>
          )}
          <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
            Un estimado con fines educativos, no una cotización ni una promesa de ninguna cantidad. Solo la
            cotización de reinstalación por escrito de su administrador del préstamo es exacta. Nada de lo
            que escriba sale de esta página.
          </p>
        </div>
      </div>
    </div>
  );
}
