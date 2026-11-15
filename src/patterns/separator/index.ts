import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "内容のまとまりの間に細い線を引いて区切る。見出しと本文の間、設定の項目どうし、横に並んだ情報の間などに使う。",
    "面ごと分けたいなら Card、一覧の行の間なら ItemSeparator や Table の罫線で足りる。Separator は余白だけでは区切りが弱いところに足す、最小の部品。",
    '横線は orientation を省いたまま、縦線は orientation="vertical" にして、親を flex にして高さを決める。見た目だけの線は decorative を付けて読み上げから外し、内容の区切りとして伝えたい線には付けない。',
  ],
  sdk: [
    '`@ui-sdk/react/separator` の Separator に線の見た目を付けたもの。role="separator" と aria-orientation は SDK が付け、向きは data-orientation に出る。フォーカスは受けない。',
    '見た目だけの線には decorative を付けると role="none" になり、スクリーンリーダーに読まれなくなる。操作する部品ではないので、エージェントのスナップショットには出てこない。',
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "見出しと本文、まとまりどうしの間に横線を引く。",
      en: {
        title: "Basic",
        description:
          "Draw a horizontal line between a heading and its body, or between groups.",
      },
    },
    {
      id: "vertical",
      title: "縦線",
      description:
        '横に並んだ情報の間に orientation="vertical" の線を置く。親の flex で高さが決まる。',
      en: {
        title: "Vertical",
        description:
          'Place an orientation="vertical" line between items in a row. The parent flex sets its height.',
      },
    },
    {
      id: "with-label",
      title: "文字を挟む",
      description:
        "線の間に「または」などの短い文字を置く。線は見た目だけなので decorative を付ける。",
      en: {
        title: "With label",
        description:
          'Put short text such as "or" between two lines. The lines are visual only, so mark them decorative.',
      },
    },
  ],
  en: {
    usage: [
      "Draws a thin line between groups of content. Use it between a heading and its body, between settings, or between items in a row.",
      "To separate whole surfaces, use Card. Between list rows, ItemSeparator or Table borders are enough. Separator is the smallest piece to add where spacing alone does not divide clearly.",
      'Leave orientation out for a horizontal line. For a vertical one, set orientation="vertical" and give the flex parent a height. Mark purely visual lines as decorative to hide them from screen readers, and leave it off when the line separates content that should be heard as separate.',
    ],
    sdk: [
      'The Separator from `@ui-sdk/react/separator` with a line style added. The SDK sets role="separator" and aria-orientation, and the direction shows as data-orientation. It cannot be focused.',
      'For a line that is only visual, add decorative to get role="none" so screen readers skip it. It is not a control, so it does not appear in an agent\'s snapshot.',
    ],
  },
} satisfies ComponentGuide
