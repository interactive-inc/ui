import { useState } from "react"
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export function NativeSelectControlled() {
  const [quantity, setQuantity] = useState("1")

  return (
    <Field>
      <FieldLabel>数量</FieldLabel>
      <FieldControl
        render={<NativeSelect className="w-32" />}
        name="quantity"
        value={quantity}
        onChange={(event) => setQuantity(event.currentTarget.value)}
      >
        <NativeSelectOption value="1">1個</NativeSelectOption>
        <NativeSelectOption value="2">2個</NativeSelectOption>
        <NativeSelectOption value="3">3個</NativeSelectOption>
      </FieldControl>
      <FieldDescription>
        小計 {(Number(quantity) * 2480).toLocaleString("ja-JP")}円(税込)
      </FieldDescription>
    </Field>
  )
}
