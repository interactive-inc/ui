import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import {
  DatePicker,
  DatePickerClear,
  DatePickerContent,
  DatePickerGroup,
  DatePickerInput,
  DatePickerTrigger,
} from "@/components/ui/date-picker"
import { Field, FieldLabel } from "@/components/ui/field"

function Fixture(props: {
  onValueChange?: (value: unknown) => void
  defaultValue?: string
}) {
  return (
    <Field>
      <FieldLabel>最終面接日</FieldLabel>
      <DatePicker
        locale="ja-JP"
        today="2026-11-15"
        defaultValue={props.defaultValue ?? null}
        onValueChange={props.onValueChange}
      >
        <DatePickerGroup>
          <DatePickerInput />
          <DatePickerClear />
          <DatePickerTrigger />
        </DatePickerGroup>
        <DatePickerContent />
      </DatePicker>
    </Field>
  )
}

test("a typed date commits on Enter", async () => {
  const onValueChange = vi.fn()
  render(<Fixture onValueChange={onValueChange} />)

  const input = screen.getByRole("textbox", { name: "最終面接日" })
  await userEvent.type(input, "2026/11/20{Enter}")

  expect(onValueChange).toHaveBeenLastCalledWith(
    "2026-11-20",
    expect.objectContaining({ reason: "input-commit" }),
  )
})

test("the trigger and clear have Japanese names, and the calendar opens", async () => {
  const onValueChange = vi.fn()
  render(<Fixture defaultValue="2026-11-20" onValueChange={onValueChange} />)

  await userEvent.click(
    screen.getByRole("button", { name: "カレンダーを開く" }),
  )

  expect(screen.getByRole("button", { name: "前の月" })).toBeTruthy()
  expect(screen.getByRole("button", { name: "次の月" })).toBeTruthy()
  expect(screen.getByRole("grid")).toBeTruthy()

  await userEvent.keyboard("{Escape}")
  await userEvent.click(screen.getByRole("button", { name: "日付を消去" }))

  expect(onValueChange).toHaveBeenLastCalledWith(
    null,
    expect.objectContaining({ reason: "clear-press" }),
  )
})
