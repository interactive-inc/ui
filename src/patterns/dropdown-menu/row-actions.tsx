import {
  CopyIcon,
  MoreHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from "lucide-react"
import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuRowActions() {
  const [last, setLast] = useState("")

  return (
    <div className="flex w-full flex-col gap-2 text-sm">
      <div className="flex items-center gap-3 rounded-2xl border px-4 py-2">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="font-medium">注文 #A-1024</span>
          <span className="truncate text-muted-foreground">
            株式会社みなと商事・38,500円
          </span>
        </div>
        <DropdownMenu onAction={(value) => setLast(value)}>
          <DropdownMenuTrigger
            aria-label="注文 #A-1024 の操作"
            className={buttonVariants({ variant: "ghost", size: "icon-sm" })}
          >
            <MoreHorizontalIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel>注文 #A-1024</DropdownMenuLabel>
              <DropdownMenuItem value="編集" shortcut="mod+e">
                <PencilIcon />
                注文を編集
              </DropdownMenuItem>
              <DropdownMenuItem value="複製" shortcut="mod+d">
                <CopyIcon />
                注文を複製
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              value="削除"
              variant="destructive"
              data-agent-confirm="注文 #A-1024 を削除します。取り消せません"
            >
              <TrashIcon />
              注文を削除
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <span className="text-muted-foreground">
        {last === "" ? "右端のボタンから操作を選べます" : `選んだ操作: ${last}`}
      </span>
    </div>
  )
}
