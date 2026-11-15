import { CircleCheckIcon } from "lucide-react"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { Message, MessageContent } from "@/components/ui/message"

export function MarkerInConversation() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Marker variant="separator">
        <MarkerContent>今日</MarkerContent>
      </Marker>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>届いた商品の色が違いました。</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Marker>
        <MarkerIcon>
          <CircleCheckIcon />
        </MarkerIcon>
        <MarkerContent>交換の受付が完了しました</MarkerContent>
      </Marker>
      <Marker render={<a href="#older" />}>
        <MarkerContent>以前のやり取りを表示</MarkerContent>
      </Marker>
    </div>
  )
}
