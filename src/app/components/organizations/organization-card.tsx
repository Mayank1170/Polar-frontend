import Image from "next/image"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

interface OrganizationCardProps {
  organization: {
    name: string
    logo: string
    description: string
    fundingPool: string
    activeBounties: number
    developers: number
  }
}

export function OrganizationCard({ organization }: OrganizationCardProps) {
  return (
    <Card className="backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src={organization.logo}
            alt={organization.name}
            width={48}
            height={48}
            className="rounded-lg"
          />
          <div>
            <CardTitle>{organization.name}</CardTitle>
            <CardDescription>{organization.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm font-medium">Funding Pool</p>
            <p className="text-2xl font-bold">{organization.fundingPool}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Active Bounties</p>
            <p className="text-2xl font-bold">{organization.activeBounties}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Developers</p>
            <p className="text-2xl font-bold">{organization.developers}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Organization</Button>
      </CardFooter>
    </Card>
  )
}

