"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Globe, Rocket } from 'lucide-react'
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center w-full"> 
      <section className="container relative max-w-[1440px]">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="w-full relative pt-24 flex flex-col items-center text-center gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[70px] font-bold"
          >
            Fund Open Source
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              on Solana
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl"
          >
            Zero fees. Automatic payouts. Complete transparency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
            >
              Start Funding <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10"
            >
              View Issues <Github className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="container py-24 px-20">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              key={feature.title}
              className="group"
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                <div className="p-6">
                  <feature.icon className="h-12 w-12 mb-6 text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container pb-24 px-20">
        <h1 className="text-4xl font-bold mb-3">
          Trusted by leading organizations
        </h1>
        <p className="text-white/70 mb-8">
          Join hundreds of organizations funding open source development through
          Polar.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={stat.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-white/70">{stat.name}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    icon: Globe,
    title: "Direct Funding",
    description:
      "Support developers with zero platform fees. All transactions on Solana.",
  },
  {
    icon: Rocket,
    title: "Automatic Payouts",
    description: "Bounties paid instantly when pull requests are merged.",
  },
  {
    icon: Github,
    title: "Full Transparency",
    description: "Track every transaction on the blockchain in real-time.",
  },
]

const stats = [
  { id: 1, name: "Organizations", value: "500+" },
  { id: 2, name: "Developers", value: "2,000+" },
  { id: 3, name: "Issues Funded", value: "10k+" },
  { id: 4, name: "Total Funded", value: "$5M+" },
]

