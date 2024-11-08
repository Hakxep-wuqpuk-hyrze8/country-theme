"use client"

import { LuMoon } from "react-icons/lu";

export default function Header() {
  return (
    <nav className="bg-white w-full flex justify-between items-center p-7 drop-shadow-md">
      <h1 className="text-xl font-extrabold text-darkText">
        Where In The World?
      </h1>
      <div className="flex justify-center items-center gap-x-1">
        <LuMoon className="size-4 text-muted-foreground" />
        <p className="text-muted-foreground font-semibold text-sm">Dark Mode</p>
      </div>
    </nav>
  )
}
