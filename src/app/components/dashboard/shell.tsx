import { cn } from "../../lib/utils"

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function DashboardShell({
  
  children,
  className,
  ...props
}: DashboardShellProps) {
  return (
    <div 
      className={cn(
        "container grid items-start gap-8 pb-8 pt-6 md:py-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

