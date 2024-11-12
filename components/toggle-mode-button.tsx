"use client"

import { LuMoon } from 'react-icons/lu'
import { Button } from './ui/button'

export default function ToggleModeButton() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <Button
      variant="ghost"
      className="dark:bg-darkBlue dark:hover:bg-darkBackground"
      onClick={toggleTheme}
    >
      <div className="flex justify-center items-center gap-x-1.5">
        <LuMoon className="size-4 text-muted-foreground dark:text-white" />
        <p className="text-muted-foreground dark:text-white font-semibold text-sm">Dark Mode</p>
      </div>
    </Button>
  )
}