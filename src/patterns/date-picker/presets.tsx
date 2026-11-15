import {
  DatePicker,
  DatePickerCalendar,
  DatePickerContent,
  DatePickerGroup,
  DatePickerInput,
  DatePickerPreset,
  DatePickerPresets,
  DatePickerTrigger,
} from "@/components/ui/date-picker"
import { Field, FieldLabel } from "@/components/ui/field"

export function DatePickerPresetsPattern() {
  return (
    <Field>
      <FieldLabel>お支払い期限</FieldLabel>
      <DatePicker name="dueDate" locale="ja-JP" today="2026-11-15">
        <DatePickerGroup>
          <DatePickerInput />
          <DatePickerTrigger aria-label="支払い期限のカレンダーを開く" />
        </DatePickerGroup>
        <DatePickerContent>
          <DatePickerPresets>
            <DatePickerPreset value="2026-11-30">今月末</DatePickerPreset>
            <DatePickerPreset value="2026-12-31">翌月末</DatePickerPreset>
            <DatePickerPreset value="2027-01-31">翌々月末</DatePickerPreset>
          </DatePickerPresets>
          <DatePickerCalendar />
        </DatePickerContent>
      </DatePicker>
    </Field>
  )
}
