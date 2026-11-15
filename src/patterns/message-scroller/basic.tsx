import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"

const messages = [
  { id: "m1", role: "user", text: "注文した商品がまだ届きません。" },
  {
    id: "m2",
    role: "assistant",
    text: "ご不便をおかけしています。注文番号を教えていただけますか？",
  },
  { id: "m3", role: "user", text: "#10482 です。" },
  {
    id: "m4",
    role: "assistant",
    text: "確認しました。配送業者の倉庫で、11月14日から止まっています。",
  },
  { id: "m5", role: "user", text: "いつ届きますか？" },
  {
    id: "m6",
    role: "assistant",
    text: "配送業者に問い合わせ、11月16日の午前に届くよう手配しました。",
  },
  { id: "m7", role: "user", text: "わかりました。ありがとうございます。" },
]

export function MessageScrollerBasic() {
  return (
    <MessageScrollerProvider defaultScrollPosition="end">
      <MessageScroller className="h-64 w-full max-w-md rounded-lg border">
        <MessageScrollerViewport className="p-3">
          <MessageScrollerContent className="gap-3">
            {messages.map((message) => (
              <MessageScrollerItem key={message.id} messageId={message.id}>
                <Message align={message.role === "user" ? "end" : "start"}>
                  <MessageContent>
                    <Bubble
                      variant={message.role === "user" ? "default" : "muted"}
                    >
                      <BubbleContent>{message.text}</BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton aria-label="配送の問い合わせの最新へ移動" />
      </MessageScroller>
    </MessageScrollerProvider>
  )
}
