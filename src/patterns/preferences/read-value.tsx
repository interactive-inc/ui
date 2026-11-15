import { Field, FieldLabel } from "@/components/ui/field"
import { createPreference, usePreference } from "@/components/ui/preferences"
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/ui/segmented-control"

const currency = createPreference({
  values: ["jpy", "usd"],
  defaultValue: "jpy",
  attribute: "data-currency",
})

const amount = 128400

export function PreferencesReadValue() {
  const { value } = usePreference(currency)

  const text =
    value === "usd"
      ? `$${(amount / 150).toLocaleString("en-US", { maximumFractionDigits: 0 })}`
      : `${amount.toLocaleString("ja-JP")}円`

  return (
    <div className="flex flex-col gap-3">
      <Field>
        <FieldLabel>表示する通貨</FieldLabel>
        <SegmentedControl
          name="currency"
          value={value}
          onValueChange={(next) => {
            if (next !== null) currency.set(next)
          }}
        >
          <SegmentedControlItem value="jpy">日本円</SegmentedControlItem>
          <SegmentedControlItem value="usd">米ドル</SegmentedControlItem>
        </SegmentedControl>
      </Field>
      <p className="text-sm">
        今月の売上 <span className="font-medium">{text}</span>
      </p>
    </div>
  )
}
