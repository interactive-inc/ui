import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { month: "8月", online: 86, store: 54 },
  { month: "9月", online: 102, store: 61 },
  { month: "10月", online: 118, store: 58 },
  { month: "11月", online: 131, store: 66 },
]

const config = {
  online: { label: "オンライン", color: "var(--chart-1)" },
  store: { label: "店舗", color: "var(--chart-2)" },
} satisfies ChartConfig

export function ChartMultipleBar() {
  return (
    <ChartContainer config={config} className="aspect-auto h-60 w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="online" fill="var(--color-online)" radius={4} />
        <Bar dataKey="store" fill="var(--color-store)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
