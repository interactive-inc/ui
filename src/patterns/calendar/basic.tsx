import { format, parseISO } from "date-fns"
import { ja } from "date-fns/locale"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarBasic() {
  const [date, setDate] = useState<string | null>("2026-11-20")

  return (
    <div className="flex w-fit flex-col gap-3">
      <Calendar
        aria-label="納品日"
        locale="ja-JP"
        today="2026-11-15"
        value={date}
        onValueChange={(value) => setDate(value)}
      />
      <p className="text-sm">
        {date === null
          ? "納品日を選んでください"
          : `納品日: ${format(parseISO(date), "M月d日(E)", { locale: ja })}`}
      </p>
    </div>
  )
}
