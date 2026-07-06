"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { type z } from "zod";

import { LoanComparisonTable } from "@/app/(front)/comparison/_components/LoanComparisonTable";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  financeCalculatorFormSchema,
  type FinanceCalculatorResult,
} from "@/lib/form-schemas/finance-calculator";
import { cn } from "@/lib/utils";
import CustomInput from "./CustomInput";
import {
  financeCalculationInteger,
  financeCalculationOthers,
} from "./calculations";

const FinanceCalculator = () => {
  const [ltv, setLtv] = useState("");
  const [resultOthers, setResultOthers] =
    useState<FinanceCalculatorResult | null>(null);
  const [resultInteger, setResultInteger] =
    useState<FinanceCalculatorResult | null>(null);

  const form = useForm<z.infer<typeof financeCalculatorFormSchema>>({
    resolver: zodResolver(financeCalculatorFormSchema),
  });
  const watchFieldsLtv = form.watch([
    "purchasePrice",
    "renovationsCost",
    "borrowAmount",
  ]);
  const watchRateDuration = form.watch("interestRateDurationSame") ?? true;

  useEffect(() => {
    const subscription = form.watch((data) => {
      if (data.purchasePrice && data.renovationsCost && data.borrowAmount) {
        const _ltv =
          data.borrowAmount / (data.purchasePrice + data.renovationsCost);
        setLtv((_ltv * 100).toFixed(2));
      }
    });
    return () => subscription.unsubscribe();
  }, [form, watchFieldsLtv]);

  function onSubmit(values: z.infer<typeof financeCalculatorFormSchema>) {
    const calcOthers = financeCalculationOthers(values);
    const calcInteger = financeCalculationInteger(Number(ltv), values);
    setResultOthers(calcOthers);
    setResultInteger(calcInteger);
  }

  return (
    <MaxWidthWrapper className="my-6">
      <h1 className="my-12 text-center text-4xl font-semibold text-primary">
        Bridging Finance Calculator
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          <FormField
            control={form.control}
            name="purchasePrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Purchase Price (£)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="renovationsCost"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Renovation Cost
                  {/*                   (For renovation details click{" "} */}
                  {/* <Link */}
                  {/*   href="/lending/customers/renovations-drawdown" */}
                  {/*   className="text-primary underline" */}
                  {/* > */}
                  {/*   here */}
                  {/* </Link> */}
                  {/* ) */}
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="borrowAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How much would you like to borrow?</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="loanToValue"
            defaultValue={0}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loan to value (LTV)</FormLabel>
                <FormControl>
                  <CustomInput
                    type="number"
                    {...field}
                    disabled
                    className="bg-zinc-400 font-semibold"
                    value={ltv}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="months"
            render={({ field }) => (
              <FormItem>
                <FormLabel>For how many months?</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interestRateDurationSame"
            defaultValue={true}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Are interest rates the same for the entire duration?
                </FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(value === "Yes")}
                  defaultValue={field.value ? "Yes" : "No"}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select yes/no" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="monthsDiscountedRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  If no, for how many months you have a discounted rate?
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    className={cn({
                      "bg-zinc-400": watchRateDuration,
                    })}
                    disabled={watchRateDuration}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="monthlyDiscountedRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What is the discounted monthly interest rate?
                </FormLabel>
                <FormControl>
                  <CustomInput
                    type="number"
                    {...field}
                    className={cn({
                      "bg-zinc-400": watchRateDuration,
                    })}
                    disabled={watchRateDuration}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="regularMonthlyRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What is the regular monthly interest rate?{" "}
                </FormLabel>
                <FormControl>
                  <CustomInput
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="applicationFee"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is the application fee?</FormLabel>
                <FormControl>
                  <CustomInput
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="exitFee"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is the exit fee?</FormLabel>
                <FormControl>
                  <CustomInput
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="otherFee"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Any other fee? (e.g. broker fee)</FormLabel>
                <FormControl>
                  <CustomInput
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interestRolledUp"
            defaultValue={true}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Are the interest rolled up (i.e. paid in advance)?
                </FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(value === "Yes")}
                  defaultValue={field.value ? "Yes" : "No"}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select yes/no" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="paidInAdvance"
            defaultValue={true}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Are fees paid in advance?</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(value === "Yes")}
                  defaultValue={field.value ? "Yes" : "No"}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select yes/no" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <h4 className="col-span-1 text-center text-xl font-semibold  text-primary md:col-span-2 xl:col-span-3 ">
            Personal Conditions
          </h4>

          <FormField
            control={form.control}
            name="avgCreditScoreAll"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Average credit score of all borrowers and directors
                </FormLabel>
                <FormControl>
                  <CustomInput
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    suffix="/999"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="previousInteger"
            defaultValue={true}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Have you borrowed from Integer previously?
                </FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(value === "Yes")}
                  defaultValue={field.value ? "Yes" : "No"}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select yes/no" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="expRealEstate"
            defaultValue={true}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Do you have experience with this type investment?
                </FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(value === "Yes")}
                  defaultValue={field.value ? "Yes" : "No"}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select yes/no" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="col-span-1 mx-auto w-52 md:col-span-2 xl:col-span-3"
          >
            Calculate
          </Button>
        </form>
      </Form>

      {resultOthers && resultInteger && (
        <div className="container mx-auto py-12 lg:px-24 xl:px-48 2xl:px-72">
          <LoanComparisonTable
            resultOthers={resultOthers}
            resultInteger={resultInteger}
          />
        </div>
      )}
    </MaxWidthWrapper>
  );
};

export default FinanceCalculator;
