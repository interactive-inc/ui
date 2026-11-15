import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "同じ項目を持つデータを行と列に並べて、比べたり探したりしやすくする。注文一覧、請求の明細、メンバーの一覧などに使う。",
    "1件ずつの情報を縦に流すなら Item、1件を大きく見せるなら Card を使う。Table は列をそろえて横に見比べたいときの部品。並べ替えや絞り込みは持たないので、必要なら外で値を持って行を作り直す。",
    'TableHeader の TableHead で列の名前を付け、金額や日付の列は text-right と tabular-nums で桁をそろえる。選択中の行には data-state="selected" を付けると背景が変わる。合計は TableFooter、表の説明は TableCaption に書く。',
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "見出しの行と本文の行で組む。数値の列は右寄せにする。",
      en: {
        title: "Basic",
        description:
          "Build it from a header row and body rows. Align numeric columns to the right.",
      },
    },
    {
      id: "with-footer",
      title: "合計と説明",
      description:
        "TableFooter に合計の行を置き、TableCaption で表が何を示すかを書く。",
      en: {
        title: "With footer",
        description:
          "Put a total row in TableFooter and describe what the table shows with TableCaption.",
      },
    },
    {
      id: "with-status",
      title: "状態と操作",
      description:
        "状態を Badge で示し、行ごとの操作をアイコンのボタンで右端に置く。",
      en: {
        title: "With status",
        description:
          "Show status with a Badge and place per-row actions as icon buttons at the right end.",
      },
    },
    {
      id: "selectable",
      title: "行を選ぶ",
      description:
        "先頭の列に Checkbox を置き、選んだ行を useState に持つ。見出しの Checkbox で全件を切り替える。",
      en: {
        title: "Selectable rows",
        description:
          "Put a Checkbox in the first column and keep selected rows in useState. The header Checkbox toggles all rows.",
      },
    },
  ],
  en: {
    usage: [
      "Lays out records with the same fields in rows and columns so they are easy to compare and scan. Use it for order lists, invoice lines or member lists.",
      "To stack records one by one, use Item. To feature a single record, use Card. Table is for lining up columns and comparing across them. It has no sorting or filtering built in, so keep those values outside and rebuild the rows.",
      'Name columns with TableHead inside TableHeader, and align amounts and dates with text-right and tabular-nums. Add data-state="selected" to a selected row to highlight it. Put totals in TableFooter and a description in TableCaption.',
    ],
  },
} satisfies ComponentGuide
