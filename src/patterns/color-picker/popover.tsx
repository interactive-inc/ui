import { buttonVariants } from "@/components/ui/button"
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaThumb,
  ColorPickerInput,
  ColorPickerSlider,
  ColorPickerSwatch,
} from "@/components/ui/color-picker"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function ColorPickerPopover() {
  return (
    <Field className="max-w-sm">
      <FieldLabel>購入ボタンの色</FieldLabel>
      <ColorPicker name="buttonColor" format="hex" defaultValue="#e11d48">
        <Popover>
          <PopoverTrigger
            aria-label="購入ボタンの色を選ぶ"
            className={buttonVariants({
              variant: "outline",
              className: "w-fit",
            })}
          >
            <ColorPickerSwatch className="size-4" />
            色を選ぶ
          </PopoverTrigger>
          <PopoverContent className="flex w-64 flex-col gap-3">
            <ColorPickerArea>
              <ColorPickerAreaThumb />
            </ColorPickerArea>
            <ColorPickerSlider channel="hue" />
            <ColorPickerInput aria-label="購入ボタンのカラーコード" />
          </PopoverContent>
        </Popover>
      </ColorPicker>
    </Field>
  )
}
