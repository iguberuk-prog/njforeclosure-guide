'use client';

import { useState } from 'react';
import Link from 'next/link';

interface QuizState {
  situation?: string;
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
  'foreclosure-asap-sell-any-homeowner': {
    primary: 'NJOffer ~ The Fastest Rescue',
    primaryUrl: '/companies/njoffer',
    secondary: 'Home Equity Partners',
    secondaryUrl: '/companies/home-equity-partners',
    guide: 'Foreclosure 101',
    guideUrl: '/guides/foreclosure-101',
    explanation: 'Since you need cash immediately and foreclosure is in progress, NJOffer specializes in fast closings (7-14 days) with no repairs needed. They understand urgency.',
  },
  'behind-asap-sell-any-homeowner': {
    primary: 'NJOffer ~ The Fastest Rescue',
    primaryUrl: '/companies/njoffer',
    secondary: 'Home Equity Partners',
    secondaryUrl: '/companies/home-equity-partners',
    guide: 'Behind on Payments Guide',
    guideUrl: '/guides/behind-on-payments',
    explanation: 'With payments behind and immediate need, a quick cash sale via NJOffer can stop foreclosure before it starts.',
  },
  'inherited-any-sell-any-homeowner': {
    primary: 'Home Equity Partners',
    primaryUrl: '/companies/home-equity-partners',
    secondary: 'NJOffer ~ The Fastest Rescue',
    secondaryUrl: '/companies/njoffer',
    guide: 'Inherited Property Guide',
    guideUrl: '/guides/inherited-property',
    explanation: 'Inherited properties are Home Equity Partners\' specialty. They handle the complexity so you don\'t have to.',
  },
  'inherited-any-sell-any-investor': {
    primary: 'Property Investors NJ',
    primaryUrl: '/companies/property-investors',
    secondary: 'Home Equity Partners',
    secondaryUrl: '/companies/home-equity-partners',
    guide: 'Investor Property Guide',
    guideUrl: '/guides/investor-property',
    explanation: 'As an investor dealing with an inherited property, Property Investors NJ focuses on portfolio and rental property solutions.',
  },
  'financial-any-keep-any-homeowner': {
    primary: 'Loan Modification Guide',
    primaryUrl: '/guides/loan-modification',
    secondary: 'HUD Counselor Directory',
    secondaryUrl: '/resources#counselors',
    guide: 'Options to Keep Your Home',
    guideUrl: '/guides/options-keep-home',
    explanation: 'Before selling, explore loan modification, forbearance, or refinancing. We\'ve linked HUD counselors who can help at no cost.',
  },
  'financial-flexible-sell-any-homeowner': {
    primary: 'Home Equity Partners',
    primaryUrl: '/companies/home-equity-partners',
    secondary: 'NJOffer ~ The Fastest Rescue',
    secondaryUrl: '/companies/njoffer',
    guide: 'Financial Crisis Solutions',
    guideUrl: '/guides/financial-crisis',
    explanation: 'Home Equity Partners handles financial stress situations with fair pricing and flexibility on timeline.',
  },
};

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizState>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleAnswer = (key: string, value: string) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    if (step < 4) {
      setStep(step + 1);
    } else {
      // Calculate result
      const resultKey = `${newAnswers.situation}-${newAnswers.timeline}-${newAnswers.goal}-${newAnswers.homeValue}-${newAnswers.type}`;

      // Simplified matching ~ in production, use more sophisticated logic
      let matchedResult: QuizResult = quizResults['inherited-any-sell-any-homeowner']; // default

      if (newAnswers.situation === 'foreclosure' && newAnswers.timeline === 'asap' && newAnswers.goal === 'sell') {
        matchedResult = quizResults['foreclosure-asap-sell-any-homeowner'];
      } else if (newAnswers.situation === 'behind' && newAnswers.timeline === 'asap') {
        matchedResult = quizResults['behind-asap-sell-any-homeowner'];
      } else if (newAnswers.situation === 'inherited' && newAnswers.goal === 'sell' && newAnswers.type === 'investor') {
        matchedResult = quizResults['inherited-any-sell-any-investor'];
      } else if (newAnswers.situation === 'inherited' && newAnswers.goal === 'sell') {
        matchedResult = quizResults['inherited-any-sell-any-homeowner'];
      } else if (newAnswers.situation === 'financial' && newAnswers.goal === 'keep') {
        matchedResult = quizResults['financial-any-keep-any-homeowner'];
      } else if (newAnswers.situation === 'financial' && newAnswers.goal === 'sell') {
        matchedResult = quizResults['financial-flexible-sell-any-homeowner'];
      }

      setResult(matchedResult);
    }
  };

  if (result) {
    return (
      <div className="min-h-full bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-green-900 mb-4">Your Personalized Solution</h1>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 text-lg">{result.explanation}</p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Primary Recommendation</h2>
              <p className="text-gray-600 mb-4">{result.primary}</p>
              <Link
                href={result.primaryUrl}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Learn More →
              </Link>
            </div>

            <div className="border-l-4 border-gray-400 pl-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Alternative Option</h2>
              <p className="text-gray-600 mb-4">{result.secondary}</p>
              <Link
                href={result.secondaryUrl}
                className="inline-block bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Compare →
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">📖 Recommended Reading</h3>
              <Link href={result.guideUrl} className="text-blue-600 hover:text-blue-700 underline">
                {result.guide}
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                setStep(0);
                setAnswers({});
                setResult(null);
              }}
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            Find Your Solution (Step {step + 1} of 5)
          </h1>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${((step + 1) / 5) * 100}%` }}
            />
          </div>
        </div>

        {step === 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              What's your current situation?
            </h2>
            <div className="space-y-3">
              {[
                { value: 'foreclosure', label: '⚠️ Foreclosure notice filed or in progress' },
                { value: 'behind', label: '📉 Behind on mortgage payments' },
                { value: 'inherited', label: '🏠 Inherited a property' },
                { value: 'financial', label: '💰 Financial hardship (medical, job loss, divorce)' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer('situation', option.value)}
                  className="w-full text-left p-4 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              How quickly do you need a solution?
            </h2>
            <div className="space-y-3">
              {[
                { value: 'asap', label: '🚨 ASAP (days/weeks)' },
                { value: 'weeks', label: '⏰ Within 4-8 weeks' },
                { value: 'flexible', label: '📅 Flexible (60-90 days)' },
                { value: 'no-rush', label: '😌 No rush' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer('timeline', option.value)}
                  className="w-full text-left p-4 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              Do you want to keep or sell your home?
            </h2>
            <div className="space-y-3">
              {[
                { value: 'keep', label: '🏡 Keep the home (modify mortgage, refinance)' },
                { value: 'sell', label: '💼 Sell for cash (quick exit)' },
                { value: 'unsure', label: '🤔 Not sure yet' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer('goal', option.value)}
                  className="w-full text-left p-4 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              What's your approximate home value?
            </h2>
            <div className="space-y-3">
              {[
                { value: 'under250k', label: 'Under $250,000' },
                { value: '250-500k', label: '$250,000 ~ $500,000' },
                { value: '500-750k', label: '$500,000 ~ $750,000' },
                { value: '750kplus', label: '$750,000+' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer('homeValue', option.value)}
                  className="w-full text-left p-4 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              What best describes you?
            </h2>
            <div className="space-y-3">
              {[
                { value: 'homeowner', label: '👤 Primary residence homeowner' },
                { value: 'investor', label: '📊 Landlord / investor with rentals' },
                { value: 'firsttime', label: '🔑 First-time homebuyer' },
                { value: 'mixed', label: '🏢 Mixed (primary + investment)' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer('type', option.value)}
                  className="w-full text-left p-4 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
