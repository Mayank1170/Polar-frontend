"use client"

import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"

const transactions = [
  {
    id: "1",
    amount: "2.5 SOL",
    status: "complete",
    email: "m@example.com",
    type: "Received",
    date: "2024-01-20",
  },
  {
    id: "2",
    amount: "1.0 SOL",
    status: "complete",
    email: "user@example.com",
    type: "Sent",
    date: "2024-01-19",
  },
  {
    id: "3",
    amount: "0.5 SOL",
    status: "complete",
    email: "dev@example.com",
    type: "Received",
    date: "2024-01-18",
  },
]

export function TransactionsList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.date}</TableCell>
            <TableCell className="flex items-center gap-2">
              {transaction.type === "Received" ? (
                <ArrowDownIcon className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowUpIcon className="h-4 w-4 text-red-500" />
              )}
              {transaction.type}
            </TableCell>
            <TableCell className="capitalize">{transaction.status}</TableCell>
            <TableCell>{transaction.email}</TableCell>
            <TableCell className="text-right">{transaction.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

