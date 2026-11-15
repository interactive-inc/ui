import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { month: "6月", subscription: 280, onboarding: 90, support: 42 },
  { month: "7月", subscription: 302, onboarding: 120, support: 64 },
  { month: "8月", subscription: 318, onboarding: 48, support: 32 },
  { month: "9月", subscription: 335, onboarding: 130, support: 56 },
  { month: "10月", subscription: 351, onboarding: 140, support: 72 },
  { month: "11月", subscription: 372, onboarding: 150, support: 64 },
]

const config = {
  subscription: { label: "月額利用料", color: "var(--chart-1)" },
  onboarding: { label: "導入支援", color: "var(--chart-2)" },
  support: { label: "保守", color: "var(--chart-3)" },
} satisfies ChartConfig

export function ChartStackedArea() {
  return (
    <ChartContainer config={config} className="aspect-auto h-64 w-full">
      <AreaChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Area
          dataKey="support"
          stackId="sales"
          type="monotone"
          fill="var(--color-support)"
          stroke="var(--color-support)"
          fillOpacity={0.4}
        />
        <Area
          dataKey="onboarding"
          stackId="sales"
          type="monotone"
          fill="var(--color-onboarding)"
          stroke="var(--color-onboarding)"
          fillOpacity={0.4}
        />
        <Area
          dataKey="subscription"
          stackId="sales"
          type="monotone"
          fill="var(--color-subscription)"
          stroke="var(--color-subscription)"
          fillOpacity={0.4}
        />
      </AreaChart>
    </ChartContainer>
  )
}
