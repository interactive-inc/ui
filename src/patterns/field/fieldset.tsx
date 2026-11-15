import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function FieldFieldset() {
  return (
    <FieldSet className="max-w-md">
      <FieldLegend>配送先</FieldLegend>
      <FieldDescription>
        登録した住所は次回の注文から選べるようになります。
      </FieldDescription>
      <FieldGroup>
        <div className="grid grid-cols-2 gap-4">
          <Field name="lastName">
            <FieldLabel>姓</FieldLabel>
            <Input autoComplete="family-name" />
          </Field>
          <Field name="firstName">
            <FieldLabel>名</FieldLabel>
            <Input autoComplete="given-name" />
          </Field>
        </div>
        <Field name="postalCode">
          <FieldLabel>郵便番号</FieldLabel>
          <Input autoComplete="postal-code" placeholder="150-0001" />
        </Field>
        <FieldSeparator>任意</FieldSeparator>
        <Field name="deliveryNote">
          <FieldLabel>配達の希望</FieldLabel>
          <Textarea placeholder="例: 午前中の配達を希望" />
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
