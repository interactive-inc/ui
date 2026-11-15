import { Calendar } from "@/components/ui/calendar"

export function CalendarUnavailable() {
  return (
    <div className="flex w-fit flex-col gap-3">
      <Calendar
        aria-label="ショールームの来店日"
        locale="ja-JP"
        today="2026-11-15"
        min="2026-11-16"
        max="2026-12-28"
        unavailable={[{ weekday: [0, 6] }, "2026-11-23"]}
      />
      <p className="text-muted-foreground text-sm">
        土日祝は休業日のため選べません。予約は12月28日まで受け付けています。
      </p>
    </div>
  )
}
