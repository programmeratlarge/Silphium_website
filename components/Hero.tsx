import CTAButton from '@/components/CTAButton';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { hero, disclaimers } from '@/content/site';

export default function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-silphium-charcoal sm:text-5xl lg:text-6xl">
        {hero.headline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-silphium-muted">
        {hero.subheadline}
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <CTAButton href={hero.primaryCta.href} variant="primary">
          {hero.primaryCta.label}
        </CTAButton>
        <CTAButton href={hero.secondaryCta.href} variant="secondary">
          {hero.secondaryCta.label}
        </CTAButton>
      </div>
      <DisclaimerBanner text={disclaimers.short} className="mt-8 max-w-lg" />
    </section>
  );
}
