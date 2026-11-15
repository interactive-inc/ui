import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Scroll frame for growing chats; follows latest but not while reading back. Plain long content -> Scroll Area.",
    "Wrap in MessageScrollerProvider; defaultScrollPosition sets opening position. Each message needs messageId; own messages scrollAnchor.",
    "MessageScrollerButton jumps to latest or first message. Hooks: useMessageScroller (scrollToMessage), useMessageScrollerScrollable.",
    "Built on @shadcn/react/message-scroller, not UI SDK (no createStickToBottom: lacks opening position, scrollAnchor, jump).",
    "Agent: only MessageScrollerButton is a button, action press, named e.g. 最新へ移動.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "開いたときは最新の発言を見せ、上に戻ったらボタンで最新へ戻れるようにする。",
      en: {
        title: "Basic",
        description: "Opens at latest; button back after scrolling up.",
      },
    },
    {
      id: "send",
      title: "送信して追いかける",
      description: "入力欄から送ると発言が足され、自分の発言を起点に流れる。",
      en: {
        title: "Send and follow",
        description: "Sending adds message and scrolls from it.",
      },
    },
    {
      id: "jump-to-message",
      title: "特定の発言へ移動",
      description:
        "useMessageScroller の scrollToMessage で、messageId の発言まで流す。",
      en: {
        title: "Jump to a message",
        description: "scrollToMessage scrolls to a messageId.",
      },
    },
    {
      id: "scrollable-state",
      title: "続きがあるかを知る",
      description:
        "useMessageScrollerScrollable で、上下にまだ読めるものがあるかを受け取る。",
      en: {
        title: "Scrollable state",
        description:
          "useMessageScrollerScrollable tells if more above or below.",
      },
    },
  ],
} satisfies ComponentGuide
