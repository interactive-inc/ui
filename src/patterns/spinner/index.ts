import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "何かを待っていることだけを伝える、回り続けるアイコン。送信中のボタンや同期中の印のように、短い待ちを小さく示すときに使う。",
    "どれだけ進んだか分かるなら Progress、読み込んだあとの形が決まっているなら Skeleton のほうが待ち時間を短く感じさせる。Spinner は場所を取らない代わりに、残り時間を伝えない。",
    "role は status、名前は「読み込み中」が付いている。何を待っているかを伝えたいときは aria-label を上書きする。ボタンやバッジの中では data-icon で文言との間をそろえる。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "大きさと色は className で変える。",
      en: {
        title: "Basic",
        description: "Change the size and color with className.",
      },
    },
    {
      id: "in-button",
      title: "ボタンの中",
      description:
        "送信中はボタンを disabled にし、文言の前に Spinner を置く。",
      en: {
        title: "In a button",
        description:
          "While sending, disable the button and place a Spinner before the label.",
      },
    },
    {
      id: "in-badge",
      title: "バッジの中",
      description: "同期や審査のような、続いている状態を小さく示す。",
      en: {
        title: "In a badge",
        description:
          "Show an ongoing state, such as syncing or review, in a small space.",
      },
    },
    {
      id: "with-text",
      title: "説明を添える",
      description: "何を待っているかを文で添え、aria-label も同じ内容にする。",
      en: {
        title: "With text",
        description:
          "Describe what people are waiting for, and give aria-label the same meaning.",
      },
    },
  ],
  en: {
    usage: [
      "A spinning icon that only says something is in progress. Use it for short waits shown small, such as a sending button or a syncing badge.",
      "If you know how far along a task is, use Progress. If you know the shape of what will load, Skeleton makes the wait feel shorter. A spinner takes little space but says nothing about time left.",
      'It has the status role and the name "読み込み中" (loading). Override aria-label to say what is loading. Inside buttons and badges, use data-icon to space it from the label.',
    ],
  },
} satisfies ComponentGuide
