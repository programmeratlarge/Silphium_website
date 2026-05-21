import type { Metadata } from 'next';
import { companyName } from '@/content/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for the Silphium website.',
};

const sections = [
  {
    heading: 'Information we collect',
    body: 'The Silphium website does not currently use tracking cookies, analytics, or advertising technology. If you submit a contact form, we collect only the information you provide: your name, email address, optional organization, inquiry type, and message.',
  },
  {
    heading: 'How we use your information',
    body: 'Contact form submissions are used solely to respond to your inquiry. We do not sell, share, or transfer your information to third parties for marketing purposes.',
  },
  {
    heading: 'Medical information',
    body: 'Silphium does not solicit personal medical information through this website. Please do not submit details about your health, medical history, or treatment decisions through the contact form.',
  },
  {
    heading: 'Cookies',
    body: 'This website does not currently use cookies beyond those strictly necessary for site operation. We will update this policy if analytics or functional cookies are introduced.',
  },
  {
    heading: 'Data retention',
    body: 'Contact form submissions are retained only as long as necessary to respond to the inquiry and for reasonable follow-up. You may request deletion of your information by contacting us directly.',
  },
  {
    heading: 'External links',
    body: 'This website may link to external sites, including press articles and publications. Silphium is not responsible for the privacy practices of those sites.',
  },
  {
    heading: 'Changes to this policy',
    body: 'Silphium may update this privacy policy as the website and company evolve. Material changes will be reflected in an updated date at the top of this page.',
  },
  {
    heading: 'Contact',
    body: 'Questions about this privacy policy may be submitted through the contact form on this website.',
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <section className="bg-silphium-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-silphium-charcoal sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-silphium-muted">
            {companyName} website &mdash; last reviewed May 2025
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl font-semibold text-silphium-charcoal">
                  {section.heading}
                </h2>
                <p className="mt-3 text-base leading-7 text-silphium-charcoal">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
