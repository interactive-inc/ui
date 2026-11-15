import {
  ColorPicker,
  ColorPickerSwatches,
  ColorPickerSwatchItem,
} from "@/components/ui/color-picker"
import { Field, FieldLabel } from "@/components/ui/field"

const presets = [
  "#dc2626",
  "#ea580c",
  "#ca8a04",
  "#16a34a",
  "#2563eb",
  "#7c3aed",
]

export function ColorPickerSwatchesPattern() {
  return (
    <Field>
      <FieldLabel>ラベルの色</FieldLabel>
      <ColorPicker name="labelColor" format="hex" defaultValue="#2563eb">
        <ColorPickerSwatches aria-label="ラベルの色の候補">
          {presets.map((preset) => (
            <ColorPickerSwatchItem key={preset} value={preset} />
          ))}
        </ColorPickerSwatches>
      </ColorPicker>
    </Field>
  )
}
