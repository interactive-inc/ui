import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Short wait of unknown length, shown small. Known progress -> Progress; known content shape -> Skeleton.",
    'role status, default aria-label "読み込み中"; override aria-label to say what loads.',
    "In Button/Badge use data-icon to space it from the label.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "大きさと色は className で変える。",
      en: {
        title: "Basic",
        description: "Size and color via className.",
      },
    },
    {
      id: "in-button",
      title: "ボタンの中",
      description:
        "送信中はボタンを disabled にし、文言の前に Spinner を置く。",
      en: {
        title: "In a button",
        description: "Disable the button and put Spinner before the label.",
      },
    },
    {
      id: "in-badge",
      title: "バッジの中",
      description: "同期や審査のような、続いている状態を小さく示す。",
      en: {
        title: "In a badge",
        description: "Ongoing state, such as syncing, in small space.",
      },
    },
    {
      id: "with-text",
      title: "説明を添える",
      description: "何を待っているかを文で添え、aria-label も同じ内容にする。",
      en: {
        title: "With text",
        description: "Describe the wait; match aria-label.",
      },
    },
  ],
} satisfies ComponentGuide
