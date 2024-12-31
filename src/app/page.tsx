import { ArrowRight, Github, Globe, Rocket } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

export default function Home() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]">
            Fund Open Source Development
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              directly on Solana
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Polar is a decentralized funding platform that connects developers
            with organizations. Zero platform fees, automatic bounty payouts,
            and complete transparency.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="gap-2">
              Start Funding <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              View Issues <Github className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Direct Developer Funding</CardTitle>
              <CardDescription>
                Support developers directly with zero platform fees. All
                transactions are handled on Solana.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Globe className="h-8 w-8 text-indigo-500" />
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Automatic Bounty Payouts</CardTitle>
              <CardDescription>
                Bounties are automatically paid out when pull requests are
                merged. No manual intervention needed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Rocket className="h-8 w-8 text-purple-500" />
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Transparent Funding</CardTitle>
              <CardDescription>
                All funding is transparent and traceable on the blockchain. See
                exactly where your money goes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Github className="h-8 w-8 text-violet-500" />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by leading organizations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join hundreds of organizations funding open source development
            through Polar.
          </p>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col bg-muted/50 p-8">
              <dt className="text-sm font-semibold leading-6 text-muted-foreground">
                {stat.name}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}

const stats = [
  { id: 1, name: "Organizations", value: "500+" },
  { id: 2, name: "Developers", value: "2,000+" },
  { id: 3, name: "Issues Funded", value: "10,000+" },
  { id: 4, name: "Total Funded", value: "$5M+" },
];
