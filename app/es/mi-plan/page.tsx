import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import MarsNoticeEs from '../../components/MarsNoticeEs';
import MiPlanClient from './MiPlanClient';
import { OG_IMAGES } from '../../../lib/og';

export const metadata: Metadata = {
  title: 'Mi Plan de Batalla: Sus Plazos en Una Página | NJ Foreclosure Guide',
  description:
    'Ponga sus fechas y reciba un plan personal de una página: sus plazos exactos, en orden, con la jugada gratuita para cada uno. Se imprime en una hoja. Nada sale de su navegador.',
  alternates: { canonical: 'https://njforeclosureguide.org/es/mi-plan/' },
  openGraph: {
    images: OG_IMAGES,
    title: 'Mi Plan de Batalla — Ejecución Hipotecaria en NJ',
    description: 'Sus plazos, sus fechas, una página imprimible para el refrigerador. Gratis y privado.',
    url: 'https://njforeclosureguide.org/es/mi-plan/',
    locale: 'es_US',
  },
};

export default function MiPlanPage() {
  return (
    <div className="min-h-full bg-white" lang="es">
      <div className="print:hidden">
        <SiteHeader />
        <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Gratis · Privado · Imprimible
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
              Mi Plan de Batalla
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Ponga sus fechas y reciba un plan de una página con SUS plazos en orden — hecho para
              vivir en el refrigerador. Todo ocurre en su navegador; sus fechas nunca se envían a
              nadie.
            </p>
          </div>
        </section>
      </div>
      <section className="max-w-3xl mx-auto px-4 py-12 print:py-0 print:px-0 print:max-w-none">
        <MiPlanClient />
      </section>
      <div className="print:hidden">
        <MarsNoticeEs />
      </div>
    </div>
  );
}
