export type MilestoneStatus = "completed" | "current" | "planned" | "future";

export type DevelopmentMilestone = {
  title: string;
  status: MilestoneStatus;
  description: string;
};

export const developmentStage =
  "Silphium is currently in preclinical development. The team is optimizing siRNA-LNP formulations, evaluating delivery and biodistribution, and preparing in vivo proof-of-concept studies.";

export const milestones: DevelopmentMilestone[] = [
  {
    title: "Discovery / Proof of Concept",
    status: "current",
    description:
      "Identifying target genes involved in meiotic initiation and validating siRNA-mediated knockdown in cell-based models.",
  },
  {
    title: "Formulation Optimization",
    status: "current",
    description:
      "Optimizing siRNA-LNP formulations for stability, encapsulation efficiency, and tolerability.",
  },
  {
    title: "In Vivo Biodistribution",
    status: "planned",
    description:
      "Evaluating biodistribution, cellular uptake, and delivery efficiency of LNP formulations in preclinical models.",
  },
  {
    title: "In Vivo Efficacy",
    status: "planned",
    description:
      "Assessing target gene knockdown, effects on sperm production, and reversibility in preclinical models.",
  },
  {
    title: "IND-Enabling Studies",
    status: "future",
    description:
      "Conducting formal safety, toxicology, and pharmacology studies required for Investigational New Drug application.",
  },
  {
    title: "Clinical Trials",
    status: "future",
    description:
      "Phase 1 and Phase 2 clinical studies pending regulatory clearance. No trial is currently active or enrolling.",
  },
  {
    title: "Regulatory Review",
    status: "future",
    description:
      "Regulatory submission and review following successful clinical development.",
  },
];
