import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import { Field, FieldLabel } from "@/components/ui/field"
import { TimeInput } from "@/components/ui/time-input"

test("typing hours and minutes reports a 24-hour time", async () => {
  const onValueChange = vi.fn()
  render(
    <Field>
      <FieldLabel>開始時刻</FieldLabel>
      <TimeInput locale="ja-JP" onValueChange={onValueChange} />
    </Field>,
  )

  const group = screen.getByRole("group", { name: "開始時刻" })
  await userEvent.click(within(group).getByRole("spinbutton", { name: "時" }))
  await userEvent.keyboard("1430")

  expect(onValueChange).toHaveBeenLastCalledWith(
    "14:30",
    expect.objectContaining({ reason: "input-change" }),
  )
})
