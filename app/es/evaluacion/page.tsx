'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import MarsNoticeEs from '../../components/MarsNoticeEs';
import { SITE_EMAIL } from '../../../lib/contact';
import { trackEvent } from '../../../lib/analytics';
import { appendAttribution } from '../../../lib/attribution';
import AddressInput from '../../components/AddressInput';

/**
 * Spanish assessment. Mirrors the English quiz's keys and values exactly so
 * both feed the same Netlify 'lead-quiz' form and the same lead pipeline;
 * only the labels, results and UI are Spanish. Every submission carries
 * language=es and sourcePage=/es/evaluacion so replies go out in Spanish.
 */

interface QuizState {
  situation?: string;
  condition?: string;
  timeline?: string;
  goal?: string;
  homeValue?: string;
  type?: string;
}

interface ResultEs {
  key: string;
  headline: string;
  explanation: string;
  links: { href: string; label: string }[];
}

const RESULTS: Record<string, ResultEs> = {
  'foreclosure-urgent': {
    key: 'foreclosure-urgent',
    headline: 'Actuar rápido, con dos caminos fuertes',
    explanation:
      'Con una ejecución en marcha y poco tiempo, sus dos caminos más fuertes son una venta rápida por efectivo (14 a 30 días, resuelve el caso y protege su crédito) o un abogado que negocie con su banco. También recuerde: la subasta generalmente se puede posponer dos veces, hasta 30 días cada vez, lo que da tiempo para cerrar cualquiera de los dos.',
    links: [
      { href: '/es/documentos', label: 'Su carta, explicada: cuánto tiempo tiene de verdad' },
      { href: '/es/opciones', label: 'Las 7 opciones, con sus desventajas honestas' },
    ],
  },
  'behind-urgent': {
    key: 'behind-urgent',
    headline: 'Todavía tiene las mejores opciones abiertas',
    explanation:
      'Está atrasado, pero el caso no ha terminado, y actuar ahora le da el máximo de opciones. Una modificación de préstamo puede bajar su pago y mantenerlo en su casa (solicitar es gratis, directamente con su banco), y una venta rápida queda disponible como respaldo. Llame a su banco y pida la solicitud de "loss mitigation" esta semana.',
    links: [
      { href: '/es/opciones', label: 'Las opciones para quedarse en su casa' },
      { href: '/es/documentos', label: 'Qué significa la carta que recibió' },
    ],
  },
  'inherited-sell': {
    key: 'inherited-sell',
    headline: 'Una herencia con hipoteca tiene solución',
    explanation:
      'Las propiedades heredadas combinan impuestos, título y a veces una hipoteca atrasada. La deuda queda con la casa, no con usted personalmente; la pregunta real es si la casa tiene valor (equity) que valga la pena proteger. Si lo tiene, resolver el préstamo o vender antes de la subasta conserva ese valor para los herederos. Desconfíe de ofertas de efectivo con ultimátum; consiga siempre una segunda oferta.',
    links: [
      { href: '/es/opciones', label: 'Vender en el mercado vs. venta rápida' },
      { href: '/es/estafas', label: 'Las señales de una oferta abusiva' },
    ],
  },
  'keep-home': {
    key: 'keep-home',
    headline: 'Quedarse en su casa es una meta realista',
    explanation:
      'Como su meta es quedarse, empiece con la modificación de préstamo, la pausa de pagos (forbearance) o el refinanciamiento, y con el programa gratuito de mediación de los tribunales si ya existe un caso. Un consejero de vivienda aprobado por HUD es gratuito, muchos hablan español, y puede ayudarle a armar la solicitud completa, que es lo que más determina la aprobación.',
    links: [
      { href: '/es/opciones', label: 'Las 5 opciones que conservan la casa' },
      { href: '/es/documentos', label: 'Sus plazos, según la carta que tiene' },
    ],
  },
  'sell-flexible': {
    key: 'sell-flexible',
    headline: 'Con tiempo, puede vender protegiendo su valor',
    explanation:
      'Con flexibilidad de tiempo, puede comparar una venta tradicional (protege más valor), una venta corta si debe más de lo que vale la casa, o una venta por efectivo si la velocidad se vuelve necesaria. La regla honesta: los compradores de efectivo pagan típicamente entre el 70% y el 85% del valor de mercado; esa diferencia es el precio de la velocidad, y solo vale la pena cuando el calendario manda.',
    links: [
      { href: '/es/opciones', label: 'Comparar las formas de vender' },
      { href: '/es/estafas', label: 'Antes de firmar con nadie: las señales' },
    ],
  },
};

function matchResult(a: QuizState): ResultEs {
  if (a.situation === 'foreclosure') return RESULTS['foreclosure-urgent'];
  if (a.situation === 'behind') return RESULTS['behind-urgent'];
  if (a.situation === 'inherited') return RESULTS['inherited-sell'];
  if (a.goal === 'keep') return RESULTS['keep-home'];
  return RESULTS['sell-flexible'];
}

function scoreLeadUrgency(a: QuizState): string {
  if (a.situation === 'foreclosure' && a.timeline === 'asap') return 'HOT';
  if (a.situation === 'foreclosure') return 'HOT';
  if (a.situation === 'behind' && a.timeline === 'asap') return 'HOT';
  if (a.situation === 'behind') return 'WARM';
  if (a.situation === 'financial' && (a.timeline === 'asap' || a.timeline === 'weeks')) return 'WARM';
  return 'STANDARD';
}

// Same keys and values as the English quiz; Spanish labels.
const QUESTIONS = [
  {
    key: 'situation',
    title: '¿Cuál es su situación actual?',
    options: [
      { value: 'foreclosure', label: 'Ya hay una ejecución hipotecaria presentada o en proceso' },
      { value: 'behind', label: 'Atrasado en los pagos de la hipoteca' },
      { value: 'inherited', label: 'Heredé una propiedad' },
      { value: 'financial', label: 'Dificultad económica (médica, pérdida de empleo, divorcio)' },
    ],
  },
  {
    key: 'timeline',
    title: '¿Qué tan rápido necesita una solución?',
    options: [
      { value: 'asap', label: 'De inmediato (días o semanas)' },
      { value: 'weeks', label: 'Dentro de 4 a 8 semanas' },
      { value: 'flexible', label: 'Flexible (60 a 90 días)' },
      { value: 'no-rush', label: 'Sin prisa, explorando opciones' },
    ],
  },
  {
    key: 'goal',
    title: '¿Quiere quedarse con su casa o venderla?',
    options: [
      { value: 'keep', label: 'Quedármela (modificar la hipoteca, refinanciar)' },
      { value: 'sell', label: 'Venderla (salida limpia, proteger el crédito)' },
      { value: 'unsure', label: 'No estoy seguro, quiero comparar' },
    ],
  },
  {
    key: 'condition',
    title: '¿La propiedad tiene daños?',
    options: [
      { value: 'none', label: 'Sin daños mayores' },
      { value: 'fire', label: 'Daño de fuego o humo' },
      { value: 'water', label: 'Inundación o daño de agua' },
      { value: 'mold', label: 'Moho' },
      { value: 'major-repairs', label: 'Otras reparaciones mayores (techo, estructura, sistemas)' },
    ],
  },
  {
    key: 'homeValue',
    title: '¿Cuál es el valor aproximado de su casa?',
    options: [
      { value: 'under250k', label: 'Menos de $250,000' },
      { value: '250-500k', label: '$250,000 a $500,000' },
      { value: '500-800k', label: '$500,000 a $800,000' },
      { value: '800k-1.5m', label: '$800,000 a $1.5 millones' },
      { value: 'over1.5m', label: 'Más de $1.5 millones' },
    ],
  },
  {
    key: 'type',
    title: '¿Qué lo describe mejor?',
    options: [
      { value: 'homeowner', label: 'Dueño y vivo en la casa' },
      { value: 'investor', label: 'Arrendador o inversionista' },
      { value: 'heir', label: 'Heredero o representante de una sucesión' },
      { value: 'mixed', label: 'Mixto (vivienda principal más inversión)' },
    ],
  },
];

export default function EvaluacionPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizState>({});
  const [result, setResult] = useState<ResultEs | null>(null);
  const [contact, setContact] = useState({ name: '', phone: '', email: '', address: '', town: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');

  const handleAnswer = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value });
    setStep(step + 1);
  };

  const handleContactSubmit = async (skip: boolean) => {
    if (!skip) {
      if (!contact.name.trim() || (!contact.phone.trim() && !contact.email.trim())) {
        setContactError('Escriba su nombre y al menos un teléfono o correo para enviarle sus resultados.');
        return;
      }
    }
    setContactError('');
    setSubmitting(true);
    const matched = matchResult(answers);
    const leadScore = scoreLeadUrgency(answers);

    if (!skip) {
      try {
        const formData = new URLSearchParams();
        formData.append('form-name', 'lead-quiz');
        formData.append('name', contact.name);
        formData.append('phone', contact.phone);
        formData.append('email', contact.email);
        formData.append('propertyAddress', contact.address);
        formData.append('town', contact.town);
        formData.append('notes', contact.notes);
        formData.append('situation', answers.situation || '');
        formData.append('timeline', answers.timeline || '');
        formData.append('goal', answers.goal || '');
        formData.append('homeValue', answers.homeValue || '');
        formData.append('ownerType', answers.type || '');
        formData.append('propertyCondition', answers.condition || '');
        formData.append('leadScore', leadScore);
        formData.append('recommendation', matched.key);
        formData.append('language', 'es');
        formData.append('sourcePage', '/es/evaluacion');
        appendAttribution(formData);
        await fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formData.toString(),
        });
        setSubmitted(true);
        trackEvent('generate_lead', {
          lead_score: leadScore,
          recommendation: matched.key,
          source_page: '/es/evaluacion',
          language: 'es',
        });
      } catch {
        // Show results regardless.
      }
    }
    trackEvent('quiz_complete', {
      recommendation: matched.key,
      contact_left: skip ? 'no' : 'yes',
      language: 'es',
    });
    setResult(matched);
    setSubmitting(false);
  };

  const field = 'w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent';

  if (result) {
    return (
      <div className="min-h-full bg-slate-50" lang="es">
        <SiteHeader />
        <div className="max-w-2xl mx-auto py-14 px-4">
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200">
            <p className="text-amber-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              Sus resultados
            </p>
            <h1 className="font-serif text-3xl font-bold text-slate-900 mb-6">{result.headline}</h1>
            {submitted && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg px-5 py-4 mb-6 text-sm">
                Recibido. Le escribiremos en español dentro de un día hábil. Su información se
                mantiene privada.
              </div>
            )}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-8">
              <p className="text-slate-700 leading-relaxed">{result.explanation}</p>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Siguiente lectura
            </p>
            <ul className="space-y-2 mb-8">
              {result.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-900 underline underline-offset-4 font-semibold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm leading-relaxed">
              ¿Prefiere contarnos su caso con sus palabras? Escríbanos en español a{' '}
              <a href={`mailto:${SITE_EMAIL}`} className="text-slate-900 underline underline-offset-4 font-semibold break-all">
                {SITE_EMAIL}
              </a>
              . Gratis, confidencial y sin compromiso.
            </p>
          </div>
        </div>
        <MarsNoticeEs />
      </div>
    );
  }

  if (step >= QUESTIONS.length) {
    return (
      <div className="min-h-full bg-slate-50" lang="es">
        <SiteHeader />
        <div className="max-w-2xl mx-auto py-14 px-4">
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200">
            <p className="text-amber-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              Último paso, opcional
            </p>
            <h1 className="font-serif text-2xl font-bold text-slate-900 mb-3">
              ¿A dónde le enviamos sus resultados?
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Le respondemos en español dentro de un día hábil, sin costo y sin compromiso. Si
              prefiere no dejar datos, puede ver sus resultados de inmediato.
            </p>
            <div className="space-y-4">
              <input className={field} placeholder="Nombre" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
              <div className="grid sm:grid-cols-2 gap-4">
                <input className={field} type="tel" placeholder="Teléfono" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
                <input className={field} type="email" placeholder="Correo electrónico" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
              </div>
              <div>
                <AddressInput
                  value={contact.address}
                  onChange={(v) => setContact({ ...contact, address: v })}
                  placeholder="Dirección de la propiedad (opcional)"
                  lang="es"
                />
              </div>
              <input className={field} placeholder="Pueblo o ciudad (opcional)" value={contact.town} onChange={(e) => setContact({ ...contact, town: e.target.value })} />
              <textarea className={field} rows={3} placeholder="Algo más que quiera contarnos (opcional)" value={contact.notes} onChange={(e) => setContact({ ...contact, notes: e.target.value })} />
              {contactError && <p className="text-red-700 text-sm">{contactError}</p>}
              <button
                onClick={() => handleContactSubmit(false)}
                disabled={submitting}
                className="w-full bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition disabled:opacity-60"
              >
                {submitting ? 'Enviando…' : 'Ver mis resultados'}
              </button>
              <button
                onClick={() => handleContactSubmit(true)}
                disabled={submitting}
                className="w-full text-slate-500 text-sm underline underline-offset-4 hover:text-slate-700"
              >
                Ver resultados sin dejar mis datos
              </button>
            </div>
          </div>
        </div>
        <MarsNoticeEs />
      </div>
    );
  }

  const q = QUESTIONS[step];
  return (
    <div className="min-h-full bg-slate-50" lang="es">
      <SiteHeader />
      <div className="max-w-2xl mx-auto py-14 px-4">
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <p className="text-amber-600 text-xs font-semibold tracking-[0.25em] uppercase">
              Evaluación gratuita
            </p>
            <p className="text-slate-400 text-sm">
              {step + 1} de {QUESTIONS.length}
            </p>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full mb-8">
            <div className="h-1.5 bg-amber-400 rounded-full transition-all" style={{ width: `${(step / QUESTIONS.length) * 100}%` }} />
          </div>
          <h1 className="font-serif text-2xl font-bold text-slate-900 mb-6">{q.title}</h1>
          <div className="space-y-3">
            {q.options.map((o) => (
              <button
                key={o.value}
                onClick={() => handleAnswer(q.key, o.value)}
                className="w-full text-left px-5 py-4 border border-slate-200 rounded-xl hover:border-slate-900 hover:bg-slate-50 transition text-slate-800 font-medium"
              >
                {o.label}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button onClick={() => setStep(step - 1)} className="mt-6 text-slate-500 text-sm underline underline-offset-4 hover:text-slate-700">
              Volver
            </button>
          )}
          <p className="text-slate-400 text-xs mt-6 leading-relaxed">
            Gratis y confidencial. No es asesoría legal, y nada aquí lo compromete a nada.
          </p>
        </div>
      </div>
      <MarsNoticeEs />
    </div>
  );
}
