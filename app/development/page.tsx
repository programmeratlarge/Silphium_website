import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import Timeline from '@/components/Timeline';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import CTAButton from '@/components/CTAButton';
import { developmentStage } from '@/content/milestones';
import { disclaimers } from '@/content/site';

export const metadata: Metadata = {
  title: 'Development',
  description:
    'Silphium is in preclinical development, optimizing siRNA-LNP formulations and preparing in vivo proof-of-concept studies.',
};

export default function DevelopmentPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-silphium-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <SectionHeader
            as="h1"
            title="Where we are now."
            subtitle={developmentStage}
          />
          <DisclaimerBanner text={disclaimers.short} className="mt-6" />
        </div>
      </section>

      {/* Timeline */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <h2 className="font-display text-2xl font-semibold text-silphium-charcoal sm:text-3xl">
            Development roadmap
          </h2>
          <p className="mt-3 text-sm text-silphium-muted">
            All stages beyond the current phase are forward-looking and subject
            to change.
          </p>
          <div className="mt-10">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Caveats */}
      <section className="bg-silphium-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <h2 className="font-display text-2xl font-semibold text-silphium-charcoal sm:text-3xl">
            Development context
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-silphium-charcoal">
            <p>
              The timeline above represents Silphium&apos;s current development
              plan. All stages beyond the current phase are forward-looking.
              Actual milestones, timelines, and regulatory outcomes may differ
              materially.
            </p>
            <p>
              No Silphium product is approved. No human safety or efficacy data
              exists for this approach. No clinical trial is currently active or
              enrolling.
            </p>
            <p>
              Advancing from preclinical development to clinical trials requires
              successful completion of IND-enabling studies and regulatory
              clearance. This process typically takes several years and the
              outcome is not guaranteed.
            </p>
          </div>
          <div className="mt-10">
            <CTAButton href="/science" variant="secondary">
              Read the science
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
