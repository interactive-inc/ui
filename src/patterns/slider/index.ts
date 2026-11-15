import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Rough number in a fixed range (volume, rate); exact typing -> NumberInput.",
    "Show current value beside the label. min 0, max 100 default; step, largeStep.",
    "Array value gives multiple thumbs (range); thumb count from value/defaultValue length.",
    "Only Slider and SliderValue exported; track/thumb built in.",
    "onValueChange fires every drag step; onValueCommit once at end -> save there. details: reason (track-press|drag|step-key|…), thumb.",
    "State attrs: data-dragging, data-orientation. Thumbs are native range inputs.",
    'Form: name -> FormData; range as "start/end" ("200/800").',
    "Agent: kind slider, action setValue (clamped, snapped to step). createSliderController.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "0〜100 の範囲で値を選ぶ。",
      en: {
        title: "Basic",
        description: "Choose a value from 0 to 100.",
      },
    },
    {
      id: "with-value",
      title: "値を表示する",
      description:
        "値を useState で持ち、ラベルの横と説明に表示する。step で5%刻みにする。",
      en: {
        title: "Showing the value",
        description: "Show value beside label; step in 5% increments.",
      },
    },
    {
      id: "range",
      title: "範囲を選ぶ",
      description: "value に配列を渡すと、つまみが2つの範囲選択になる。",
      en: {
        title: "Range",
        description: "Array value gives two thumbs for a range.",
      },
    },
    {
      id: "disabled",
      title: "変更できない",
      description: "Field に disabled を付け、変えられない理由を書く。",
      en: {
        title: "Disabled",
        description: "disabled Field with the reason.",
      },
    },
  ],
} satisfies ComponentGuide
