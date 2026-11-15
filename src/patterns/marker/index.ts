import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "やり取りや履歴の流れの中に、出来事や区切りを1行で差し込む印。「発送しました」「担当が替わりました」のような、誰かの発言ではない出来事を残すときに使う。",
    "発言そのものは Message と Bubble で描き、Marker はその間に挟む。目立たせる知らせなら Alert を使う。Marker は控えめな文字色で、流れを邪魔しない。",
    "日付の区切りには variant を separator にし、左右に線を引く。項目の下に線を引くなら border。全体をリンクにするときは render に a 要素を渡す。",
  ],
  sdk: [
    "UI SDK の部品ではなく div を描くだけだが、Marker の render は @ui-sdk/react/primitive の renderElement で受けている。render に a 要素などを渡すと、Marker の className と props がその要素に載る。操作部品ではないので、エージェントの snapshot には出ない。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "MarkerIcon と MarkerContent で出来事を1行にする。",
      en: {
        title: "Basic",
        description:
          "Put an event on one line with MarkerIcon and MarkerContent.",
      },
    },
    {
      id: "separator",
      title: "日付の区切り",
      description: "variant を separator にすると、文言の左右に線が引かれる。",
      en: {
        title: "Separator",
        description:
          "Set variant to separator to draw lines on both sides of the text.",
      },
    },
    {
      id: "border",
      title: "下線付き",
      description:
        "variant を border にすると、下に線が引かれる。文中のリンクも置ける。",
      en: {
        title: "Border",
        description:
          "Set variant to border to draw a line underneath. It can hold inline links.",
      },
    },
    {
      id: "in-conversation",
      title: "会話の中に挟む",
      description: "Message の間に置き、日付や手続きの完了を流れの中で伝える。",
      en: {
        title: "In a conversation",
        description:
          "Place markers between messages to show dates and completed steps within the flow.",
      },
    },
  ],
  en: {
    usage: [
      "A one-line marker that inserts an event or a break into a conversation or history. Use it for events that are not someone's message, such as a shipment or a change of assignee.",
      "Draw messages with Message and Bubble and place markers between them. Use Alert for notices that need attention. Markers use a muted text color and stay out of the way.",
      "Use the separator variant for date breaks, which draws lines on both sides, and border for a line underneath. Pass an a element to render to make the whole marker a link.",
    ],
    sdk: [
      "Marker is not a UI SDK component and only renders a div, but its render prop goes through renderElement from @ui-sdk/react/primitive. Pass an element such as an a to render and Marker's className and props are applied to it. It is not an interactive component, so it does not appear in an agent's snapshot.",
    ],
  },
} satisfies ComponentGuide
