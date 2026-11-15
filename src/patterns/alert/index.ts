import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Persistent in-page notice; no close control. Brief action result -> Toast; forced decision -> Alert Dialog.",
    "Parts: Alert, AlertTitle, AlertDescription, AlertAction. First child lucide icon aligns title/description to its right.",
    'variant="destructive" for irreversible failures. Next step: Button inside AlertAction (top right).',
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "アイコン、タイトル、説明の3つで組む。",
      en: {
        title: "Basic",
        description: "Icon, title and description.",
      },
    },
    {
      id: "destructive",
      title: "失敗を伝える",
      description:
        "variant を destructive にすると、文字とアイコンが警告の色になる。",
      en: {
        title: "Destructive",
        description: "Destructive variant colors text and icon as a warning.",
      },
    },
    {
      id: "with-action",
      title: "操作を添える",
      description: "AlertAction にボタンを置くと右上に収まる。",
      en: {
        title: "With an action",
        description: "Button in AlertAction sits at the top right.",
      },
    },
    {
      id: "with-link",
      title: "文中のリンク",
      description: "説明の中の a 要素には下線が付く。",
      en: {
        title: "With a link",
        description: "Links in the description are underlined.",
      },
    },
  ],
} satisfies ComponentGuide
