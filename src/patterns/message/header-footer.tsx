import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"

export function MessageHeaderFooter() {
  return (
    <MessageGroup className="w-full max-w-md">
      <Message>
        <MessageContent>
          <MessageHeader>サポートアシスタント</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>
              請求書の宛名は、マイページの「請求先情報」から変更できます。
            </BubbleContent>
          </Bubble>
          <MessageFooter>14:02</MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>変更できました。助かりました。</BubbleContent>
          </Bubble>
          <MessageFooter>14:05 既読</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}
