export type PressItem = {
  title: string;
  outlet: string;
  url: string;
  date: string;
  summary?: string;
};

export type MediaContact = {
  name: string;
  email: string;
};

export const pressItems: PressItem[] = [];

export const mediaContact: MediaContact = {
  name: "",
  email: "",
};

export const pressKitUrl: string | null = null;

export const companyBoilerplate =
  "Silphium is an early-stage biotech company developing an investigational, non-hormonal male contraceptive platform. The company's approach is designed to temporarily pause sperm production by targeting early spermatogenesis using precision siRNA technology delivered via lipid nanoparticles. Silphium is currently in preclinical development. No product is approved, available for sale, or currently being offered for clinical use.";
