import { z, ZodIssueCode } from "zod";

// export const validateFile = (
//   file: FileList | undefined,
//   ctx: z.RefinementCtx,
// ) => {
//   if (file && file.length >= 1) {
//     // file.length === 1
//     const fileItem = file[0];
//     if (fileItem && fileItem.size > 15000000) {
//       ctx.addIssue({
//         code: ZodIssueCode.custom,
//         message: "File is larger than 15MB.",
//       });
//     }
//   } else if (file) {
//     ctx.addIssue({
//       code: ZodIssueCode.custom,
//       message: "Required",
//     });
//   }
// };
export const validateFile = (
  file: FileList | undefined,
  ctx: z.RefinementCtx,
) => {
  if (!file || file.length === 0) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: "Required",
    });
  } else {
    for (const fileItem of file) {
      if (fileItem.size > 15000000) {
        ctx.addIssue({
          code: ZodIssueCode.custom,
          message: `File(s) is larger than 15MB.`,
        });
        break;
      }
    }
  }
};

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Must be 2 or more characters long" }),
  lastName: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Must be 5 or more characters long" }),
  message: z.string().min(5, { message: "Must be 5 or more characters long" }),
});

export const lendingFormSchema = z.object({
  fullName: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  address: z.string().min(5, { message: "Must be 5 or more characters long" }),
  companyDetails: z.string().optional(),
  propertyAddress: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  propertyPurchasePrice: z
    .number()
    .min(0, { message: "Must be a positive number" }),
  renovationCosts: z.number().min(0, { message: "Must be a positive number" }),
  desiredLoan: z.number().min(0, { message: "Must be a positive number" }),
  loanTerm: z.number().min(0, { message: "Must be a positive number" }),
  criminalOffence: z.enum(["yes", "no"], {
    message: "Please select an option",
  }),
  bankruptcyProceedings: z.enum(["yes", "no"], {
    message: "Please select an option",
  }),
  directorDisqualified: z.enum(["yes", "no"], {
    message: "Please select an option",
  }),
  netAssets: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  combinedIncome: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  renovationDetails: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  exitStrategy: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  experience: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  creditReport1: z
    .instanceof(globalThis.FileList)
    .optional()
    .superRefine(validateFile),
  creditReport2: z
    .instanceof(FileList)
    .optional()
    .superRefine((file, ctx) => {
      if (file && file.length > 0) {
        validateFile(file, ctx);
      }
    }),
  creditReport3: z
    .instanceof(FileList)
    .optional()
    .superRefine((file, ctx) => {
      if (file && file.length > 0) {
        validateFile(file, ctx);
      }
    }),
  creditReport4: z
    .instanceof(FileList)
    .optional()
    .superRefine((file, ctx) => {
      if (file && file.length > 0) {
        validateFile(file, ctx);
      }
    }),

  proofIncome1: z.instanceof(FileList).optional().superRefine(validateFile),
  proofIncome2: z
    .instanceof(FileList)
    .optional()
    .superRefine((file, ctx) => {
      if (file && file.length > 0) {
        validateFile(file, ctx);
      }
    }),
  proofIncome3: z
    .instanceof(FileList)
    .optional()
    .superRefine((file, ctx) => {
      if (file && file.length > 0) {
        validateFile(file, ctx);
      }
    }),
  proofIncome4: z
    .instanceof(FileList)
    .optional()
    .superRefine((file, ctx) => {
      if (file && file.length > 0) {
        validateFile(file, ctx);
      }
    }),

  nationalInsuranceNumber: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),

  idBorrower1: z.instanceof(FileList).optional().superRefine(validateFile),
  idBorrower2: z
    .instanceof(FileList)
    .optional()
    .superRefine((file, ctx) => {
      if (file && file.length > 0) {
        validateFile(file, ctx);
      }
    }),
  idBorrower3: z
    .instanceof(FileList)
    .optional()
    .superRefine((file, ctx) => {
      if (file && file.length > 0) {
        validateFile(file, ctx);
      }
    }),
  idBorrower4: z
    .instanceof(FileList)
    .optional()
    .superRefine((file, ctx) => {
      if (file && file.length > 0) {
        validateFile(file, ctx);
      }
    }),

  addressProof1: z.instanceof(FileList).optional().superRefine(validateFile),
  addressProof2: z
    .instanceof(FileList)
    .optional()
    .superRefine((file, ctx) => {
      if (file && file.length > 0) {
        validateFile(file, ctx);
      }
    }),
  addressProof3: z
    .instanceof(FileList)
    .optional()
    .superRefine((file, ctx) => {
      if (file && file.length > 0) {
        validateFile(file, ctx);
      }
    }),
  addressProof4: z
    .instanceof(FileList)
    .optional()
    .superRefine((file, ctx) => {
      if (file && file.length > 0) {
        validateFile(file, ctx);
      }
    }),

  solicitors: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  refusedLending: z.string().optional(),
  referredByBroker: z.string().optional(),
  completionDate: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  declareInfo: z.boolean(),
  authorizeChecks: z.boolean(),
  subscribeNewsletter: z.boolean().optional(),
});

export const renoFormSchema = z.object({
  name: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  propertyAddress: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  idUp: z.instanceof(FileList).optional().superRefine(validateFile),
  companyDetail: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  drawdownAmount: z.number().min(0, { message: "Must be a positive number" }),
  bankName: z.string().min(5, { message: "Must be 5 or more characters long" }),
  sortCode: z.string().min(5, { message: "Must be 5 or more characters long" }),
  bankAccount: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  renoDetail: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  date: z.string().min(5, { message: "Must be 5 or more characters long" }),
  renoUpdate: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  renoPic: z.instanceof(FileList).optional().superRefine(validateFile),
  renoVid: z.instanceof(FileList).optional().superRefine(validateFile),
  renoInvoice: z.instanceof(FileList).optional().superRefine(validateFile),
  renoBankTransfers: z
    .instanceof(FileList)
    .optional()
    .superRefine(validateFile),
  declareInfo: z.boolean(),
});
