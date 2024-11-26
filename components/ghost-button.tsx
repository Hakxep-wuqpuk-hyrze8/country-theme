"use client"

import { MouseEventHandler } from "react"
import { Button } from "./ui/button"
import { IconType } from "react-icons/lib"

interface GhostButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  Icon?: React.ReactNode,
  text: string,
  size?: "default" | "sm" | "lg" | "icon",
  iconPosition?: "left" | "right",
};

export default function GhostButton({
  onClick, Icon, iconPosition = "left", text, size = "default"
}: GhostButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size={size}
      onClick={onClick}
    >
      <div className="flex justify-center items-center gap-x-1.5">
        {iconPosition === "left" && Icon}
        <p className="text-muted-foreground dark:text-texts-light font-semibold text-sm">{text}</p>
        {iconPosition === "right" && Icon}
      </div>
    </Button>
  )
}
