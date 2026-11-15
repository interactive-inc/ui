import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Reserves box from width and ratio (width / height; 16 / 9, 1) to avoid layout shift. Parent sets width.",
    "Fill with size-full object-cover; add overflow-hidden when rounded. No actions; name via inner image alt.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "16 / 9 の箱に画像を入れ、object-cover で比率を崩さずに埋める。",
      en: {
        title: "Basic",
        description: "16 / 9 box filled with object-cover.",
      },
    },
    {
      id: "square-grid",
      title: "正方形の一覧",
      description:
        "ratio を 1 にして、大きさの違う写真をそろった正方形で並べる。",
      en: {
        title: "Square grid",
        description: "ratio 1 for even squares.",
      },
    },
    {
      id: "in-card",
      title: "カードの見出し画像",
      description: "カードの上に 4 / 3 の画像を置き、下に文字を続ける。",
      en: {
        title: "Card cover",
        description: "4 / 3 image on top of a card.",
      },
    },
  ],
} satisfies ComponentGuide
