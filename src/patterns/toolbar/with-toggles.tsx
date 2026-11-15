"use client"

import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
} from "lucide-react"
import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Toolbar, ToolbarSeparator } from "@/components/ui/toolbar"

export function ToolbarWithToggles() {
  const [align, setAlign] = useState(["left"])
  const [bold, setBold] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <Toolbar aria-label="お知らせ本文の書式">
        <Toggle
          size="sm"
          aria-label="太字"
          pressed={bold}
          onPressedChange={(value) => setBold(value)}
        >
          <BoldIcon />
        </Toggle>
        <ToolbarSeparator />
        <ToggleGroup
          size="sm"
          spacing={1}
          aria-label="文字の揃え"
          deselectable={false}
          value={align}
          onValueChange={(value) => setAlign(value)}
        >
          <ToggleGroupItem value="left" aria-label="左揃え">
            <AlignLeftIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="中央揃え">
            <AlignCenterIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="右揃え">
            <AlignRightIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </Toolbar>
      <p className="text-muted-foreground text-sm">
        {bold ? "太字・" : ""}
        {align[0] === "center" ? "中央" : align[0] === "right" ? "右" : "左"}
        揃えで表示します
      </p>
    </div>
  )
}
