import { DateInput } from "@/components/ui/date-input"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

export function DateInputDateTime() {
  return (
    <Field>
      <FieldLabel>メンテナンスの開始日時</FieldLabel>
      <DateInput
        name="maintenanceStart"
        locale="ja-JP"
        granularity="minute"
        defaultValue="2026-11-28T02:00"
      />
      <FieldDescription>
        この時間からストアを一時的に閉じます。
      </FieldDescription>
    </Field>
  )
}
