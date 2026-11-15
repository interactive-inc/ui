import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaThumb,
  ColorPickerChannelInput,
  ColorPickerEyeDropper,
  ColorPickerInput,
  ColorPickerSlider,
  ColorPickerSwatches,
  ColorPickerSwatchItem,
} from "@/components/ui/color-picker"
import { Field, FieldLabel } from "@/components/ui/field"

function Fixture(props: { onValueChange?: (value: string) => void }) {
  return (
    <Field>
      <FieldLabel>テーマカラー</FieldLabel>
      <ColorPicker
        format="hex"
        defaultValue="#2563eb"
        onValueChange={props.onValueChange}
      >
        <ColorPickerArea>
          <ColorPickerAreaThumb />
        </ColorPickerArea>
        <ColorPickerSlider channel="hue" />
        <ColorPickerSlider channel="alpha" />
        <ColorPickerInput />
        <ColorPickerChannelInput channel="saturation" />
        <ColorPickerEyeDropper />
        <ColorPickerSwatches>
          <ColorPickerSwatchItem value="#e11d48" />
        </ColorPickerSwatches>
      </ColorPicker>
    </Field>
  )
}

test("the label names the picker and the parts have Japanese names", () => {
  render(<Fixture />)

  expect(screen.getByRole("group", { name: "テーマカラー" })).toBeTruthy()
  expect(screen.getByRole("slider", { name: "彩度と明るさ" })).toBeTruthy()
  expect(screen.getByRole("slider", { name: "色相" })).toBeTruthy()
  expect(screen.getByRole("slider", { name: "不透明度" })).toBeTruthy()
  expect(screen.getByRole("textbox", { name: "カラーコード" })).toBeTruthy()
  expect(screen.getByRole("spinbutton", { name: "彩度" })).toBeTruthy()
  expect(screen.getByRole("button", { name: "画面から色を取得" })).toBeTruthy()
  expect(screen.getByRole("listbox", { name: "プリセット" })).toBeTruthy()
})

test("typing a color and choosing a preset change the value", async () => {
  const onValueChange = vi.fn()
  render(<Fixture onValueChange={onValueChange} />)

  const input = screen.getByRole("textbox", { name: "カラーコード" })
  await userEvent.clear(input)
  await userEvent.type(input, "#16a34a{Enter}")
  expect(onValueChange).toHaveBeenLastCalledWith("#16a34a", expect.anything())

  await userEvent.click(screen.getByRole("option"))
  expect(onValueChange).toHaveBeenLastCalledWith("#e11d48", expect.anything())
})
