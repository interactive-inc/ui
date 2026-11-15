import { DateInput } from "@/components/ui/date-input"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

export function DateInputReadOnly() {
  return (
    <Field>
      <FieldLabel>注文日</FieldLabel>
      <DateInput
        name="orderedAt"
        locale="ja-JP"
        defaultValue="2026-11-12"
        readOnly
      />
      <FieldDescription>注文日は変更できません。</FieldDescription>
    </Field>
  )
}
