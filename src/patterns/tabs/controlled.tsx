import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const periods = {
  week: { label: "今週", sales: "¥1,240,000" },
  month: { label: "今月", sales: "¥5,860,000" },
  quarter: { label: "四半期", sales: "¥17,320,000" },
}

type Period = keyof typeof periods

export function TabsControlled() {
  const [period, setPeriod] = useState<Period>("week")

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Tabs
        value={period}
        onValueChange={(value) => setPeriod(value as Period)}
      >
        <TabsList aria-label="集計期間">
          {Object.entries(periods).map(([value, item]) => (
            <TabsTrigger key={value} value={value}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(periods).map(([value, item]) => (
          <TabsContent key={value} value={value}>
            売上 {item.sales}
          </TabsContent>
        ))}
      </Tabs>
      <p className="text-muted-foreground text-xs">
        {periods[period].label}の集計を表示中
      </p>
    </div>
  )
}
