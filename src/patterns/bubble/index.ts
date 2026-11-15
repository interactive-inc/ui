import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "チャットの発言1つを包む吹き出し。色と形で自分と相手の発言を見分けられるようにする。",
    "発言者の名前や顔、時刻まで並べるなら、Bubble を Message の中に置く。Bubble だけを BubbleGroup で重ねると、同じ人が続けて話した様子になる。返信候補のように押せる吹き出しには BubbleButton を使う。",
    "variant で色を選び、自分の発言は default、相手は muted にするのが基本。送れなかった発言は destructive にする。align を end にすると右に寄る。",
  ],
  sdk: [
    "BubbleButton は @ui-sdk/react/button の Button で、ほかのパーツは div を描くだけ。onClick は event と details を受け取り、details.source で人が押したのかエージェントが押したのかが分かる。onClick が Promise を返すと、終わるまで data-pending が付く。",
    "エージェントからは BubbleButton が button として見え、名前は吹き出しの文言から付き、press で押せる。BubbleContent の render は @ui-sdk/react/primitive の renderElement で受けていて、a 要素を渡すとリンクの吹き出しになる。",
  ],
  patterns: [
    {
      id: "variants",
      title: "見た目の種類",
      description: "発言の持ち主や状態に合わせて variant を選ぶ。",
      en: {
        title: "Variants",
        description:
          "Pick a variant that matches who sent the message and its state.",
      },
    },
    {
      id: "align",
      title: "左右の振り分け",
      description: "align を end にすると、自分の発言として右に寄る。",
      en: {
        title: "Alignment",
        description: "Set align to end to move your own messages to the right.",
      },
    },
    {
      id: "reply-suggestions",
      title: "返信候補",
      description:
        "BubbleButton で吹き出しそのものをボタンにし、押すと発言になる。",
      en: {
        title: "Reply suggestions",
        description:
          "BubbleButton makes the bubble itself a button; pressing it sends the reply.",
      },
    },
    {
      id: "reactions",
      title: "リアクション",
      description:
        "BubbleReactions を吹き出しの角に重ね、aria-label で数を伝える。",
      en: {
        title: "Reactions",
        description:
          "Overlay BubbleReactions on a corner and state the count with aria-label.",
      },
    },
  ],
  en: {
    usage: [
      "A balloon that wraps one chat message. Its color and shape tell your messages apart from the other person's.",
      "To show the speaker's name, face or time, put the Bubble inside a Message. Stacking bubbles in a BubbleGroup shows one person speaking several times in a row. Use BubbleButton for bubbles that can be pressed, such as reply suggestions.",
      "Choose the color with variant: default for your own messages and muted for the other side. Use destructive for messages that failed to send. Set align to end to move a bubble to the right.",
    ],
    sdk: [
      "BubbleButton is the Button from @ui-sdk/react/button; the other parts only render a div. onClick receives the event and details, and details.source says whether a person or an agent pressed it. When onClick returns a Promise, the button has data-pending until it settles.",
      "An agent sees BubbleButton as a button named by the bubble's text and can call press on it. BubbleContent's render prop goes through renderElement from @ui-sdk/react/primitive, so passing an a element makes the bubble a link.",
    ],
  },
} satisfies ComponentGuide
