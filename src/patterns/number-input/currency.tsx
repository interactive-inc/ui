"use client"

import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  NumberInput,
  NumberInputControl,
  NumberInputGroup,
} from "@/components/ui/number-input"

export function NumberInputCurrency() {
  const [price, setPrice] = useState<number | null>(3800)

  return (
    <Field name="price" className="max-w-xs">
      <FieldLabel>販売価格(税込)</FieldLabel>
      <NumberInput
        locale="ja-JP"
        format={{ style: "currency", currency: "JPY" }}
        min={0}
        step={10}
        largeStep={100}
        value={price}
        onValueChange={(value) => setPrice(value)}
      >
        <NumberInputGroup>
          <NumberInputControl className="text-right" />
        </NumberInputGroup>
      </NumberInput>
      <FieldDescription>
        矢印キーで10円、Shift を押しながらで100円ずつ変わります。
      </FieldDescription>
    </Field>
  )
}
