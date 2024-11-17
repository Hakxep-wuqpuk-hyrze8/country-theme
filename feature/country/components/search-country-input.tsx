"use client"

import { ChangeEvent } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Input } from "../../../components/ui/input";
import { useQueryState, parseAsString } from "nuqs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

declare type SearchCountryInputProps = {
  onClickHandler?: (value: string) => void;
};

export default function SearchCountryInput({ onClickHandler }: SearchCountryInputProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [name, setName] = useQueryState(
    "name",
    parseAsString.withDefault("").withOptions({ clearOnDefault: true, history: 'push' })
  )

  const onChangeHandler = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    replace(`${pathname}?${params.toString()}`);
    if (onClickHandler) onClickHandler(e.target.value);
  }, 300);

  return (
    <div className="flex items-center justify-center gap-x-2 bg-white shadow-md px-4 select-none dark:bg-darkBlue dark:text-white">
      <IoSearchSharp className="size-6 text-muted-foreground dark:text-white" />
      <Input
        type="text"
        className="text-darkGray dark:bg-darkBlue dark:text-white"
        value={name}
        onChange={(e) => onChangeHandler(e)}
        placeholder="Search for a country..."
      />
    </div>
  )
}
