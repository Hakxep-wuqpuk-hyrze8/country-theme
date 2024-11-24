"use client"

import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

interface SelectorProps {
  current?: string;
  dataList: Array<string>,
  placeholder: string
};

export default function Selector({
  current, dataList, placeholder
}: SelectorProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  const onChangeHandler = (term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('region', term);
    } else {
      params.delete('region');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          // disabled={isGetCountryLoading}
          className={cn(
            "w-[240px] p-6 justify-between text-texts-dark select-none shadow-md rounded-none bg-white dark:bg-blue-900 dark:text-texts-light dark:hover:bg-backgrounds-dark transition-none",
            current === "" ? "font-medium text-muted-foreground dark:text-muted-foreground " : "font-semibold"
          )}
        >
          {current !== "" ? current : placeholder}
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <Command className="dark:bg-darkBlue dark:text-white">
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>No Region Found.</CommandEmpty>
            <CommandGroup>
              {dataList.map((data: string, index) => (
                <CommandItem
                  key={data + index}
                  value={data}
                  onSelect={(currentValue) => {
                    onChangeHandler(currentValue);
                    // setRegion(currentValue === data ? "" : currentValue)
                    setOpen(false)
                  }}
                  className="dark:hover:bg-darkBackground cursor-pointer"
                >
                  {data}
                  <Check
                    className={cn(
                      "ml-auto",
                      data === current ? "opacity-100" : "opacity-0"
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
