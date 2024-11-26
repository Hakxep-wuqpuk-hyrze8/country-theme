"use client"

import { LuMoon } from 'react-icons/lu'
import { useEffect } from 'react';
import GhostButton from './ghost-button';

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
    <GhostButton
      text="Dark Mode"
      onClick={toggleTheme}
      Icon={<LuMoon className="size-4 text-muted-foreground dark:text-texts-light" />}
    />
  )
}