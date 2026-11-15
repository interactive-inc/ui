"use client"

import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  TokenInput,
  TokenInputEditor,
  type TokenInputValue,
  toLabel,
} from "@/components/ui/token-input"

const initial: TokenInputValue = [
  { type: "order", value: "ORD-0042", label: "注文 #0042" },
  " の発送が遅れています。至急確認してください。",
]

export function TokenInputBasic() {
  const [value, setValue] = useState<TokenInputValue>(initial)

  return (
    <Field name="memo" className="max-w-md">
      <FieldLabel>社内メモ</FieldLabel>
      <TokenInput value={value} onValueChange={(next) => setValue(next)}>
        <TokenInputEditor placeholder="メモを入力" />
      </TokenInput>
      <FieldDescription>
        {toLabel(value) || "メモはまだありません。"}
      </FieldDescription>
    </Field>
  )
}
