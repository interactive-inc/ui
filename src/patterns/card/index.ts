import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Self-contained block with heading and actions; one list row -> Item, row/column comparison -> Table.",
    'CardHeader (CardTitle, CardDescription, CardAction top-right), CardContent, CardFooter. size="sm" for tight.',
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "見出し、説明、本文、フッターの4つの段で組む。",
      en: {
        title: "Basic",
        description: "Title, description, content, footer.",
      },
    },
    {
      id: "with-action",
      title: "右上の操作",
      description:
        "CardAction に置いたボタンは見出しの右に並び、見出しが長くても位置がずれない。",
      en: {
        title: "With action",
        description: "CardAction sits right of the title.",
      },
    },
    {
      id: "stats",
      title: "数値の要約",
      description:
        'size="sm" の Card を並べ、売上や件数の要点を一目で比べられるようにする。',
      en: {
        title: "Stats",
        description: 'size="sm" cards for key figures.',
      },
    },
    {
      id: "with-form",
      title: "フォームを載せる",
      description: "入力欄を CardContent に、送信の操作を CardFooter に置く。",
      en: {
        title: "With form",
        description: "Fields in CardContent, submit in CardFooter.",
      },
    },
  ],
} satisfies ComponentGuide
