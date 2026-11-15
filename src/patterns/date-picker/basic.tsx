import {
  DatePicker,
  DatePickerCalendar,
  DatePickerContent,
  DatePickerGroup,
  DatePickerInput,
  DatePickerTrigger,
} from "@/components/ui/date-picker"
import { Field, FieldLabel } from "@/components/ui/field"

export function DatePickerBasic() {
  return (
    <Field>
      <FieldLabel>請求書の発行日</FieldLabel>
      <DatePicker
        name="issuedOn"
        locale="ja-JP"
        today="2026-11-15"
        defaultValue="2026-11-30"
      >
        <DatePickerGroup>
          <DatePickerInput />
          <DatePickerTrigger aria-label="発行日のカレンダーを開く" />
        </DatePickerGroup>
        <DatePickerContent>
          <DatePickerCalendar />
        </DatePickerContent>
      </DatePicker>
    </Field>
  )
}
