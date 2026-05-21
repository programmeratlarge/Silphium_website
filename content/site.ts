export type NavItem = {
  label: string;
  href: string;
};

export type SiteDisclaimer = {
  short: string;
  footer: string;
  contact: string;
};

export type SiteMeta = {
  title: string;
  description: string;
};

export type HeroCopy = {
  headline: string;
  subheadline: string;
  primaryCta: NavItem;
  secondaryCta: NavItem;
};

export type PartnerCta = {
  headline: string;
  body: string;
  cta: NavItem;
};

export const companyName = "Silphium";

export const hero: HeroCopy = {
  headline: "Developing a new class of non-hormonal male contraception.",
  subheadline:
    "Silphium is advancing a precision, siRNA-based approach designed to temporarily pause sperm production without targeting hormones.",
  primaryCta: { label: "Read the science", href: "/science" },
  secondaryCta: { label: "Contact us", href: "/contact" },
};

export const disclaimers: SiteDisclaimer = {
  short:
    "Investigational technology. No approved product. Not currently enrolling clinical trials.",
  footer:
    "Silphium is developing investigational technology. No Silphium product is approved, available for sale, or currently being offered for clinical use.",
  contact:
    "Silphium does not currently offer a product and is not enrolling clinical trials. Please do not submit personal medical information through this form.",
};

export const headerNav: NavItem[] = [
  { label: "Science", href: "/science" },
  { label: "Development", href: "/development" },
  { label: "Team", href: "/team" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Science", href: "/science" },
  { label: "Development", href: "/development" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

export const defaultMeta: SiteMeta = {
  title: "Silphium | Developing Non-Hormonal Male Contraception",
  description:
    "Silphium is an early-stage biotech company developing an investigational, non-hormonal male contraceptive platform designed to temporarily pause sperm production.",
};

export const partnerCta: PartnerCta = {
  headline: "Partner with us.",
  body: "Silphium is seeking partners aligned with the development of investigational, non-hormonal contraceptive options and the expansion of shared reproductive choice.",
  cta: { label: "Get in touch", href: "/contact" },
};
