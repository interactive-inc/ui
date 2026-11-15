import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Typed date segments (birthday, contract); calendar pick -> DatePicker; time only -> TimeInput.",
    "No children renders DateInputSegment per state.segments; order from locale or page lang.",
    'onValueChange: ISO ("2026-12-01"), null while incomplete/erased. granularity="minute" -> "2026-11-28T02:00".',
    "min/max; outside sets data-invalid and blocks submit. readOnly keeps value submitted.",
    "details.reason: input-change|step-key|paste|reset|restore|imperative. Segments are spinbuttons; paste fills all.",
    "Form: name -> hidden ISO input.",
    'Agent: kind date-input; actions setValue, clear. createDateInputController (focus("month")).',
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: 'locale="ja-JP" で年、月、日の順に入力する。',
      en: {
        title: "Basic",
        description: 'locale="ja-JP" orders year, month, day.',
      },
    },
    {
      id: "min-max",
      title: "入力できる範囲",
      description: "min と max で範囲を決め、入力した日付を説明に反映する。",
      en: {
        title: "Min and max",
        description: "min/max range; show entered date.",
      },
    },
    {
      id: "date-time",
      title: "日時を入力する",
      description: 'granularity="minute" で時刻まで入力する。',
      en: {
        title: "Date and time",
        description: 'granularity="minute" includes time.',
      },
    },
    {
      id: "read-only",
      title: "読み取り専用",
      description:
        "readOnly にすると、値はフォームで送られたまま変更だけを止める。",
      en: {
        title: "Read-only",
        description: "readOnly blocks edits but still submits.",
      },
    },
  ],
} satisfies ComponentGuide
