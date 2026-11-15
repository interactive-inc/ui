import { ArrowUpDownIcon } from "lucide-react"
import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const orders = [
  { value: "newest", label: "注文日が新しい順" },
  { value: "oldest", label: "注文日が古い順" },
  { value: "total", label: "金額が大きい順" },
]

export function DropdownMenuRadio() {
  const [sort, setSort] = useState("newest")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={buttonVariants({ variant: "outline" })}>
        <ArrowUpDownIcon />
        並び順
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
          <DropdownMenuLabel>注文の並び順</DropdownMenuLabel>
          {orders.map((order) => (
            <DropdownMenuRadioItem key={order.value} value={order.value}>
              {order.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
