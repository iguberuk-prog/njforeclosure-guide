'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  buildLetter,
  timingNoteCodes,
  EMPTY_INPUT,
  LETTERS,
  HARDSHIP_REASONS,
  LOSS_MIT_REQUESTS,
  HARDSHIP_HELPERS,
  COMMITMENT_STARTERS,
  RFI_ITEMS,
  ERROR_TYPES,
  APPEAL_GROUNDS,
  type LetterInput,
  type LetterKind,
} from '../../../../lib/letters';
import {
  LETTERS_ES,
  HARDSHIP_REASONS_ES,
  LOSS_MIT_REQUESTS_ES,
  HARDSHIP_HELPERS_ES,
  COMMITMENT_STARTERS_ES,
  RFI_ITEMS_ES,
  ERROR_TYPES_ES,
  APPEAL_GROUNDS_ES,
  REMINDERS_ES,
  SENDING_CHECKLIST_ES,
  BLANKS_ES,
  timingNoteTextEs,
} from '../../../../lib/letters-es';
import { trackEvent } from '../../../../lib/analytics';

/**
 * Spanish copy of app/tools/letter-builder/LetterBuilder.tsx. The screen is
 * in Spanish; the LETTER stays in English because it goes to the servicer.
 * Same templates and rules (lib/letters.ts: buildLetter, timingNoteCodes),
 * Spanish labels from lib/letters-es.ts. Runs entirely in the browser:
 * nothing typed is stored or sent (one analytics event, no inputs). If the
 * English builder's behavior changes, keep this one in sync.
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

/** Options from lib/letters.ts with their Spanish label (falls back to the English label). */
const es = <T extends { id: string; label: string }>(list: T[], labels: Record<string, string>) =>
  list.map((o) => ({ id: o.id, label: labels[o.id] ?? o.label }));

const EN_HINT = 'Esto se copia tal cual en la carta, que está en inglés. Si puede, escríbalo en inglés sencillo.';

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

export default function ConstructorDeCartas() {
  const [kind, setKind] = useState<LetterKind>('hardship');
  const [input, setInput] = useState<LetterInput>(EMPTY_INPUT);
  const [copied, setCopied] = useState(false);
  const tracked = useRef(false);
  const touch = () => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent('calculator_use', { tool: 'constructor-de-cartas' });
    }
  };

  // Today's date is set after mount so the static HTML never bakes in the build date.
  useEffect(() => {
    setInput((p) => (p.letterDate ? p : { ...p, letterDate: todayIso() }));
    try {
      const q = new URLSearchParams(window.location.search);
      const want = q.get('carta') || q.get('letter');
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
  const notes = useMemo(() => timingNoteCodes(kind, input).map(timingNoteTextEs), [kind, input]);
  const meta = LETTERS_ES[kind];

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
  const blanks = letter.missing.length;

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />

      <div className="rounded-xl border-2 border-sky-200 bg-sky-50 px-5 py-4 mb-8 print:hidden">
        <p className="text-slate-800 text-[15px] leading-relaxed">
          <strong className="text-slate-900">La carta sale en inglés a propósito.</strong> Va dirigida a la compañía que
          administra su préstamo (servicer), y el personal que la revisa tiene que poder leerla. Usted llena el formulario
          en español y, al lado de la carta, verá un resumen en español de lo que dice. Los campos donde escribe con sus
          propias palabras se copian tal cual, así que, si puede, escríbalos en inglés sencillo. Si necesita ayuda, un
          consejero de vivienda aprobado por HUD (800-569-4287) puede revisarla con usted gratis y en español.
        </p>
      </div>

      <div role="radiogroup" aria-label="Elija una carta" className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8 print:hidden">
        {LETTERS.map((l) => {
          const on = l.kind === kind;
          const m = LETTERS_ES[l.kind];
          return (
            <button
              key={l.kind}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => { touch(); setCopied(false); setKind(l.kind); }}
              className={`text-left rounded-xl border-2 px-4 py-3 transition ${on ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-900 hover:border-slate-400'}`}
            >
              <span className="block font-bold leading-snug">{m.name}</span>
              <span className={`hidden sm:block text-xs mt-1 leading-snug ${on ? 'text-slate-300' : 'text-slate-500'}`}>{m.blurb}</span>
            </button>
          );
        })}
      </div>

      <p className="lg:hidden -mt-4 mb-6 text-sm print:hidden">
        <a href="#lb-output" className="font-semibold text-slate-900 underline underline-offset-4">Ir a su carta</a>
        <span className="text-slate-500"> · se actualiza mientras escribe</span>
      </p>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6 print:hidden">
          <Group title={`Sobre esta carta: ${meta.name}`}>
            {kind === 'hardship' && (
              <>
                {select('hardshipReason', '¿Qué causó la dificultad?', es(HARDSHIP_REASONS, HARDSHIP_REASONS_ES), { empty: 'Elija una…' })}
                {input.hardshipReason === 'other' && text('hardshipOther', 'Describa la dificultad en pocas palabras', { placeholder: 'Ej.: my business closed', hint: EN_HINT })}
                {text('hardshipStart', '¿Cuándo empezó?', { placeholder: 'Ej.: March 2026', hint: 'Escriba el mes en inglés (January, February, March…) y el año.' })}
                {area('hardshipChanged', '¿Qué cambió?', { hint: `Solo hechos: qué ingreso se perdió o bajó, o qué gasto subió, y más o menos cuánto. ${EN_HINT}`, placeholder: 'Ej.: My hours were cut from 40 to 20 a week in March.' })}
                {area('incomeNow', 'Sus ingresos ahora', { hint: `Quién en el hogar gana cuánto y de qué fuente. El servicer le pedirá pruebas. ${EN_HINT}`, placeholder: 'Ej.: I now earn about $2,400 a month; my daughter contributes $600.' })}
                {select('hardshipDuration', '¿Espera que la dificultad dure?', [
                  { id: 'temporary', label: 'Es temporal' },
                  { id: 'long', label: 'Es de largo plazo' },
                ], { empty: 'No mencionarlo' })}
                {select('lossMitRequest', '¿Qué está pidiendo?', es(LOSS_MIT_REQUESTS, LOSS_MIT_REQUESTS_ES), { empty: 'Elija una…', hint: 'La carta también pide que lo evalúen para todas las opciones disponibles.' })}
                {area('commitment', 'Una frase sobre su compromiso', { placeholder: 'Con sus propias palabras, en inglés si puede', hint: 'O use una de estas frases ya escritas en inglés y cámbiela para que sea cierta en su caso.' })}
                <div className="space-y-2 -mt-2">
                  {COMMITMENT_STARTERS.map((s, n) => (
                    <div key={s} className="flex gap-3 items-start">
                      <button type="button" onClick={() => set('commitment', s)} className="shrink-0 text-xs border border-slate-300 rounded-full px-3 py-1.5 text-slate-700 hover:bg-slate-50">
                        Usar frase {n + 1}
                      </button>
                      <span className="text-xs text-slate-500 leading-relaxed pt-1">{COMMITMENT_STARTERS_ES[n]}</span>
                    </div>
                  ))}
                </div>
                {checks('hardshipHelpers', 'Frases opcionales (se agregan en inglés)', es(HARDSHIP_HELPERS, HARDSHIP_HELPERS_ES))}
              </>
            )}

            {kind === 'quote' && (
              <>
                {select('quoteType', '¿Qué necesita?', [
                  { id: 'both', label: 'Las dos: cotización de reinstalación y saldo total para liquidar' },
                  { id: 'reinstatement', label: 'Solo la cotización de reinstalación (ponerse al día)' },
                  { id: 'payoff', label: 'Solo el saldo total para liquidar (pagar todo el préstamo)' },
                ])}
                {text('goodThrough', 'Cifras válidas hasta', { type: 'date', hint: 'La fecha en que espera pagar o cerrar. Las cotizaciones cambian cada día.' })}
                {text('saleDate', 'Fecha de la subasta del sheriff, si hay una programada (opcional)', { type: 'date' })}
                {text('docketNumber', 'Número de expediente de la ejecución hipotecaria (docket number, opcional)', { placeholder: 'F-012345-25' })}
              </>
            )}

            {kind === 'rfi' && (
              <>
                {select('rfiMode', '¿Qué tipo de carta es?', [
                  { id: 'rfi', label: 'Solicitud de información' },
                  { id: 'noe', label: 'Aviso de error' },
                  { id: 'both', label: 'Las dos' },
                ])}
                {input.rfiMode !== 'noe' && (
                  <>
                    {checks('rfiItems', 'Información que quiere pedir', es(RFI_ITEMS, RFI_ITEMS_ES))}
                    {text('rfiOther', 'Algo más, en concreto (opcional)', { hint: `Sea específico: una solicitud demasiado amplia se puede rechazar. ${EN_HINT}` })}
                  </>
                )}
                {input.rfiMode !== 'rfi' && (
                  <>
                    {select('errorType', 'Tipo de error', es(ERROR_TYPES, ERROR_TYPES_ES), { empty: 'Elija uno…', hint: 'Esto define el plazo de respuesta que describe la carta.' })}
                    {area('errorDescription', '¿Cuál es el error?', { placeholder: 'Ej.: My payment of $1,812.44 sent August 1, 2026 was not credited.', hint: EN_HINT })}
                    {area('errorCorrection', '¿Cómo lo deben corregir?', { placeholder: 'Ej.: Credit the payment as of August 1 and remove the late fee.', hint: EN_HINT })}
                  </>
                )}
                {text('docketNumber', 'Número de expediente de la ejecución hipotecaria (docket number, opcional)', { placeholder: 'F-012345-25' })}
              </>
            )}

            {kind === 'postpone' && (
              <>
                {text('saleDate', 'Fecha de la subasta del sheriff', { type: 'date' })}
                {text('completeAppDate', 'Fecha en que el servicer recibió su solicitud completa', { type: 'date', hint: 'Use la fecha de la carta del servicer que dice que su solicitud está completa (“application complete”). El Reglamento X exige que ese aviso diga la fecha en que recibió la solicitud completa.' })}
                {text('docketNumber', 'Número de expediente de la ejecución hipotecaria (docket number)', { placeholder: 'F-012345-25', hint: 'Aparece en la citación (summons), la demanda (complaint) o el aviso de subasta.' })}
                {text('attorneyName', 'Abogado o bufete del demandante en la ejecución hipotecaria', { hint: 'El bufete que aparece en sus papeles del tribunal. Recibe una copia.' })}
                {area('attorneyAddress', 'Dirección del abogado', { rows: 2 })}
              </>
            )}

            {kind === 'appeal' && (
              <>
                {text('denialDate', 'Fecha del aviso de negación', { type: 'date' })}
                {area('denialReason', 'La razón que dio el aviso', { placeholder: 'Cópiela en inglés, con sus mismas palabras', rows: 2 })}
                {checks('appealGrounds', 'Por qué cree que está equivocada', es(APPEAL_GROUNDS, APPEAL_GROUNDS_ES))}
                {area('appealExplanation', 'Explique el error', { hint: `Las cifras o hechos correctos y qué documentos lo demuestran. ${EN_HINT}`, rows: 4 })}
                <label className="flex gap-3 items-start text-slate-700 text-[15px] leading-snug cursor-pointer">
                  <input type="checkbox" checked={input.requestNpv} onChange={(e) => set('requestNpv', e.target.checked)} className="mt-0.5 w-4 h-4 accent-slate-900 shrink-0" />
                  <span>Pedir los datos del valor presente neto (NPV) que usaron</span>
                </label>
                {text('completeAppDate', 'Fecha en que recibieron su solicitud completa (opcional)', { type: 'date' })}
                {text('saleDate', 'Fecha de la subasta del sheriff, si hay una programada (opcional)', { type: 'date' })}
                {text('docketNumber', 'Número de expediente de la ejecución hipotecaria (docket number, opcional)', { placeholder: 'F-012345-25' })}
              </>
            )}

            <label className="flex gap-3 items-start text-slate-700 text-[15px] leading-snug cursor-pointer">
              <input type="checkbox" checked={input.enclosures} onChange={(e) => set('enclosures', e.target.checked)} className="mt-0.5 w-4 h-4 accent-slate-900 shrink-0" />
              <span>Voy a adjuntar documentos con esta carta</span>
            </label>
          </Group>

          <Group title="Usted y su préstamo">
            {text('letterDate', 'Fecha de la carta', { type: 'date' })}
            <div className="grid sm:grid-cols-2 gap-4">
              {text('borrower1', 'Su nombre completo', { autoComplete: 'name' })}
              {text('borrower2', 'Coprestatario (opcional)')}
            </div>
            {text('propertyAddress', 'Dirección de la propiedad', { placeholder: 'Calle, ciudad, NJ, código postal' })}
            {area('mailingAddress', 'Dirección postal, si es otra (opcional)', { rows: 2 })}
            <div className="grid sm:grid-cols-2 gap-4">
              {text('phone', 'Teléfono', { type: 'tel', autoComplete: 'tel' })}
              {text('email', 'Correo electrónico (opcional)', { type: 'email', autoComplete: 'email' })}
            </div>
            {text('loanNumber', 'Número de préstamo', { hint: 'Aparece en su estado de cuenta mensual.' })}
          </Group>

          <Group title="Su servicer">
            {text('servicerName', 'Nombre del servicer', { hint: 'La compañía a la que le envía los pagos, tal como aparece en su estado de cuenta.' })}
            {area('servicerAddress', kind === 'rfi' ? 'Dirección designada del servicer para avisos de error y solicitudes de información' : 'Dirección postal del servicer', {
              rows: 3,
              hint: kind === 'rfi'
                ? 'Busque en su estado de cuenta o en el sitio web del servicer una dirección para “notices of error”, “requests for information” o “qualified written requests”. Si existe, úsela; muchas veces es distinta de la dirección de pagos.'
                : 'Use la dirección de ayuda hipotecaria (loss mitigation) o de correspondencia de su estado de cuenta o de cartas recientes, no la dirección de pagos.',
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
              {copied ? 'Copiada' : 'Copiar la carta'}
            </button>
            <button type="button" onClick={() => { touch(); window.print(); }} className="border border-slate-300 text-slate-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-50 transition">
              Imprimir
            </button>
            <p className="text-xs text-slate-500" aria-live="polite">
              {blanks === 0
                ? 'Todos los espacios están llenos.'
                : `${blanks} espacio${blanks === 1 ? '' : 's'} todavía entre [corchetes].`}
            </p>
          </div>

          {blanks > 0 && (
            <details className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 mb-3 text-sm print:hidden">
              <summary className="cursor-pointer font-semibold text-slate-800">Qué significa cada espacio en blanco</summary>
              <ul className="mt-2 space-y-1.5 text-slate-700">
                {letter.missing.map((m) => (
                  <li key={m} className="leading-snug">
                    <span className="bg-amber-100 text-amber-900 rounded px-1 font-serif" lang="en">[{m}]</span>{' '}
                    <span>= {BLANKS_ES[m] ?? m}</span>
                  </li>
                ))}
              </ul>
            </details>
          )}

          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 print:hidden">Su carta, en inglés</p>
          <div
            id="lb-letter"
            lang="en"
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

          <div className="rounded-2xl border border-slate-200 px-6 py-5 mt-6 print:hidden">
            <p className="font-bold text-slate-900 mb-3">Qué dice esta carta, en español</p>
            <ul className="space-y-2">
              {meta.summary.map((s) => (
                <li key={s} className="flex gap-3 text-slate-700 text-[15px] leading-relaxed">
                  <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              Este resumen es para que usted sepa lo que firma. Lo que cuenta es la carta en inglés.
            </p>
          </div>

          <div className="mt-6 space-y-2 print:hidden">
            {REMINDERS_ES[kind].map((r) => (
              <p key={r} className="text-sm text-slate-600 leading-relaxed border-l-2 border-amber-400 pl-4">{r}</p>
            ))}
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-5 mt-6 print:hidden">
            <p className="font-bold text-slate-900 mb-3">Antes de enviarla</p>
            <ul className="space-y-2">
              {SENDING_CHECKLIST_ES.map((s) => (
                <li key={s} className="flex gap-3 text-slate-700 text-[15px] leading-relaxed">
                  <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              Nada de lo que escriba aquí se guarda ni se envía a ninguna parte. Los servicers no siempre cumplen estas
              reglas a tiempo, así que la copia y la prueba de entrega son su registro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
