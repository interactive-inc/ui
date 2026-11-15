import { useState } from "react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

const folders = ["2026年度 契約書", "2026年度 見積書", "保管期限切れ"]

export function ContextMenuSubmenu() {
  const [folder, setFolder] = useState("受信トレイ")

  return (
    <ContextMenu onAction={(value) => setFolder(value)}>
      <ContextMenuTrigger
        tabIndex={0}
        role="group"
        aria-label="契約書_みなと商事.pdf"
        className="flex w-full flex-col gap-1 rounded-2xl border p-4 text-sm"
      >
        <span className="font-medium">契約書_みなと商事.pdf</span>
        <span className="text-muted-foreground">保存先: {folder}</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem value="受信トレイ">受信トレイに戻す</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>フォルダに移動</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            {folders.map((item) => (
              <ContextMenuItem key={item} value={item}>
                {item}
              </ContextMenuItem>
            ))}
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  )
}
