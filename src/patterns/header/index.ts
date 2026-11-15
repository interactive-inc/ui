import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Full-width app header above sidebar and page; sticky, translucent with backdrop-blur.",
    "Parts: Header > HeaderTitle (HeaderLogo, HeaderSeparator, HeaderLink) + HeaderActions (right end).",
    "Title = logo then path (logo / service / app). Logo is an image link, path is text links; never buttons.",
    "HeaderLink current marks this app (aria-current=page). render={<Link href />} for router links.",
    "HeaderActions holds global settings only (theme switch). Page actions go in the page heading.",
    "Height from --header-height (default 3.5rem); set it on SidebarProvider so Sidebar starts below.",
    "Plain elements, no SDK state; links are not in the agent snapshot.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "左にロゴとパンくず、右端にどのページでも使う設定を置く。",
      en: {
        title: "Basic",
        description: "Logo and path on the left, global settings at the right.",
      },
    },
    {
      id: "with-navigation",
      title: "ナビゲーションを並べる",
      description:
        "サイドバーのないサイトでは、タイトルの右にページの移動を並べる。",
      en: {
        title: "With navigation",
        description: "Sites without a sidebar put page links after the title.",
      },
    },
    {
      id: "with-sidebar",
      title: "サイドバーと組み合わせる",
      description:
        "--header-height を SidebarProvider に渡すと、Sidebar がヘッダーの下から始まる。",
      en: {
        title: "With a sidebar",
        description:
          "Set --header-height on SidebarProvider; Sidebar starts below.",
      },
    },
  ],
} satisfies ComponentGuide
