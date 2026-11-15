import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import { Listbox, ListboxItem } from "@/components/ui/listbox"
import { DemoBoard } from "@/src/demos/demo"
import { SdkDisplayDemos } from "@/src/demos/sdk-display"

test("pressing an option reports its value and shows the check", async () => {
  const onValueChange = vi.fn()
  render(
    <Listbox aria-label="面接官" onValueChange={onValueChange}>
      <ListboxItem value="yamamoto">山本 直子</ListboxItem>
      <ListboxItem value="nakamura">中村 大輔</ListboxItem>
    </Listbox>,
  )

  const option = screen.getByRole("option", { name: "中村 大輔" })
  expect(option.querySelector('[data-slot="listbox-item-indicator"]')).toBe(
    null,
  )

  await userEvent.click(option)

  expect(onValueChange).toHaveBeenLastCalledWith(
    "nakamura",
    expect.objectContaining({ reason: "item-press" }),
  )
  expect(option.getAttribute("aria-selected")).toBe("true")
  expect(
    option.querySelector('[data-slot="listbox-item-indicator"] svg'),
  ).not.toBe(null)
})

test("the demo assigns interviewers from a named list", async () => {
  render(
    <DemoBoard>
      <SdkDisplayDemos />
    </DemoBoard>,
  )

  const list = await screen.findByRole("listbox", {
    name: "佐藤 美咲さんの二次面接の面接官",
  })
  await userEvent.click(within(list).getByRole("option", { name: /小林 由香/ }))

  expect(screen.getByText("中村 大輔、小林 由香を割り当て")).toBeTruthy()
})
