import { Field, FieldLabel } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export function SliderBasic() {
  return (
    <Field>
      <FieldLabel>通知音の音量</FieldLabel>
      <Slider name="volume" defaultValue={60} />
    </Field>
  )
}
