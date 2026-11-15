import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchBasic() {
  return (
    <Field orientation="horizontal">
      <Switch name="maintenance" />
      <FieldLabel>メンテナンスモードにする</FieldLabel>
    </Field>
  )
}
