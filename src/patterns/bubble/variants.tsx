import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble"

export function BubbleVariants() {
  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble>
        <BubbleContent>default: 自分の発言</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>muted: 相手の発言</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>secondary: 控えめな発言</BubbleContent>
      </Bubble>
      <Bubble variant="tinted">
        <BubbleContent>tinted: 主色をうすく敷いた発言</BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>outline: 枠線だけの発言</BubbleContent>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>destructive: 送信できなかった発言</BubbleContent>
      </Bubble>
    </BubbleGroup>
  )
}
