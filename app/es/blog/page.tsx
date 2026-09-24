import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import MarsNoticeEs from '../../components/MarsNoticeEs';
import { esPosts } from '../../../lib/blog-es';
import { OG_IMAGES } from '../../../lib/og';

export const metadata: Metadata = {
  title: 'Blog en Español: Ejecución Hipotecaria en NJ | NJ Foreclosure Guide',
  description:
    'Artículos en español sobre la ejecución hipotecaria en Nueva Jersey: cada carta explicada, la ayuda gratuita que funciona, sus plazos y sus derechos.',
  alternates: { canonical: 'https://njforeclosureguide.org/es/blog/' },
  openGraph: {
    images: OG_IMAGES,
    title: 'Blog en Español: Ejecución Hipotecaria en NJ',
    description:
      'Cada carta explicada, la ayuda gratuita que funciona, sus plazos y sus derechos — en español claro.',
    url: 'https://njforeclosureguide.org/es/blog/',
    locale: 'es_US',
  },
};

export default function EsBlogIndex() {
  const posts = esPosts();
  return (
    <div className="min-h-full bg-white" lang="es">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Blog en español
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            La Ejecución Hipotecaria, Explicada en Español
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Cada carta que llega, cada plazo que corre, y la ayuda gratuita que realmente funciona.
            Sin costo, sin registro, sin promesas falsas.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/es/blog/${p.slug}/`}
              className="block rounded-2xl border border-slate-200 px-6 py-5 hover:border-slate-400 transition"
            >
              <p className="font-serif text-xl font-bold text-slate-900">{p.title}</p>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">{p.description}</p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 mt-3">
                {p.minutes} min de lectura
              </p>
            </Link>
          ))}
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 mt-10">
          <p className="text-slate-700 leading-relaxed mb-4">
            ¿Prefiere respuestas directas? Vea las preguntas frecuentes, o haga la evaluación
            gratuita de dos minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link href="/es/preguntas" className="flex-1 text-center border border-slate-300 text-slate-800 px-5 py-3 rounded-lg font-semibold hover:bg-white transition">
              Preguntas, Respondidas
            </Link>
            <Link href="/es/evaluacion" className="flex-1 text-center bg-amber-400 text-slate-950 px-5 py-3 rounded-lg font-bold hover:bg-amber-300 transition">
              Ver Mis Opciones, Gratis
            </Link>
          </div>
        </div>
      </section>

      <MarsNoticeEs />
    </div>
  );
}
