import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Score as stars (surveys, reviews); number matters -> Slider/NumberInput.",
    "max sets star count; step={0.5} allows half stars. No children renders star icons; one RatingItem child is enough.",
    "value null = no score. deselectable: re-press clears. readOnly (img role) for averages; name with aria-label.",
    "getValueLabel default is Japanese (「5点中3点」).",
    "Radio-like: single tab stop, arrows check. reason: item-press|list-navigation|reset|restore|imperative.",
    "State attrs: data-filled, data-partial, data-checked, data-highlighted; CSS var --rating-fill.",
    "Form: name -> FormData; required blocks submit without score.",
    "Agent: kind rating, action setValue. createRatingController.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "5つの星から評価を選ぶ。",
      en: {
        title: "Basic",
        description: "Choose a score from five stars.",
      },
    },
    {
      id: "half",
      title: "半分の星",
      description: "step={0.5} で星の半分まで選べるようにする。",
      en: {
        title: "Half stars",
        description: "step={0.5} allows half-star scores.",
      },
    },
    {
      id: "controlled",
      title: "評価に応じた言葉を出す",
      description:
        "値を useState で持ち、点数に合わせた言葉を出す。deselectable で取り消せる。",
      en: {
        title: "Describing the score",
        description: "Show a word per score; deselectable clears.",
      },
    },
    {
      id: "read-only",
      title: "表示だけ",
      description:
        "readOnly で平均点を表示する。小数の点数もそのまま星の塗りに出る。",
      en: {
        title: "Read-only",
        description: "readOnly average; fractions fill stars.",
      },
    },
  ],
} satisfies ComponentGuide
