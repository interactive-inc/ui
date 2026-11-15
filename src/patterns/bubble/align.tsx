import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble"

export function BubbleAlign() {
  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble variant="muted">
        <BubbleContent>
          こんにちは。サポートアシスタントです。ご用件をどうぞ。
        </BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>ログインできなくなりました。</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>パスワードは合っているはずです。</BubbleContent>
      </Bubble>
    </BubbleGroup>
  )
}
