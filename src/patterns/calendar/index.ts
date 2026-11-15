import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Visible month to pick dates (booking, ranges); input-opened -> DatePicker; typing -> DateInput.",
    'Value ISO string ("2026-11-20"); mode single|multiple|range (range [start, end]); value type follows mode. No date library needed.',
    "Restrict: min, max, unavailable { weekday: [0, 6] } or date strings. Fixed today avoids hydration mismatch.",
    'No children renders full layout. captionLayout="dropdown" -> CalendarMonthSelect/CalendarYearSelect; months renders CalendarGrid per month.',
    "Day attrs: data-selected, data-today, data-outside, data-unavailable, data-disabled; range: data-range-start|middle|end, data-preview.",
    "Grid single tab stop; arrows day/week, Page keys month (Shift year). locale from prop or page lang.",
    "onValueChange / onMonthChange get details.reason, cancel(). No name prop; form dates -> DatePicker/DateInput.",
    "Agent: kind calendar; actions setValue, setMonth, previous, next. createCalendarController.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "1日を選び、date-fns で日本語の日付にして表示する。",
      en: {
        title: "Basic",
        description: "Single day, formatted with date-fns.",
      },
    },
    {
      id: "range",
      title: "期間を選ぶ",
      description: 'mode="range" で開始日と終了日を選び、日数を数える。',
      en: {
        title: "Range",
        description: 'mode="range" picks start and end.',
      },
    },
    {
      id: "multiple",
      title: "複数の日を選ぶ",
      description: 'mode="multiple" で値が日付の配列になる。',
      en: {
        title: "Multiple days",
        description: 'mode="multiple" gives an array of dates.',
      },
    },
    {
      id: "unavailable",
      title: "選べない日",
      description: "min と max で受付期間を決め、unavailable で休業日を外す。",
      en: {
        title: "Unavailable days",
        description: "min/max window; unavailable excludes closed days.",
      },
    },
  ],
} satisfies ComponentGuide
