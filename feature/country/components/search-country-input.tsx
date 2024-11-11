"use client"

import { ChangeEvent } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Input } from "../../../components/ui/input";
import { useQueryState, parseAsString } from "nuqs";

declare type SearchCountryInputProps = {
  onClickHandler?: (value: string) => void;
};

export default function SearchCountryInput({ onClickHandler }: SearchCountryInputProps) {
  const [name, setName] = useQueryState(
    "name",
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  )

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onClickHandler && onClickHandler(e.target.value);
  }

  return (
    <div className="flex items-center justify-center gap-x-2 bg-white shadow-md px-4 select-none">
      <IoSearchSharp className="size-6 text-muted-foreground" />
      <Input
        type="text"
        className="text-darkGray"
        value={name}
        onChange={(e) => onChangeHandler(e)}
        placeholder="Search for a country..."
      />
    </div>
  )
}
