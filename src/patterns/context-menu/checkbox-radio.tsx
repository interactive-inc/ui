import { useState } from "react"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

const priorities = ["高", "中", "低"]

export function ContextMenuCheckboxRadio() {
  const [pinned, setPinned] = useState(false)
  const [priority, setPriority] = useState("中")

  return (
    <ContextMenu>
      <ContextMenuTrigger
        tabIndex={0}
        role="group"
        aria-label="問い合わせ #Q-319"
        className="flex w-full flex-col gap-1 rounded-2xl border p-4 text-sm"
      >
        <span className="font-medium">納品日の変更について</span>
        <span className="text-muted-foreground">
          優先度: {priority}
          {pinned && "・一覧の上に固定中"}
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuCheckboxItem
          value="pinned"
          checked={pinned}
          onCheckedChange={setPinned}
        >
          一覧の上に固定
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={priority} onValueChange={setPriority}>
          <ContextMenuLabel>優先度</ContextMenuLabel>
          {priorities.map((item) => (
            <ContextMenuRadioItem key={item} value={item}>
              {item}
            </ContextMenuRadioItem>
          ))}
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
