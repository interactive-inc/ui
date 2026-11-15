import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"

export function MessageGhostAnswer() {
  return (
    <MessageGroup className="w-full max-w-md">
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>返品の手順を教えてください。</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <MessageHeader>サポートアシスタント</MessageHeader>
          <Bubble variant="ghost">
            <BubbleContent>
              商品の到着から30日以内であれば返品できます。マイページの注文履歴で対象の注文を開き、「返品を申し込む」を選んでください。届いた返送ラベルを箱に貼り、集荷を待つだけで手続きは終わります。返金は商品の到着を確認してから5営業日以内に行います。
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}
