"use client"

import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select"

export default function RegionSelector() {
  return (
    <div className="bg-white p-2 drop-shadow">
      <Select>
        <SelectTrigger className="text-darkBlue font-semibold w-[180px]">
          <SelectValue placeholder="filter by Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel> Regions </SelectLabel>
            <SelectItem value="test1"> test 1 </SelectItem>
            <SelectItem value="test2"> test 2 </SelectItem>
            <SelectItem value="test3"> test 3 </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
