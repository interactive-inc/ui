import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  FileInput,
  FileInputItem,
  FileInputList,
  FileInputTrigger,
} from "@/components/ui/file-input"

test("chosen files are listed and removed by their Japanese remove button", async () => {
  const user = userEvent.setup({ pointerEventsCheck: 0 })
  const onValueChange = vi.fn()
  const { container } = render(
    <Field>
      <FieldLabel>履歴書・職務経歴書</FieldLabel>
      <FileInput multiple onValueChange={onValueChange}>
        <FileInputTrigger />
        <FileInputList aria-label="追加した応募書類">
          <FileInputItem />
        </FileInputList>
      </FileInput>
    </Field>,
  )

  const trigger = screen.getByRole("button", { name: /履歴書・職務経歴書/ })
  expect(trigger.textContent).toBe("ファイルを選択")

  const input = container.querySelector(
    'input[type="file"]',
  ) as HTMLInputElement
  const resume = new File(["resume"], "履歴書.pdf", {
    type: "application/pdf",
  })
  await user.upload(input, resume)

  expect(onValueChange).toHaveBeenLastCalledWith(
    [resume],
    expect.objectContaining({ reason: "picker" }),
  )
  expect(screen.getByText("履歴書.pdf")).toBeTruthy()

  await user.click(screen.getByRole("button", { name: "履歴書.pdfを削除" }))

  expect(onValueChange).toHaveBeenLastCalledWith(
    [],
    expect.objectContaining({ reason: "remove-press" }),
  )
  expect(screen.queryByText("履歴書.pdf")).toBe(null)
})
