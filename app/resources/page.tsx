import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Free NJ Foreclosure Resources | Tools, Directories, Guides',
  description:
    'Every free resource on NJ Foreclosure Guide in one place: the sheriff sale directory for all 21 counties, foreclosure letters decoded, the plain-English glossary, the timeline tool and the net proceeds calculator.',
  alternates: { canonical: 'https://njforeclosureguide.org/resources/' },
  openGraph: {
    title: 'Free NJ Foreclosure Resources | Tools, Directories, Guides',
    description: 'Every free tool and reference on NJ Foreclosure Guide, in one place.',
    url: 'https://njforeclosureguide.org/resources/',
  },
};

const SECTIONS: { title: string; items: { href: string; name: string; desc: string }[] }[] = [
  {
    title: 'Figure out where you stand',
    items: [
      { href: '/quiz', name: 'Free 2-minute assessment', desc: 'Six questions that rank all seven options against your situation, timeline and goals.' },
      { href: '/tools/timeline', name: 'NJ foreclosure timeline tool', desc: 'See every stage from first missed payment to sheriff sale, and which options remain open at yours.' },
      { href: '/tools/net-proceeds', name: 'Net proceeds calculator', desc: 'Three numbers show what you would walk away with from a market sale, a cash sale, or catching up and keeping the home.' },
      { href: '/tools/deadlines', name: 'Deadline date calculator', desc: 'Pick the newest letter you received and its date; see the estimated deadlines that flow from it under New Jersey law.' },
      { href: '/compare', name: 'All 7 options, compared', desc: 'One honest table: keep the home or not, speed, cost, credit impact, and when each option stops working.' },
    ],
  },
  {
    title: 'Decode what you received',
    items: [
      { href: '/documents', name: 'Foreclosure letters, decoded', desc: 'Every document in the order it arrives, from the Notice of Intention to the writ of possession: what it means, your clock, and what to do that week.' },
      { href: '/glossary', name: 'The NJ foreclosure glossary', desc: 'Every term from court papers and phone calls, defined in two plain sentences.' },
      { href: '/answers', name: 'Questions, answered', desc: 'Direct answers to the questions New Jersey homeowners actually ask.' },
      { href: '/scams', name: 'Spot a foreclosure rescue scam', desc: 'Seven red flags, what New Jersey and federal law prohibit, and where to report one. Read before signing anything.' },
      { href: '/downloads/nj-foreclosure-week-one-checklist.pdf', name: 'The Week One Checklist (PDF)', desc: 'A printable one-pager of exactly what to do the week a notice arrives. Stick it on the fridge.' },
    ],
  },
  {
    title: 'County-level information',
    items: [
      { href: '/sheriff-sales', name: 'Sheriff sale directory, all 21 counties', desc: 'Where your county publishes sale listings, verified office contacts, and how adjournments work.' },
      { href: '/foreclosure-help', name: 'Foreclosure help by county and town', desc: 'How the process runs through your county courthouse, and local answers for 120+ NJ communities.' },
    ],
  },
  {
    title: 'Learn the options in depth',
    items: [
      { href: '/guides', name: 'The complete guides', desc: 'Loan modification, forbearance, refinancing, short sale, Chapter 13, cash sale and equity refinance, each explained end to end.' },
      { href: '/scenarios', name: 'Eighteen realistic scenarios', desc: 'Illustrative walkthroughs of how different situations play out, including the hard ones.' },
      { href: '/companies', name: 'Where to get help', desc: 'Every destination we recommend, compared side by side, with our compensation (none, one disclosed exception) stated on each.' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            All free · No sign-up for any of it
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Every Resource, One Page
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Tools, directories and references built for New Jersey homeowners working through a
            foreclosure. Start with whichever matches the question in your head right now.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        {SECTIONS.map((s) => (
          <div key={s.title} className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
              {s.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {s.items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="border border-slate-200 rounded-2xl px-5 py-5 hover:border-slate-400 hover:shadow-sm transition group flex flex-col"
                >
                  <p className="font-bold text-slate-900 group-hover:text-slate-950">{it.name}</p>
                  <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">{it.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <p className="text-slate-400 text-xs leading-relaxed">
          Everything here is educational information, not legal advice, and using any of it costs
          nothing and obligates you to nothing.
        </p>
      </section>
    </div>
  );
}
