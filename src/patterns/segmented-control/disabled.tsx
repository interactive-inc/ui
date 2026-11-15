import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/ui/segmented-control"

export function SegmentedControlDisabled() {
  return (
    <Field>
      <FieldLabel>消費税の表示</FieldLabel>
      <SegmentedControl name="taxDisplay" defaultValue="included">
        <SegmentedControlItem value="included">税込</SegmentedControlItem>
        <SegmentedControlItem value="excluded">税抜</SegmentedControlItem>
        <SegmentedControlItem value="both" disabled>
          併記
        </SegmentedControlItem>
      </SegmentedControl>
      <FieldDescription>併記はビジネスプランで選べます。</FieldDescription>
    </Field>
  )
}
