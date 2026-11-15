import { useState } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export function SliderRange() {
  const [price, setPrice] = useState([3000, 15000])

  return (
    <Field>
      <div className="flex items-center justify-between">
        <FieldLabel>価格帯</FieldLabel>
        <span className="text-muted-foreground text-sm tabular-nums">
          {price[0]?.toLocaleString("ja-JP")}円〜
          {price[1]?.toLocaleString("ja-JP")}円
        </span>
      </div>
      <Slider
        name="price"
        min={0}
        max={30000}
        step={1000}
        value={price}
        onValueChange={(value) => setPrice(value)}
      />
    </Field>
  )
}
