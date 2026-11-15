import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { month: "6月", sales: 412 },
  { month: "7月", sales: 486 },
  { month: "8月", sales: 398 },
  { month: "9月", sales: 521 },
  { month: "10月", sales: 563 },
  { month: "11月", sales: 586 },
]

const config = {
  sales: { label: "売上（万円）", color: "var(--chart-1)" },
} satisfies ChartConfig

export function ChartBar() {
  return (
    <ChartContainer config={config} className="aspect-auto h-60 w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="sales" fill="var(--color-sales)" radius={6} />
      </BarChart>
    </ChartContainer>
  )
}
