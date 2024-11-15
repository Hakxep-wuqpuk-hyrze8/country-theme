"use client"

import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronDown } from 'lucide-react';
import React from 'react';
import useGetCountryByRegion from '../api/use-get-country-by-region';
import { parseAsString, useQueryState } from 'nuqs';

export default function RegionSelector() {
  const FIELDSQUERY = "region";
  const PLACEHOLDER = "Filter by Region";
  const { data: allCountryQuery, isError } = useGetCountryByRegion(FIELDSQUERY);

  const [open, setOpen] = React.useState<boolean>(false)

  const [region, setRegion] = useQueryState<string>(
    "region",
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  )

  if (isError) {
    throw new Error("Error happened while fetching country")
  }

  const regionsSet = new Set(allCountryQuery?.data.map((country: { region: string }) => country.region))
  const uniqueRegions = Array.from(regionsSet).filter(region => region).sort();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-[240px] p-6 justify-between text-darkText select-none shadow-md rounded-none bg-white dark:bg-darkBlue dark:text-white dark:hover:bg-darkBackground transition-none",
            region === "" ? "font-medium text-muted-foreground dark:text-muted-foreground " : "font-semibold"
          )}
        >
          {region !== "" ? region : PLACEHOLDER}
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <Command className="dark:bg-darkBlue dark:text-white">
          <CommandInput placeholder="Search Region..." />
          <CommandList>
            <CommandEmpty>No Region found.</CommandEmpty>
            <CommandGroup>
              {uniqueRegions.map((uniRegion, index) => (
                <CommandItem
                  key={uniRegion + index}
                  value={uniRegion}
                  onSelect={(currentValue) => {
                    setRegion(currentValue === region ? "" : currentValue)
                    setOpen(false)
                  }}
                  className="dark:hover:bg-darkBackground"
                >
                  {uniRegion}
                  <Check
                    className={cn(
                      "ml-auto",
                      region === uniRegion ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
