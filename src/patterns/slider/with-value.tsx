import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export function SliderWithValue() {
  const [discount, setDiscount] = useState(10)

  return (
    <Field>
      <div className="flex items-center justify-between">
        <FieldLabel>割引率</FieldLabel>
        <span className="text-muted-foreground text-sm tabular-nums">
          {discount}%
        </span>
      </div>
      <Slider
        name="discount"
        min={0}
        max={50}
        step={5}
        value={discount}
        onValueChange={(value) => setDiscount(value)}
      />
      <FieldDescription>
        定価 12,000円 → {(12000 * (1 - discount / 100)).toLocaleString("ja-JP")}
        円
      </FieldDescription>
    </Field>
  )
}
