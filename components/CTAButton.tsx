'use client';

import Link from 'next/link';

type Variant = 'primary' | 'secondary';

type Props = {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-silphium-red text-white hover:bg-silphium-red/90 focus-visible:ring-silphium-red',
  secondary:
    'border border-silphium-charcoal/20 text-silphium-charcoal hover:bg-silphium-charcoal/5 focus-visible:ring-silphium-charcoal',
};

export default function CTAButton({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
  type = 'button',
  disabled,
}: Props) {
  const classes = `${base} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
