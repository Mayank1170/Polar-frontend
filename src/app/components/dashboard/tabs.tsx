"use client"

import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"

export function DashboardTabs() {
  return (
    <Tabs defaultValue="transactions" className="space-y-4">
      <TabsList>./components/dashboard/transactions-list
        <TabsTrigger value="transactions">Transactions</TabsTrigger>
        <TabsTrigger value="bounties">Bounties</TabsTrigger>
        <TabsTrigger value="funding">Funding</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

