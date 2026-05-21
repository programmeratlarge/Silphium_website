type HeadingLevel = 'h1' | 'h2' | 'h3';

type Props = {
  title: string;
  subtitle?: string;
  as?: HeadingLevel;
  className?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  as: Tag = 'h2',
  className = '',
}: Props) {
  return (
    <div className={className}>
      <Tag className="font-display text-3xl font-semibold tracking-tight text-silphium-charcoal sm:text-4xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-lg leading-8 text-silphium-muted">{subtitle}</p>
      )}
    </div>
  );
}
