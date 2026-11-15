import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Placeholder for content with known layout (lists, cards). Unknown shape or inside buttons -> Spinner.",
    "Size and radius via className; match real content (h-4 text line, rounded-full avatar) to avoid layout shift.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "幅の違う行を重ねて、文章の段落に見せる。",
      en: {
        title: "Basic",
        description: "Lines of varied width suggest a paragraph.",
      },
    },
    {
      id: "profile",
      title: "アバターと名前",
      description: "丸い Skeleton と行を並べて、人の一覧の1行にする。",
      en: {
        title: "Avatar and name",
        description: "Round skeleton plus text lines for one row.",
      },
    },
    {
      id: "card",
      title: "カードの中",
      description: "Card の中に置き、見出しと画像の場所を先に取る。",
      en: {
        title: "In a card",
        description: "Skeletons in a Card reserve heading and image space.",
      },
    },
    {
      id: "loading-switch",
      title: "読み込み後と差し替える",
      description: "読み込み中だけ Skeleton を出し、終わったら中身に替える。",
      en: {
        title: "Swap with content",
        description: "Show skeletons only while loading.",
      },
    },
  ],
} satisfies ComponentGuide
