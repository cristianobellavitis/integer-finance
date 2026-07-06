import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { FinanceCalculatorResult } from "@/lib/form-schemas/finance-calculator";
import { cn } from "@/lib/utils";

export const LoanComparisonTable = ({
  resultOthers,
  resultInteger,
}: {
  resultOthers: FinanceCalculatorResult;
  resultInteger: FinanceCalculatorResult;
}) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-48"></TableHead>
            <TableHead className="font-semibold text-primary">
              Other Lender
            </TableHead>
            <TableHead className="font-semibold text-primary">
              Integer Investments
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Total fees</TableCell>
            <TableCell>
              £{" "}
              {resultOthers.totalFees.toLocaleString("en-GB", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </TableCell>
            <TableCell
              className={cn(
                resultOthers.totalFees - resultInteger.totalFees > 0 &&
                  "bg-green-200",
              )}
            >
              £{" "}
              {resultInteger.totalFees.toLocaleString("en-GB", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Total interests</TableCell>
            <TableCell>
              £{" "}
              {resultOthers.totalInterests.toLocaleString("en-GB", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </TableCell>
            <TableCell
              className={cn(
                resultOthers.totalInterests - resultInteger.totalInterests >
                  0 && "bg-green-200",
              )}
            >
              £{" "}
              {resultInteger.totalInterests.toLocaleString("en-GB", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Net advance</TableCell>
            <TableCell>
              £{" "}
              {resultOthers.netAdvance.toLocaleString("en-GB", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </TableCell>
            <TableCell
              className={cn(
                resultOthers.netAdvance - resultInteger.netAdvance < 0 &&
                  "bg-green-200",
              )}
            >
              £{" "}
              {(
                resultInteger.netAdvance - resultInteger.totalFees
              ).toLocaleString("en-GB", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} className="h-4"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold">
              Bridging finance cost comparison
            </TableCell>
            <TableCell className="font-bold">
              {(resultOthers.costComparison * 100).toFixed(2)}%
            </TableCell>
            <TableCell
              className={cn(
                resultOthers.costComparison - resultInteger.costComparison >
                  0 && "bg-green-200",
                "font-bold",
              )}
            >
              {(resultInteger.costComparison * 100).toFixed(2)}%
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
