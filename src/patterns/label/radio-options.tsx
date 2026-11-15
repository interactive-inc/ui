"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const methods = [
  { value: "standard", label: "通常配送(3〜5日)" },
  { value: "express", label: "お急ぎ便(翌日)" },
  { value: "pickup", label: "店頭受け取り" },
]

export function LabelRadioOptions() {
  const [method, setMethod] = useState<string | null>("standard")

  return (
    <RadioGroup
      aria-label="配送方法"
      value={method}
      onValueChange={(value) => setMethod(value)}
    >
      {methods.map((item) => (
        <Label key={item.value}>
          <RadioGroupItem value={item.value} />
          {item.label}
        </Label>
      ))}
    </RadioGroup>
  )
}
