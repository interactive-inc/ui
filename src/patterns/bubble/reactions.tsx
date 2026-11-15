import { ThumbsUpIcon } from "lucide-react"
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble"

export function BubbleWithReactions() {
  return (
    <BubbleGroup className="w-full max-w-md gap-6">
      <Bubble variant="muted">
        <BubbleContent>
          パスワードの再設定用リンクをメールでお送りしました。
        </BubbleContent>
        <BubbleReactions aria-label="役に立った 1件">
          <ThumbsUpIcon className="size-3" />1
        </BubbleReactions>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>届きました。ログインできました。</BubbleContent>
      </Bubble>
    </BubbleGroup>
  )
}
