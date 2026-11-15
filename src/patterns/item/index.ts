import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "One list entry: media, title, description, actions; many contents -> Card, aligned columns -> Table.",
    "Order: ItemMedia, ItemContent (ItemTitle, ItemDescription), ItemActions. Wrap in ul/li, divide with ItemSeparator. Whole row link: render={<a />}.",
    "Display-only, not SDK-based; not in agent snapshot (only inner Buttons). ItemSeparator = SDK Separator.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "アイコン、見出しと説明、右端の操作を1行に並べる。",
      en: {
        title: "Basic",
        description: "Icon, title with description, right-side action.",
      },
    },
    {
      id: "variants",
      title: "見た目と大きさ",
      description:
        "variant で枠や背景を、size で余白を選ぶ。密な一覧には sm や xs を使う。",
      en: {
        title: "Variants and sizes",
        description: "variant sets border/background; size sets padding.",
      },
    },
    {
      id: "as-link",
      title: "行をリンクにする",
      description:
        "render に a 要素を渡すと、行全体が押せるリンクになり、ホバーで背景が変わる。",
      en: {
        title: "As link",
        description: "render={<a />} makes the whole row a link.",
      },
    },
    {
      id: "list",
      title: "一覧にする",
      description:
        "ul と li で一覧として読ませ、行の間を ItemSeparator で区切る。担当者は Avatar で示す。",
      en: {
        title: "List",
        description: "ul/li with ItemSeparator and Avatar.",
      },
    },
  ],
} satisfies ComponentGuide
