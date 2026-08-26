import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage, { Section, Bullets } from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Disclaimer | NJ Foreclosure Guide',
  description:
    'Important disclosures about NJ Foreclosure Guide: we are not a law firm, lender, or government agency, we do not provide legal or financial advice, and no outcome is guaranteed.',
  alternates: { canonical: 'https://njforeclosureguide.org/disclaimer/' },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Important Disclosures"
      title="Disclaimer"
      intro="Read this before acting on anything you find here. These are the limits of what this site is and what it can do for you."
    >
      <Section title="Not legal advice">
        <p>
          Everything on this site is general education, not legal advice. We are not a law firm and no one here is your
          attorney. Reading this site, using the assessment, or speaking with our chat assistant does not create an
          attorney-client relationship with anyone.
        </p>
        <p className="text-slate-900 font-semibold">
          Foreclosure in New Jersey is a court proceeding with real deadlines. If you have been served, you generally
          have a limited window to respond, and missing it has consequences that are difficult to undo. Speak with a
          licensed New Jersey attorney about your specific case.
        </p>
      </Section>

      <Section title="Not financial or tax advice">
        <p>
          We are not financial advisors, tax professionals, credit counselors, or public adjusters. Decisions about
          selling, refinancing, bankruptcy, insurance claims, or donating property carry financial and tax consequences
          that depend entirely on your circumstances. Consult a qualified professional before acting.
        </p>
      </Section>

      <Section title="Not a government agency or lender">
        <p>
          NJ Foreclosure Guide is a private company. We are not affiliated with, endorsed by, or approved by any
          government agency or housing authority. Our service has not been approved by your lender or mortgage servicer.
        </p>
        <p className="text-slate-900 font-semibold">
          Your lender is not obligated to modify your loan, accept a short sale, postpone a sale date, or agree to any
          arrangement. Anyone who guarantees a specific outcome from your lender is not being straight with you.
        </p>
      </Section>

      <Section title="We never charge you, and be careful who does">
        <p>
          We do not charge homeowners any fee for information, the assessment, or an introduction. Foreclosure is a
          field with real scams in it. Be cautious of anyone who asks for an upfront fee to stop your foreclosure, tells
          you to stop paying your lender, asks you to sign over your deed, or pressures you to sign something quickly.
        </p>
        <Bullets
          items={[
            'Never sign a document you have not read and understood.',
            'Never sign over your deed without an attorney reviewing it first.',
            'Be wary of any promise that sounds guaranteed.',
            'Free help exists. HUD-approved counselors cost nothing, and New Jersey courts run a foreclosure mediation program at no cost.',
          ]}
        />
      </Section>

      <Section title="No guaranteed outcomes">
        <p>
          Results vary. What worked for one homeowner may not be available to you. Timelines, offers, eligibility, and
          outcomes depend on your loan, your equity, your lender, your county, and your own choices. Nothing on this site
          predicts what will happen in your case.
        </p>
      </Section>

      <Section title="Referrals and compensation">
        <p>
          We take no referral fees, no commissions and no advertising money from any company, attorney, nonprofit or
          government resource mentioned on this site. One destination, Corcoran Sawyer Smith x Builders Resource Center,
          is a brokerage the people behind this guide have an ownership interest in, so we benefit if you list with them.
          It is labeled as a related business wherever it appears. The full breakdown is on the{' '}
          <Link href="/companies" className="text-amber-700 font-semibold underline underline-offset-2">
            options page
          </Link>
          .
        </p>
        <p>
          Companies in our network are independent. We do not control their offers, their process, or their conduct, and
          an introduction is not a recommendation to accept any particular deal.
        </p>
      </Section>

      <Section title="Accuracy of information">
        <p>
          Details about partner companies come from their public websites and can change without notice. Descriptions of
          New Jersey foreclosure procedure are general and simplified. Confirm every deadline against your own court
          documents, and confirm every term directly with the company involved.
        </p>
      </Section>

      <Section title="Property donation">
        <p>
          Donating a property does not eliminate a mortgage. A lender&apos;s lien follows the property. Charitable
          deductions depend on your tax situation and typically require a qualified appraisal. Speak with a tax
          professional and an attorney before donating real estate.
        </p>
      </Section>

      <Section title="If you are struggling">
        <p>
          Losing a home is genuinely hard, and the stress of it reaches well beyond money. If this is weighing on you,
          please talk to someone you trust or a professional who can help. Your housing situation has more paths forward
          than it feels like right now, and the people at HUD-approved counseling agencies do this every day, for free,
          without selling you anything.
        </p>
      </Section>
    </LegalPage>
  );
}
