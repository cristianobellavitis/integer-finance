// Fee tariff for Integer Lending bridging loans. The downloadable
// /files/integer-fees.pdf is printed from the same figures - keep the two in
// step when a fee changes.

export const mainFees = [
  { value: "2.25%–2.35%", label: "Arrangement fee" },
  { value: "0.95%", label: "Exit fee" },
  { value: "£695", label: "Loan management fee" },
  { value: "£295", label: "Disbursement fee" },
  { value: "£500", label: "Legal fee, dual representation" },
  { value: "At cost", label: "Valuation and inspection" },
];

export const otherFees: {
  group: string;
  rows: { name: string; desc: string; cost: string }[];
}[] = [
  {
    group: "Changes you ask us to make",
    rows: [
      {
        name: "Early repayment",
        desc: "If you repay before the minimum interest period in your loan terms, interest for that minimum period is still due.",
        cost: "Minimum interest period",
      },
      {
        name: "Partial release of security",
        desc: "For releasing part of the property or land from our charge, for example on a part sale. Payable whatever the outcome.",
        cost: "£130",
      },
      {
        name: "Consent to let",
        desc: "Where your loan terms need our consent before the property is let, charged for each request.",
        cost: "£50",
      },
      {
        name: "Consent for another lender",
        desc: "For considering a request to let another lender take a charge on the property behind ours.",
        cost: "£50",
      },
      {
        name: "Deed of postponement",
        desc: "For considering a request to let another lender's charge rank ahead of ours.",
        cost: "£50",
      },
      {
        name: "Transfer of ownership",
        desc: "For considering a request to transfer the property into a different name.",
        cost: "£50",
      },
      {
        name: "Easements and rights of way",
        desc: "For reviewing easements or rights of way. A deeds-handling charge may also apply.",
        cost: "£50",
      },
      {
        name: "Lender reference",
        desc: "If another lender asks, with your permission, how your loan has been run. Usually paid by that lender.",
        cost: "£50",
      },
      {
        name: "Additional work",
        desc: "For other work you ask us to do that is not listed here. We will tell you the cost in advance.",
        cost: "Varies",
      },
    ],
  },
  {
    group: "Property and insurance",
    rows: [
      {
        name: "Unpaid ground rent or service charge",
        desc: "If we have to pay arrears to the freeholder. The amounts we pay are added to your loan.",
        cost: "£100",
      },
      {
        name: "Buildings insurance",
        desc: "If the property is not adequately insured, we arrange temporary cover until you provide evidence of insurance.",
        cost: "Varies",
      },
      {
        name: "Property visits",
        desc: "For a security or site visit you request, or that we need to make to discuss a concern.",
        cost: "Varies",
      },
      {
        name: "Asset management",
        desc: "For extra time spent assessing or managing the security or site because of a concern.",
        cost: "Varies",
      },
    ],
  },
  {
    group: "If payments are missed",
    rows: [
      {
        name: "Missed payment",
        desc: "For each payment request we have to reissue, for example when a direct debit is returned.",
        cost: "£50",
      },
      {
        name: "Account management",
        desc: "Each month the account is at least one month in arrears, unless you keep to an agreed payment arrangement.",
        cost: "£100 a month",
      },
      {
        name: "Arrears management",
        desc: "Each month once two monthly payments have been missed, in place of the account management charge.",
        cost: "£190 a month",
      },
      {
        name: "End of term management",
        desc: "Each month the loan remains outstanding after its term has ended.",
        cost: "£120 a month",
      },
      {
        name: "Administrators or liquidators",
        desc: "Each month we have to liaise with appointed administrators or liquidators.",
        cost: "£150 a month",
      },
    ],
  },
  {
    group: "Legal action and receivership",
    rows: [
      {
        name: "Possession proceedings",
        desc: "For preparing and issuing legal proceedings, in addition to the arrears management charge.",
        cost: "£200",
      },
      {
        name: "Possession asset management",
        desc: "For managing a repossessed property. The arrears management charge stops at this point.",
        cost: "£165 a month",
      },
      {
        name: "Application to suspend legal action",
        desc: "For considering and acting on an application to suspend our legal action.",
        cost: "£50",
      },
      {
        name: "Notice of receiver appointment",
        desc: "For preparing and issuing a demand advising that a receiver will be appointed.",
        cost: "£50",
      },
      {
        name: "Appointing a receiver",
        desc: "For appointing a suitable receiver and the related advice and enforcement.",
        cost: "Varies",
      },
      {
        name: "Receivership asset management",
        desc: "For liaising with the receiver, including property management and rent collection. The receiver's own charges also apply.",
        cost: "£150 a month",
      },
    ],
  },
];
