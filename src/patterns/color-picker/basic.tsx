import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaThumb,
  ColorPickerInput,
  ColorPickerSlider,
  ColorPickerSwatch,
} from "@/components/ui/color-picker"
import { Field, FieldLabel } from "@/components/ui/field"

export function ColorPickerBasic() {
  return (
    <Field>
      <FieldLabel>ストアのテーマカラー</FieldLabel>
      <ColorPicker name="themeColor" format="hex" defaultValue="#0d9488">
        <ColorPickerArea>
          <ColorPickerAreaThumb />
        </ColorPickerArea>
        <ColorPickerSlider channel="hue" />
        <div className="flex items-center gap-2">
          <ColorPickerSwatch />
          <ColorPickerInput aria-label="テーマカラーのカラーコード" />
        </div>
      </ColorPicker>
    </Field>
  )
}
