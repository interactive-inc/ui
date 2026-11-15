import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarMultiple() {
  const [dates, setDates] = useState<string[]>(["2026-11-18", "2026-11-25"])

  return (
    <div className="flex w-fit flex-col gap-3">
      <Calendar
        mode="multiple"
        aria-label="定期便のお届け日"
        locale="ja-JP"
        today="2026-11-15"
        value={dates}
        onValueChange={(value) => setDates(value ?? [])}
      />
      <p className="text-sm">お届け日を{dates.length}日選択中</p>
    </div>
  )
}
