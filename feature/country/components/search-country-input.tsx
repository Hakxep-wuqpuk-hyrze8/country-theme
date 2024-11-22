"use client"

import { IoSearchSharp } from "react-icons/io5";
import { Input } from "../../../components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

declare type SearchCountryInputProps = {
  onClickHandler?: (value: string) => void;
};

export default function SearchCountryInput({ onClickHandler }: SearchCountryInputProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChangeHandler = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('name', term);
    } else {
      params.delete('name');
    }
    replace(`${pathname}?${params.toString()}`);
    if (onClickHandler) onClickHandler(term);
  }, 300);

  return (
    <div className="flex items-center justify-center gap-x-2 bg-white shadow-md px-4 select-none dark:bg-darkBlue dark:text-white">
      <IoSearchSharp className="size-6 text-muted-foreground dark:text-white" />
      <Input
        type="text"
        className="text-darkGray dark:bg-darkBlue dark:text-white"
        onChange={(e) => onChangeHandler(e.target.value)}
        placeholder="Search for a country..."
        defaultValue={searchParams.get("name")?.toString()}
      />
    </div>
  )
}
