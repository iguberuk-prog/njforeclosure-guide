'use client';

import { useState } from 'react';
import Link from 'next/link';
import { matchPartners, COMPENSATION_LABEL, type Answers } from '../../lib/partners';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL, RESPONSE_PROMISE } from '../../lib/contact';

/**
 * Escape hatch. Someone with a sale date next week should not have to finish six
 * questions to reach a human. Shown on every step of the assessment.
 */
function CallInstead({ note }: { note?: string }) {
  return (
    <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
      <p className="text-sm text-slate-700 leading-relaxed mb-3">
        {note ?? 'In a hurry, or would rather just talk to someone? Skip the questions and call.'}
      </p>
      <a
        href={`tel:${SITE_PHONE_TEL}`}
        className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-amber-700 transition"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 border border-amber-300 text-amber-700">
          &#9742;
        </span>
        {SITE_PHONE_DISPLAY}
      </a>
      <p className="text-xs text-slate-500 mt-2">{RESPONSE_PROMISE}</p>
    </div>
  );
}

interface QuizState {
  situation?: string;
  condition?: string;
  timeline?: string;
  goal?: string;
  homeValue?: string;
  type?: string;
}

interface QuizResult {
  primary: string;
  primaryUrl: string;
  secondary: string;
  secondaryUrl: string;
  guide: string;
  guideUrl: string;
  explanation: string;
}

const quizResults: Record<string, QuizResult> = {
  'foreclosure-urgent': {
    primary: 'Fast Cash Sale Specialists',
    primaryUrl: '/professionals',
    secondary: 'Foreclosure Defense Attorneys',
    secondaryUrl: '/professionals',
    guide: 'Foreclosure 101',
    guideUrl: '/guides/foreclosure-101',
    explanation: 'With foreclosure in progress and time short, your two strongest paths are a fast cash sale (14 to 30 days, stops the foreclosure and protects your credit) or an attorney who can negotiate with your lender. We can connect you with both so you can compare.',
  },
  'behind-urgent': {
    primary: 'Loan Modification Attorneys',
    primaryUrl: '/professionals',
    secondary: 'Fast Cash Sale Specialists',
    secondaryUrl: '/professionals',
    guide: 'Loan Modification Guide',
    guideUrl: '/guides/loan-modification',
    explanation: 'You are behind but foreclosure has not been finalized. Acting now gives you the most options: a loan modification can lower your payment and keep you in the home, and a quick sale remains available as a backup.',
  },
  'inherited-sell': {
    primary: 'Real Estate Professionals',
    primaryUrl: '/professionals',
    secondary: 'Cash Buyers',
    secondaryUrl: '/professionals',
    guide: 'Cash Sale Guide',
    guideUrl: '/guides/cash-buyer',
    explanation: 'Inherited properties come with their own complexity: taxes, title, and sometimes an existing mortgage. The professionals in our network handle these situations every day and can walk you through a clean sale.',
  },
  'keep-home': {
    primary: 'Loan Modification and Forbearance Attorneys',
    primaryUrl: '/professionals',
    secondary: 'HUD Housing Counselors (free)',
    secondaryUrl: '/resources',
    guide: 'Options to Keep Your Home',
    guideUrl: '/guides/loan-modification',
    explanation: 'Since keeping your home is the goal, start with loan modification, forbearance, or refinancing. A HUD-approved housing counselor is also free to talk to. We can connect you with attorneys who negotiate these solutions with lenders.',
  },
  'sell-flexible': {
    primary: 'Real Estate Professionals',
    primaryUrl: '/professionals',
    secondary: 'Cash Buyers',
    secondaryUrl: '/professionals',
    guide: 'All 7 Options Explained',
    guideUrl: '/guides/options',
    explanation: 'With some flexibility on timing, you can compare a traditional sale, a short sale if you owe more than the home is worth, or a cash sale for speed. We can connect you with professionals for each path.',
  },
};

function scoreLeadUrgency(answers: QuizState): string {
  if (answers.situation === 'foreclosure' && answers.timeline === 'asap') return 'HOT';
  if (answers.situation === 'foreclosure') return 'HOT';
  if (answers.situation === 'behind' && answers.timeline === 'asap') return 'HOT';
  if (answers.situation === 'behind') return 'WARM';
  if (answers.situation === 'financial' && (answers.timeline === 'asap' || answers.timeline === 'weeks')) return 'WARM';
  return 'STANDARD';
}

function matchResult(answers: QuizState): QuizResult {
  if (answers.situation === 'foreclosure') return quizResults['foreclosure-urgent'];
  if (answers.situation === 'behind') return quizResults['behind-urgent'];
  if (answers.situation === 'inherited') return quizResults['inherited-sell'];
  if (answers.goal === 'keep') return quizResults['keep-home'];
  return quizResults['sell-flexible'];
}

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizState>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [contact, setContact] = useState({ name: '', phone: '', email: '', town: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');

  const handleAnswer = (key: string, value: string) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const handleContactSubmit = async (skip: boolean) => {
    if (!skip) {
      if (!contact.name.trim() || (!contact.phone.trim() && !contact.email.trim())) {
        setContactError('Please enter your name and at least a phone number or email so we can send your results.');
        return;
      }
    }
    setContactError('');
    setSubmitting(true);
    const matched = matchResult(answers);
    const leadScore = scoreLeadUrgency(answers);

    if (!skip) {
      try {
        const formData = new URLSearchParams();
        formData.append('form-name', 'lead-quiz');
        formData.append('name', contact.name);
        formData.append('phone', contact.phone);
        formData.append('email', contact.email);
        formData.append('town', contact.town);
        formData.append('notes', contact.notes);
        formData.append('situation', answers.situation || '');
        formData.append('timeline', answers.timeline || '');
        formData.append('goal', answers.goal || '');
        formData.append('homeValue', answers.homeValue || '');
        formData.append('ownerType', answers.type || '');
        formData.append('propertyCondition', answers.condition || '');
        formData.append('leadScore', leadScore);
        formData.append('recommendation', matched.primary);
        formData.append('sourcePage', '/quiz');
        await fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formData.toString(),
        });
        setSubmitted(true);
      } catch (e) {
        // Still show results even if submission fails
      }
    }
    setResult(matched);
    setSubmitting(false);
  };

  const questions = [
    {
      key: 'situation',
      title: "What's your current situation?",
      options: [
        { value: 'foreclosure', label: 'Foreclosure notice filed or in progress' },
        { value: 'behind', label: 'Behind on mortgage payments' },
        { value: 'inherited', label: 'Inherited a property' },
        { value: 'financial', label: 'Financial hardship (medical, job loss, divorce)' },
      ],
    },
    {
      key: 'timeline',
      title: 'How quickly do you need a solution?',
      options: [
        { value: 'asap', label: 'Immediately (days or weeks)' },
        { value: 'weeks', label: 'Within 4 to 8 weeks' },
        { value: 'flexible', label: 'Flexible (60 to 90 days)' },
        { value: 'no-rush', label: 'No rush, exploring options' },
      ],
    },
    {
      key: 'goal',
      title: 'Do you want to keep or sell your home?',
      options: [
        { value: 'keep', label: 'Keep the home (modify mortgage, refinance)' },
        { value: 'sell', label: 'Sell (clean exit, protect credit)' },
        { value: 'unsure', label: 'Not sure yet, want to compare' },
      ],
    },
    {
      key: 'condition',
      title: 'Has the property been damaged?',
      subtitle: 'Damage changes which options are realistic, and some buyers specialize in it.',
      options: [
        { value: 'none', label: 'No major damage' },
        { value: 'fire', label: 'Fire or smoke damage' },
        { value: 'water', label: 'Flood or water damage' },
        { value: 'mold', label: 'Mold' },
        { value: 'major-repairs', label: 'Other major repairs needed (roof, structural, systems)' },
      ],
    },
    {
      key: 'homeValue',
      title: "What's your approximate home value?",
      options: [
        { value: 'under250k', label: 'Under $250,000' },
        { value: '250-500k', label: '$250,000 to $500,000' },
        { value: '500-800k', label: '$500,000 to $800,000' },
        { value: '800k-1.5m', label: '$800,000 to $1.5 million' },
        { value: 'over1.5m', label: 'Over $1.5 million' },
      ],
    },
    {
      key: 'type',
      title: 'What best describes you?',
      options: [
        { value: 'homeowner', label: 'Primary residence homeowner' },
        { value: 'investor', label: 'Landlord or investor' },
        { value: 'heir', label: 'Heir or estate representative' },
        { value: 'mixed', label: 'Mixed (primary plus investment)' },
      ],
    },
  ];

  // Results screen
  if (result) {
    return (
      <div className="min-h-full bg-slate-50 py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200">
            <p className="text-amber-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">Your Personalized Results</p>
            <h1 className="font-serif text-3xl font-bold text-slate-900 mb-6">Here's Your Path Forward</h1>

            {submitted && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg px-5 py-4 mb-6 text-sm">
                Got it. A member of our team will reach out shortly to make your introduction. Your information stays private.
              </div>
            )}

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-8">
              <p className="text-slate-700 leading-relaxed">{result.explanation}</p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-slate-900 pl-6">
                <h2 className="text-lg font-bold text-slate-900 mb-1">Best Match</h2>
                <p className="text-slate-600 mb-3">{result.primary}</p>
                <Link href={result.primaryUrl} className="inline-block bg-slate-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm">
                  See Our Network
                </Link>
              </div>

              <div className="border-l-4 border-slate-300 pl-6">
                <h2 className="text-base font-bold text-slate-700 mb-1">Also Worth Comparing</h2>
                <p className="text-slate-600 mb-3">{result.secondary}</p>
                <Link href={result.secondaryUrl} className="inline-block border border-slate-300 text-slate-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-50 transition text-sm">
                  Compare
                </Link>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-1 text-sm">Recommended Reading</h3>
                <Link href={result.guideUrl} className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2">
                  {result.guide}
                </Link>
              </div>
            </div>

            {/* Matched destinations, ranked by the routing engine */}
            {(() => {
              const matches = matchPartners({
                situation: answers.situation as Answers['situation'],
                goal: answers.goal as Answers['goal'],
                timeline: answers.timeline as Answers['timeline'],
                ownerType: answers.type as Answers['ownerType'],
                condition: answers.condition as Answers['condition'],
                homeValue: answers.homeValue as Answers['homeValue'],
              });
              if (matches.length === 0) return null;
              return (
                <div className="mt-10 pt-8 border-t border-slate-200">
                  <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                    Where To Go From Here
                  </h2>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Ranked for your situation. You are free to use any, all, or none of these.
                  </p>
                  <div className="space-y-4">
                    {matches.map(({ partner, reasons }) => (
                      <div
                        key={partner.id}
                        className={`rounded-xl border p-6 ${
                          partner.compensation === 'no-compensation'
                            ? 'border-emerald-200 bg-emerald-50/40'
                            : 'border-slate-200 bg-white'
                        }`}
                      >
                        {partner.programBadge && (
                          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-amber-800 bg-amber-100 border border-amber-300 rounded-full px-3 py-1 mb-3">
                            {partner.programBadge}
                          </span>
                        )}
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <h3 className="font-bold text-slate-900">{partner.name}</h3>
                          {partner.compensation === 'no-compensation' && (
                            <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 rounded-full px-2.5 py-1">
                              Free · We earn nothing
                            </span>
                          )}
                          {partner.compensation === 'affiliated' && (
                            <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-100 border border-blue-300 rounded-full px-2.5 py-1">
                              Affiliated with us
                            </span>
                          )}
                        </div>
                        <p className="text-slate-700 text-sm mb-3">{partner.headline}</p>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{partner.description}</p>

                        {reasons.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {reasons.map((r, i) => (
                              <span key={i} className="text-xs text-slate-600 bg-slate-100 rounded-full px-3 py-1">
                                {r}
                              </span>
                            ))}
                          </div>
                        )}

                        {partner.handoffNote && (
                          <div className="rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 mb-4">
                            <p className="text-xs text-slate-600 leading-relaxed">
                              <span className="font-bold text-slate-800">Before you click: </span>
                              {partner.handoffNote}
                            </p>
                          </div>
                        )}

                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="inline-block bg-slate-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm"
                        >
                          Go to {partner.name}
                        </a>

                        <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
                          {COMPENSATION_LABEL[partner.compensation]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            <CallInstead note="Questions about any of these, or want help deciding between them? Call and ask." />

            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
              <button
                onClick={() => { setStep(0); setAnswers({}); setResult(null); setSubmitted(false); }}
                className="text-slate-500 hover:text-slate-700 text-sm underline underline-offset-2"
              >
                Retake Assessment
              </button>
              <Link href="/" className="text-slate-500 hover:text-slate-700 text-sm underline underline-offset-2">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Contact capture step (after final question)
  if (step >= questions.length) {
    const leadScore = scoreLeadUrgency(answers);
    return (
      <div className="min-h-full bg-slate-50 py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200">
            <p className="text-amber-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">Almost Done</p>
            <h1 className="font-serif text-3xl font-bold text-slate-900 mb-3">Where Should We Send Your Results?</h1>
            <p className="text-slate-600 mb-8">
              {leadScore === 'HOT'
                ? 'Based on your answers, time matters in your situation. Leave your details and we will prioritize your introduction to the right professional, usually within the hour during business hours.'
                : 'Leave your details and we will send your personalized results plus a direct introduction to professionals matched to your situation. Free and confidential.'}
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name *</label>
                <input
                  type="text"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  placeholder="First and last name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Town (optional)</label>
                <input
                  type="text"
                  value={contact.town}
                  onChange={(e) => setContact({ ...contact, town: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  placeholder="e.g. Newark"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Anything else we should know? (optional)</label>
                <textarea
                  value={contact.notes}
                  onChange={(e) => setContact({ ...contact, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  placeholder="Sheriff sale date, months behind, anything relevant"
                />
              </div>
            </div>

            {contactError && (
              <p className="text-red-600 text-sm mt-4">{contactError}</p>
            )}

            <button
              onClick={() => handleContactSubmit(false)}
              disabled={submitting}
              className="w-full mt-6 bg-amber-400 text-slate-950 py-4 rounded-xl font-bold text-lg hover:bg-amber-300 transition disabled:opacity-60"
            >
              {submitting ? 'Sending...' : 'Get My Results and Free Introduction'}
            </button>
            <button
              onClick={() => handleContactSubmit(true)}
              disabled={submitting}
              className="w-full mt-3 text-slate-500 hover:text-slate-700 text-sm underline underline-offset-2"
            >
              Skip, just show my results
            </button>

            <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 px-5 py-4">
              <p className="text-[11px] text-slate-500 leading-relaxed">
                By submitting, you agree that NJ Foreclosure Guide and, if you request an introduction, the professional
                we connect you with, may contact you at the phone number and email you provided, including by automated
                dialing or text message, about your inquiry. Consent is not a condition of any purchase or of using this
                site, and you can opt out at any time by replying STOP or emailing us. Message and data rates may apply.
                We do not sell your information and we share it only when you ask us to make an introduction. See our{' '}
                <Link href="/privacy" className="text-slate-700 font-semibold underline underline-offset-2">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/terms" className="text-slate-700 font-semibold underline underline-offset-2">
                  Terms of Use
                </Link>
                .
              </p>
            </div>
            <p className="text-xs text-slate-400 mt-4 text-center leading-relaxed">
              Prefer not to share contact details? Skip above and your results still appear.
            </p>

            <CallInstead note="Would rather explain your situation out loud than type it? Call and we will walk through it with you." />
          </div>
        </div>
      </div>
    );
  }

  // Question steps
  const q = questions[step];
  return (
    <div className="min-h-full bg-slate-50 py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <p className="text-amber-600 text-xs font-semibold tracking-[0.25em] uppercase">Free Assessment</p>
              <p className="text-slate-400 text-sm">Step {step + 1} of {questions.length}</p>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div
                className="bg-amber-400 h-1.5 rounded-full transition-all"
                style={{ width: `${((step + 1) / (questions.length + 1)) * 100}%` }}
              />
            </div>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{q.title}</h2>
          {(q as { subtitle?: string }).subtitle && (
            <p className="text-slate-500 text-sm mb-6">{(q as { subtitle?: string }).subtitle}</p>
          )}
          <div className="mb-6" />
          <div className="space-y-3">
            {q.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(q.key, option.value)}
                className="w-full text-left px-6 py-4 border border-slate-200 rounded-xl hover:border-slate-900 hover:bg-slate-50 transition font-medium text-slate-800"
              >
                {option.label}
              </button>
            ))}
          </div>

          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-8 text-slate-400 hover:text-slate-600 text-sm underline underline-offset-2"
            >
              Back
            </button>
          )}

          <CallInstead />
        </div>
      </div>
    </div>
  );
}
