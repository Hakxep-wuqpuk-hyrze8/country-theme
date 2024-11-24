"use client"

import { LuMoon } from 'react-icons/lu'
import { Button } from './ui/button'
import { useEffect } from 'react';

export default function ToggleModeButton() {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <Button
      variant="ghost"
      className="dark:bg-blue-900 dark:hover:bg-backgrounds-dark"
      onClick={toggleTheme}
    >
      <div className="flex justify-center items-center gap-x-1.5">
        <LuMoon className="size-4 text-muted-foreground dark:text-texts-light" />
        <p className="text-muted-foreground dark:text-texts-light font-semibold text-sm">Dark Mode</p>
      </div>
    </Button>
  )
}