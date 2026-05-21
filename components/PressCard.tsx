import type { PressItem } from '@/content/press';

type Props = {
  item: PressItem;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PressCard({ item }: Props) {
  return (
    <article className="border-b border-silphium-charcoal/10 py-6 first:pt-0 last:border-0">
      <time dateTime={item.date} className="text-xs text-silphium-muted">
        {formatDate(item.date)}
      </time>
      <h3 className="font-display mt-1 text-lg font-semibold leading-snug">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-silphium-charcoal transition-colors hover:text-silphium-red"
        >
          {item.title}
        </a>
      </h3>
      <p className="mt-0.5 text-sm text-silphium-muted">{item.outlet}</p>
      {item.summary && (
        <p className="mt-2 text-sm leading-6 text-silphium-charcoal">
          {item.summary}
        </p>
      )}
    </article>
  );
}
