import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const orders = [
  {
    id: "10482",
    customer: "株式会社みなと商事",
    date: "11/12",
    amount: "¥128,400",
  },
  {
    id: "10481",
    customer: "青葉フーズ株式会社",
    date: "11/12",
    amount: "¥54,780",
  },
  {
    id: "10480",
    customer: "有限会社さくら工房",
    date: "11/11",
    amount: "¥8,800",
  },
  {
    id: "10479",
    customer: "北斗工業株式会社",
    date: "11/10",
    amount: "¥312,000",
  },
]

export function TableBasic() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>注文番号</TableHead>
          <TableHead>お客様</TableHead>
          <TableHead className="text-right">注文日</TableHead>
          <TableHead className="text-right">金額</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">#{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell className="text-right tabular-nums">
              {order.date}
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {order.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
