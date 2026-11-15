import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleGroupMultiple() {
  return (
    <ToggleGroup multiple defaultValue={["bold"]} aria-label="文字の装飾">
      <ToggleGroupItem value="bold" aria-label="太字">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="斜体">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="下線">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
