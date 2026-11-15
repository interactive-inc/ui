import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Message, MessageContent, MessageGroup } from "@/components/ui/message"

export function MessageBasic() {
  return (
    <MessageGroup className="w-full max-w-md">
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>注文した商品がまだ届きません。</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              ご不便をおかけしています。注文番号を教えていただけますか？
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}
