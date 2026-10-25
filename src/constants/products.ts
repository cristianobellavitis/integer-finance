// Single source of truth for Integer Lending's product ranges, matching the
// printable product guide (public/files/integer-product-guide.pdf). The
// /product-guide page renders all of it; the homepage "What we lend on"
// section reads the Core column. Keep the PDF in step when anything changes.
// Pricing lives in ./rates.ts, not here.

export type CriteriaStatus = "offered" | "review" | "not-offered";

export interface RangeCell {
  status: CriteriaStatus;
  limit: string;
  note?: string;
}

export interface ProductRow {
  product: string;
  detail: string;
  core: RangeCell;
  plus: RangeCell;
}

const ON_REVIEW: RangeCell = { status: "review", limit: "On review" };
const NOT_OFFERED: RangeCell = { status: "not-offered", limit: "Not offered" };

export const PRODUCT_MATRIX: { group: string; rows: ProductRow[] }[] = [
  {
    group: "Bridging",
    rows: [
      {
        product: "Residential",
        detail: "Purchase, refinance, capital raising, HMOs",
        core: { status: "offered", limit: "80% LTV" },
        plus: { status: "offered", limit: "75% LTV", note: "Higher on review" },
      },
      {
        product: "Semi-commercial",
        detail: "Mixed use, such as shops with flats",
        core: { status: "offered", limit: "65% LTV" },
        plus: {
          status: "offered",
          limit: "70% LTV",
          note: "Commercial part up to 30%",
        },
      },
      {
        product: "Commercial",
        detail: "Offices, retail and industrial",
        core: { status: "offered", limit: "60% LTV" },
        plus: {
          status: "offered",
          limit: "70% LTV",
          note: "With residential planning or PD",
        },
      },
    ],
  },
  {
    group: "Refurbishment & conversion",
    rows: [
      {
        product: "Light refurbishment",
        detail: "Cosmetic and non-structural works",
        core: { status: "offered", limit: "80% LTV · 70% of GDV" },
        plus: {
          status: "offered",
          limit: "75% of GDV · 85% of costs",
          note: "Works up to 40% of value",
        },
      },
      {
        product: "Heavy refurbishment",
        detail: "Structural works, planning in place",
        core: { status: "offered", limit: "80% LTV · 70% of GDV" },
        plus: { status: "not-offered", limit: "Not at launch" },
      },
      {
        product: "Conversions",
        detail: "HMOs, title splits, change of use",
        core: { status: "offered", limit: "80% LTV · 70% of GDV" },
        plus: {
          status: "offered",
          limit: "75% of GDV",
          note: "Where works are light",
        },
      },
      {
        product: "Commercial refurbishment",
        detail: "Works to commercial property",
        core: { status: "offered", limit: "60% LTV · 55% of GDV" },
        plus: NOT_OFFERED,
      },
    ],
  },
  {
    group: "Development & other",
    rows: [
      {
        product: "Ground-up development",
        detail: "New-build schemes",
        core: ON_REVIEW,
        plus: ON_REVIEW,
      },
      {
        product: "Land with planning permission",
        detail: "Plots with consent in place",
        core: ON_REVIEW,
        plus: ON_REVIEW,
      },
      {
        product: "Second charges, owner-occupied",
        detail: "Also regulated loans and land without planning",
        core: NOT_OFFERED,
        plus: NOT_OFFERED,
      },
    ],
  },
];

export const KEY_TERMS: { label: string; core: string; plus: string }[] = [
  { label: "Loan size", core: "£50k to £350k", plus: "£350k to £3m" },
  { label: "Term", core: "Up to 18 months", plus: "1 to 24 months" },
  {
    label: "Interest",
    core: "Serviced or retained",
    plus: "Serviced or retained",
  },
];

// Short-form Core terms for the homepage tiles.
export const CORE_KEY_TERMS = [
  { value: "£50k–£350k", label: "Loan size" },
  { value: "Up to 18 months", label: "Term" },
  { value: "Serviced or retained", label: "Interest" },
  { value: "First charge", label: "Security" },
  { value: "England & Wales", label: "Location" },
  {
    value: "Companies, SPVs, LLPs and individuals",
    label: "Borrowers, for business purposes",
  },
];

export const CORE_CRITERIA: { label: string; value: string }[] = [
  { label: "Loan size", value: "£50,000 to £350,000" },
  {
    label: "Term",
    value: "Up to 18 months. Extensions considered case by case",
  },
  { label: "Security", value: "First legal charge, plus a personal guarantee" },
  { label: "Location", value: "England and Wales" },
  {
    label: "Borrowers",
    value:
      "Limited companies, SPVs, LLPs and individuals borrowing for business purposes. First-time and experienced investors welcome",
  },
  { label: "LTV basis", value: "Lower of purchase price and valuation" },
  { label: "Interest", value: "Serviced or retained" },
  {
    label: "Works funding",
    value: "Released in stages as works are completed",
  },
  {
    label: "Valuation",
    value:
      "Independent RICS valuation, by desktop valuation where possible on standard residential property. Automated valuations for repeat borrowers (up to 70% LTV)",
  },
  {
    label: "Exit",
    value:
      "A clear exit at the outset: sale, refinance to a term loan, or another credible route",
  },
];

export interface ProductCard {
  title: string;
  desc: string;
  meters: { label: string; value: number }[];
  bullets: string[];
}

export const CORE_PRODUCTS: ProductCard[] = [
  {
    title: "Residential bridging",
    desc: "Buy, refinance or raise capital on residential investment property, quickly and without a long chain.",
    meters: [{ label: "Maximum LTV", value: 80 }],
    bullets: [
      "Auction and fast purchases",
      "Refinance ahead of a buy-to-let mortgage",
      "Single lets, multi-lets and HMOs",
    ],
  },
  {
    title: "Refurbishment & conversion",
    desc: "Funds the purchase and the works, with works money released in stages as the project progresses.",
    meters: [
      { label: "Day-one LTV, up to", value: 80 },
      { label: "Of end value (GDV), up to", value: 70 },
    ],
    bullets: [
      "Light and heavy refurbishment",
      "HMO conversions and title splits",
      "Change of use to residential, with planning in place",
    ],
  },
  {
    title: "Semi-commercial bridging",
    desc: "Mixed-use property, such as a shop, office or café with flats above.",
    meters: [{ label: "Maximum LTV", value: 65 }],
    bullets: [
      "High-street mixed-use purchases",
      "Refinance and capital raising",
      "Upper-floor residential improvements",
    ],
  },
  {
    title: "Commercial bridging",
    desc: "Offices, retail and industrial units, including projects to refurbish them.",
    meters: [
      { label: "Maximum LTV", value: 60 },
      { label: "Refurbishment, of GDV", value: 55 },
    ],
    bullets: [
      "Investment purchases and refinance",
      "Commercial refurbishment with consents in place",
    ],
  },
];

// Numbers are split into target/prefix/suffix so the page can count them up.
export const PLUS_STATS = [
  {
    target: 3,
    prefix: "£",
    suffix: "m",
    label: "Loans mainly £350k to £3m, larger by exception",
  },
  { target: 24, suffix: " mths", label: "Terms from 1 to 24 months" },
  { target: 75, suffix: "%", label: "Standard maximum LTV on residential" },
  { target: 85, suffix: "%", label: "Of total costs on light refurbishment" },
];

export const PLUS_PRODUCTS: {
  title: string;
  limit: string;
  basis: string;
  desc: string;
}[] = [
  {
    title: "Residential bridging",
    limit: "75%",
    basis: "LTV",
    desc: "Purchase, refinance and capital raising. Below-market-value purchases accepted, with LTV based on the lower of price and valuation.",
  },
  {
    title: "Light refurbishment",
    limit: "75%",
    basis: "of GDV",
    desc: "Works of up to 40% of the property's current value. Up to 85% of total costs, with 100% of the works funded in stages.",
  },
  {
    title: "Semi-commercial",
    limit: "70%",
    basis: "LTV",
    desc: "Mixed-use property where the commercial part is no more than 30% of the value.",
  },
  {
    title: "Commercial",
    limit: "70%",
    basis: "LTV",
    desc: "Commercial property with residential planning or permitted development rights in place. From £100k, minimum 3-month term.",
  },
];

export const PLUS_FEATURES = [
  "Automated valuations up to £1m (residential, up to 70% LTV)",
  "Grade II listed buildings",
  "Non-standard construction considered",
  "Historic adverse credit considered",
  "UK companies, SPVs, LLPs and individuals",
];

export const HOW_IT_WORKS = [
  {
    title: "Tell us about the deal",
    desc: "Share the property, the loan you need and your exit. We come back with indicative terms.",
  },
  {
    title: "Agree terms",
    desc: "Accept the terms, complete a short application and provide ID and supporting documents.",
  },
  {
    title: "Valuation & legals",
    desc: "An independent RICS valuer reports on the property, by desktop valuation where possible, while solicitors complete the legal work.",
  },
  {
    title: "Completion",
    desc: "Funds are released on completion. Works funding is drawn in stages as the project progresses.",
  },
];

export const NOT_FUNDED = [
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
