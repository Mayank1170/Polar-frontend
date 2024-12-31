"use client";

import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Github } from "lucide-react";

export function IssuesList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {issues.map((issue) => (
        <Card key={issue.id} className="backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              {issue.title}
            </CardTitle>
            <CardDescription>{issue.repo}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{issue.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {issue.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="text-sm">
              <span className="font-semibold">{issue.bounty}</span>{" "}
              <span className="text-muted-foreground">SOL</span>
            </div>
            <Button size="sm">Fund Issue</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

const issues = [
  {
    id: 1,
    title: "Implement Dark Mode",
    repo: "facebook/react",
    description:
      "Add support for dark mode using CSS variables and system preferences",
    bounty: 2.5,
    tags: ["enhancement", "good first issue", "frontend"],
  },
  {
    id: 2,
    title: "Fix Memory Leak",
    repo: "vercel/next.js",
    description:
      "Memory leak detected in development server when hot reloading",
    bounty: 5,
    tags: ["bug", "performance", "backend"],
  },
  {
    id: 3,
    title: "Add TypeScript Types",
    repo: "tailwindlabs/tailwindcss",
    description: "Create and export proper TypeScript type definitions",
    bounty: 1.5,
    tags: ["typescript", "documentation"],
  },
  // Add more issues as needed
];
