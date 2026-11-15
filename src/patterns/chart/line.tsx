import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { week: "10/6", inquiries: 42 },
  { week: "10/13", inquiries: 51 },
  { week: "10/20", inquiries: 47 },
  { week: "10/27", inquiries: 63 },
  { week: "11/3", inquiries: 72 },
  { week: "11/10", inquiries: 68 },
]

const config = {
  inquiries: { label: "問い合わせ件数", color: "var(--chart-1)" },
} satisfies ChartConfig

export function ChartLine() {
  return (
    <ChartContainer config={config} className="aspect-auto h-60 w-full">
      <LineChart accessibilityLayer data={data} margin={{ left: 4, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="week" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} width={32} />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <Line
          dataKey="inquiries"
          type="monotone"
          stroke="var(--color-inquiries)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  )
}
