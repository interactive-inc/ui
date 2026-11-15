import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const months = ["6月", "7月", "8月", "9月", "10月", "11月"]

const rows = [
  { team: "東京営業所", values: [182, 204, 176, 231, 248, 262] },
  { team: "大阪営業所", values: [121, 133, 118, 140, 152, 149] },
  { team: "名古屋営業所", values: [74, 81, 69, 88, 92, 97] },
  { team: "福岡営業所", values: [52, 57, 49, 61, 66, 71] },
  { team: "札幌営業所", values: [38, 41, 36, 44, 47, 50] },
  { team: "仙台営業所", values: [29, 33, 27, 35, 38, 40] },
  { team: "広島営業所", values: [26, 28, 25, 31, 33, 36] },
]

export function ScrollAreaWithTable() {
  return (
    <ScrollArea
      orientation="both"
      aria-label="営業所別の売上（万円）"
      className="h-64 w-full max-w-md rounded-2xl border"
    >
      <Table className="min-w-[36rem]">
        <TableHeader>
          <TableRow>
            <TableHead>営業所</TableHead>
            {months.map((month) => (
              <TableHead key={month} className="text-right">
                {month}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.team}>
              <TableCell className="font-medium">{row.team}</TableCell>
              {row.values.map((value, index) => (
                <TableCell
                  key={months[index]}
                  className="text-right tabular-nums"
                >
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}
