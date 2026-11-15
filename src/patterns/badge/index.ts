import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Short state/category label. Actions -> Button; removable chosen values -> Token Input.",
    "variant: default, destructive for attention; secondary, outline otherwise.",
    "Not an SDK component; renders span. render={<a href />} makes a link (via renderElement); still absent from agent snapshot.",
  ],
  patterns: [
    {
      id: "variants",
      title: "見た目の種類",
      description: "状態の重さに合わせて variant を選ぶ。",
      en: {
        title: "Variants",
        description: "Pick a variant matching the state's weight.",
      },
    },
    {
      id: "with-icon",
      title: "アイコン付き",
      description: "data-icon を付けたアイコンを文言の前に置く。",
      en: {
        title: "With an icon",
        description: "Icon with data-icon before the label.",
      },
    },
    {
      id: "as-link",
      title: "リンクとして描く",
      description: "render に a 要素を渡すと、絞り込みのリンクになる。",
      en: {
        title: "As a link",
        description: "render an a element for a filter link.",
      },
    },
    {
      id: "in-list",
      title: "一覧の状態",
      description:
        "一覧の各行の末尾に置き、対応の状況を見比べられるようにする。",
      en: {
        title: "In a list",
        description: "One per row to compare statuses.",
      },
    },
  ],
} satisfies ComponentGuide
