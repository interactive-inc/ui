import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export function SliderDisabled() {
  return (
    <Field disabled>
      <FieldLabel>同時ログインの上限</FieldLabel>
      <Slider name="sessions" defaultValue={3} min={1} max={10} />
      <FieldDescription>
        管理者が3台に固定しているため変更できません。
      </FieldDescription>
    </Field>
  )
}
