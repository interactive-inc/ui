import { useState } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import { TimeInput } from "@/components/ui/time-input"

function toMinutes(value: string) {
  const [hour, minute] = value.split(":").map(Number)
  return (hour ?? 0) * 60 + (minute ?? 0)
}

export function TimeInputBusinessHours() {
  const [open, setOpen] = useState<string | null>("10:00")
  const [close, setClose] = useState<string | null>("19:00")

  const length =
    open !== null && close !== null ? toMinutes(close) - toMinutes(open) : null

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel>開店時刻</FieldLabel>
          <TimeInput
            name="openAt"
            locale="ja-JP"
            min="06:00"
            max="23:00"
            value={open}
            onValueChange={(value) => setOpen(value)}
          />
        </Field>
        <Field>
          <FieldLabel>閉店時刻</FieldLabel>
          <TimeInput
            name="closeAt"
            locale="ja-JP"
            min="06:00"
            max="23:00"
            value={close}
            onValueChange={(value) => setClose(value)}
          />
        </Field>
      </div>
      <p className="text-muted-foreground text-sm">
        {length === null
          ? "開店と閉店の時刻を入力してください。"
          : length <= 0
            ? "閉店時刻は開店時刻より後にしてください。"
            : `営業時間は${Math.floor(length / 60)}時間${length % 60 === 0 ? "" : `${length % 60}分`}です。`}
      </p>
    </div>
  )
}
