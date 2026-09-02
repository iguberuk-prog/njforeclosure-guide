import type { Metadata } from 'next';
import LegalPage, { Section, Bullets, CONTACT_EMAIL } from '../components/LegalPage';
import PrivacyChoices from '../components/PrivacyChoices';

export const metadata: Metadata = {
  title: 'Privacy Policy | NJ Foreclosure Guide',
  description:
    'What information NJ Foreclosure Guide collects, why we collect it, who we share it with, and how to have it deleted. Written in plain language.',
  alternates: { canonical: 'https://njforeclosureguide.org/privacy/' },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Your Information"
      title="Privacy Policy"
      intro="You are dealing with enough. You should not also have to wonder what happens to the details you share with us. This explains exactly what we collect, why, and who sees it."
    >
      <Section title="The short version">
        <Bullets
          items={[
            'We collect what you tell us through our assessment, our chat, and our forms.',
            'We use it to show you relevant options and, if you ask, to introduce you to a professional.',
            'We do not sell your information, and we do not share it with a partner unless you ask us to make an introduction.',
            'You can ask us to delete everything we hold about you at any time, and we will.',
          ]}
        />
      </Section>

      <Section title="What we collect">
        <p>Information you give us directly:</p>
        <Bullets
          items={[
            'Your name, phone number, and email address, when you choose to provide them.',
            'Your town, and your property address if you enter it.',
            'Your answers to our assessment: your situation, your timeline, whether you want to keep or sell, the property condition, approximate home value, and owner type.',
            'Anything you write in a notes field or type into our chat assistant, which may include details about your finances, your household, or your case.',
          ]}
        />
        <p>Information collected automatically:</p>
        <Bullets
          items={[
            'Standard server and security logs kept by our hosting provider, which can include IP address, browser type, referring page, and time of visit.',
          ]}
        />
        <p className="text-slate-900 font-semibold">
          You are never required to give us your name, phone number, or email to use this site. The guides, the timeline
          tool, and the assessment results all work without them. Contact details are only needed if you want us to send
          results or make an introduction.
        </p>
      </Section>

      <Section title="Why we collect it">
        <Bullets
          items={[
            'To show you which options actually fit your circumstances.',
            'To send you your assessment results if you ask for them.',
            'To introduce you to a professional or company in our network, when you request it.',
            'To respond when you contact us.',
            'To understand which parts of the site are useful so we can improve them.',
          ]}
        />
      </Section>

      <Section title="Who we share it with">
        <p>
          <span className="font-semibold text-slate-900">Referral partners, only when you ask.</span> If you ask us to
          introduce you to a company or professional, we pass along what they need to help you. If you do not ask, we do
          not send your details anywhere. Once you are working with a partner, their own privacy practices govern what
          they do with your information, so read theirs as well.
        </p>
        <p>
          <span className="font-semibold text-slate-900">Service providers that operate this site.</span> Our host,
          Netlify, stores form submissions and delivers them to us. Our chat assistant sends your messages to Anthropic
          to generate a response. These providers process the information on our behalf so the site can function.
        </p>
        <p>
          <span className="font-semibold text-slate-900">When the law requires it.</span> We may disclose information if
          we are legally compelled to, or to protect someone&apos;s safety.
        </p>
        <p className="text-slate-900 font-semibold">
          We do not sell your personal information. We do not rent it, and we do not trade it to data brokers or
          unrelated third parties.
        </p>
      </Section>

      <Section title="How we make money">
        <p>
          We take no referral fees, no commissions and no advertising money from any company, attorney, nonprofit or
          government resource mentioned on this site. One destination, Corcoran Sawyer Smith x Builders Resource Center,
          is a brokerage the people behind this guide have an ownership interest in, disclosed wherever it appears. You
          are never charged anything by us.
        </p>
        <p>
          We tell you this in a privacy policy because how a company earns its money is the clearest signal of what it
          might do with your information. A site that is paid per lead has a reason to pass your details around. We are
          not paid per lead, or at all, so we have no such reason. We do not sell your data.
        </p>
      </Section>

      <Section title="The chat assistant">
        <p>
          Our chat assistant is powered by AI. What you type is sent to Anthropic to generate a reply. If you share your
          name, phone number, or email during a conversation, the transcript of that conversation is delivered to us so a
          person can follow up. Conversations where you never share contact details are not delivered to us as leads.
        </p>
        <p>
          Do not enter your Social Security number, bank account numbers, card numbers, or account passwords into the
          chat. We will never ask for any of those.
        </p>
      </Section>

      <Section title="How long we keep it">
        <p>
          We keep assessment and inquiry information for as long as needed to help you and to keep ordinary business
          records, and then we remove it. If you ask us to delete your information sooner, we will do that instead.
        </p>
      </Section>

      <Section title="Your choices">
        <Bullets
          items={[
            'Ask what we hold about you, and we will tell you.',
            'Ask us to correct anything inaccurate.',
            'Ask us to delete your information entirely.',
            'Ask us not to contact you again, and to stop passing your details to anyone.',
            'Use the entire site anonymously by simply not entering contact details.',
          ]}
        />
        <p>
          Email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-700 font-semibold underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>{' '}
          with what you want done. Depending on where you live, you may also have specific rights under state privacy
          law, including in New Jersey and California. We honor these requests regardless of where you live.
        </p>
      </Section>

      <Section title="Your privacy choices: targeted advertising">
        <PrivacyChoices />
        <p>
          We also honor the Global Privacy Control browser signal as a valid opt-out, as New Jersey
          law requires. If your browser sends it, the box above will tell you so.
        </p>
      </Section>

      <Section title="Phone calls and text messages">
        <p>
          If you give us your phone number and consent to be contacted, we or a partner may call or text you about your
          inquiry. Consent to receive calls or texts is never a condition of using this site or of any purchase. You can
          tell us to stop at any time, by replying STOP to a text or by emailing us, and we will stop. Message and data
          rates may apply.
        </p>
      </Section>

      <Section title="Security">
        <p>
          The site is served over an encrypted connection and we limit who can see inquiries. No website can promise
          perfect security, and we will not pretend otherwise. Please do not send us sensitive identifiers such as
          Social Security or account numbers.
        </p>
      </Section>

      <Section title="Children">
        <p>
          This site is meant for adults dealing with property matters. We do not knowingly collect information from
          anyone under 18. If you believe a child has given us information, contact us and we will delete it.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          If we change how we handle information, we will update this page and change the date at the top. Material
          changes will be described here rather than made quietly.
        </p>
      </Section>
    </LegalPage>
  );
}
