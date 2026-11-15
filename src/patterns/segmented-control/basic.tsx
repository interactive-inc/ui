import { Field, FieldLabel } from "@/components/ui/field"
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/ui/segmented-control"

export function SegmentedControlBasic() {
  return (
    <Field>
      <FieldLabel>請求の締め日</FieldLabel>
      <SegmentedControl name="closingDay" defaultValue="end">
        <SegmentedControlItem value="15">15日</SegmentedControlItem>
        <SegmentedControlItem value="20">20日</SegmentedControlItem>
        <SegmentedControlItem value="end">月末</SegmentedControlItem>
      </SegmentedControl>
    </Field>
  )
}
