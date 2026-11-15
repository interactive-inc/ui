import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Row for one chat message with sender; layout only, Bubble inside sets look. Events -> Marker; long chats -> Message Scroller.",
    'align="end" for own messages. Parts: MessageHeader, MessageFooter (names, times), MessageAvatar.',
    "Long AI answers: ghost Bubble.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "align で左右に振り分け、中に Bubble を置く。",
      en: {
        title: "Basic",
        description: "align places messages left or right.",
      },
    },
    {
      id: "avatar",
      title: "アバター付き",
      description: "MessageAvatar にアイコンや名前を入れ、発言者を示す。",
      en: {
        title: "With an avatar",
        description: "MessageAvatar shows who is speaking.",
      },
    },
    {
      id: "header-footer",
      title: "名前と時刻",
      description: "MessageHeader に発言者、MessageFooter に時刻や既読を置く。",
      en: {
        title: "Header and footer",
        description: "MessageHeader for speaker, MessageFooter for time.",
      },
    },
    {
      id: "ghost-answer",
      title: "AI の長い回答",
      description: "ghost の Bubble で吹き出しを外し、本文として読ませる。",
      en: {
        title: "Long AI answer",
        description: "Ghost Bubble reads like body text.",
      },
    },
  ],
} satisfies ComponentGuide
