import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchSizes() {
  return (
    <FieldGroup className="gap-4">
      <Field orientation="horizontal">
        <Switch name="autoReply" defaultChecked />
        <FieldLabel>自動返信を送る</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Switch name="signature" size="sm" />
        <FieldLabel>署名を付ける</FieldLabel>
      </Field>
    </FieldGroup>
  )
}
