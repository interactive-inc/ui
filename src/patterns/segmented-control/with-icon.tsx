import { LayoutGridIcon, ListIcon } from "lucide-react"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/ui/segmented-control"

export function SegmentedControlWithIcon() {
  return (
    <Field>
      <FieldLabel>商品一覧の表示</FieldLabel>
      <SegmentedControl name="productView" defaultValue="grid">
        <SegmentedControlItem value="grid">
          <LayoutGridIcon aria-hidden="true" />
          タイル
        </SegmentedControlItem>
        <SegmentedControlItem value="list">
          <ListIcon aria-hidden="true" />
          リスト
        </SegmentedControlItem>
      </SegmentedControl>
    </Field>
  )
}
