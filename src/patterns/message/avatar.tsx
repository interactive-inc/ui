import { BotIcon } from "lucide-react"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
} from "@/components/ui/message"

export function MessageWithAvatar() {
  return (
    <MessageGroup className="w-full max-w-md">
      <Message>
        <MessageAvatar>
          <BotIcon className="size-4" aria-hidden="true" />
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              注文番号 #10482 は、11月16日にお届け予定です。
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar className="font-medium text-xs">山田</MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>ありがとうございます。待ってみます。</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}
