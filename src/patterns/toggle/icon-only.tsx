import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function ToggleIconOnly() {
  return (
    <div className="flex items-center gap-1">
      <Toggle size="sm" aria-label="太字">
        <BoldIcon />
      </Toggle>
      <Toggle size="sm" aria-label="斜体">
        <ItalicIcon />
      </Toggle>
      <Toggle size="sm" aria-label="下線">
        <UnderlineIcon />
      </Toggle>
    </div>
  )
}
