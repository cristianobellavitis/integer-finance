"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import { RateInformationTable } from "./rates-information-table";
import {
  baseRates,
  arrangementFees,
  exitFees,
  brokerFees,
  adjustments,
  type LtvOption,
} from "./rates-table-data";
import Link from "next/link";

interface QuoteData {
  ltv: LtvOption;
  monthlyRate: number;
  monthlyInterestPayment: number;
  arrangementFeeAmount: number;
  exitFeeAmount: number;
  brokerFeeAmount: number;
  hasBroker: boolean;
}

const formSchema = z.object({
  hasExperience: z.enum(["yes", "no"], {
    required_error: "Please select your experience level",
  }),
  creditScore: z
    .string()
    .min(1, "Credit score is required")
    .refine((val) => {
      const num = parseInt(val);
      return !isNaN(num) && num >= 0 && num <= 999;
    }, "Credit score must be between 0 and 999"),
  previousBorrower: z.enum(["yes", "no"], {
    required_error: "Please select if you've borrowed before",
  }),
  hasBroker: z.enum(["yes", "no"], {
    required_error: "Please select if you're working with a broker",
  }),
  loanAmount: z
    .string()
    .min(1, "Loan amount is required")
    .refine((val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num > 0;
    }, "Please enter a valid loan amount"),
  desiredLtv: z.string().min(1, "Please select an LTV option"),
});

type FormData = z.infer<typeof formSchema>;

const legalCost = { min: 500, max: 1000 };

export default function LoanRatesCalculator() {
  const [availableLtvs, setAvailableLtvs] = useState<LtvOption[]>([]);
  const [quote, setQuote] = useState<QuoteData | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hasExperience: undefined,
      creditScore: "",
      previousBorrower: undefined,
      hasBroker: undefined,
      loanAmount: "",
      desiredLtv: "",
    },
  });

  const watchedValues = form.watch();

  useEffect(() => {
    const { hasExperience, creditScore, previousBorrower } = watchedValues;
    const score = parseInt(creditScore) || 0;
    let options: LtvOption[] = [];

    if (hasExperience === "no") {
      options = [65];
      if (score >= 850) {
        options.push(70);
      }
    } else if (hasExperience === "yes") {
      if (previousBorrower === "no" && score >= 850) {
        options = [65, 70, 75];
      } else if (previousBorrower === "yes" && score >= 850) {
        options = [65, 70, 75, 80];
        if (score > 900) {
          options.push(85);
        }
      } else if (previousBorrower === "yes" && score < 850) {
        options = [65];
      }
    }

    setAvailableLtvs(options);

    // Reset LTV selection if current selection is not available
    const currentLtv = parseInt(watchedValues.desiredLtv) as LtvOption;
    if (currentLtv && !options.includes(currentLtv)) {
      form.setValue("desiredLtv", "");
    }
  }, [
    watchedValues.hasExperience,
    watchedValues.creditScore,
    watchedValues.previousBorrower,
    watchedValues.desiredLtv,
    form,
  ]);

  const calculateQuote = (data: FormData) => {
    const ltv = parseInt(data.desiredLtv) as LtvOption;
    const loanAmount = parseFloat(data.loanAmount) || 0;
    const creditScore = parseInt(data.creditScore) || 0;

    if (!ltv || !loanAmount) {
      return;
    }

    // Start with base rate
    let monthlyRate = baseRates[ltv];

    // Apply adjustments
    if (data.hasExperience === "no") {
      monthlyRate += adjustments.inexperienced;
    }
    if (data.previousBorrower === "yes") {
      monthlyRate += adjustments.repeatBorrower;
    }
    if (creditScore > 950) {
      monthlyRate += adjustments.highScore;
    }
    if (creditScore < 850) {
      monthlyRate += adjustments.lowScore;
    }

    // Calculate fees
    const monthlyInterestPayment = loanAmount * (monthlyRate / 100);
    const arrangementFeeAmount = loanAmount * (arrangementFees[ltv] / 100);
    const exitFeeAmount = loanAmount * (exitFees[ltv] / 100);
    const brokerFeeAmount =
      data.hasBroker === "yes" ? loanAmount * (brokerFees[ltv] / 100) : 0;

    setQuote({
      ltv,
      monthlyRate,
      monthlyInterestPayment,
      arrangementFeeAmount,
      exitFeeAmount,
      brokerFeeAmount,
      hasBroker: data.hasBroker === "yes",
    });
  };

  const onSubmit = (data: FormData) => {
    calculateQuote(data);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <MaxWidthWrapper className="my-6">
      <h1 className="my-12 text-center text-4xl font-semibold text-primary">
        Integer Investments Bridging Loan Rates
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Loan Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="hasExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Do you have experience with property investment?
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-row space-x-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="exp-yes" />
                            <Label htmlFor="exp-yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="exp-no" />
                            <Label htmlFor="exp-no">No</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="creditScore"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experian Credit Score (0-999)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="0"
                          max="999"
                          placeholder="e.g. 850"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="previousBorrower"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Have you borrowed from Integer Investments before?
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-row space-x-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="prev-yes" />
                            <Label htmlFor="prev-yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="prev-no" />
                            <Label htmlFor="prev-no">No</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hasBroker"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Are you working with a broker?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-row space-x-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="broker-yes" />
                            <Label htmlFor="broker-yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="broker-no" />
                            <Label htmlFor="broker-no">No</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="loanAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Total loan amount (purchase and renovations) (£)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="e.g. 200000"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="desiredLtv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Desired LTV (%)</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select LTV" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {availableLtvs.map((ltv) => (
                            <SelectItem key={ltv} value={ltv.toString()}>
                              {ltv}%
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                      {availableLtvs.length === 0 &&
                        watchedValues.hasExperience && (
                          <p className="text-sm text-muted-foreground">
                            Please complete all fields above to see available
                            LTV options
                          </p>
                        )}
                    </FormItem>
                  )}
                />

                <Button
                  type="button"
                  onClick={form.handleSubmit(onSubmit)}
                  className="w-full"
                  disabled={
                    !form.formState.isValid || availableLtvs.length === 0
                  }
                >
                  Calculate Quote
                </Button>
              </div>
            </Form>
          </CardContent>
        </Card>

        {quote && (
          <Card>
            <CardHeader>
              <CardTitle>Your Quote - {quote.ltv}% LTV</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">
                    Monthly Interest Rate
                  </Label>
                  <p className="text-2xl font-bold text-primary">
                    {quote.monthlyRate.toFixed(3)}%
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">
                    Monthly Interest Payment
                  </Label>
                  <p className="text-2xl font-bold text-primary">
                    {formatCurrency(quote.monthlyInterestPayment)}
                  </p>
                </div>
              </div>

              <div className="space-y-3 border-t pt-4">
                <h3 className="text-lg font-semibold">Fees</h3>

                <div className="flex justify-between">
                  <span>Arrangement Fee:</span>
                  <span className="font-medium">
                    {formatCurrency(quote.arrangementFeeAmount)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Exit Fee:</span>
                  <span className="font-medium">
                    {formatCurrency(quote.exitFeeAmount)}
                  </span>
                </div>

                {quote.hasBroker && (
                  <div className="flex justify-between">
                    <span>Broker Fee:</span>
                    <span className="font-medium">
                      {formatCurrency(quote.brokerFeeAmount)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between border-t pt-2">
                  <span>Legal Fees:</span>
                  <span className="font-medium">
                    {formatCurrency(legalCost.min)}–
                    {formatCurrency(legalCost.max)}
                    {/* <span className="block text-xs text-muted-foreground"> */}
                    {/*   (paid separately to your solicitor) */}
                    {/* </span> */}
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-muted p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> All processes are digital with no paper
                  requirements. We aim to work with dual rep solicitors, see
                  list{" "}
                  <Link
                    href="https://www.integerinvestments.com/news/integer-panel-of-solicitors"
                    target="_blank"
                    rel="noopener"
                    className="font-bold text-primary underline"
                  >
                    here
                  </Link>
                  . Under special circumstances we can offer discounts to the
                  above rates.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* <RateInformationTable /> */}
    </MaxWidthWrapper>
  );
}
