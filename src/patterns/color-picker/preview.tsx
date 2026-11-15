import { useState } from "react"
import {
  ColorPicker,
  ColorPickerInput,
  ColorPickerSlider,
  ColorPickerSwatch,
} from "@/components/ui/color-picker"
import { Field, FieldLabel } from "@/components/ui/field"

export function ColorPickerPreview() {
  const [color, setColor] = useState("#2563eb")

  return (
    <div className="flex flex-col gap-4">
      <Field>
        <FieldLabel>お知らせバーの色</FieldLabel>
        <ColorPicker
          name="bannerColor"
          format="hex"
          value={color}
          onValueChange={(value) => setColor(value)}
        >
          <ColorPickerSlider channel="hue" />
          <div className="flex items-center gap-2">
            <ColorPickerSwatch />
            <ColorPickerInput aria-label="お知らせバーのカラーコード" />
          </div>
        </ColorPicker>
      </Field>
      <div
        className="rounded-xl px-4 py-3 text-sm text-white"
        style={{ backgroundColor: color }}
      >
        年末年始の配送スケジュールのお知らせ
      </div>
    </div>
  )
}
