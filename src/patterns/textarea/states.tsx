import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function TextareaStates() {
  return (
    <FieldGroup className="max-w-md">
      <Field name="reason" invalid>
        <FieldLabel>返品の理由</FieldLabel>
        <Textarea placeholder="できるだけ詳しく書いてください" />
        <FieldError>返品の理由は必須です。</FieldError>
      </Field>
      <Field name="staffNote" disabled>
        <FieldLabel>倉庫からの連絡</FieldLabel>
        <Textarea defaultValue="商品の到着後に入力されます。" />
      </Field>
    </FieldGroup>
  )
}
