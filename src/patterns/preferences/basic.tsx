import { Field, FieldLabel } from "@/components/ui/field"
import {
  createPreference,
  Preferences,
  usePreference,
} from "@/components/ui/preferences"
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/ui/segmented-control"

const density = createPreference({
  values: ["comfortable", "compact"],
  defaultValue: "comfortable",
  attribute: "data-density",
})

const orders = ["A-1041 青葉商事", "A-1042 みなと物流", "A-1043 さくら食品"]

export function PreferencesBasic() {
  const { value } = usePreference(density)

  return (
    <Preferences preferences={[density]}>
      <div className="flex flex-col gap-3">
        <Field>
          <FieldLabel>行の高さ</FieldLabel>
          <SegmentedControl
            name="density"
            value={value}
            onValueChange={(next) => {
              if (next !== null) density.set(next)
            }}
          >
            <SegmentedControlItem value="comfortable">
              標準
            </SegmentedControlItem>
            <SegmentedControlItem value="compact">詰める</SegmentedControlItem>
          </SegmentedControl>
        </Field>
        <ul className="flex flex-col divide-y rounded-xl border text-sm">
          {orders.map((order) => (
            <li
              key={order}
              className="px-3 in-data-[density=compact]:py-1 py-3"
            >
              {order}
            </li>
          ))}
        </ul>
      </div>
    </Preferences>
  )
}
