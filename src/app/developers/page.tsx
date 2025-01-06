import { DeveloperGrid } from "../components/developers/developer-grid"
import { DeveloperSearch } from "../components/developers/developer-search"

export default function DevelopersPage() {
  return (
    <div className="w-full flex justify-center">

    <div className="container py-6 md:py-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Developers</h1>
            <p className="text-muted-foreground">
              Browse and support open source developers
            </p>
          </div>
          <DeveloperSearch />
        </div>
        <DeveloperGrid />
      </div>
    </div>
  </div>
  )
}

