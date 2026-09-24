import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import MarsNoticeEs from '../../components/MarsNoticeEs';
import CentroClient from './CentroClient';
import { OG_IMAGES } from '../../../lib/og';

export const metadata: Metadata = {
  title: 'Su Centro de Mando: Ejecución Hipotecaria en NJ | NJ Foreclosure Guide',
  description:
    'Tres respuestas — su etapa, su condado, su meta — y esta página arma su panel personal: sus plazos, la maquinaria de su condado, la ayuda gratuita cerca, y sus tres mejores jugadas. Gratis y privado.',
  alternates: { canonical: 'https://njforeclosureguide.org/es/centro-de-mando/' },
  openGraph: {
    images: OG_IMAGES,
    title: 'Su Centro de Mando — Ejecución Hipotecaria en NJ',
    description: 'Etapa + condado + meta = su panel personal. Nada sale de su navegador.',
    url: 'https://njforeclosureguide.org/es/centro-de-mando/',
    locale: 'es_US',
  },
};

export default function CentroPage() {
  return (
    <div className="min-h-full bg-white" lang="es">
      <SiteHeader />
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Gratis · Privado · En Español
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Su Centro de Mando
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Tres respuestas — su etapa, su condado, su meta — y esta página se arma alrededor de su
            caso: su reloj, la maquinaria de su condado, la ayuda gratuita cerca de usted, y sus
            tres mejores jugadas.
          </p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12">
        <CentroClient />
      </section>
      <MarsNoticeEs />
    </div>
  );
}
