import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScrollerScrollable,
} from "@/components/ui/message-scroller"

const messages = [
  { id: "m1", role: "user", text: "領収書の宛名を会社名にできますか？" },
  {
    id: "m2",
    role: "assistant",
    text: "できます。注文履歴から対象の注文を開いてください。",
  },
  {
    id: "m3",
    role: "assistant",
    text: "「領収書を発行」を選ぶと、宛名を入力する欄が出ます。",
  },
  { id: "m4", role: "user", text: "一度発行したあとでも変えられますか？" },
  {
    id: "m5",
    role: "assistant",
    text: "再発行は1回までできます。再発行した領収書には「再発行」と記載されます。",
  },
  { id: "m6", role: "user", text: "わかりました。" },
]

function ScrollState() {
  const scrollable = useMessageScrollerScrollable()

  return (
    <p className="text-muted-foreground text-xs">
      {scrollable.end
        ? "下に新しいメッセージがあります"
        : "最新のメッセージを表示中"}
    </p>
  )
}

export function MessageScrollerScrollableState() {
  return (
    <MessageScrollerProvider defaultScrollPosition="start">
      <div className="flex w-full max-w-md flex-col gap-2">
        <MessageScroller className="h-48 rounded-lg border">
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
        </MessageScroller>
        <ScrollState />
      </div>
    </MessageScrollerProvider>
  )
}
