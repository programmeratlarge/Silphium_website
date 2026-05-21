import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import TeamCard from '@/components/TeamCard';
import { team } from '@/content/team';
import { partnerCta } from '@/content/site';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'The Silphium team brings together expertise in reproductive biology, siRNA, lipid nanoparticle delivery, and translational development.',
};

export default function TeamPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-silphium-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <SectionHeader
            as="h1"
            title="Built by reproductive biology and delivery science experts."
          />
        </div>
      </section>

      {/* Team grid */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-silphium-charcoal">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-24">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {partnerCta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
            {partnerCta.body}
          </p>
          <div className="mt-10">
            <Link
              href={partnerCta.cta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-silphium-charcoal"
            >
              {partnerCta.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
