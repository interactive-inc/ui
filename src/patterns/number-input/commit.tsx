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

export function NumberInputCommit() {
  const [saved, setSaved] = useState<number | null>(5)

  return (
    <Field name="reorderPoint" className="max-w-xs">
      <FieldLabel>発注点(在庫数)</FieldLabel>
      <NumberInput
        min={0}
        max={999}
        defaultValue={5}
        onValueCommit={(value) => setSaved(value)}
      >
        <NumberInputGroup className="w-36">
          <NumberInputDecrement aria-label="発注点を減らす" />
          <NumberInputControl />
          <NumberInputIncrement aria-label="発注点を増やす" />
        </NumberInputGroup>
      </NumberInput>
      <FieldDescription>
        {saved === null
          ? "空欄のときは通知しません。"
          : `在庫が${saved}個を下回ったら通知します。`}
      </FieldDescription>
    </Field>
  )
}
