import { useState } from "react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuBasic() {
  const [last, setLast] = useState("")

  return (
    <div className="flex w-full flex-col gap-2 text-sm">
      <ContextMenu onAction={(value) => setLast(value)}>
        <ContextMenuTrigger
          tabIndex={0}
          role="group"
          aria-label="問い合わせ #Q-318"
          className="flex flex-col gap-1 rounded-2xl border p-4"
        >
          <span className="font-medium">請求書の宛名変更について</span>
          <span className="text-muted-foreground">
            株式会社みなと商事・11月14日
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem value="開く" shortcut="mod+o">
            問い合わせを開く
          </ContextMenuItem>
          <ContextMenuItem value="返信" shortcut="mod+r">
            返信する
          </ContextMenuItem>
          <ContextMenuItem value="リンクをコピー">
            リンクをコピー
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <span className="text-muted-foreground">
        {last === "" ? "カードを右クリックしてください" : `選んだ操作: ${last}`}
      </span>
    </div>
  )
}
