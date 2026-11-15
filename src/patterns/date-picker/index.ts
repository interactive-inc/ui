import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Date in forms: input + calendar popup; always-visible -> Calendar; typing only -> DateInput.",
    "DatePickerGroup > DatePickerInput + DatePickerTrigger; DatePickerCalendar in DatePickerContent. Icon-only trigger/clear need aria-label.",
    "DatePickerGroup, DatePickerSeparator, DatePickerPresets are library layout wrappers, not SDK. Presets: DatePickerPreset.",
    'mode="range": two inputs, end on second; group in FieldSet + FieldLegend.',
    "Input commits on Enter/blur; Alt+ArrowDown opens. Invalid text stays, sets aria-invalid/data-invalid, value unchanged.",
    "onValueChange ISO; details.reason: item-press|input-commit|preset-press|clear-press. Also onOpenChange, onMonthChange.",
    "Form: name -> ISO; range startName/endName. Field name used if none given.",
    "Month/year dropdowns not in DatePickerCalendar; import Calendar parts from @ui-sdk/react/date-picker as DatePickerContent children.",
    "Agent: kind date-picker; actions setOpen, setValue, clear, setMonth, previous, next. controller open() resolves on close (createDatePickerController).",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "入力欄とカレンダーを開くボタンを並べる。打ち込んでも選んでもよい。",
      en: {
        title: "Basic",
        description: "Input beside calendar button; type or pick.",
      },
    },
    {
      id: "presets",
      title: "よく使う日付",
      description:
        "DatePickerPreset で月末のような決まった日付を1回で選べるようにする。",
      en: {
        title: "Presets",
        description: "DatePickerPreset for common dates.",
      },
    },
    {
      id: "unavailable",
      title: "選べない日と消去",
      description:
        "min、max、unavailable で選べる日を絞り、DatePickerClear で値を消せるようにする。",
      en: {
        title: "Unavailable days and clearing",
        description: "min/max/unavailable; DatePickerClear to clear.",
      },
    },
    {
      id: "range",
      title: "期間を選ぶ",
      description:
        'mode="range" で開始日と終了日の入力欄を並べ、カレンダーを2か月分見せる。',
      en: {
        title: "Range",
        description: 'mode="range" with two inputs.',
      },
    },
  ],
} satisfies ComponentGuide
