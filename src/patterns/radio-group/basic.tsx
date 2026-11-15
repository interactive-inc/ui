import { Field, FieldLabel } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupBasic() {
  return (
    <Field>
      <FieldLabel>お支払い方法</FieldLabel>
      <RadioGroup name="payment" defaultValue="card">
        <Label>
          <RadioGroupItem value="card" />
          クレジットカード
        </Label>
        <Label>
          <RadioGroupItem value="invoice" />
          請求書払い
        </Label>
        <Label>
          <RadioGroupItem value="transfer" />
          銀行振込
        </Label>
      </RadioGroup>
    </Field>
  )
}
