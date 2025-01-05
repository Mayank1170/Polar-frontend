import { DeveloperCard } from "./developer-card"

const developers = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Full Stack Developer",
    contributions: 342,
    earned: "12.5 SOL",
    github: "sarahchen",
    skills: ["React", "Node.js", "Solana"],
  },
  {
    id: "2",
    name: "Alex Thompson",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Smart Contract Developer",
    contributions: 156,
    earned: "8.2 SOL",
    github: "alexthompson",
    skills: ["Rust", "Solidity", "Web3"],
  },
  {
    id: "3",
    name: "Maria Garcia",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Frontend Developer",
    contributions: 289,
    earned: "10.8 SOL",
    github: "mariagarcia",
    skills: ["TypeScript", "Next.js", "TailwindCSS"],
  },
  // Add more developers as needed
]

export function DeveloperGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {developers.map((developer) => (
        <DeveloperCard key={developer.id} developer={developer} />
      ))}
    </div>
  )
}

