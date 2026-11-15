import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "読み込みが終わる前に、中身の形だけを先に見せる仮の箱。一覧やカードのように、表示される形が決まっている場所の読み込み中に使う。",
    "形が分からない短い待ちや、ボタンの中の待ちには Spinner を使う。Skeleton は読み込み後と同じ大きさにそろえるのが肝心で、差し替わったときに画面がずれないようにする。",
    "大きさと角の丸みは className で決める。文字の行は h-4、アバターは rounded-full のように、本物の部品と同じ寸法を当てる。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "幅の違う行を重ねて、文章の段落に見せる。",
      en: {
        title: "Basic",
        description: "Stack lines of different widths to suggest a paragraph.",
      },
    },
    {
      id: "profile",
      title: "アバターと名前",
      description: "丸い Skeleton と行を並べて、人の一覧の1行にする。",
      en: {
        title: "Avatar and name",
        description:
          "Pair a round skeleton with text lines for one row of a people list.",
      },
    },
    {
      id: "card",
      title: "カードの中",
      description: "Card の中に置き、見出しと画像の場所を先に取る。",
      en: {
        title: "In a card",
        description:
          "Place skeletons inside a Card to reserve space for the heading and image.",
      },
    },
    {
      id: "loading-switch",
      title: "読み込み後と差し替える",
      description: "読み込み中だけ Skeleton を出し、終わったら中身に替える。",
      en: {
        title: "Swap with content",
        description:
          "Show skeletons only while loading, then replace them with the content.",
      },
    },
  ],
  en: {
    usage: [
      "Placeholder boxes that show the shape of content before it finishes loading. Use them where the layout is known in advance, such as lists and cards.",
      "Use Spinner for short waits with no known shape, or inside buttons. Match the size of the loaded content so the page does not shift when it is swapped in.",
      "Set the size and corner radius with className. Use the same dimensions as the real parts, such as h-4 for a line of text and rounded-full for an avatar.",
    ],
  },
} satisfies ComponentGuide
