import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "見せるものが何もないときに、その理由と次にできることを伝える枠。まだ何も作っていない一覧や、検索で何も見つからなかった結果の場所に置く。",
    "読み込みの途中なら Skeleton、失敗したなら Alert を使う。Empty は「空であること」が正しい状態のときに使い、空のまま放っておかずに次の一手へ案内する。",
    "EmptyHeader に絵、タイトル、説明をまとめ、ボタンは EmptyContent に置く。枠線が欲しいときは className で border を足す。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "アイコン、タイトル、説明で空の理由を伝える。",
      en: {
        title: "Basic",
        description:
          "Explain why it is empty with an icon, a title and a description.",
      },
    },
    {
      id: "with-action",
      title: "次の一手を添える",
      description: "EmptyContent にボタンを置き、最初の操作へ案内する。",
      en: {
        title: "With actions",
        description:
          "Put buttons in EmptyContent to guide people to the first step.",
      },
    },
    {
      id: "outline",
      title: "枠線で囲む",
      description: "className で border を足し、置き場所の範囲を見せる。",
      en: {
        title: "Outline",
        description:
          "Add border with className to show the area that will hold content.",
      },
    },
    {
      id: "no-results",
      title: "検索で見つからないとき",
      description: "検索の結果が空のときだけ Empty に切り替える。",
      en: {
        title: "No results",
        description: "Switch to Empty only when the search returns nothing.",
      },
    },
  ],
  en: {
    usage: [
      "A panel that explains why there is nothing to show and what to do next. Place it in lists that have nothing yet, or where a search found no results.",
      "Use Skeleton while content loads and Alert when loading fails. Use Empty when being empty is the correct state, and point people to the next step instead of leaving a blank area.",
      "Group the media, title and description in EmptyHeader, and put buttons in EmptyContent. Add border with className when you want an outline.",
    ],
  },
} satisfies ComponentGuide
