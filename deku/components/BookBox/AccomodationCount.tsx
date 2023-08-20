'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronsUpDown } from "lucide-react"

export function AccomodationCount() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Accomodation<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /></Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Head Count</Label>
              <Input
                id="headCount"
                placeholder="Number of travellers"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Rooms</Label>
              <Input
                id="rooms"
                placeholder="Number of rooms"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
