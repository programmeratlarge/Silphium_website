import Link from 'next/link';
import Hero from '@/components/Hero';
import CTAButton from '@/components/CTAButton';
import { partnerCta } from '@/content/site';
import { team } from '@/content/team';
import { developmentStage } from '@/content/milestones';

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* The need */}
      <section className="bg-silphium-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-silphium-charcoal sm:text-4xl">
              Men deserve more reproductive options.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-silphium-charcoal">
              <p>
                For decades, contraceptive options for men have remained largely
                unchanged — condoms and vasectomy. The burden of contraception
                has fallen disproportionately on women, supported by a broad range
                of hormonal and non-hormonal options developed over the past half-
                century.
              </p>
              <p>
                Silphium is developing an investigational, non-hormonal approach
                intended to expand shared reproductive choice — giving men a new
                option that does not require surgery or alter hormonal signaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The science */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-silphium-charcoal sm:text-4xl">
              An investigational approach rooted in reproductive biology.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-silphium-charcoal">
              <p>
                Sperm production depends on meiosis — the specialized cell
                division process that creates sperm cells from progenitor cells in
                the testes. Silphium is investigating the use of siRNA to reduce
                expression of genes that initiate meiosis in early spermatocytes,
                with the goal of temporarily pausing sperm production.
              </p>
              <p>
                The approach is designed to act at the level of cell biology
                rather than hormonal signaling, preserving normal testosterone
                levels and downstream hormonal function. This remains to be
                demonstrated in preclinical and clinical studies.
              </p>
            </div>
            <div className="mt-8">
              <CTAButton href="/science" variant="secondary">
                Read the science
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Development status */}
      <section className="bg-silphium-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-silphium-charcoal sm:text-4xl">
              Currently in preclinical development.
            </h2>
            <p className="mt-6 text-base leading-7 text-silphium-charcoal">
              {developmentStage}
            </p>
            <div className="mt-8">
              <CTAButton href="/development" variant="secondary">
                See the development roadmap
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-silphium-charcoal sm:text-4xl">
              The team.
            </h2>
            <p className="mt-4 text-base leading-7 text-silphium-muted">
              Silphium brings together expertise in reproductive biology, RNA
              biology, lipid nanoparticle delivery, and translational
              development.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
              {team.map((member) => (
                <li
                  key={member.name}
                  className="text-sm font-medium text-silphium-charcoal"
                >
                  {member.name}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton href="/team" variant="secondary">
                Meet the team
              </CTAButton>
            </div>
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
