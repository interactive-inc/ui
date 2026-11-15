"use client"

import { StarIcon } from "lucide-react"
import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"

export function ToggleBasic() {
  const [pressed, setPressed] = useState(false)

  return (
    <div className="flex items-center gap-3">
      <Toggle pressed={pressed} onPressedChange={(value) => setPressed(value)}>
        <StarIcon data-icon="inline-start" />
        よく使う商品に追加
      </Toggle>
      <span className="text-muted-foreground text-sm">
        {pressed ? "一覧の先頭に表示します" : "通常の並び順です"}
      </span>
    </div>
  )
}
