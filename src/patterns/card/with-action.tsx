import { MoreHorizontalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const orders = [
  { id: "10482", customer: "株式会社みなと商事", amount: "¥128,400" },
  { id: "10481", customer: "青葉フーズ株式会社", amount: "¥54,780" },
  { id: "10479", customer: "北斗工業株式会社", amount: "¥312,000" },
]

export function CardWithAction() {
  return (
    <Card className="w-full max-w-sm border">
      <CardHeader>
        <CardTitle>未出荷の注文</CardTitle>
        <CardDescription>今日の15時までに出荷する分</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm" aria-label="注文の操作">
            <MoreHorizontalIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2">
          {orders.map((order) => (
            <li key={order.id} className="flex justify-between gap-2">
              <span>
                #{order.id} {order.customer}
              </span>
              <span className="tabular-nums">{order.amount}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
