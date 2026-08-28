import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evaluación Gratuita en Español | Ejecución Hipotecaria NJ',
  description:
    'Seis preguntas, dos minutos, en español: vea cuáles de las 7 opciones ante una ejecución hipotecaria en Nueva Jersey encajan con su situación. Gratis, confidencial y sin compromiso.',
  alternates: {
    canonical: 'https://njforeclosureguide.org/es/evaluacion/',
    languages: { en: 'https://njforeclosureguide.org/quiz/', es: 'https://njforeclosureguide.org/es/evaluacion/' },
  },
  openGraph: {
    title: 'Evaluación Gratuita en Español | Ejecución Hipotecaria NJ',
    description: 'Dos minutos para ver sus opciones, en español. Gratis y confidencial.',
    url: 'https://njforeclosureguide.org/es/evaluacion/',
    locale: 'es_US',
  },
};

export default function EvaluacionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
