import { OrganizationGrid } from "../components/organizations/organization-grid"
import { OrganizationStats } from "../components/organizations/organization-stats"

export default function OrganizationsPage() {
  return (
    <div className="container py-6 md:py-10">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Organizations</h1>
          <p className="text-muted-foreground">
            View and manage organizational funding
          </p>
        </div>
        <OrganizationStats />
        <OrganizationGrid />
      </div>
    </div>
  )
}

