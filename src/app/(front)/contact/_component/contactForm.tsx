"use client";

import React from "react";
import { type z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormMessage,
  FormLabel,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// import { api } from "@/trpc/react";
import { contactFormSchema } from "@/lib/form-schemas/form-utils";

const ContactForm = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  // const homeRouter = api.home.getLatest.useQuery();

  // const data = api.home.hello.useQuery({ text: "from tRPC" }).data;

  // const { mutate, isSuccess } = api.home.contact.useMutation();
  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // const data = mutate(values);
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full max-w-md grid-cols-1 gap-6"
      >
        <div>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-white">
                  First Name *
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Type your first name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-white">
                  Last Name *
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Type your last name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-white">
                  Email *
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Type your email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-white">
                  Phone *
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Type your phone number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-white">
                  Message *
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={4}
                    placeholder="Type your message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-center">
          <Button disabled className="px-4 py-2 font-bold" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
