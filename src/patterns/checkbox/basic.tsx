import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function CheckboxBasic() {
  return (
    <Field orientation="horizontal">
      <Checkbox name="terms" />
      <FieldLabel>利用規約とプライバシーポリシーに同意する</FieldLabel>
    </Field>
  )
}
