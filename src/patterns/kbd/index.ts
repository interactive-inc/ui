import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Display-only key tag; does not bind keys. KbdGroup for combinations.",
    "Write Mac/Windows keys per platform. Adapts colors inside button, input, tooltip.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "1つのキーは Kbd、組み合わせは KbdGroup で並べる。",
      en: {
        title: "Basic",
        description: "Use Kbd for a single key and KbdGroup for a combination.",
      },
    },
    {
      id: "shortcut-list",
      title: "ショートカットの一覧",
      description: "操作の名前とキーを左右に並べて、一覧にする。",
      en: {
        title: "Shortcut list",
        description:
          "List each action's name with its keys on the opposite side.",
      },
    },
    {
      id: "in-button",
      title: "ボタンに添える",
      description:
        "ボタンの文言の後ろに置いて、同じ操作のショートカットを示す。",
      en: {
        title: "In a button",
        description: "Place after the button label to show its shortcut.",
      },
    },
    {
      id: "in-input-group",
      title: "検索欄に添える",
      description:
        "InputGroupAddon の中に置くと、入力欄にフォーカスを移すキーを示せる。",
      en: {
        title: "In a search field",
        description:
          "Put it inside InputGroupAddon to show the key that focuses the field.",
      },
    },
  ],
} satisfies ComponentGuide
