import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Thin divider where spacing is not enough; surfaces -> Card, list rows -> ItemSeparator.",
    'orientation="vertical" needs flex parent with height. decorative -> role="none".',
    "Not focusable, not in agent snapshot.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "見出しと本文、まとまりどうしの間に横線を引く。",
      en: {
        title: "Basic",
        description: "Horizontal line between heading and body.",
      },
    },
    {
      id: "vertical",
      title: "縦線",
      description:
        '横に並んだ情報の間に orientation="vertical" の線を置く。親の flex で高さが決まる。',
      en: {
        title: "Vertical",
        description: 'orientation="vertical" between row items.',
      },
    },
    {
      id: "with-label",
      title: "文字を挟む",
      description:
        "線の間に「または」などの短い文字を置く。線は見た目だけなので decorative を付ける。",
      en: {
        title: "With label",
        description: "Text between two decorative lines.",
      },
    },
  ],
} satisfies ComponentGuide
