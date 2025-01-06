import { Inter } from 'next/font/google'
import { ThemeProvider } from "./components/theme-provider"
import { NavigationBar } from "./components/navigation-bar"
import { cn } from "./lib/utils"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Polar - Decentralized Funding for Open Source",
  description: "Fund and support open source developers on Solana",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={cn(
        inter.className,
        "min-h-screen bg-gradient-to-b from-background/90 to-background/95 antialiased"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="polar-theme"
        >
          <div className="relative flex min-h-screen flex-col">
            <NavigationBar />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

