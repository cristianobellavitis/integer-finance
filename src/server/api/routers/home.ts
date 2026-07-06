// import { z } from "zod";
// import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
//
// import { contactFormSchema } from "@/lib/form-utils";
//
// let post = {
//   id: 1,
//   name: "Hello World",
// };
//
// export const homeRouter = createTRPCRouter({
//   hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),
//
//   create: publicProcedure
//     .input(z.object({ name: z.string().min(1) }))
//     .mutation(async ({ input }) => {
//       // simulate a slow db call
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//
//       post = { id: post.id + 1, name: input.name };
//       return post;
//     }),
//
//   getLatest: publicProcedure.query(() => {
//     return post;
//   }),
//
//   contact: publicProcedure
//     .input(contactFormSchema)
//     .mutation(async ({ input }) => {
//       console.log(input);
//       // await new Promise((resolve) => setTimeout(resolve, 1000));
//
//       return "foo";
//     }),
// });

import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

let post = {
  id: 1,
  name: "Hello World",
};

export const homeRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      post = { id: post.id + 1, name: input.name };
      return post;
    }),

  getLatest: publicProcedure.query(() => {
    return post;
  }),
});
