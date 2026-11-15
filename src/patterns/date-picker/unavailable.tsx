import { format, parseISO } from "date-fns"
import { ja } from "date-fns/locale"
import { useState } from "react"
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerClear,
  DatePickerContent,
  DatePickerGroup,
  DatePickerHint,
  DatePickerInput,
  DatePickerTrigger,
} from "@/components/ui/date-picker"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

export function DatePickerUnavailable() {
  const [date, setDate] = useState<string | null>("2026-11-19")

  return (
    <Field>
      <FieldLabel>訪問点検の希望日</FieldLabel>
      <DatePicker
        name="visitDate"
        locale="ja-JP"
        today="2026-11-15"
        min="2026-11-17"
        max="2026-12-25"
        unavailable={[{ weekday: [0, 6] }]}
        value={date}
        onValueChange={(value) => {
          setDate(typeof value === "string" ? value : null)
        }}
      >
        <DatePickerGroup>
          <DatePickerInput />
          <DatePickerClear aria-label="希望日を消去" />
          <DatePickerTrigger aria-label="希望日のカレンダーを開く" />
        </DatePickerGroup>
        <DatePickerHint>{(state) => `例: ${state.example}`}</DatePickerHint>
        <DatePickerContent>
          <DatePickerCalendar />
        </DatePickerContent>
      </DatePicker>
      <FieldDescription>
        {date === null
          ? "平日のみ選べます。"
          : `${format(parseISO(date), "M月d日(E)", { locale: ja })}に担当者が伺います。`}
      </FieldDescription>
    </Field>
  )
}
