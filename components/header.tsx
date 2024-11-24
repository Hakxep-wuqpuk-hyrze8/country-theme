"use client"

import Link from "next/link";
import ToggleModeButton from './toggle-mode-button';

export default function Header() {
  return (
    <nav className="bg-white dark:bg-blue-900 w-full flex justify-between items-center p-7 drop-shadow-md">
      <Link href="/">
        <h1 className="text-xl font-extrabold text-texts-dark dark:text-texts-light">
          Where In The World?
        </h1>
      </Link>
      <ToggleModeButton />
    </nav>
  )
}
