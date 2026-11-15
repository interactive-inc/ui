import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  createLocalStorage,
  createPreference,
  Preferences,
  usePreference,
} from "@/components/ui/preferences"
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/ui/segmented-control"

const sidebar = createPreference({
  values: ["open", "closed"],
  defaultValue: "open",
  attribute: "data-sidebar",
  storage: createLocalStorage("patterns-preferences-sidebar"),
})

export function PreferencesStorage() {
  const { value } = usePreference(sidebar)

  return (
    <Preferences preferences={[sidebar]}>
      <div className="flex flex-col gap-3">
        <Field>
          <FieldLabel>管理画面のサイドバー</FieldLabel>
          <SegmentedControl
            name="sidebar"
            value={value}
            onValueChange={(next) => {
              if (next !== null) sidebar.set(next)
            }}
          >
            <SegmentedControlItem value="open">開く</SegmentedControlItem>
            <SegmentedControlItem value="closed">閉じる</SegmentedControlItem>
          </SegmentedControl>
          <FieldDescription>
            選んだ状態はこのブラウザに保存され、次に開いたときも引き継がれます。
          </FieldDescription>
        </Field>
        <div className="flex h-24 overflow-hidden rounded-xl border text-sm">
          <nav className="in-data-[sidebar=closed]:hidden w-32 border-r bg-muted p-3">
            メニュー
          </nav>
          <div className="flex-1 p-3">注文一覧</div>
        </div>
      </div>
    </Preferences>
  )
}
