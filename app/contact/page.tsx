import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { disclaimers } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Silphium for press, investor, partnership, or scientific collaboration inquiries.',
};

const inquiryTypes = [
  { label: 'Press', description: 'Journalists and media' },
  { label: 'Investor', description: 'Investment inquiries' },
  { label: 'Strategic partnership', description: 'Commercial and institutional partners' },
  { label: 'Scientific collaboration', description: 'Academic and research collaborators' },
  { label: 'General inquiry', description: 'All other questions' },
];

export default function ContactPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-silphium-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <SectionHeader
            as="h1"
            title="Partner with us."
            subtitle="Silphium is seeking partners aligned with the development of investigational, non-hormonal contraceptive options and the expansion of shared reproductive choice."
          />
        </div>
      </section>

      {/* Form + sidebar */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-lg font-semibold text-silphium-charcoal">
                We welcome inquiries from
              </h2>
              <ul className="mt-4 space-y-4">
                {inquiryTypes.map((type) => (
                  <li key={type.label}>
                    <p className="text-sm font-medium text-silphium-charcoal">
                      {type.label}
                    </p>
                    <p className="text-sm text-silphium-muted">
                      {type.description}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-silphium-charcoal/10 pt-8">
                <DisclaimerBanner text={disclaimers.short} />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
