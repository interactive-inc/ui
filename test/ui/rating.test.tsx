import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import { Field, FieldLabel } from "@/components/ui/field"
import { Rating } from "@/components/ui/rating"
import { DemoBoard } from "@/src/demos/demo"
import { SdkInputDemos } from "@/src/demos/sdk-input"

test("the field label names the rating and stars read in Japanese", async () => {
  const onValueChange = vi.fn()
  render(
    <Field>
      <FieldLabel>技術力</FieldLabel>
      <Rating onValueChange={onValueChange} />
    </Field>,
  )

  const group = screen.getByRole("radiogroup", { name: "技術力" })
  expect(within(group).getAllByRole("radio")).toHaveLength(5)

  await userEvent.click(within(group).getByRole("radio", { name: "5点中3点" }))

  expect(onValueChange).toHaveBeenLastCalledWith(
    3,
    expect.objectContaining({ reason: "item-press" }),
  )
})

test("a read-only rating is an image named by its label", () => {
  render(<Rating aria-label="総合評価" readOnly value={4} />)

  expect(screen.getByRole("img", { name: "総合評価" })).toBeTruthy()
})

test("the demo averages the interview scores", async () => {
  render(
    <DemoBoard>
      <SdkInputDemos />
    </DemoBoard>,
  )

  const culture = await screen.findByRole("radiogroup", {
    name: "カルチャーフィット",
  })
  await userEvent.click(
    within(culture).getByRole("radio", { name: "5点中5点" }),
  )

  expect(screen.getByText("総合 4.2")).toBeTruthy()
})
