import { differenceInCalendarDays, parseISO } from "date-fns"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarRange() {
  const [range, setRange] = useState<[string, string] | null>([
    "2026-12-24",
    "2026-12-26",
  ])

  const days =
    range === null
      ? null
      : differenceInCalendarDays(parseISO(range[1]), parseISO(range[0])) + 1

  return (
    <div className="flex w-fit flex-col gap-3">
      <Calendar
        mode="range"
        aria-label="休暇の期間"
        locale="ja-JP"
        today="2026-11-15"
        defaultMonth="2026-12"
        value={range}
        onValueChange={(value) => setRange(value)}
      />
      <p className="text-sm">
        {days === null
          ? "開始日と終了日を選んでください"
          : `休暇は${days}日間です`}
      </p>
    </div>
  )
}
