import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputStates() {
  return (
    <FieldGroup className="max-w-sm">
      <Field name="orderId">
        <FieldLabel>注文番号</FieldLabel>
        <Input defaultValue="ORD-2026-11-0042" readOnly />
        <FieldDescription>注文番号は変更できません。</FieldDescription>
      </Field>
      <Field name="coupon" disabled>
        <FieldLabel>クーポンコード</FieldLabel>
        <Input placeholder="会員のみ入力できます" />
      </Field>
      <Field name="zip" invalid>
        <FieldLabel>郵便番号</FieldLabel>
        <Input defaultValue="150-00" />
        <FieldError>郵便番号は7桁で入力してください。</FieldError>
      </Field>
    </FieldGroup>
  )
}
