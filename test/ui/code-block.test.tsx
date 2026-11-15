import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
} from "@/components/ui/code-block"

test("the copy button writes the code and announces it once", async () => {
  const user = userEvent.setup()
  const writeText = vi
    .spyOn(navigator.clipboard, "writeText")
    .mockResolvedValue()
  const onClick = vi.fn()
  const { container } = render(
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockActions>
          <CodeBlockCopyButton value="bun add zod" onClick={onClick} />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent>bun add zod</CodeBlockContent>
    </CodeBlock>,
  )

  const button = screen.getByRole("button", { name: "コードをコピー" })
  expect(container.querySelector("[aria-live]")).toBeNull()

  await user.click(button)

  expect(onClick).toHaveBeenCalledOnce()
  expect(writeText).toHaveBeenCalledWith("bun add zod")
  await waitFor(() => expect(button.hasAttribute("data-copied")).toBe(true))
  await waitFor(() => {
    const regions = [...document.querySelectorAll("[aria-live=polite]")]
    expect(
      regions.filter((region) => region.textContent === "コピーしました"),
    ).toHaveLength(1)
  })
})

test("a failed copy says nothing", async () => {
  const user = userEvent.setup()
  vi.spyOn(navigator.clipboard, "writeText").mockRejectedValue(
    new Error("denied"),
  )
  render(<CodeBlockCopyButton value="bun add zod" />)

  const button = screen.getByRole("button", { name: "コードをコピー" })
  await user.click(button)

  expect(button.hasAttribute("data-copied")).toBe(false)
})
