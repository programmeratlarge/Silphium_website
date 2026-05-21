import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import PressCard from '@/components/PressCard';
import CTAButton from '@/components/CTAButton';
import {
  pressItems,
  mediaContact,
  companyBoilerplate,
  pressKitUrl,
} from '@/content/press';

export const metadata: Metadata = {
  title: 'Press',
  description:
    'Press coverage, media contact, and company information for Silphium.',
};

export default function PressPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-silphium-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <SectionHeader as="h1" title="Press and updates." />
        </div>
      </section>

      {/* Press items */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          {pressItems.length > 0 ? (
            <div>
              {pressItems.map((item) => (
                <PressCard key={item.url} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-base text-silphium-muted">
              No press coverage to display yet. Check back soon.
            </p>
          )}
        </div>
      </section>

      {/* Company boilerplate */}
      <section className="bg-silphium-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <h2 className="font-display text-2xl font-semibold text-silphium-charcoal sm:text-3xl">
            About Silphium
          </h2>
          <p className="mt-4 text-base leading-7 text-silphium-charcoal">
            {companyBoilerplate}
          </p>

          {/* Press kit */}
          {pressKitUrl ? (
            <div className="mt-8">
              <CTAButton href={pressKitUrl} variant="secondary">
                Download press kit
              </CTAButton>
            </div>
          ) : (
            <p className="mt-6 text-sm text-silphium-muted">
              Press kit available on request.
            </p>
          )}
        </div>
      </section>

      {/* Media contact */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <h2 className="font-display text-2xl font-semibold text-silphium-charcoal sm:text-3xl">
            Media contact
          </h2>
          {mediaContact.name || mediaContact.email ? (
            <div className="mt-4 text-base text-silphium-charcoal">
              {mediaContact.name && <p className="font-medium">{mediaContact.name}</p>}
              {mediaContact.email && (
                <a
                  href={`mailto:${mediaContact.email}`}
                  className="mt-1 block text-silphium-red hover:underline"
                >
                  {mediaContact.email}
                </a>
              )}
            </div>
          ) : (
            <div className="mt-4">
              <p className="text-base text-silphium-muted">
                For media inquiries, please use the contact form.
              </p>
              <div className="mt-6">
                <CTAButton href="/contact" variant="secondary">
                  Contact us
                </CTAButton>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
