import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "いまのページが階層のどこにあるかを示し、上の階層へ戻る道を作る。ページの上部、見出しの直前に置く。",
    "画面を切り替える Tabs や、同じ階層を行き来する Pagination とは役割が違う。Breadcrumb は親へさかのぼるためだけに使う。",
    "最後の項目は BreadcrumbPage にしてリンクにしない。階層が深いときは途中を BreadcrumbEllipsis でまとめ、最初と最後の数段だけを見せる。",
  ],
  sdk: [
    "Breadcrumb は UI SDK の部品を土台にしておらず、nav、ol、li、a をそのまま出している。BreadcrumbLink だけは `@ui-sdk/react/primitive` の renderElement を通しているので、SDK の部品と同じ render を受け取り、ルーターの Link などに差し替えられる。状態を持たないので、エージェントのスナップショットには操作できる部品として出てこない。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "BreadcrumbLink で親の階層をつなぎ、いまのページを BreadcrumbPage で締める。",
      en: {
        title: "Basic",
        description:
          "Link the parent levels with BreadcrumbLink and end with the current page as BreadcrumbPage.",
      },
    },
    {
      id: "custom-separator",
      title: "区切りを変える",
      description:
        "BreadcrumbSeparator の子に文字やアイコンを渡すと、区切りの見た目を変えられる。",
      en: {
        title: "Custom separator",
        description:
          "Pass text or an icon as the child of BreadcrumbSeparator to change how the divider looks.",
      },
    },
    {
      id: "collapsed",
      title: "途中を省略する",
      description:
        "深い階層は BreadcrumbEllipsis で途中をまとめ、行が折り返さないようにする。",
      en: {
        title: "Collapsed",
        description:
          "Fold the middle of a deep path into BreadcrumbEllipsis so the trail stays on one line.",
      },
    },
    {
      id: "with-icon",
      title: "アイコン付き",
      description:
        "先頭のホームをアイコンにして短くする。文字がないので sr-only で名前を残す。",
      en: {
        title: "With icon",
        description:
          "Shorten the first item to a home icon. Keep its name with sr-only text since there is no visible label.",
      },
    },
  ],
  en: {
    usage: [
      "Shows where the current page sits in the hierarchy and gives a way back up. Place it at the top of the page, right before the heading.",
      "It differs from Tabs, which switch views, and Pagination, which moves across the same level. Use Breadcrumb only to go back to parent levels.",
      "Make the last item a BreadcrumbPage, not a link. For deep paths, fold the middle into BreadcrumbEllipsis and show only the first and last few levels.",
    ],
    sdk: [
      "Breadcrumb is not built on a UI SDK component; it renders plain nav, ol, li and a elements. Only BreadcrumbLink goes through renderElement from `@ui-sdk/react/primitive`, so it takes the same render prop as SDK parts and can be swapped for a router Link. It holds no state, so it does not appear in an agent's snapshot as a component to act on.",
    ],
  },
} satisfies ComponentGuide
