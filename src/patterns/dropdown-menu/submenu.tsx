import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuSubmenu() {
  const [last, setLast] = useState("")

  return (
    <div className="flex items-center gap-3 text-sm">
      <DropdownMenu onAction={(value) => setLast(value)}>
        <DropdownMenuTrigger className={buttonVariants({ variant: "outline" })}>
          書き出す
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem value="今月の注文をCSVで書き出し">
            今月の注文をCSVで
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              期間を選んで書き出す
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem value="先月の注文を書き出し">
                先月
              </DropdownMenuItem>
              <DropdownMenuItem value="直近3か月の注文を書き出し">
                直近3か月
              </DropdownMenuItem>
              <DropdownMenuItem value="今年度の注文を書き出し">
                今年度
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
      <span className="text-muted-foreground">{last}</span>
    </div>
  )
}
