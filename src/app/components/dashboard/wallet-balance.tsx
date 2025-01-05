"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

const data = [
  {
    balance: 2.5,
  },
  {
    balance: 3.2,
  },
  {
    balance: 4.1,
  },
  {
    balance: 3.8,
  },
  {
    balance: 5.2,
  },
  {
    balance: 5.9,
  },
  {
    balance: 5.5,
  },
]

export function WalletBalance() {
  return (
    <Card className="col-span-2 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Wallet Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">5.5 SOL</div>
        <p className="text-xs text-muted-foreground">
          +3 SOL from last month
        </p>
        <div className="h-[80px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Balance
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].value} SOL
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line
                type="monotone"
                dataKey="balance"
                strokeWidth={2}
                activeDot={{
                  r: 4,
                  className: "fill-primary",
                }}
                className="stroke-primary"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

