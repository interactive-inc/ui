import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "状態や分類を短い言葉で添える小さな札。「下書き」「期限切れ」のように、一覧や見出しの横で、その項目がどういう状態かをひと目で伝える。",
    "押して何かを実行するなら Button、選んだ値を並べて消せるようにするなら Token Input を使う。Badge は基本的に読むためのもので、押せるのはリンクとして描いたときだけにする。",
    "variant で強さを選ぶ。注意を引くのは default と destructive に絞り、ほかは secondary や outline にする。リンクにするときは render に a 要素を渡す。",
  ],
  sdk: [
    "UI SDK の部品ではなく span を描くだけだが、render は @ui-sdk/react/primitive の renderElement で受けている。render に a 要素などを渡すと、Badge の className と props がその要素に載る。操作部品ではないので、リンクにしてもエージェントの snapshot には出ない。",
  ],
  patterns: [
    {
      id: "variants",
      title: "見た目の種類",
      description: "状態の重さに合わせて variant を選ぶ。",
      en: {
        title: "Variants",
        description: "Pick a variant that matches the weight of the state.",
      },
    },
    {
      id: "with-icon",
      title: "アイコン付き",
      description: "data-icon を付けたアイコンを文言の前に置く。",
      en: {
        title: "With an icon",
        description: "Place an icon with data-icon before the label.",
      },
    },
    {
      id: "as-link",
      title: "リンクとして描く",
      description: "render に a 要素を渡すと、絞り込みのリンクになる。",
      en: {
        title: "As a link",
        description:
          "Pass an a element to render to turn it into a filter link.",
      },
    },
    {
      id: "in-list",
      title: "一覧の状態",
      description:
        "一覧の各行の末尾に置き、対応の状況を見比べられるようにする。",
      en: {
        title: "In a list",
        description:
          "Put one at the end of each row so people can compare statuses.",
      },
    },
  ],
  en: {
    usage: [
      "A small label that adds a state or category in a few words. Next to list items or headings, it tells at a glance what state an item is in, such as draft or expired.",
      "Use Button to run an action, and Token Input to show chosen values that can be removed. A badge is mostly for reading; make it interactive only by rendering it as a link.",
      "Choose the emphasis with variant. Keep default and destructive for things that need attention and use secondary or outline for the rest. Pass an a element to render to make it a link.",
    ],
    sdk: [
      "Badge is not a UI SDK component and only renders a span, but its render prop goes through renderElement from @ui-sdk/react/primitive. Pass an element such as an a to render and Badge's className and props are applied to it. It is not an interactive component, so it does not appear in an agent's snapshot even when rendered as a link.",
    ],
  },
} satisfies ComponentGuide
