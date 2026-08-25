import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage, { Section, Bullets, CONTACT_EMAIL } from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Use | NJ Foreclosure Guide',
  description:
    'The terms that govern your use of NJ Foreclosure Guide: what this service is, what it is not, how referrals and compensation work, and the limits of what we can promise.',
  alternates: { canonical: 'https://njforeclosureguide.org/terms/' },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="The Agreement"
      title="Terms of Use"
      intro="These terms govern your use of this site. They are written to be readable, because terms nobody understands protect nobody."
    >
      <Section title="What this service is">
        <p>
          NJ Foreclosure Guide is a free educational resource for New Jersey homeowners. We explain foreclosure options
          in plain language, provide tools that help you understand where you stand, and, if you want, introduce you to
          companies and professionals who provide services we do not.
        </p>
      </Section>

      <Section title="What this service is not">
        <p>We are not, and nothing here should be treated as though we are:</p>
        <Bullets
          items={[
            'A law firm. We do not provide legal advice, and using this site does not create an attorney-client relationship with anyone.',
            'A lender, mortgage servicer, or mortgage broker. We do not make loans, modify loans, or negotiate with your lender.',
            'A real estate brokerage acting for you. We do not list your property or represent you in a transaction.',
            'A financial advisor, tax advisor, credit counselor, or public adjuster.',
            'Affiliated with, endorsed by, or approved by any government agency, and this service has not been approved by your lender.',
          ]}
        />
        <p className="text-slate-900 font-semibold">
          Your lender is not obligated to change your loan, accept any offer, or agree to any arrangement, and no one can
          promise you otherwise.
        </p>
      </Section>

      <Section title="Referrals and how we are paid">
        <p>
          Some home-buying companies we refer you to pay us a referral fee if you sell to them. One destination is an
          affiliated business, meaning the people behind this guide are connected to it, and that is labeled wherever it
          appears. We are not paid by attorneys, nonprofits, or the free government resources we recommend. You are never
          charged anything by us.
        </p>
        <p>
          We do not charge you any fee, at any point, for anything, including for information, the assessment, or an
          introduction. If anyone claiming to represent this site asks you for money, it is not us. Contact us
          immediately at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-700 font-semibold underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <p>
          A referral is an introduction, not a recommendation that you accept any particular offer or terms. You are free
          to work with anyone you choose, including professionals we have never mentioned, and to walk away from any
          conversation at any time. Full detail on each relationship is on the{' '}
          <Link href="/companies" className="text-amber-700 font-semibold underline underline-offset-2">
            options page
          </Link>
          .
        </p>
      </Section>

      <Section title="Third-party companies and websites">
        <p>
          Companies we introduce you to are independent businesses. They set their own prices, terms, and processes. We
          do not control them, we do not supervise their work, and we are not responsible for what they do, any offer
          they make, or any agreement you enter into with them.
        </p>
        <p>
          Read anything before you sign it, ask for figures in writing, and consider having an attorney review any
          contract involving your home. That advice costs us referral revenue when it slows a transaction down, and we
          give it anyway because it is right.
        </p>
      </Section>

      <Section title="Accuracy and no guarantees">
        <p>
          We work to keep this site accurate, including details drawn from partner websites, court procedures, and
          timelines. Those details change, and errors happen. Information here is general and may not fit your specific
          circumstances.
        </p>
        <p>
          Foreclosure timelines, deadlines, and outcomes depend entirely on your loan, your lender, your court, and your
          own decisions. Nothing on this site is a promise about what will happen in your case. Always confirm deadlines
          against your own court documents and with a licensed New Jersey attorney.
        </p>
      </Section>

      <Section title="Your responsibilities">
        <Bullets
          items={[
            'Provide accurate information about yourself and your property, since recommendations are only as good as what you tell us.',
            'Make your own decisions, and get independent professional advice for anything significant.',
            'Do not use this site to submit information about someone else’s property without authority to do so.',
            'Do not misuse the site, attempt to disrupt it, or use it for any unlawful purpose.',
          ]}
        />
      </Section>

      <Section title="Limitation of liability">
        <p>
          This site is provided as-is. To the fullest extent permitted by law, we are not liable for indirect,
          incidental, or consequential damages arising from your use of the site, from information found here, or from
          your dealings with any company or professional you find through us.
        </p>
        <p>
          Nothing in these terms limits any liability that cannot lawfully be limited, and nothing here is intended to
          deprive you of rights you have under New Jersey consumer protection law.
        </p>
      </Section>

      <Section title="Content on this site">
        <p>
          The writing, tools, and design on this site belong to us. You are welcome to read, print, and share pages for
          your own use or to help someone else. Please do not republish the content as your own.
        </p>
      </Section>

      <Section title="Governing law">
        <p>
          These terms are governed by the laws of the State of New Jersey, without regard to conflict of law principles.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          We may update these terms. Changes appear on this page with a new date at the top. Continuing to use the site
          after a change means you accept the updated terms.
        </p>
      </Section>
    </LegalPage>
  );
}
