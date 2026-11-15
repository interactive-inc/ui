import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/ui/segmented-control"
import { DemoBoard } from "@/src/demos/demo"
import { SdkDisplayDemos } from "@/src/demos/sdk-display"

test("the control renders its indicator and reports the chosen value", async () => {
  const onValueChange = vi.fn()
  render(
    <SegmentedControl
      aria-label="表示"
      defaultValue="list"
      onValueChange={onValueChange}
    >
      <SegmentedControlItem value="list">リスト</SegmentedControlItem>
      <SegmentedControlItem value="board">ボード</SegmentedControlItem>
    </SegmentedControl>,
  )

  const group = screen.getByRole("radiogroup", { name: "表示" })
  expect(
    group.querySelector('[data-slot="segmented-control-indicator"]'),
  ).not.toBe(null)

  await userEvent.click(screen.getByRole("radio", { name: "ボード" }))

  expect(onValueChange).toHaveBeenLastCalledWith(
    "board",
    expect.objectContaining({ reason: "item-press" }),
  )
  expect(
    screen.getByRole("radio", { name: "ボード" }).getAttribute("aria-checked"),
  ).toBe("true")
})

test("the demo switches the applicant view", async () => {
  render(
    <DemoBoard>
      <SdkDisplayDemos />
    </DemoBoard>,
  )

  const group = await screen.findByRole("radiogroup", { name: "応募者の表示" })
  expect(screen.getByRole("list", { name: "応募者" })).toBeTruthy()

  await userEvent.click(within(group).getByRole("radio", { name: "面接予定" }))

  expect(screen.getByRole("list", { name: "面接予定" })).toBeTruthy()
  expect(screen.queryByRole("list", { name: "応募者" })).toBe(null)
})
