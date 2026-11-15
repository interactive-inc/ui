import { DateInput } from "@/components/ui/date-input"
import { Field, FieldLabel } from "@/components/ui/field"

export function DateInputBasic() {
  return (
    <Field>
      <FieldLabel>契約開始日</FieldLabel>
      <DateInput
        name="contractStart"
        locale="ja-JP"
        defaultValue="2026-12-01"
      />
    </Field>
  )
}
