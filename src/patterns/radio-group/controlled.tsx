import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const plans = [
  { value: "monthly", label: "月払い", price: "月額 3,300円" },
  { value: "yearly", label: "年払い", price: "年額 33,000円(2か月分お得)" },
]

export function RadioGroupControlled() {
  const [plan, setPlan] = useState<string | null>("monthly")

  const current = plans.find((item) => item.value === plan)

  return (
    <Field>
      <FieldLabel>お支払いサイクル</FieldLabel>
      <RadioGroup
        name="billingCycle"
        value={plan}
        onValueChange={(value) => setPlan(value)}
      >
        {plans.map((item) => (
          <Label key={item.value}>
            <RadioGroupItem value={item.value} />
            {item.label}
          </Label>
        ))}
      </RadioGroup>
      <FieldDescription>
        {current ? `次回の請求は${current.price}です。` : "選択してください。"}
      </FieldDescription>
    </Field>
  )
}
