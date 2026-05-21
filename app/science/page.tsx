import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import ScienceDiagram from '@/components/ScienceDiagram';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import CTAButton from '@/components/CTAButton';
import { disclaimers } from '@/content/site';

export const metadata: Metadata = {
  title: 'The Science',
  description:
    'Silphium is investigating siRNA-based targeting of meiotic initiation in early spermatogenesis as an investigational non-hormonal approach to male contraception.',
};

function SectionBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">{children}</div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl font-semibold text-silphium-charcoal sm:text-3xl">
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 space-y-4 text-base leading-7 text-silphium-charcoal">
      {children}
    </div>
  );
}

export default function SciencePage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-silphium-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <SectionHeader
            as="h1"
            title="Targeting meiosis with molecular precision."
            subtitle="An investigational, siRNA-based approach designed to temporarily pause sperm production without targeting hormones."
          />
          <DisclaimerBanner text={disclaimers.short} className="mt-6" />
        </div>
      </section>

      {/* 1. The biological idea */}
      <section>
        <SectionBody>
          <H2>The biological idea</H2>
          <Prose>
            <p>
              Men produce sperm continuously throughout adult life through a
              process called spermatogenesis. This process begins with
              self-renewing stem cells in the testes and proceeds through several
              stages of differentiation, ending with mature sperm cells capable
              of fertilization.
            </p>
            <p>
              A critical step in this process is meiosis — the specialized form
              of cell division that produces haploid cells with half the normal
              chromosome count. Without successful meiotic initiation, sperm
              cannot form normally.
            </p>
            <p>
              Silphium is investigating the genes that control meiotic entry in
              early spermatocytes as potential targets for a non-hormonal
              contraceptive approach. The goal is to temporarily disrupt this
              step without affecting testosterone production or the broader
              hormonal system.
            </p>
          </Prose>
        </SectionBody>
      </section>

      {/* 2. The intervention point */}
      <section className="bg-silphium-cream">
        <SectionBody>
          <H2>The intervention point</H2>
          <p className="mt-4 text-base leading-7 text-silphium-charcoal">
            Silphium&apos;s investigational approach is designed to act early in
            spermatogenesis — at the point where progenitor cells begin entering
            meiosis. Targeting this transition is intended to pause sperm
            production upstream of mature sperm formation, without interfering
            with testosterone production or downstream hormonal signaling.
          </p>
          <ScienceDiagram />
        </SectionBody>
      </section>

      {/* 3. The modality */}
      <section>
        <SectionBody>
          <H2>siRNA: reducing gene expression, not editing genes</H2>
          <Prose>
            <p>
              siRNA (small interfering RNA) is a class of molecules that reduces
              expression of specific genes by triggering degradation of their
              corresponding messenger RNA. When the target mRNA is degraded, the
              corresponding protein is not produced at normal levels.
            </p>
            <p>
              Critically, siRNA does not modify DNA. The effect is transient:
              without ongoing dosing, cells resume normal gene expression as
              existing siRNA is degraded and cleared. This transient mechanism
              is central to Silphium&apos;s reversibility hypothesis.
            </p>
            <p>
              siRNA-based medicines have received FDA approval for other
              indications, establishing the class as a feasible therapeutic
              modality. Applying siRNA to male reproductive biology is a novel
              investigational use with specific delivery and specificity
              challenges that Silphium&apos;s research is working to address.
            </p>
          </Prose>
        </SectionBody>
      </section>

      {/* 4. Delivery strategy */}
      <section className="bg-silphium-cream">
        <SectionBody>
          <H2>Lipid nanoparticle delivery</H2>
          <Prose>
            <p>
              Delivering siRNA to target cells in the testes is a central
              technical challenge. Naked siRNA molecules are rapidly degraded in
              biological fluids and do not readily cross cell membranes.
            </p>
            <p>
              Silphium is exploring lipid nanoparticles (LNPs) as a delivery
              vehicle. LNPs are lipid-based particles that encapsulate nucleic
              acid payloads, protect them during circulation, and facilitate
              cellular uptake. LNP technology underpins several approved
              medicines, including mRNA vaccines and siRNA therapeutics for
              other indications.
            </p>
            <p>
              Formulation optimization — identifying LNP compositions that
              deliver siRNA efficiently to spermatocytes in the testes while
              maintaining tolerability — is a primary focus of
              Silphium&apos;s current preclinical program.
            </p>
          </Prose>
        </SectionBody>
      </section>

      {/* 5. Why non-hormonal */}
      <section>
        <SectionBody>
          <H2>Why non-hormonal</H2>
          <Prose>
            <p>
              Prior attempts to develop hormonal male contraceptives have
              generally involved suppressing testosterone or other androgens to
              inhibit sperm production. While some have demonstrated efficacy in
              reducing sperm counts in clinical studies, hormonal suppression is
              associated with systemic effects including changes to mood, libido,
              and metabolism.
            </p>
            <p>
              Silphium&apos;s approach is designed to act downstream of hormone
              signaling — at the level of gene expression in early
              spermatocytes — without suppressing testosterone or altering the
              hormonal axis. Whether this approach can achieve effective sperm
              suppression without hormonal side effects remains to be
              demonstrated in preclinical and clinical studies.
            </p>
          </Prose>
        </SectionBody>
      </section>

      {/* 6. Why reversibility matters */}
      <section className="bg-silphium-cream">
        <SectionBody>
          <H2>Designed with reversibility in mind</H2>
          <Prose>
            <p>
              Because siRNA does not modify DNA, and because spermatogenesis is
              a continuous process renewed from stem cells, Silphium&apos;s
              approach is designed with the goal of reversibility: pausing sperm
              production while dosing continues, with the expectation that
              spermatogenesis would resume after dosing is stopped.
            </p>
            <p>
              Reversibility has not yet been demonstrated for
              Silphium&apos;s specific approach in any preclinical or clinical
              model. Establishing reversibility is a required component of the
              preclinical development program before clinical studies can be
              considered.
            </p>
          </Prose>
        </SectionBody>
      </section>

      {/* 7. What remains to be shown */}
      <section>
        <SectionBody>
          <H2>What remains to be demonstrated</H2>
          <p className="mt-4 text-base leading-7 text-silphium-charcoal">
            Silphium is at an early stage of preclinical development. None of
            the following have been established for this investigational
            approach:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              'Effective delivery of siRNA to spermatocytes in the testes',
              'Meaningful and consistent reduction in sperm production',
              'Safety and tolerability in preclinical animal models',
              'Evidence of reversibility after cessation of dosing',
              'Dose characterization and pharmacokinetic profile',
              'Any safety or efficacy data in humans',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-silphium-charcoal/30"
                  aria-hidden="true"
                />
                <span className="text-base leading-7 text-silphium-charcoal">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10 border-t border-silphium-charcoal/10 pt-8">
            <CTAButton href="/development" variant="secondary">
              See the development roadmap
            </CTAButton>
          </div>
        </SectionBody>
      </section>
    </main>
  );
}
