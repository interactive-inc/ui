import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { TimeInput } from "@/components/ui/time-input"

export function TimeInputHourCycle() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel>受付締め切り(12時間表記)</FieldLabel>
        <TimeInput
          name="cutoff"
          locale="ja-JP"
          hourCycle={12}
          defaultValue="15:30"
        />
      </Field>
      <Field>
        <FieldLabel>バックアップの実行時刻(秒まで)</FieldLabel>
        <TimeInput
          name="backupAt"
          locale="ja-JP"
          hourCycle={24}
          granularity="second"
          defaultValue="03:15:00"
        />
      </Field>
    </FieldGroup>
  )
}
