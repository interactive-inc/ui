import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "チャットの1件の発言を、誰が言ったかと一緒に並べる枠。AI アシスタントやサポート担当とのやり取りで、発言者ごとに左右へ振り分ける。",
    "Message は並べ方だけを受け持ち、発言の見た目は中に置く Bubble が決める。発言ではない出来事は Marker、長いやり取りを下から読ませるなら Message Scroller で包む。",
    "自分の発言は align を end にして右に寄せる。名前や時刻は MessageHeader と MessageFooter、顔は MessageAvatar に置く。AI の長い回答は ghost の Bubble にすると読みやすい。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "align で左右に振り分け、中に Bubble を置く。",
      en: {
        title: "Basic",
        description:
          "Use align to place messages left or right, with a Bubble inside.",
      },
    },
    {
      id: "avatar",
      title: "アバター付き",
      description: "MessageAvatar にアイコンや名前を入れ、発言者を示す。",
      en: {
        title: "With an avatar",
        description:
          "Put an icon or name in MessageAvatar to show who is speaking.",
      },
    },
    {
      id: "header-footer",
      title: "名前と時刻",
      description: "MessageHeader に発言者、MessageFooter に時刻や既読を置く。",
      en: {
        title: "Header and footer",
        description:
          "Put the speaker in MessageHeader and the time or read state in MessageFooter.",
      },
    },
    {
      id: "ghost-answer",
      title: "AI の長い回答",
      description: "ghost の Bubble で吹き出しを外し、本文として読ませる。",
      en: {
        title: "Long AI answer",
        description:
          "Use a ghost Bubble to drop the balloon so the answer reads like body text.",
      },
    },
  ],
  en: {
    usage: [
      "A row that shows one chat message together with who sent it. In conversations with an AI assistant or a support agent, it places each speaker on its own side.",
      "Message only handles the layout; the Bubble inside decides how the message looks. Use Marker for events that are not messages, and wrap long conversations in Message Scroller to read from the bottom.",
      "Set align to end to move your own messages to the right. Put names and times in MessageHeader and MessageFooter, and a face in MessageAvatar. Long AI answers read better in a ghost Bubble.",
    ],
  },
} satisfies ComponentGuide
