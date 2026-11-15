"use client"

import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
} from "@/components/ui/number-input"

export function NumberInputBasic() {
  const [quantity, setQuantity] = useState<number | null>(1)

  return (
    <Field name="quantity" className="max-w-xs">
      <FieldLabel>数量</FieldLabel>
      <NumberInput
        min={1}
        max={20}
        value={quantity}
        onValueChange={(value) => setQuantity(value)}
      >
        <NumberInputGroup className="w-36">
          <NumberInputDecrement aria-label="数量を減らす" />
          <NumberInputControl />
          <NumberInputIncrement aria-label="数量を増やす" />
        </NumberInputGroup>
      </NumberInput>
      <FieldDescription>
        {quantity === null
          ? "数量を入力してください。"
          : "1回の注文で20個までです。"}
      </FieldDescription>
    </Field>
  )
}
