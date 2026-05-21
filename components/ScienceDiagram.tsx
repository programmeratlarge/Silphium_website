import React from 'react';

type Stage = {
  label: string;
  isIntervention?: boolean;
};

const stages: Stage[] = [
  { label: 'Stem Cells' },
  { label: 'Early Spermatocytes', isIntervention: true },
  { label: 'Meiosis' },
  { label: 'Mature Sperm' },
];

export default function ScienceDiagram() {
  return (
    <figure
      aria-label="Simplified spermatogenesis pathway diagram showing Silphium's investigational intervention point at the early spermatocyte stage"
      className="my-8"
    >
      {/* Horizontal layout (sm+) */}
      <div className="hidden items-start justify-center sm:flex">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.label}>
            <div className="flex flex-col items-center gap-2">
              <div
                className={`rounded-lg px-5 py-3 text-center text-sm font-medium ${
                  stage.isIntervention
                    ? 'bg-silphium-red text-white'
                    : 'bg-silphium-cream text-silphium-charcoal'
                }`}
              >
                {stage.label}
              </div>
              {stage.isIntervention && (
                <div className="flex flex-col items-center gap-0.5 text-silphium-red">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 1a.75.75 0 01.75.75v8.69l2.22-2.22a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.22 2.22V1.75A.75.75 0 018 1z" />
                  </svg>
                  <span className="max-w-[100px] text-center text-xs font-medium leading-4">
                    Investigational intervention point
                  </span>
                </div>
              )}
            </div>
            {index < stages.length - 1 && (
              <span
                className="mx-3 mt-3 text-lg text-silphium-muted"
                aria-hidden="true"
              >
                →
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Vertical layout (mobile) */}
      <ol className="flex flex-col gap-0 sm:hidden">
        {stages.map((stage, index) => (
          <li key={stage.label} className="flex items-stretch gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`mt-2 h-3 w-3 shrink-0 rounded-full ${
                  stage.isIntervention
                    ? 'bg-silphium-red ring-2 ring-silphium-red ring-offset-2'
                    : 'bg-silphium-charcoal/25'
                }`}
              />
              {index < stages.length - 1 && (
                <div className="w-px flex-1 bg-silphium-charcoal/10" />
              )}
            </div>
            <div className="pb-6">
              <p
                className={`text-sm font-medium ${
                  stage.isIntervention
                    ? 'text-silphium-red'
                    : 'text-silphium-charcoal'
                }`}
              >
                {stage.label}
              </p>
              {stage.isIntervention && (
                <p className="mt-0.5 text-xs text-silphium-red">
                  Investigational intervention point
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <figcaption className="mt-4 text-center text-xs text-silphium-muted">
        Simplified schematic. The spermatogenesis pathway and exact intervention
        point are subjects of ongoing preclinical investigation.
      </figcaption>
    </figure>
  );
}
