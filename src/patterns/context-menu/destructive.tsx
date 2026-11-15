import { ArchiveIcon, PencilIcon, TrashIcon } from "lucide-react"
import { useState } from "react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuDestructive() {
  const [last, setLast] = useState("")

  return (
    <div className="flex w-full flex-col gap-2 text-sm">
      <ContextMenu onAction={(value) => setLast(value)}>
        <ContextMenuTrigger
          tabIndex={0}
          role="group"
          aria-label="下書き 年末年始の営業案内"
          className="flex flex-col gap-1 rounded-2xl border p-4"
        >
          <span className="font-medium">年末年始の営業案内</span>
          <span className="text-muted-foreground">下書き・11月13日に更新</span>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem value="編集">
            <PencilIcon />
            下書きを編集
          </ContextMenuItem>
          <ContextMenuItem value="アーカイブ">
            <ArchiveIcon />
            アーカイブ
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem
              value="削除"
              variant="destructive"
              data-agent-confirm="下書き「年末年始の営業案内」を削除します。取り消せません"
            >
              <TrashIcon />
              下書きを削除
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <span className="text-muted-foreground">
        {last === "" ? "カードを右クリックしてください" : `選んだ操作: ${last}`}
      </span>
    </div>
  )
}
