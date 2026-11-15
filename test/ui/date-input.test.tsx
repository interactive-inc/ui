import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import { DateInput } from "@/components/ui/date-input"
import { Field, FieldLabel } from "@/components/ui/field"

test("typing every segment reports an ISO date", async () => {
  const onValueChange = vi.fn()
  render(
    <Field>
      <FieldLabel>入社予定日</FieldLabel>
      <DateInput locale="ja-JP" onValueChange={onValueChange} />
    </Field>,
  )

  const group = screen.getByRole("group", { name: "入社予定日" })
  const year = within(group).getByRole("spinbutton", { name: "年" })

  await userEvent.click(year)
  await userEvent.keyboard("20261201")

  expect(onValueChange).toHaveBeenLastCalledWith(
    "2026-12-01",
    expect.objectContaining({ reason: "input-change" }),
  )
})

test("each segment is styled as a field part", () => {
  render(
    <DateInput
      aria-label="内定通知日"
      locale="ja-JP"
      defaultValue="2026-11-13"
    />,
  )

  const segments = within(
    screen.getByRole("group", { name: "内定通知日" }),
  ).getAllByRole("spinbutton")
  expect(
    segments.map((segment) => (segment as HTMLInputElement).value),
  ).toEqual(["2026", "11", "13"])
  expect(segments[0]?.className).toContain("field-sizing-content")
})
