import {
  DatePicker,
  DatePickerCalendar,
  DatePickerContent,
  DatePickerGroup,
  DatePickerInput,
  DatePickerSeparator,
  DatePickerTrigger,
} from "@/components/ui/date-picker"
import { FieldLegend, FieldSet } from "@/components/ui/field"

export function DatePickerRange() {
  return (
    <FieldSet>
      <FieldLegend variant="label">キャンペーンの期間</FieldLegend>
      <DatePicker
        mode="range"
        name="campaign"
        locale="ja-JP"
        today="2026-11-15"
        defaultValue={["2026-11-27", "2026-12-01"]}
        months={2}
      >
        <DatePickerGroup>
          <DatePickerInput aria-label="開始日" />
          <DatePickerSeparator />
          <DatePickerInput end aria-label="終了日" />
          <DatePickerTrigger aria-label="期間のカレンダーを開く" />
        </DatePickerGroup>
        <DatePickerContent>
          <DatePickerCalendar months={2} />
        </DatePickerContent>
      </DatePicker>
    </FieldSet>
  )
}
