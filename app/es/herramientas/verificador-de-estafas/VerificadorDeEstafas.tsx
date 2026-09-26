'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../../../lib/analytics';
import { analyzeMessage, segments, CHECKLIST, RULES, type Severity } from '../../../../lib/scam-rules';
import {
  RULES_ES,
  CHECKLIST_ES,
  LEGIT_ES,
  RATING_LABEL_ES,
  SEVERITY_LABEL_ES,
  EXAMPLES_ES,
  SPANISH_OPTIONS,
} from '../../../../lib/scam-rules-es';

/**
 * Spanish copy of app/tools/scam-checker/ScamChecker.tsx. Same rules and
 * scoring (lib/scam-rules.ts), plus Spanish-language patterns and Spanish
 * strings from lib/scam-rules-es.ts (tested by scripts/test-scam-rules-es.mjs).
 * Runs entirely in the browser: the pasted text and answers are never stored
 * or sent (one analytics event on first use, no inputs). It flags patterns
 * only; it never judges a named company and cannot verify who sent a message.
 * If the English checker's copy or behavior changes, keep this one in sync.
 */

const SEV_BADGE: Record<Severity, string> = {
  high: 'bg-red-100 text-red-800 border-red-200',
  medium: 'bg-amber-100 text-amber-900 border-amber-200',
  low: 'bg-slate-100 text-slate-700 border-slate-200',
};
const SEV_MARK: Record<Severity, string> = {
  high: 'bg-red-200 text-red-950',
  medium: 'bg-amber-200 text-amber-950',
  low: 'bg-slate-200 text-slate-900',
};
const sevOf = (ruleId?: string): Severity => RULES.find((r) => r.id === ruleId)?.severity ?? 'low';
/** The engine reports checklist answers by their English label; show the Spanish one. */
const answerEs = (label: string) => {
  const item = CHECKLIST.find((c) => c.label === label);
  return (item && CHECKLIST_ES[item.id]) || label;
};

export default function VerificadorDeEstafas() {
  const [text, setText] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [shown, setShown] = useState(false);
  const tracked = useRef(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const touch = () => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent('calculator_use', { tool: 'verificador-de-estafas' });
    }
  };

  const result = useMemo(() => analyzeMessage(text, answers, SPANISH_OPTIONS), [text, answers]);
  const segs = useMemo(() => segments(text, result.spans), [text, result.spans]);
  const hasInput = text.trim().length > 0 || answers.length > 0;

  const toggle = (id: string) => {
    touch();
    setAnswers((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));
  };
  const check = () => {
    touch();
    setShown(true);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };
  const loadExample = (t: string) => {
    touch();
    setText(t);
    setAnswers([]);
    setShown(true);
  };
  const clear = () => {
    setText('');
    setAnswers([]);
    setShown(false);
  };

  const tone =
    result.rating === 'high'
      ? 'bg-red-50 border-red-300'
      : result.rating === 'warning'
        ? 'bg-amber-50 border-amber-300'
        : 'bg-slate-50 border-slate-300';
  const n = result.flags.length;

  return (
    <div>
      <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 px-5 py-4 mb-6 flex gap-3 items-start">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6 shrink-0 text-emerald-700 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="10" width="16" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
        <p className="text-emerald-950 text-[15px] leading-relaxed">
          <strong>Privado: nada de lo que escriba sale de su navegador.</strong> La revisión se hace en su propio
          dispositivo. No guardamos, no enviamos y no vemos el texto ni sus respuestas. Si prefiere, borre primero los
          nombres y los números de cuenta.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 p-5">
        <label htmlFor="scam-text" className="block text-sm font-semibold text-slate-800 mb-1.5">
          Pegue la carta, el correo, el mensaje de texto, el volante o lo que dijeron en el mensaje de voz
        </label>
        <textarea
          id="scam-text"
          value={text}
          onChange={(e) => {
            touch();
            setText(e.target.value);
          }}
          rows={8}
          placeholder="Pegue o escriba lo que le enviaron o le dijeron…"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-base text-slate-900 leading-relaxed focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
          Funciona con textos en español o en inglés. Reconoce las frases de estafa más comunes, pero no todas las formas
          de decirlas; por eso conteste también las preguntas de abajo.
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="text-sm text-slate-500 mr-1">Pruebe un ejemplo:</span>
          {EXAMPLES_ES.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={() => loadExample(e.text)}
              className="text-sm border border-slate-300 rounded-full px-3 py-1.5 text-slate-800 hover:bg-slate-50 transition"
            >
              {e.label}
            </button>
          ))}
        </div>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-slate-800 mb-2">¿Le dijeron algo de esto por teléfono o en persona? Marque todo lo que aplique.</legend>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {CHECKLIST.map((c) => (
              <label key={c.id} className="flex gap-2.5 items-start text-[15px] text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={answers.includes(c.id)}
                  onChange={() => toggle(c.id)}
                  className="mt-1 w-4 h-4 accent-slate-900 shrink-0"
                />
                <span>{CHECKLIST_ES[c.id] ?? c.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            type="button"
            onClick={check}
            disabled={!hasInput}
            className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Buscar señales de alerta
          </button>
          {hasInput && (
            <button type="button" onClick={clear} className="border border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition">
              Borrar
            </button>
          )}
        </div>
      </div>

      {shown && hasInput && (
        <div ref={resultsRef} className="mt-8 scroll-mt-6" aria-live="polite">
          <div className={`rounded-2xl border-2 px-6 py-5 mb-6 ${tone}`}>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Resultado</p>
            <p className="font-serif text-3xl font-bold text-slate-900">{RATING_LABEL_ES[result.rating]}</p>
            <p className="text-slate-700 mt-2 leading-relaxed">
              {result.rating === 'high' &&
                'Esto coincide con uno o más patrones que las reglas federales y de Nueva Jersey de protección al consumidor señalan en las estafas de ejecución hipotecaria. No pague, no firme y no comparta nada hasta verificarlo por su cuenta.'}
              {result.rating === 'warning' &&
                'Algunas frases aquí son comunes en las estafas. Puede haber una explicación inocente, así que verifíquelo por su cuenta antes de pagar, firmar o compartir cualquier cosa.'}
              {result.rating === 'none' &&
                'No encontramos ninguno de los patrones que busca esta herramienta. Eso no quiere decir que el mensaje sea seguro o real: los estafadores cambian sus palabras, y esta herramienta no puede saber quién lo envió.'}
            </p>
            {result.rating === 'high' && result.legit.length > 0 && (
              <p className="text-slate-700 mt-2 text-sm leading-relaxed">
                El mensaje también menciona cosas que suelen aparecer en cartas reales (como HUD, los tribunales o un
                número de préstamo). Los estafadores también usan esos nombres, así que no cancelan las señales de alerta.
              </p>
            )}
          </div>

          {n > 0 && (
            <>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                {n === 1 ? 'Se encontró 1 señal de alerta' : `Se encontraron ${n} señales de alerta`}
              </h2>
              <ul className="space-y-4 mb-8">
                {result.flags.map((f) => {
                  const r = RULES_ES[f.rule.id];
                  return (
                    <li key={f.rule.id} className="rounded-2xl border border-slate-200 px-5 py-5">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-xs font-bold uppercase tracking-wider border rounded-full px-2.5 py-0.5 ${SEV_BADGE[f.rule.severity]}`}>
                          {SEVERITY_LABEL_ES[f.rule.severity]}
                        </span>
                        <p className="font-bold text-slate-900">{r?.title ?? f.rule.title}</p>
                      </div>
                      {f.phrases.length > 0 && (
                        <p className="text-sm text-slate-600 mb-2">
                          Se encontró:{' '}
                          {f.phrases.slice(0, 4).map((p, i) => (
                            <span key={p}>
                              {i > 0 && ', '}
                              <mark className={`rounded px-1 ${SEV_MARK[f.rule.severity]}`}>“{p}”</mark>
                            </span>
                          ))}
                        </p>
                      )}
                      {f.answers.length > 0 && (
                        <p className="text-sm text-slate-600 mb-2">Usted marcó: {f.answers.map((a) => `“${answerEs(a)}”`).join(', ')}</p>
                      )}
                      <p className="text-slate-700 leading-relaxed text-[15px]">
                        <strong className="text-slate-900">Por qué es una señal de alerta: </strong>
                        {r?.why ?? f.rule.why}
                      </p>
                      <p className="text-slate-700 leading-relaxed text-[15px] mt-2">
                        <strong className="text-slate-900">Qué hacer en su lugar: </strong>
                        {r?.instead ?? f.rule.instead}
                        {r?.link && (
                          <>
                            {' '}
                            <Link href={r.link.href} className="underline underline-offset-4 font-semibold text-slate-900">
                              {r.link.label}
                            </Link>
                            .
                          </>
                        )}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </>
          )}

          {text.trim() && result.spans.length > 0 && (
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-2">Su texto, con las frases señaladas resaltadas</h3>
              <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-800 leading-relaxed whitespace-pre-wrap break-words max-h-96 overflow-y-auto">
                {segs.map((s, i) =>
                  s.ruleId ? (
                    <mark key={i} className={`rounded px-0.5 ${SEV_MARK[sevOf(s.ruleId)]}`}>
                      {s.text}
                    </mark>
                  ) : (
                    <span key={i}>{s.text}</span>
                  )
                )}
              </div>
            </div>
          )}

          {result.legit.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 mb-8">
              <p className="font-bold text-slate-900 mb-2">Cosas que suelen incluir las cartas legítimas</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 text-[15px]">
                {result.legit.map((l) => (
                  <li key={l.id}>{LEGIT_ES[l.id] ?? l.label}</li>
                ))}
              </ul>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                Estas cosas solo bajaron el puntaje de las señales de alerta menores. La herramienta no puede confirmar quién
                envió el mensaje de verdad; cualquiera puede copiar un número de préstamo, el nombre de un tribunal o el
                teléfono de HUD.
              </p>
            </div>
          )}

          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Qué hacer ahora</h2>
          <ol className="space-y-4 mb-6">
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">1</span>
              <div className="text-slate-700 leading-relaxed text-[15px]">
                <p className="font-bold text-slate-900">Verifíquelo usted mismo, con un número que usted busque</p>
                Llame a su servicer al número de su estado de cuenta mensual, o a la agencia o al tribunal al número de su
                sitio web oficial. No use el teléfono, el enlace ni el código QR del mensaje.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">2</span>
              <div className="text-slate-700 leading-relaxed text-[15px]">
                <p className="font-bold text-slate-900">Pida una segunda opinión gratuita antes de firmar o pagar</p>
                Consejero de vivienda aprobado por HUD:{' '}
                <a href="tel:+18005694287" className="font-semibold text-slate-900 underline underline-offset-4">800-569-4287</a>{' '}
                (la consejería sobre ejecución hipotecaria siempre es gratuita). Legal Services of New Jersey (Servicios
                Legales de Nueva Jersey):{' '}
                <a href="tel:+18885765529" className="font-semibold text-slate-900 underline underline-offset-4">1-888-576-5529</a>{' '}
                (gratis para propietarios que califican por ingresos). En los dos puede pedir ayuda en español.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">3</span>
              <div className="text-slate-700 leading-relaxed text-[15px]">
                <p className="font-bold text-slate-900">Denúncielo, aunque no haya perdido dinero</p>
                <ul className="mt-1 space-y-1">
                  <li>
                    División de Asuntos del Consumidor de NJ:{' '}
                    <a href="https://njconsumeraffairs.nj.gov/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-slate-900 font-semibold">
                      queja en línea
                    </a>{' '}
                    o 800-242-5846
                  </li>
                  <li>
                    CFPB:{' '}
                    <a href="https://www.consumerfinance.gov/es/enviar-una-queja/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-slate-900 font-semibold">
                      consumerfinance.gov/es/enviar-una-queja
                    </a>
                  </li>
                  <li>
                    FTC:{' '}
                    <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-slate-900 font-semibold">
                      reportfraud.ftc.gov
                    </a>{' '}
                    (disponible en español)
                  </li>
                </ul>
                <p className="mt-1">Si ya pagó, firmó o compartió una contraseña, llame hoy mismo también a su banco y a un abogado.</p>
              </div>
            </li>
          </ol>
          <p className="text-slate-500 text-sm leading-relaxed">
            Este verificador busca patrones comunes de estafa en las palabras. No juzga a ninguna empresa, y no puede
            confirmar quién envió un mensaje ni si una oferta es real.{' '}
            <Link href="/es/estafas/" className="underline underline-offset-4">Vea las señales de alerta de las estafas de rescate hipotecario</Link>.
          </p>
        </div>
      )}
    </div>
  );
}
