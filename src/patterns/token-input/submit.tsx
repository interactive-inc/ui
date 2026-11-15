"use client"

import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  TokenInput,
  TokenInputEditor,
  type TokenInputValue,
  toLabel,
} from "@/components/ui/token-input"

export function TokenInputSubmit() {
  const [value, setValue] = useState<TokenInputValue>([])
  const [sent, setSent] = useState<string | null>(null)

  return (
    <Field name="comment" className="max-w-md">
      <FieldLabel>注文へのコメント</FieldLabel>
      <TokenInput
        submitShortcut="mod+enter"
        value={value}
        onValueChange={(next) => setValue(next)}
        onSubmit={(next) => {
          setSent(toLabel(next))
          setValue([])
        }}
      >
        <TokenInputEditor placeholder="コメントを入力" />
      </TokenInput>
      <FieldDescription>
        {sent === null
          ? "⌘ + Enter で投稿、Enter で改行します。"
          : `「${sent}」を投稿しました。`}
      </FieldDescription>
    </Field>
  )
}
