import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const orders = [
  { id: "A-1041", customer: "青葉商事", status: "unpaid" },
  { id: "A-1042", customer: "みなと物流", status: "shipping" },
  { id: "A-1043", customer: "さくら食品", status: "done" },
  { id: "A-1044", customer: "北斗システム", status: "shipping" },
]

export function ToggleGroupFilter() {
  const [statuses, setStatuses] = useState<string[]>(["shipping"])

  const visible =
    statuses.length === 0
      ? orders
      : orders.filter((order) => statuses.includes(order.status))

  return (
    <div className="flex flex-col gap-3">
      <ToggleGroup
        multiple
        size="sm"
        value={statuses}
        onValueChange={(value) => setStatuses(value)}
        aria-label="ステータスで絞り込む"
      >
        <ToggleGroupItem value="unpaid">未入金</ToggleGroupItem>
        <ToggleGroupItem value="shipping">発送準備中</ToggleGroupItem>
        <ToggleGroupItem value="done">完了</ToggleGroupItem>
      </ToggleGroup>
      <ul className="flex flex-col divide-y text-sm">
        {visible.map((order) => (
          <li key={order.id} className="flex justify-between py-2">
            <span>{order.customer}</span>
            <span className="text-muted-foreground tabular-nums">
              {order.id}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
