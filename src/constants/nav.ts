import { type MainMenuItem } from "@/types";

export const NAV_ITEMS: MainMenuItem[] = [
  {
    title: "Our Mission",
    href: "/our-mission",
  },
  {
    title: "Lending",
    href: "/lending/customers",
    subMenuItems: [
      {
        title: "Brokers",
        href: "/lending/brokers",
      },
      {
        title: "Customers",
        href: "/lending/customers",
        children: [
          {
            title: "Loan Application",
            href: "/lending/customers/loan-application",
          },
          {
            title: "Renovations Drawdown",
            href: "/lending/customers/renovations-drawdown",
          },
          {
            title: "Loan Repayment",
            href: "/lending/customers/loan-repayment",
          },
          {
            title: "Comparison",
            href: "/comparison",
          },
        ],
      },
      {
        title: "Solicitors",
        href: "/lending/solicitors",
      },
    ],
  },
  {
    title: "Investors",
    href: "/investors",
    subMenuItems: [
      {
        title: "Investor Relations",
        href: "/investors",
      },
      {
        title: "Sailing with Integer Investments",
        href: "/investors/sailing",
      },
    ],
  },
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
