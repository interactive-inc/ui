import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Correct empty state (no data, no search results) with next step. Loading -> Skeleton; load failure -> Alert.",
    "Parts: EmptyHeader groups media, title, description; EmptyContent holds buttons. border via className for outline.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "アイコン、タイトル、説明で空の理由を伝える。",
      en: {
        title: "Basic",
        description: "Icon, title and description explain why.",
      },
    },
    {
      id: "with-action",
      title: "次の一手を添える",
      description: "EmptyContent にボタンを置き、最初の操作へ案内する。",
      en: {
        title: "With actions",
        description: "Buttons in EmptyContent guide the first step.",
      },
    },
    {
      id: "outline",
      title: "枠線で囲む",
      description: "className で border を足し、置き場所の範囲を見せる。",
      en: {
        title: "Outline",
        description: "border via className shows the content area.",
      },
    },
    {
      id: "no-results",
      title: "検索で見つからないとき",
      description: "検索の結果が空のときだけ Empty に切り替える。",
      en: {
        title: "No results",
        description: "Use Empty only when search returns nothing.",
      },
    },
  ],
} satisfies ComponentGuide
