import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "ひとまとまりの情報と、それに対する操作を1枚の面にまとめる。売上の集計、案件の概要、設定の1項目などを区切って見せるときに使う。",
    "一覧の1行なら Item、行と列で比べるなら Table を使う。Card は中身の量が多く、見出しと操作を持つ独立したかたまりに向く。",
    'CardHeader に CardTitle と CardDescription、右上の操作は CardAction に置く。本文は CardContent、確定の操作は CardFooter。小さく詰めたいときは size="sm"。',
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "見出し、説明、本文、フッターの4つの段で組む。",
      en: {
        title: "Basic",
        description:
          "Build it from four parts: title, description, content and footer.",
      },
    },
    {
      id: "with-action",
      title: "右上の操作",
      description:
        "CardAction に置いたボタンは見出しの右に並び、見出しが長くても位置がずれない。",
      en: {
        title: "With action",
        description:
          "A button in CardAction sits to the right of the title and stays in place even when the title is long.",
      },
    },
    {
      id: "stats",
      title: "数値の要約",
      description:
        'size="sm" の Card を並べ、売上や件数の要点を一目で比べられるようにする。',
      en: {
        title: "Stats",
        description:
          'Line up small cards with size="sm" so key figures like sales and counts can be compared at a glance.',
      },
    },
    {
      id: "with-form",
      title: "フォームを載せる",
      description: "入力欄を CardContent に、送信の操作を CardFooter に置く。",
      en: {
        title: "With form",
        description:
          "Put the fields in CardContent and the submit action in CardFooter.",
      },
    },
  ],
  en: {
    usage: [
      "Groups a piece of information and its actions onto one surface. Use it to separate things like a sales summary, a project overview or a single setting.",
      "For one row of a list, use Item. To compare across rows and columns, use Table. Card suits a self-contained block with more content, a heading and its own actions.",
      'Put CardTitle and CardDescription in CardHeader, and the top-right action in CardAction. Body goes in CardContent and confirming actions in CardFooter. Use size="sm" for a tighter card.',
    ],
  },
} satisfies ComponentGuide
