import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "ページの中に置いたまま、読んでほしい知らせを伝える枠。メンテナンスの予告や支払いの失敗など、ページを開いている間ずっと見えていてほしい内容に使う。",
    "操作の結果を一時的に知らせるだけなら Toast、続ける前に必ず判断してほしいなら Alert Dialog を使う。Alert は流れを止めず、閉じる操作も持たない。",
    "先頭に lucide のアイコンを置くと、タイトルと説明がアイコンの右にそろう。取り返しのつかない失敗は destructive にし、次の一手は AlertAction にボタンで置く。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "アイコン、タイトル、説明の3つで組む。",
      en: {
        title: "Basic",
        description: "Build it from an icon, a title and a description.",
      },
    },
    {
      id: "destructive",
      title: "失敗を伝える",
      description:
        "variant を destructive にすると、文字とアイコンが警告の色になる。",
      en: {
        title: "Destructive",
        description:
          "Set variant to destructive to color the text and icon as a warning.",
      },
    },
    {
      id: "with-action",
      title: "操作を添える",
      description: "AlertAction にボタンを置くと右上に収まる。",
      en: {
        title: "With an action",
        description:
          "Put a button in AlertAction to place it at the top right.",
      },
    },
    {
      id: "with-link",
      title: "文中のリンク",
      description: "説明の中の a 要素には下線が付く。",
      en: {
        title: "With a link",
        description: "Links inside the description are underlined.",
      },
    },
  ],
  en: {
    usage: [
      "A box that stays on the page to tell people something they should read. Use it for things that should remain visible while the page is open, such as scheduled maintenance or a failed payment.",
      "Use Toast to report the result of an action briefly, and Alert Dialog when people must decide before going on. Alert does not interrupt the flow and has no close control.",
      "Put a lucide icon first and the title and description line up to its right. Use destructive for failures that cannot be undone, and put the next step as a button in AlertAction.",
    ],
  },
} satisfies ComponentGuide
