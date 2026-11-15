import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  PasswordInput,
  PasswordInputControl,
  PasswordInputToggle,
} from "@/components/ui/password-input"

test("the toggle shows the password and keeps its Japanese name", async () => {
  const onValueChange = vi.fn()
  render(
    <Field>
      <FieldLabel>閲覧用パスワード</FieldLabel>
      <PasswordInput onValueChange={onValueChange}>
        <PasswordInputControl />
        <PasswordInputToggle />
      </PasswordInput>
    </Field>,
  )

  const input = screen.getByLabelText("閲覧用パスワード") as HTMLInputElement
  expect(input.type).toBe("password")

  await userEvent.type(input, "abc")
  expect(onValueChange).toHaveBeenLastCalledWith(
    "abc",
    expect.objectContaining({ reason: "input-change" }),
  )

  const toggle = screen.getByRole("button", { name: "パスワードを表示" })
  expect(toggle.getAttribute("aria-pressed")).toBe("false")

  await userEvent.click(toggle)

  expect(input.type).toBe("text")
  expect(
    screen
      .getByRole("button", { name: "パスワードを表示" })
      .getAttribute("aria-pressed"),
  ).toBe("true")
})
