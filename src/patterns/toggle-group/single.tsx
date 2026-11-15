import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleGroupSingle() {
  return (
    <ToggleGroup
      variant="outline"
      deselectable={false}
      defaultValue={["left"]}
      aria-label="見出しの配置"
    >
      <ToggleGroupItem value="left" aria-label="左寄せ">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="中央寄せ">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="右寄せ">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
