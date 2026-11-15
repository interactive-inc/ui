import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Same-field records compared across columns; stacked rows -> Item, single record -> Card.",
    "No sorting/filtering built in; keep state outside and rebuild rows.",
    "TableHead in TableHeader; TableFooter for totals, TableCaption for description. Numbers: text-right tabular-nums.",
    'Selected row: data-state="selected".',
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "見出しの行と本文の行で組む。数値の列は右寄せにする。",
      en: {
        title: "Basic",
        description: "Header row and body rows; numbers right-aligned.",
      },
    },
    {
      id: "with-footer",
      title: "合計と説明",
      description:
        "TableFooter に合計の行を置き、TableCaption で表が何を示すかを書く。",
      en: {
        title: "With footer",
        description: "TableFooter for totals, TableCaption for description.",
      },
    },
    {
      id: "with-status",
      title: "状態と操作",
      description:
        "状態を Badge で示し、行ごとの操作をアイコンのボタンで右端に置く。",
      en: {
        title: "With status",
        description: "Badge for status, icon buttons for row actions.",
      },
    },
    {
      id: "selectable",
      title: "行を選ぶ",
      description:
        "先頭の列に Checkbox を置き、選んだ行を useState に持つ。見出しの Checkbox で全件を切り替える。",
      en: {
        title: "Selectable rows",
        description: "Checkbox column; header Checkbox toggles all.",
      },
    },
  ],
} satisfies ComponentGuide
