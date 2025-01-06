"use client"

import { useState } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { cn } from "@/app/lib/utils"
import { Wallet } from 'lucide-react'

export function WalletConnect() {
  const { connected, connecting, disconnect } = useWallet()
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={connected ? "default" : "outline"} 
          size="icon"
          onClick={connected ? () => disconnect() : undefined}
        >
          <Wallet className={cn(
            "h-4 w-4",
            connecting && "animate-spin"
          )} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription>
            Connect your Solana wallet to fund or claim bounties
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center py-4">
          <WalletMultiButton />
        </div>
      </DialogContent>
    </Dialog>
  )
}

