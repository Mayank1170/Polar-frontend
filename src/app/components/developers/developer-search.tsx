"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from "../../lib/utils"
import { Button } from "../../components/ui/button" 
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"

const skills = [
  {
    value: "all",
    label: "All Skills",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "rust",
    label: "Rust",
  },
  {
    value: "solana",
    label: "Solana",
  },
  {
    value: "typescript",
    label: "TypeScript",
  },
]

export function DeveloperSearch() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? skills.find((skill) => skill.value === value)?.label
            : "Filter by skill..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search skills..." />
          <CommandEmpty>No skill found.</CommandEmpty>
          <CommandGroup>
            {skills.map((skill) => (
              <CommandItem
                key={skill.value}
                value={skill.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === skill.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {skill.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}


