import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import MarsNoticeEs from '../../../components/MarsNoticeEs';
import { QUESTIONS_ES, getQuestionEs } from '../../../../lib/questions-es';

export function generateStaticParams() {
  return QUESTIONS_ES.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getQuestionEs(slug);
  if (!item) return {};
  return {
    title: `${item.q} | NJ Foreclosure Guide`,
    description: item.short,
    alternates: { canonical: `https://njforeclosureguide.org/es/preguntas/${item.slug}/` },
    openGraph: {
      title: item.q,
      description: item.short,
      url: `https://njforeclosureguide.org/es/preguntas/${item.slug}/`,
      locale: 'es_US',
    },
  };
}

export default async function QuestionEsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getQuestionEs(slug);
  if (!item) notFound();

  const idx = QUESTIONS_ES.findIndex((x) => x.slug === item.slug);
  const related = [QUESTIONS_ES[(idx + 1) % QUESTIONS_ES.length], QUESTIONS_ES[(idx + 2) % QUESTIONS_ES.length]];

  const qaSchema = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    inLanguage: 'es',
    mainEntity: {
      '@type': 'Question',
      name: item.q,
      answerCount: 1,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${item.short} ${item.detail} ${item.more}`,
        url: `https://njforeclosureguide.org/es/preguntas/${item.slug}/`,
      },
    },
  };

  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(qaSchema) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/es/preguntas" className="hover:text-amber-300">Preguntas, respondidas</Link>
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight leading-snug">{item.q}</h1>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-slate-900 text-lg leading-relaxed font-medium border-l-4 border-amber-400 pl-5 mb-6">
          {item.short}
        </p>
        <p className="text-slate-600 leading-relaxed mb-5">{item.detail}</p>
        <p className="text-slate-600 leading-relaxed mb-10">{item.more}</p>

        <div className="border border-slate-200 rounded-2xl px-6 py-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Para profundizar
          </p>
          <ul className="space-y-2">
            {item.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-900 underline underline-offset-4 font-semibold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 mb-10">
          <p className="text-slate-700 leading-relaxed mb-4">
            La evaluación gratuita de dos minutos convierte respuestas generales en su próximo paso
            específico. En español, gratis y confidencial.
          </p>
          <Link href="/es/evaluacion" className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
            Ver Mis Opciones, Gratis
          </Link>
        </div>

        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          Otras preguntas frecuentes
        </p>
        <ul className="space-y-2 mb-10">
          {related.map((r) => (
            <li key={r.slug}>
              <Link href={`/es/preguntas/${r.slug}/`} className="text-slate-700 underline underline-offset-4 hover:text-slate-900">
                {r.q}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-slate-400 text-xs leading-relaxed">
          Información educativa, no asesoría legal. Sus propios documentos del tribunal determinan sus
          plazos; un abogado con licencia en Nueva Jersey puede confirmar qué aplica a su caso.
        </p>
      </article>

      <MarsNoticeEs />
    </div>
  );
}
