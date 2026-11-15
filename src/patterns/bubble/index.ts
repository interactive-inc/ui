import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Balloon for one chat message; wrap in Message for name/avatar/time. BubbleGroup stacks consecutive bubbles of one speaker.",
    'variant: default own, muted other side, destructive send failure. align="end" moves right.',
    "BubbleButton (pressable, e.g. reply suggestions) is SDK Button; other parts render div. BubbleReactions overlays a corner.",
    "onClick(event, { source }); Promise return: data-pending until settled.",
    "BubbleContent render={<a href />} makes bubble a link (via renderElement).",
    "Agent: BubbleButton kind button named by bubble text, action press.",
  ],
  patterns: [
    {
      id: "variants",
      title: "見た目の種類",
      description: "発言の持ち主や状態に合わせて variant を選ぶ。",
      en: {
        title: "Variants",
        description: "variant matches sender and state.",
      },
    },
    {
      id: "align",
      title: "左右の振り分け",
      description: "align を end にすると、自分の発言として右に寄る。",
      en: {
        title: "Alignment",
        description: "align end moves own messages right.",
      },
    },
    {
      id: "reply-suggestions",
      title: "返信候補",
      description:
        "BubbleButton で吹き出しそのものをボタンにし、押すと発言になる。",
      en: {
        title: "Reply suggestions",
        description: "BubbleButton makes the bubble pressable.",
      },
    },
    {
      id: "reactions",
      title: "リアクション",
      description:
        "BubbleReactions を吹き出しの角に重ね、aria-label で数を伝える。",
      en: {
        title: "Reactions",
        description: "BubbleReactions on a corner; count in aria-label.",
      },
    },
  ],
} satisfies ComponentGuide
