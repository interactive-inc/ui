import { useState } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/ui/segmented-control"

type Period = "day" | "week" | "month"

const sales: Record<Period, { amount: string; orders: number }> = {
  day: { amount: "128,400円", orders: 32 },
  week: { amount: "864,200円", orders: 211 },
  month: { amount: "3,512,900円", orders: 846 },
}

export function SegmentedControlSwitchContent() {
  const [period, setPeriod] = useState<Period>("week")

  return (
    <div className="flex flex-col gap-4">
      <Field>
        <FieldLabel>集計期間</FieldLabel>
        <SegmentedControl<Period>
          name="period"
          value={period}
          onValueChange={(value) => {
            if (value !== null) setPeriod(value)
          }}
        >
          <SegmentedControlItem value="day">日</SegmentedControlItem>
          <SegmentedControlItem value="week">週</SegmentedControlItem>
          <SegmentedControlItem value="month">月</SegmentedControlItem>
        </SegmentedControl>
      </Field>
      <div className="flex gap-8 rounded-xl bg-muted p-4 text-sm">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">売上</span>
          <span className="font-medium text-lg">{sales[period].amount}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">注文数</span>
          <span className="font-medium text-lg">{sales[period].orders}件</span>
        </div>
      </div>
    </div>
  )
}
