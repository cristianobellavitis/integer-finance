import {
  Home,
  Users,
  Cog,
  FileSearch2,
  TrendingUp,
  BriefcaseBusiness,
} from "lucide-react";

export const focusCarouselData = [
  {
    image: "/images/home/carousel1.png",
    title: "A financial institution that promotes regional prosperity",
    caption:
      "Backing property developers who are regenerating underserved regions across England and Wales.",
  },
  {
    image: "/images/home/carousel2.png",
    title: "A financial institution that creates regional jobs",
    caption:
      "Every development we finance supports local employment and long-term economic growth.",
  },
  {
    image: "/images/home/carousel3.png",
    title: "A financial institution that helps develop social housing",
    caption:
      "Funding the conversions and refurbishments that ease the UK's housing shortage.",
  },
  {
    image: "/images/home/carousel4.png",
    title: "A financial institution that's building communities",
    caption:
      "From HMO conversions to heavy refurbishments, we back projects that regenerate neighbourhoods.",
  },
  {
    image: "/images/home/carousel5.png",
    title: "A financial institution that supports your dreams",
    caption:
      "Flexible, relationship-led lending for developers ready to bring ambitious projects to life.",
  },
];

export const whatWeDoData = [
  {
    icon: Home,
    title: "Developing Communities",
    desc: "Collaborating to rejuvenate and strengthen housing opportunities.",
  },
  {
    icon: Users,
    title: "Regional Expertise and Dedication",
    desc: "Relationship Managers with deep understanding of your business needs.",
  },
  {
    icon: Cog,
    title: "Innovative Development Projects",
    desc: "Dedicated to advancing innovative and affordable development initiatives.",
  },
  {
    icon: FileSearch2,
    title: "Creating Tailored Solutions",
    desc: "Recognizing your challenges and collaborating to provide customized funding solutions.",
  },
  {
    icon: TrendingUp,
    title: "Driving Economic Prosperity",
    desc: "Our lending commitment fuels economic growth and prosperity.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Promoting Regional Job Creation",
    desc: "Generating jobs and supporting developers focused on local employment opportunities.",
  },
];

export const overviewData = [
  {
    title: "Expanding SME Funding Gap",
    content:
      "Lending to developers across the UK has significantly declined over the past five years, with the steepest reductions occurring in regional areas.",
  },
  {
    title: "Chronic Housing Undersupply",
    content:
      "Only around 235,000 of the government’s 300,000 annual housebuilding target is currently being met.",
  },
  {
    title: "£166 Billion+",
    content: "Market opportunity available.",
  },
  {
    title: "Distinct Market Position",
    content:
      "Specialist bridging lender, with a focus on refurbishment and HMO conversions.",
  },
  {
    title: "Guided by a Wealth of Experience",
    content: "A blend of real estate insight and seasoned financial expertise.",
  },
];

// "What we lend on" table. Limits match the product guide's Core range;
// keep the two in step when lending criteria change.
export type CriteriaStatus = "offered" | "review" | "not-offered";

export const lendingCriteriaData: {
  group: string;
  rows: {
    product: string;
    detail: string;
    status: CriteriaStatus;
    limit: string;
  }[];
}[] = [
  {
    group: "Bridging",
    rows: [
      {
        product: "Residential",
        detail: "Purchase, refinance, capital raising, HMOs",
        status: "offered",
        limit: "Up to 80% LTV",
      },
      {
        product: "Semi-commercial",
        detail: "Mixed use, such as shops with flats",
        status: "offered",
        limit: "Up to 65% LTV",
      },
      {
        product: "Commercial",
        detail: "Offices, retail and industrial",
        status: "offered",
        limit: "Up to 60% LTV",
      },
    ],
  },
  {
    group: "Refurbishment & conversion",
    rows: [
      {
        product: "Light refurbishment",
        detail: "Cosmetic and non-structural works",
        status: "offered",
        limit: "80% LTV · 70% of GDV",
      },
      {
        product: "Heavy refurbishment",
        detail: "Structural works, planning in place",
        status: "offered",
        limit: "80% LTV · 70% of GDV",
      },
      {
        product: "Conversions",
        detail: "HMOs, title splits, change of use",
        status: "offered",
        limit: "80% LTV · 70% of GDV",
      },
      {
        product: "Commercial refurbishment",
        detail: "Works to commercial property",
        status: "offered",
        limit: "60% LTV · 55% of GDV",
      },
    ],
  },
  {
    group: "Development & other",
    rows: [
      {
        product: "Ground-up development",
        detail: "New-build schemes",
        status: "review",
        limit: "On review",
      },
      {
        product: "Land with planning permission",
        detail: "Plots with consent in place",
        status: "review",
        limit: "On review",
      },
      {
        product: "Second charges, owner-occupied",
        detail: "Also regulated loans and land without planning",
        status: "not-offered",
        limit: "Not offered",
      },
    ],
  },
];

export const lendingKeyTerms = [
  { value: "£50k–£350k", label: "Loan size" },
  { value: "Up to 18 months", label: "Term" },
  { value: "Retained or serviced", label: "Interest" },
  { value: "First charge", label: "Security" },
  { value: "England & Wales", label: "Location" },
  {
    value: "Companies, SPVs, LLPs and individuals",
    label: "Borrowers, for business purposes",
  },
];

export const notFundedData = [
  "Owner-occupied or regulated loans",
  "Second charges",
  "Land without planning permission",
  "Property outside England and Wales",
  "Hotels, care homes and pubs",
  "Petrol stations and golf courses",
  "Agricultural land",
  "Mobile homes and houseboats",
  "Grade I listed buildings",
];
