'use client';

import { useMemo, useRef, useState } from 'react';
import { estimateSurplus, sheriffCommission } from '../../../../lib/surplus';
import { trackEvent } from '../../../../lib/analytics';

/**
 * Spanish copy of app/tools/surplus-funds/SurplusCalculator.tsx. Same math
 * (lib/surplus.ts), same behavior, Spanish labels. Runs entirely in the
 * browser: nothing typed is stored or sent (the one analytics event carries
 * no amounts). Starts empty on purpose. If the English calculator's copy or
 * behavior changes, keep this one in sync.
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

export default function CalculadoraSobrantes() {
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
      trackEvent('calculator_use', { tool: 'surplus-funds', lang: 'es' });
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
          <legend className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500">1 · La subasta</legend>
          <Money id="sale" label="Precio en que se vendió la propiedad (oferta ganadora)" value={sale} onChange={on(setSale)}
            hint="La oficina del sheriff le puede decir el precio de adjudicación (struck-off price). Si el banco se la volvió a comprar, el precio suele ser igual o menor a lo que se le debía." />
          <Money id="judgment" label="Monto de la sentencia final (final judgment)" value={judgment} onChange={on(setJudgment)}
            hint="Aparece en la Sentencia Final (Final Judgment) de sus papeles del tribunal (o en el expediente del caso)." />
          <Money id="added" label="Intereses, cargos y costos agregados desde la sentencia (opcional)" value={added} onChange={on(setAdded)}
            hint="Los intereses siguen corriendo después de la sentencia. Si el sheriff publicó un 'precio mínimo' (upset price), la diferencia entre ese precio y la sentencia es un buen estimado." />
          <div>
            <Money id="sheriff" label="Comisión del sheriff y costos de la subasta" value={sheriffEdited ? sheriff : String(autoSheriff || '')}
              onChange={(v) => { touch(); setSheriffEdited(true); setSheriff(v); }}
              hint="Viene calculada con la comisión que fija la ley (6% de los primeros $5,000 y 4% de lo que pase de esa cantidad; N.J.S.A. 22A:4-8). Los costos de publicación y de la escritura se suman; la oficina del sheriff tiene las cifras exactas." />
            {sheriffEdited && (
              <button type="button" onClick={() => { setSheriffEdited(false); setSheriff(''); }} className="text-xs text-slate-600 underline mt-1">
                Volver al estimado según la ley
              </button>
            )}
          </div>
        </fieldset>

        <fieldset className="rounded-2xl border border-slate-200 p-5 space-y-5">
          <legend className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500">2 · Otros gravámenes que se pagan antes que usted</legend>
          <Money id="second" label="Saldo de una segunda hipoteca o HELOC" value={second} onChange={on(setSecond)} />
          <Money id="judgments" label="Gravámenes por sentencias en su contra (tarjetas de crédito, demandas)" value={judgments} onChange={on(setJudgments)} />
          <Money id="other" label="Otros gravámenes (condominio/HOA, otros reclamos registrados)" value={other} onChange={on(setOther)}
            hint="Una búsqueda de título o el expediente del caso de ejecución hipotecaria muestra lo que está registrado. Déjelo en blanco si no hay ninguno." />
        </fieldset>
      </div>

      <div className="lg:col-span-2">
        <div className="lg:sticky lg:top-24 rounded-2xl bg-slate-950 text-white p-6" aria-live="polite">
          <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Su estimado</p>
          {!ready ? (
            <p className="text-slate-300 text-sm leading-relaxed">
              Escriba el precio de venta y el monto de la sentencia final para ver si la subasta
              probablemente dejó fondos sobrantes, y más o menos cuánto de ese dinero podría ser suyo.
            </p>
          ) : r.surplus === 0 ? (
            <>
              <p className="font-serif text-2xl font-bold mb-2">Probablemente no hay sobrante</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Con estas cifras, la subasta dejó unos {fmt(r.shortfall)} menos de lo que se le debía al
                banco más los costos de la venta, así que probablemente no sobró nada. Eso es común
                cuando el banco se vuelve a comprar la propiedad. Si no está seguro de las cifras, la
                Unidad del Fondo Fiduciario (Trust Fund Unit) le puede confirmar si se depositó dinero en
                su caso.
              </p>
            </>
          ) : (
            <>
              <p className="text-slate-400 text-xs">Sobrante estimado depositado con el tribunal</p>
              <p className="font-serif text-3xl font-bold mb-4">{fmt(r.surplus)}</p>
              <p className="text-slate-400 text-xs">Estimado que le quedaría a usted después de los gravámenes que escribió</p>
              <p className="font-serif text-4xl font-bold text-amber-400 mb-5">{fmt(r.ownerEstimate)}</p>
              {r.ownerEstimate > 0 && (
                <div className="rounded-lg bg-white/[0.07] border border-white/10 px-4 py-3 text-sm text-slate-200 leading-relaxed">
                  Una compañía de &quot;recuperación&quot; que cobre del 25 al 33% se quedaría con más o menos{' '}
                  <strong className="text-white">{fmt(r.finderFeeLow)}–{fmt(r.finderFeeHigh)}</strong> de
                  este dinero por lo que, en el fondo, es un trámite ante el tribunal.
                </div>
              )}
            </>
          )}
          {ready && (
            <dl className="mt-5 pt-4 border-t border-white/10 text-xs text-slate-400 space-y-1.5">
              <div className="flex justify-between gap-3"><dt>Precio de venta</dt><dd>{fmt(num(sale))}</dd></div>
              <div className="flex justify-between gap-3"><dt>Lo que se le debe al banco</dt><dd>− {fmt(r.amountDueLender)}</dd></div>
              <div className="flex justify-between gap-3"><dt>Comisión y costos del sheriff</dt><dd>− {fmt(sheriffCosts)}</dd></div>
              <div className="flex justify-between gap-3"><dt>Gravámenes posteriores</dt><dd>− {fmt(num(second) + num(judgments) + num(other))}</dd></div>
            </dl>
          )}
          <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
            Un estimado con fines educativos, no una promesa de ninguna cantidad. El tribunal decide el
            orden de prioridad de los gravámenes y a quién le corresponde el dinero. Nada de lo que
            escriba sale de esta página.
          </p>
        </div>
      </div>
    </div>
  );
}
