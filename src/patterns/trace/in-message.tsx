import { CreditCardIcon, ReceiptIcon } from "lucide-react"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"

export function TraceInMessage() {
  return (
    <MessageGroup className="w-full max-w-md">
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>
              今月の請求額が先月より高いのはなぜですか？
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <MessageHeader>サポートアシスタント</MessageHeader>
          <Trace>
            <TraceCollapsible>
              <TraceCollapsibleTrigger>
                <TraceLine>
                  <TraceIcon>
                    <ReceiptIcon />
                  </TraceIcon>
                  <TraceTitle>11月と10月の請求書を比べました</TraceTitle>
                  <TraceDescription>3秒</TraceDescription>
                </TraceLine>
              </TraceCollapsibleTrigger>
              <TraceCollapsibleContent className="text-sm">
                10月は 2,980円、11月は 4,480円でした。
              </TraceCollapsibleContent>
            </TraceCollapsible>
            <TraceLine>
              <TraceIcon>
                <CreditCardIcon />
              </TraceIcon>
              <TraceTitle>追加のご利用を確認しました</TraceTitle>
            </TraceLine>
          </Trace>
          <Bubble variant="ghost">
            <BubbleContent>
              11月8日にストレージを 50GB 追加されたため、月額
              1,500円が上乗せされています。
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}
