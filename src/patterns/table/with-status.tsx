import { PencilIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    id: "INV-2611",
    customer: "株式会社みなと商事",
    status: "入金済み",
    due: "11/30",
  },
  {
    id: "INV-2612",
    customer: "青葉フーズ株式会社",
    status: "未入金",
    due: "11/30",
  },
  {
    id: "INV-2598",
    customer: "北斗工業株式会社",
    status: "期限切れ",
    due: "10/31",
  },
] as const

const variants = {
  入金済み: "secondary",
  未入金: "outline",
  期限切れ: "destructive",
} as const

export function TableWithStatus() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>請求書</TableHead>
          <TableHead>お客様</TableHead>
          <TableHead>状態</TableHead>
          <TableHead className="text-right">支払期限</TableHead>
          <TableHead className="w-12">
            <span className="sr-only">操作</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.customer}</TableCell>
            <TableCell>
              <Badge variant={variants[invoice.status]}>{invoice.status}</Badge>
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {invoice.due}
            </TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={`${invoice.id} を編集`}
              >
                <PencilIcon />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
