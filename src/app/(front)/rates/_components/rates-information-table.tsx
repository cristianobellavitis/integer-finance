"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { rateTableData } from "./rates-table-data";

export function RateInformationTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rate Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium">LTV</TableHead>
                <TableHead className="font-medium">Base Rate/Month</TableHead>
                <TableHead className="font-medium">Arrangement Fee</TableHead>
                <TableHead className="font-medium">Exit Fee</TableHead>
                <TableHead className="font-medium">Broker Fee</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rateTableData.map((row) => (
                <TableRow key={row.ltv}>
                  <TableCell className="font-medium">{row.ltv}%</TableCell>
                  <TableCell>{row.baseRate}%</TableCell>
                  <TableCell>{row.arrangementFee}%</TableCell>
                  <TableCell>{row.exitFee}%</TableCell>
                  <TableCell>{row.brokerFee}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 space-y-2">
          <h3 className="font-semibold">Rate Adjustments (not cumulative):</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Inexperienced borrower: +0.025%</li>
            <li>• Repeat borrower: -0.025%</li>
            <li>• Credit score above 950: -0.025%</li>
            <li>• Credit score below 850: +0.025%</li>
            <li>• Structural/legal development: +0.125%</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
