import { DashboardHeader } from "../components/dashboard/header"
import { DashboardShell } from "../components/dashboard/shell"
import { TransactionsList } from "../components/dashboard/transaction-list"
import { WalletBalance } from "../components/dashboard/wallet-balance"
import { DashboardTabs } from "../components/dashboard/tabs"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="View your transactions and manage your funds."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <WalletBalance />
      </div>
      <div className="grid gap-4">
        <DashboardTabs />
        <TransactionsList />
      </div>
    </DashboardShell>
  )
}

