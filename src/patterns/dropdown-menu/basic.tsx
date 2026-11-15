import { LogOutIcon, SettingsIcon, UserIcon } from "lucide-react"
import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuBasic() {
  const [last, setLast] = useState("")

  return (
    <div className="flex items-center gap-3 text-sm">
      <DropdownMenu onAction={(value) => setLast(value)}>
        <DropdownMenuTrigger className={buttonVariants({ variant: "outline" })}>
          アカウント
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem value="プロフィール">
            <UserIcon />
            プロフィール
          </DropdownMenuItem>
          <DropdownMenuItem value="アカウント設定">
            <SettingsIcon />
            アカウント設定
          </DropdownMenuItem>
          <DropdownMenuItem value="ログアウト">
            <LogOutIcon />
            ログアウト
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <span className="text-muted-foreground">
        {last === "" ? "項目を選んでください" : `選んだ項目: ${last}`}
      </span>
    </div>
  )
}
