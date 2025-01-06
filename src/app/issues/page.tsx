import { IssuesList } from "../components/issues/issues-list";
import { IssuesFilter } from "../components/issues/issues-filter";
import { Button } from "../components/ui/button";
import { PlusCircle } from "lucide-react";

export default function IssuesPage() {
  return (
    <div className="w-full flex justify-center">
      <div className="container py-6 md:py-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Open Bounties
              </h1>
              <p className="text-muted-foreground">
                Browse and claim bounties for open source contributions
              </p>
            </div>
            <Button className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Create Bounty
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <IssuesFilter />
          </div>
          <IssuesList />
        </div>
      </div>
    </div>
  );
}
