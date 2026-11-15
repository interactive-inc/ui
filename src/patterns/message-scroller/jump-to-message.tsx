import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
} from "@/components/ui/message-scroller"

const messages = [
  { id: "m1", role: "user", text: "解約の手続きについて相談したいです。" },
  {
    id: "m2",
    role: "assistant",
    text: "解約は、契約更新日の7日前までに申し込むと翌月から料金がかかりません。",
  },
  { id: "m3", role: "user", text: "更新日はいつですか？" },
  { id: "m4", role: "assistant", text: "次の更新日は12月1日です。" },
  { id: "m5", role: "user", text: "データは残りますか？" },
  {
    id: "m6",
    role: "assistant",
    text: "解約から90日間は保管し、そのあと削除します。",
  },
  { id: "m7", role: "user", text: "検討してみます。" },
]

function JumpButton() {
  const scroller = useMessageScroller()

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => scroller.scrollToMessage("m2", { behavior: "smooth" })}
    >
      解約の条件を見返す
    </Button>
  )
}

export function MessageScrollerJumpToMessage() {
  return (
    <MessageScrollerProvider defaultScrollPosition="end">
      <div className="flex w-full max-w-md flex-col gap-3">
        <MessageScroller className="h-56 rounded-lg border">
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
          <MessageScrollerButton
            direction="start"
            aria-label="解約の問い合わせの先頭へ移動"
          />
          <MessageScrollerButton aria-label="解約の問い合わせの最新へ移動" />
        </MessageScroller>
        <JumpButton />
      </div>
    </MessageScrollerProvider>
  )
}
