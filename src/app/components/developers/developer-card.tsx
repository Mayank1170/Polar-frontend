import Image from "next/image"
import { Github } from 'lucide-react'
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card"

interface DeveloperCardProps {
  developer: {
    name: string
    avatar: string
    role: string
    contributions: number
    earned: string
    github: string
    skills: string[]
  }
}

export function DeveloperCard({ developer }: DeveloperCardProps) {
  return (
    <Card className="backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src={developer.avatar}
            alt={developer.name}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold">{developer.name}</h3>
            <p className="text-sm text-muted-foreground">{developer.role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Contributions</p>
              <p className="text-2xl font-bold">{developer.contributions}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Earned</p>
              <p className="text-2xl font-bold">{developer.earned}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {developer.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="w-full">Fund Developer</Button>
        <Button variant="outline" size="icon">
          <Github className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
