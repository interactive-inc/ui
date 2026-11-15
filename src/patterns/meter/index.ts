import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Settled value within a known range (storage, seats, goals); no loading state. Task progress -> Progress.",
    "min, max set range; format (Intl.NumberFormat options) for units; getValueLabel for spoken description. Name with MeterLabel.",
    "Meter renders MeterTrack and MeterIndicator itself after children; do not place them inside (draws second bar).",
    "No state data attributes; reading in CSS var --meter-value and MeterIndicator width.",
    "Display only, no onValueChange. Agent: kind meter, named by MeterLabel, reads value/min/max, no actions.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "0〜100 の値を割合で見せる。",
      en: {
        title: "Basic",
        description: "Value 0 to 100 as a percentage.",
      },
    },
    {
      id: "format",
      title: "単位と通貨",
      description: "format に Intl.NumberFormat の設定を渡す。",
      en: {
        title: "Units and currency",
        description: "format takes Intl.NumberFormat options.",
      },
    },
    {
      id: "value-label",
      title: "読み上げの文を足す",
      description: "getValueLabel で、数字の意味を言葉にして伝える。",
      en: {
        title: "Value label",
        description: "getValueLabel words the value for screen readers.",
      },
    },
    {
      id: "goals",
      title: "目標との比較",
      description: "max を項目ごとに変え、達成度を並べて見せる。",
      en: {
        title: "Goals",
        description: "Own max per item to compare goal progress.",
      },
    },
  ],
} satisfies ComponentGuide
