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

export function NumberInputPercent() {
  const [rate, setRate] = useState<number | null>(0.1)

  return (
    <Field name="discountRate" className="max-w-xs">
      <FieldLabel>会員割引率</FieldLabel>
      <NumberInput
        locale="ja-JP"
        format={{ style: "percent" }}
        min={0}
        max={0.5}
        step={0.05}
        value={rate}
        onValueChange={(value) => setRate(value)}
      >
        <NumberInputGroup className="w-36">
          <NumberInputDecrement aria-label="割引率を下げる" />
          <NumberInputControl />
          <NumberInputIncrement aria-label="割引率を上げる" />
        </NumberInputGroup>
      </NumberInput>
      <FieldDescription>
        {rate === null
          ? "割引率を入力してください。"
          : `3,800円の商品は${Math.round(3800 * (1 - rate)).toLocaleString("ja-JP")}円になります。`}
      </FieldDescription>
    </Field>
  )
}
