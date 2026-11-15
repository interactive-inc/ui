import { Pie, PieChart } from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { channel: "web", orders: 412, fill: "var(--color-web)" },
  { channel: "phone", orders: 138, fill: "var(--color-phone)" },
  { channel: "fax", orders: 46, fill: "var(--color-fax)" },
  { channel: "sales", orders: 96, fill: "var(--color-sales)" },
]

const config = {
  orders: { label: "受注件数" },
  web: { label: "Web", color: "var(--chart-1)" },
  phone: { label: "電話", color: "var(--chart-2)" },
  fax: { label: "FAX", color: "var(--chart-3)" },
  sales: { label: "営業担当", color: "var(--chart-4)" },
} satisfies ChartConfig

export function ChartPie() {
  return (
    <ChartContainer config={config} className="mx-auto aspect-square h-64">
      <PieChart>
        <ChartTooltip
          content={<ChartTooltipContent nameKey="channel" hideLabel />}
        />
        <Pie data={data} dataKey="orders" nameKey="channel" innerRadius={56} />
        <ChartLegend content={<ChartLegendContent nameKey="channel" />} />
      </PieChart>
    </ChartContainer>
  )
}
