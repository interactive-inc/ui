import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "チャットの発言を並べ、新しい発言が届くと最新の位置へ追いかけて流れる枠。AI アシスタントやサポートとのやり取りのように、下へ伸びていく会話に使う。",
    "発言1件の見た目は Message と Bubble が受け持ち、この部品は流れ方だけを受け持つ。ただ長い中身を区切って見せるなら Scroll Area で足りる。読み返している途中に勝手に下へ飛ばないのが違い。",
    "MessageScrollerProvider で包み、defaultScrollPosition で開いたときの位置を決める。各発言には messageId を付け、自分の発言を scrollAnchor にすると送信した位置から読める。MessageScrollerButton で最新や先頭へ戻れる。",
  ],
  sdk: [
    "スクロールの土台は UI SDK ではなく @shadcn/react/message-scroller。core の createStickToBottom が持つのは末尾への追従と prepend だけで、ここで要る開いたときの位置、scrollAnchor、発言へのジャンプ、先頭へ戻るボタンを持たないため。",
    "MessageScrollerButton だけは @ui-sdk/react/button の Button で描いている。エージェントからは button として見え、最新へ移動 のような名前で press できる。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "開いたときは最新の発言を見せ、上に戻ったらボタンで最新へ戻れるようにする。",
      en: {
        title: "Basic",
        description:
          "Open at the latest message, and offer a button back to it after scrolling up.",
      },
    },
    {
      id: "send",
      title: "送信して追いかける",
      description: "入力欄から送ると発言が足され、自分の発言を起点に流れる。",
      en: {
        title: "Send and follow",
        description:
          "Sending from the input adds the message and scrolls from your own message.",
      },
    },
    {
      id: "jump-to-message",
      title: "特定の発言へ移動",
      description:
        "useMessageScroller の scrollToMessage で、messageId の発言まで流す。",
      en: {
        title: "Jump to a message",
        description:
          "Use scrollToMessage from useMessageScroller to scroll to the message with that messageId.",
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
          "Use useMessageScrollerScrollable to know whether there is more to read above or below.",
      },
    },
  ],
  en: {
    usage: [
      "A frame that lists chat messages and follows to the latest when a new one arrives. Use it for conversations that grow downward, such as with an AI assistant or support.",
      "Message and Bubble handle how each message looks; this component only handles scrolling. For plain long content, Scroll Area is enough. The difference is that this one does not jump to the bottom while someone is reading back.",
      "Wrap it in MessageScrollerProvider and set where it opens with defaultScrollPosition. Give each message a messageId, and make your own messages scrollAnchor so reading starts where you sent. MessageScrollerButton returns to the latest or the first message.",
    ],
    sdk: [
      "The scrolling is built on @shadcn/react/message-scroller, not on UI SDK. createStickToBottom in @ui-sdk/core only follows the end and handles prepend; it has no opening position, scrollAnchor, jump to a message or button back to the start, which this component needs.",
      "Only MessageScrollerButton is rendered with the Button from @ui-sdk/react/button. An agent sees it as a button and can call press on it by its name, such as 最新へ移動 (jump to latest).",
    ],
  },
} satisfies ComponentGuide
