import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import MarsNoticeEs from '../../components/MarsNoticeEs';
import { SHERIFF_SOURCES, SHERIFF_DATA_VERIFIED_ES } from '../../../lib/sheriff-sales';
import { REPORT, AS_OF_LONG_ES, num, countyStats } from '../../../lib/sheriff-report';
import { OG_IMAGES } from '../../../lib/og';
import { fitTitle, fitDescription } from '../../../lib/seo';

/** Spanish counterpart of /sheriff-sales/ (app/sheriff-sales/page.tsx). */

const URL_ES = 'https://njforeclosureguide.org/es/ventas-del-sheriff/';
const URL_EN = 'https://njforeclosureguide.org/sheriff-sales/';

export const metadata: Metadata = {
  title: fitTitle('Subastas del Sheriff en Nueva Jersey: Los 21 Condados'),
  description: fitDescription(
    'Dónde revisar la fecha de subasta del sheriff en los 21 condados de Nueva Jersey: listas oficiales, teléfonos de la oficina del sheriff, cuántas subastas hay este mes y cómo pedir un aplazamiento.',
  ),
  alternates: { canonical: URL_ES, languages: { en: URL_EN, es: URL_ES, 'x-default': URL_EN } },
  openGraph: {
    images: OG_IMAGES,
    title: 'Subastas del Sheriff en Nueva Jersey: Los 21 Condados',
    description: 'Listas oficiales y contactos de los 21 condados de NJ, y cómo funcionan los aplazamientos.',
    url: URL_ES,
    locale: 'es_US',
  },
};

export default function VentasDelSheriffPage() {
  const link = 'text-slate-900 underline underline-offset-4 font-semibold';
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Los 21 condados · Verificado {SHERIFF_DATA_VERIFIED_ES}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Subastas del Sheriff en Nueva Jersey</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Si programaron una subasta del sheriff (sheriff sale) para su casa, esta página le dice dónde revisar la fecha
            en su condado, a quién llamar y qué le permite hacer la ley de Nueva Jersey.
          </p>
          <p className="text-slate-400 text-sm mt-5">
            <Link href="/sheriff-sales/" hrefLang="en" className="underline underline-offset-2">Read in English</Link>
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-5 mb-10">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Este mes:</strong> {num(REPORT.statewide.openListings)} subastas programadas en los{' '}
            {REPORT.statewide.countiesIncluded} condados que contamos, al {AS_OF_LONG_ES}. Cerca del {REPORT.statewide.sampleAdjournedPct}% de los
            anuncios que revisamos ya se habían aplazado al menos una vez, así que la fecha de la lista muchas veces no es la definitiva.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Tres cosas que debe saber antes de buscar su subasta</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
          <p>
            <strong className="text-slate-900">Una subasta programada no es una subasta terminada.</strong> La ley de Nueva Jersey
            generalmente le permite pedir dos aplazamientos de hasta 30 días cada uno en la oficina del sheriff, y un tribunal puede
            ordenar más. Eso puede darle dos meses de margen.
          </p>
          <p>
            <strong className="text-slate-900">Puede resolver el caso hasta el día de la subasta.</strong> Ponerse al día con el
            préstamo, cerrar la venta de la casa o la suspensión automática de un Capítulo 13 generalmente impiden que la subasta siga
            adelante. Nuestra <Link href="/es/evaluacion" className={link}>evaluación gratuita</Link> le muestra cuáles aplican a su caso.
          </p>
          <p>
            <strong className="text-slate-900">Los sitios oficiales están en inglés.</strong> Dieciséis condados publican sus subastas
            en el sistema estatal CivilView; Mercer, Somerset, Sussex y Warren publican sus propias listas. Cada página de condado le
            explica en español qué hay en la lista y cómo buscar su casa.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Busque su condado</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {SHERIFF_SOURCES.map((s) => {
            const st = countyStats(s.slug);
            return (
              <Link key={s.slug} href={`/es/ventas-del-sheriff/${s.slug}/`} className="border border-slate-200 rounded-xl px-5 py-4 hover:border-slate-400 hover:shadow-sm transition">
                <p className="font-bold text-slate-900">Condado de {s.county}</p>
                <p className="text-slate-500 text-sm mt-0.5">
                  {st ? `${num(st.county.openListings)} subastas programadas` : s.usesCivilView ? 'Lista en CivilView' : 'Publica su propia lista'}
                  {s.phone ? ` · ${s.phone}` : ''}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/es/herramientas/cuenta-regresiva" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">
            Cuenta regresiva de la subasta
          </Link>
          <Link href="/es/evaluacion" className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-50 transition">
            Ver mis opciones, gratis
          </Link>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Contactos verificados en fuentes oficiales del condado el {SHERIFF_DATA_VERIFIED_ES}. El sitio del sheriff del condado es siempre
          la autoridad. Nada en esta página es asesoría legal.
        </p>
      </section>
      <MarsNoticeEs />
    </div>
  );
}
