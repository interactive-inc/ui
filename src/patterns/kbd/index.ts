import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "キーボードのキーを示す小さな札。ショートカットの一覧や、ボタンや検索欄の横に操作のヒントを添えるときに使う。",
    "見た目だけの部品で、押しても何も起きない。キーの割り当てそのものはアプリ側で用意する。複数のキーを同時に押す組み合わせは KbdGroup でまとめる。",
    "Mac と Windows で違うキーは、利用者の環境に合わせて書き分ける。ボタン、入力欄、ツールチップの中に置くと、まわりに合わせて色が変わる。",
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
        description:
          "Place it after the button label to show the shortcut for the same action.",
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
  en: {
    usage: [
      "A small tag for a keyboard key. Use it in shortcut lists, or next to buttons and search fields as a hint.",
      "It is display only and does nothing when pressed. The app binds the keys itself. Group keys pressed together with KbdGroup.",
      "Write keys that differ between Mac and Windows for the user's platform. Inside a button, an input or a tooltip, it adapts its colors to the surroundings.",
    ],
  },
} satisfies ComponentGuide
