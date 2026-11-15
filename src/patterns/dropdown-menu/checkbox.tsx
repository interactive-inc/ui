import { Columns3Icon } from "lucide-react"
import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuCheckbox() {
  const [showCustomer, setShowCustomer] = useState(true)
  const [showTotal, setShowTotal] = useState(true)
  const [showMemo, setShowMemo] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={buttonVariants({ variant: "outline" })}>
        <Columns3Icon />
        表示する列
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>注文一覧の列</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            value="customer"
            checked={showCustomer}
            onCheckedChange={setShowCustomer}
          >
            取引先
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            value="total"
            checked={showTotal}
            onCheckedChange={setShowTotal}
          >
            合計金額
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            value="memo"
            checked={showMemo}
            onCheckedChange={setShowMemo}
          >
            社内メモ
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
