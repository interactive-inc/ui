import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const lines = [
  { item: "業務用コピー用紙 A4 5箱", quantity: 2, price: 4200 },
  { item: "トナーカートリッジ 黒", quantity: 3, price: 18600 },
  { item: "ファイルボックス 10個入り", quantity: 1, price: 3900 },
]

const yen = (value: number) => `¥${value.toLocaleString("ja-JP")}`

export function TableWithFooter() {
  const total = lines.reduce((sum, line) => sum + line.quantity * line.price, 0)

  return (
    <Table>
      <TableCaption>注文 #10482 の明細（税込）</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>品目</TableHead>
          <TableHead className="text-right">数量</TableHead>
          <TableHead className="text-right">単価</TableHead>
          <TableHead className="text-right">小計</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lines.map((line) => (
          <TableRow key={line.item}>
            <TableCell>{line.item}</TableCell>
            <TableCell className="text-right tabular-nums">
              {line.quantity}
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {yen(line.price)}
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {yen(line.quantity * line.price)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>合計</TableCell>
          <TableCell className="text-right tabular-nums">
            {yen(total)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
