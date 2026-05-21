export type TeamMemberLink = {
  label: string;
  url: string;
};

export type TeamMember = {
  name: string;
  role: string;
  affiliation?: string;
  bio: string;
  image?: string;
  links?: TeamMemberLink[];
};

export const team: TeamMember[] = [
  {
    name: "Jelena Lujic",
    role: "",
    affiliation: "",
    bio: "",
    links: [],
  },
  {
    name: "Paula E. Cohen",
    role: "",
    affiliation: "",
    bio: "",
    links: [],
  },
  {
    name: "Christopher A. Alabi",
    role: "",
    affiliation: "",
    bio: "",
    links: [],
  },
  {
    name: "Militsa Yavorova",
    role: "",
    affiliation: "",
    bio: "",
    links: [],
  },
  {
    name: "Carmyn Polk",
    role: "",
    affiliation: "",
    bio: "",
    links: [],
  },
];
