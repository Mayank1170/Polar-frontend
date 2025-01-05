import { OrganizationCard } from "./organization-card"

const organizations = [
  {
    id: "1",
    name: "TechCorp",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Supporting open source development in blockchain technology",
    fundingPool: "50,000 SOL",
    activeBounties: 24,
    developers: 156,
  },
  {
    id: "2",
    name: "OpenSource Foundation",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Advancing the future of decentralized software",
    fundingPool: "75,000 SOL",
    activeBounties: 32,
    developers: 243,
  },
  {
    id: "3",
    name: "Web3 Initiative",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Building the next generation of web technologies",
    fundingPool: "35,000 SOL",
    activeBounties: 18,
    developers: 98,
  },
]

export function OrganizationGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {organizations.map((org) => (
        <OrganizationCard key={org.id} organization={org} />
      ))}
    </div>
  )
}

