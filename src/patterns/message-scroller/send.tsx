import { SendIcon } from "lucide-react"
import { useState } from "react"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"

type ChatMessage = {
  id: string
  role: "user" | "assistant"
  text: string
}

const initialMessages: ChatMessage[] = [
  {
    id: "m1",
    role: "assistant",
    text: "こんにちは。サポートアシスタントです。",
  },
  {
    id: "m2",
    role: "assistant",
    text: "請求やお支払いについて、何でもお聞きください。",
  },
]

export function MessageScrollerSend() {
  const [messages, setMessages] = useState(initialMessages)
  const [draft, setDraft] = useState("")

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (draft.trim() === "") {
      return
    }
    const id = messages.length
    setMessages([
      ...messages,
      { id: `m${id + 1}`, role: "user", text: draft },
      {
        id: `m${id + 2}`,
        role: "assistant",
        text: "確認します。少しお待ちください。",
      },
    ])
    setDraft("")
  }

  return (
    <MessageScrollerProvider defaultScrollPosition="end">
      <div className="flex w-full max-w-md flex-col gap-3">
        <MessageScroller className="h-56 rounded-lg border">
          <MessageScrollerViewport className="p-3">
            <MessageScrollerContent className="gap-3">
              {messages.map((message) => (
                <MessageScrollerItem
                  key={message.id}
                  messageId={message.id}
                  scrollAnchor={message.role === "user"}
                >
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
          <MessageScrollerButton aria-label="請求の問い合わせの最新へ移動" />
        </MessageScroller>
        <form onSubmit={onSubmit} className="flex items-end gap-2">
          <Field name="message" className="flex-1">
            <FieldLabel>メッセージ</FieldLabel>
            <Input
              value={draft}
              onValueChange={(value) => setDraft(value)}
              placeholder="例: 請求書を再発行したい"
            />
          </Field>
          <Button
            type="submit"
            size="icon"
            aria-label="送信する"
            data-agent-confirm="入力したメッセージをサポートに送信します"
          >
            <SendIcon />
          </Button>
        </form>
      </div>
    </MessageScrollerProvider>
  )
}
