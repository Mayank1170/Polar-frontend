import { IssuesList } from "../components/issues-list";
import { IssuesFilter } from "../components/issues-filter";

export default function IssuesPage() {
  return (
    <div className="container py-6 md:py-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Open Issues</h1>
            <p className="text-muted-foreground">
              Browse and fund open issues across GitHub repositories
            </p>
          </div>
          <IssuesFilter />
        </div>
        <IssuesList />
      </div>
    </div>
  );
}
