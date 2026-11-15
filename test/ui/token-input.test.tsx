import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import { Field, FieldLabel } from "@/components/ui/field"
import { TokenInput, TokenInputEditor } from "@/components/ui/token-input"

test("the field label names the editor and the default token can be removed", async () => {
  const onValueChange = vi.fn()
  render(
    <Field>
      <FieldLabel>面接官への依頼メッセージ</FieldLabel>
      <TokenInput
        defaultValue={[
          { type: "mention", value: "nakamura", label: "中村 大輔" },
          " さん、お願いします。",
        ]}
        onValueChange={onValueChange}
      >
        <TokenInputEditor placeholder="@ で担当者をメンション" />
      </TokenInput>
    </Field>,
  )

  const editor = screen.getByRole("textbox", {
    name: "面接官への依頼メッセージ",
  })
  expect(editor.getAttribute("aria-placeholder")).toBe("@ で担当者をメンション")

  const token = editor.querySelector('[data-slot="token-input-token"]')
  expect(token?.textContent).toBe("中村 大輔")
  expect(token?.getAttribute("data-token-type")).toBe("mention")

  const remove = token?.querySelector(
    '[data-slot="token-input-token-remove"]',
  ) as HTMLElement
  expect(remove.querySelector("svg")).not.toBe(null)

  await userEvent.click(remove)

  expect(onValueChange).toHaveBeenLastCalledWith(
    [" さん、お願いします。"],
    expect.objectContaining({ reason: "remove-press" }),
  )
})
