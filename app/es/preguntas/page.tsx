import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import MarsNoticeEs from '../../components/MarsNoticeEs';
import { QUESTIONS_ES } from '../../../lib/questions-es';

export const metadata: Metadata = {
  title: 'Preguntas sobre la Ejecución Hipotecaria en NJ, Respondidas en Español',
  description:
    'Respuestas directas en español a las preguntas más frecuentes sobre la ejecución hipotecaria en Nueva Jersey: cuánto tarda, cuántos pagos puede atrasar, cómo aplazar la venta del sheriff, y más. Gratis.',
  alternates: {
    canonical: 'https://njforeclosureguide.org/es/preguntas/',
    languages: { en: 'https://njforeclosureguide.org/answers/', es: 'https://njforeclosureguide.org/es/preguntas/' },
  },
};

export default function PreguntasIndex() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">En Español · Gratis y Confidencial</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tight">Sus Preguntas, Respondidas</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Respuestas directas, escritas en español, sobre cómo funciona la ejecución hipotecaria en
            Nueva Jersey y qué puede hacer usted. Primero la respuesta, después la explicación.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-14">
        <div className="space-y-4">
          {QUESTIONS_ES.map((item) => (
            <Link
              key={item.slug}
              href={`/es/preguntas/${item.slug}/`}
              className="block border border-slate-200 rounded-2xl px-6 py-5 hover:border-slate-900 hover:shadow-lg hover:shadow-slate-200/70 transition"
            >
              <h2 className="font-bold text-lg text-slate-900 leading-snug mb-2">{item.q}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{item.short}</p>
              <p className="text-slate-900 text-sm font-semibold mt-3">Leer la respuesta completa →</p>
            </Link>
          ))}
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 mt-10 text-center">
          <p className="text-slate-700 leading-relaxed mb-4">
            ¿No encuentra su pregunta? La evaluación gratuita de dos minutos le muestra dónde está
            parado y qué opciones siguen abiertas.
          </p>
          <Link href="/es/evaluacion" className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
            Empezar la Evaluación Gratis
          </Link>
        </div>

        <p className="text-center mt-8">
          <Link href="/es" className="text-slate-500 hover:text-slate-700 text-sm underline underline-offset-2">
            ← Volver a la guía en español
          </Link>
        </p>
      </section>

      <MarsNoticeEs />
    </div>
  );
}
