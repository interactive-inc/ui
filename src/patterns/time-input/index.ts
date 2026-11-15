import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    'Typed time segments without date (business hours); date+time -> DateInput granularity="minute".',
    'locale sets format; hourCycle fixes 12/24h. granularity="second" adds seconds. No children renders segments.',
    'onValueChange: 24-hour string ("09:00"), null while incomplete, regardless of display clock.',
    "min/max; outside sets data-invalid, blocks submit. Start/end pairs: check order, tell people.",
    "Keys as DateInput. details.reason: input-change|step-key|paste|reset|restore|imperative.",
    "Form: name -> hidden input.",
    "Agent: kind time-input; actions setValue, clear. createTimeInputController.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "時と分を入力する。矢印キーで値を増減できる。",
      en: {
        title: "Basic",
        description: "Enter hours and minutes; arrows step.",
      },
    },
    {
      id: "hour-cycle",
      title: "12時間表記と秒",
      description:
        'hourCycle で表記を選び、granularity="second" で秒まで入力する。値はどちらも24時間表記になる。',
      en: {
        title: "12-hour clock and seconds",
        description: "hourCycle chooses 12- or 24-hour clock.",
      },
    },
    {
      id: "business-hours",
      title: "開始と終了",
      description: "2つの時刻を useState で持ち、前後関係と長さを説明に出す。",
      en: {
        title: "Start and end",
        description: "Start/end times; show order and length.",
      },
    },
  ],
} satisfies ComponentGuide
