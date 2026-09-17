import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import MarsNoticeEs from '../../../components/MarsNoticeEs';
import { esPosts, getEsPost } from '../../../../lib/blog-es';

export function generateStaticParams() {
  return esPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getEsPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | NJ Foreclosure Guide`,
    description: post.description,
    alternates: { canonical: `https://njforeclosureguide.org/es/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://njforeclosureguide.org/es/blog/${post.slug}/`,
      locale: 'es_US',
      type: 'article',
    },
  };
}

export default async function EsBlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getEsPost(slug);
  if (!post) notFound();

  const all = esPosts();
  const idx = all.findIndex((p) => p.slug === post.slug);
  const related = [all[(idx + 1) % all.length], all[(idx + 2) % all.length]];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    inLanguage: 'es',
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.updated,
    author: {
      '@type': 'Person',
      name: 'Igor Guberuk',
      description:
        'Fundador de NJ Foreclosure Guide; alrededor de siete años ayudando a propietarios de Nueva Jersey en ejecución hipotecaria a entender sus opciones.',
    },
    mainEntityOfPage: `https://njforeclosureguide.org/es/blog/${post.slug}/`,
  };

  return (
    <div className="min-h-full bg-white" lang="es">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/es/blog" className="hover:text-amber-300">Blog en español</Link>
            {' '}· {post.minutes} min de lectura
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight leading-snug">{post.title}</h1>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/60 px-6 py-5 mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-800 mb-2">La versión corta</p>
          <p className="text-slate-800 leading-relaxed text-[15px]">{post.tldr}</p>
        </div>

        {post.sections.map((s) => (
          <section key={s.h} className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">{s.h}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="text-slate-600 leading-relaxed mb-4">{p}</p>
            ))}
          </section>
        ))}

        <div className="border border-slate-200 rounded-2xl px-6 py-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Para profundizar</p>
          <ul className="space-y-2">
            {post.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-900 underline underline-offset-4 font-semibold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 mb-10">
          <p className="text-slate-700 leading-relaxed mb-4">
            La evaluación gratuita de dos minutos convierte información general en su próximo paso
            específico. En español, gratis y confidencial.
          </p>
          <Link href="/es/evaluacion" className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
            Ver Mis Opciones, Gratis
          </Link>
        </div>

        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Otros artículos</p>
        <ul className="space-y-2 mb-10">
          {related.map((r) => (
            <li key={r.slug}>
              <Link href={`/es/blog/${r.slug}/`} className="text-slate-700 underline underline-offset-4 hover:text-slate-900">
                {r.title}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-slate-400 text-xs leading-relaxed">
          Información educativa, no asesoría legal, fiscal ni financiera. Sus propios documentos del
          tribunal determinan sus plazos; un abogado con licencia en Nueva Jersey puede confirmar qué
          aplica a su caso.
        </p>
      </article>

      <MarsNoticeEs />
    </div>
  );
}
