import { milestones } from '@/content/milestones';
import type { DevelopmentMilestone, MilestoneStatus } from '@/content/milestones';

type Props = {
  items?: DevelopmentMilestone[];
};

function StatusDot({ status }: { status: MilestoneStatus }) {
  if (status === 'completed') {
    return (
      <div className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-silphium-charcoal" />
    );
  }
  if (status === 'current') {
    return (
      <div className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-silphium-red ring-2 ring-silphium-red ring-offset-2" />
    );
  }
  return (
    <div className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-silphium-charcoal/25 bg-white" />
  );
}

export default function Timeline({ items = milestones }: Props) {
  return (
    <ol aria-label="Development timeline">
      {items.map((milestone, index) => (
        <li key={milestone.title} className="flex gap-5">
          {/* Track */}
          <div className="flex flex-col items-center">
            <StatusDot status={milestone.status} />
            {index < items.length - 1 && (
              <div className="mt-1 w-px flex-1 bg-silphium-charcoal/10" />
            )}
          </div>

          {/* Content */}
          <div className={`pb-8 ${index === items.length - 1 ? 'pb-0' : ''}`}>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-semibold text-silphium-charcoal">
                {milestone.title}
              </h3>
              {milestone.status === 'current' && (
                <span className="rounded-full bg-silphium-red/10 px-2 py-0.5 text-xs font-medium text-silphium-red">
                  Current
                </span>
              )}
              {milestone.status === 'completed' && (
                <span className="rounded-full bg-silphium-charcoal/8 px-2 py-0.5 text-xs text-silphium-muted">
                  Completed
                </span>
              )}
            </div>
            <p className="mt-1 text-sm leading-6 text-silphium-muted">
              {milestone.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
