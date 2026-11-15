import { Field, FieldLabel } from "@/components/ui/field"
import { TimeInput } from "@/components/ui/time-input"

export function TimeInputBasic() {
  return (
    <Field>
      <FieldLabel>日次レポートの送信時刻</FieldLabel>
      <TimeInput name="reportTime" locale="ja-JP" defaultValue="09:00" />
    </Field>
  )
}
