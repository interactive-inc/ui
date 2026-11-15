import { useState } from "react"
import {
  Bubble,
  BubbleButton,
  BubbleContent,
  BubbleGroup,
} from "@/components/ui/bubble"

const suggestions = [
  "パスワードを再設定したい",
  "2段階認証のコードが届かない",
  "担当者と話したい",
]

export function BubbleReplySuggestions() {
  const [sent, setSent] = useState<string[]>([])

  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble variant="muted">
        <BubbleContent>どのようなことでお困りですか？</BubbleContent>
      </Bubble>
      {sent.map((text) => (
        <Bubble key={text} align="end">
          <BubbleContent>{text}</BubbleContent>
        </Bubble>
      ))}
      {suggestions
        .filter((text) => !sent.includes(text))
        .map((text) => (
          <Bubble key={text} variant="outline" align="end">
            <BubbleButton onClick={() => setSent([...sent, text])}>
              {text}
            </BubbleButton>
          </Bubble>
        ))}
    </BubbleGroup>
  )
}
