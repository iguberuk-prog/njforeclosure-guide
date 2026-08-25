import { serviceHistoryStatement, INDEPENDENCE_STATEMENT } from '../../lib/partners';

/**
 * The credibility block: this is an established practice, not a new website.
 *
 * Every claim here is substantiated by the operator's own history. Nothing
 * asserts an outcome, a success rate, or a typical result, because those would
 * need evidence this site does not yet have. See NO_OUTCOME_DATA_NOTE.
 */
export default function TrackRecord() {
  return (
    <section className="bg-white border-y border-slate-200 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-amber-600 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
          The site is new. The work is not.
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
          We Did This By Hand Long Before There Was a Website
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-6">{serviceHistoryStatement()}</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-bold text-slate-900 mb-2">We have used these companies</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every company on this site is one we have placed New Jersey homeowners with directly,
              more than once. We know how each one communicates, how fast they actually move, and
              which situations they handle well. That is why they are here.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-bold text-slate-900 mb-2">And we are still paid by none of them</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Knowing them well and being paid by them are different things. {INDEPENDENCE_STATEMENT}
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-500 leading-relaxed">
          Experience is not a guarantee. What a company did for someone else tells you how they
          operate, not what they will offer you. Get more than one number, and take anything
          important to a New Jersey attorney before you sign it.
        </p>
      </div>
    </section>
  );
}
