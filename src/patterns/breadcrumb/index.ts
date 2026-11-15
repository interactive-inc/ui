import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Back-to-parent trail above heading; not Tabs (view switch) or Pagination (same level).",
    "Last item BreadcrumbPage, not a link. Deep paths: fold middle with BreadcrumbEllipsis.",
    "Plain nav/ol/li/a, no SDK component, no state, not in agent snapshot. Only BreadcrumbLink takes render (router Link).",
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
          "BreadcrumbLink for parents, BreadcrumbPage for current page.",
      },
    },
    {
      id: "custom-separator",
      title: "区切りを変える",
      description:
        "BreadcrumbSeparator の子に文字やアイコンを渡すと、区切りの見た目を変えられる。",
      en: {
        title: "Custom separator",
        description: "Text or icon as BreadcrumbSeparator child.",
      },
    },
    {
      id: "collapsed",
      title: "途中を省略する",
      description:
        "深い階層は BreadcrumbEllipsis で途中をまとめ、行が折り返さないようにする。",
      en: {
        title: "Collapsed",
        description: "BreadcrumbEllipsis folds the middle of a deep path.",
      },
    },
    {
      id: "with-icon",
      title: "アイコン付き",
      description:
        "先頭のホームをアイコンにして短くする。文字がないので sr-only で名前を残す。",
      en: {
        title: "With icon",
        description: "Home icon first item with sr-only text.",
      },
    },
  ],
} satisfies ComponentGuide
