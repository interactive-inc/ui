import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
} from "@/components/ui/number-input"
import { DemoBoard } from "@/src/demos/demo"
import { SdkInputDemos } from "@/src/demos/sdk-input"

test("the step buttons have Japanese names and step the value", async () => {
  const onValueChange = vi.fn()
  render(
    <Field>
      <FieldLabel>採用人数</FieldLabel>
      <NumberInput
        defaultValue={2}
        min={1}
        max={3}
        onValueChange={onValueChange}
      >
        <NumberInputGroup>
          <NumberInputDecrement />
          <NumberInputControl />
          <NumberInputIncrement />
        </NumberInputGroup>
      </NumberInput>
    </Field>,
  )

  const input = screen.getByLabelText("採用人数") as HTMLInputElement
  expect(input.value).toBe("2")

  await userEvent.click(screen.getByRole("button", { name: "増やす" }))
  expect(onValueChange).toHaveBeenLastCalledWith(3, expect.anything())
  expect(
    screen
      .getByRole("button", { name: "増やす" })
      .hasAttribute("data-disabled"),
  ).toBe(true)

  await userEvent.click(screen.getByRole("button", { name: "減らす" }))
  expect(onValueChange).toHaveBeenLastCalledWith(2, expect.anything())
})

test("the demo shows the hiring budget", async () => {
  render(
    <DemoBoard>
      <SdkInputDemos />
    </DemoBoard>,
  )

  await userEvent.click(
    await screen.findByRole("button", { name: "採用人数を増やす" }),
  )

  expect(screen.getByText("採用予算の目安は1,950万円です。")).toBeTruthy()
})
