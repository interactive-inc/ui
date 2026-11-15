import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import type { WaterfallData } from "@ui-sdk/react/waterfall"
import { expect, test, vi } from "vitest"
import {
  Waterfall,
  WaterfallAxis,
  WaterfallBar,
  WaterfallColumnHeader,
  WaterfallHeaderRow,
  WaterfallRow,
  WaterfallRowHeader,
} from "@/components/ui/waterfall"
import { DemoBoard } from "@/src/demos/demo"
import { SdkDisplayDemos } from "@/src/demos/sdk-display"

const spans: WaterfallData = [
  { value: "screening", label: "書類選考", start: 0, duration: 4 },
  { value: "first", label: "一次面接", start: 4, duration: 6 },
]

test("bars read in Japanese and pressing a row selects it", async () => {
  const onValueChange = vi.fn()
  render(
    <Waterfall
      aria-label="工程"
      items={spans}
      format={(days) => `${days}日`}
      onValueChange={onValueChange}
    >
      <WaterfallHeaderRow>
        <WaterfallColumnHeader>工程</WaterfallColumnHeader>
        <WaterfallColumnHeader aria-label="経過日数">
          <WaterfallAxis />
        </WaterfallColumnHeader>
      </WaterfallHeaderRow>
      {spans.map((span) => (
        <WaterfallRow key={span.value} value={span.value}>
          <WaterfallRowHeader>{span.label}</WaterfallRowHeader>
          <WaterfallBar />
        </WaterfallRow>
      ))}
    </Waterfall>,
  )

  const grid = screen.getByRole("treegrid", { name: "工程" })
  expect(
    within(grid).getByRole("gridcell", { name: "開始 4日、所要 6日" }),
  ).toBeTruthy()
  expect(
    grid.querySelectorAll('[data-slot="waterfall-tick"]').length,
  ).toBeGreaterThan(0)

  await userEvent.click(within(grid).getByText("一次面接"))
  expect(onValueChange).toHaveBeenLastCalledWith("first", expect.anything())
})

test("the demo opens an applicant into stages", async () => {
  render(
    <DemoBoard>
      <SdkDisplayDemos />
    </DemoBoard>,
  )

  const grid = await screen.findByRole("treegrid", { name: "選考リードタイム" })
  expect(
    within(grid).getByRole("gridcell", {
      name: "佐藤 美咲、1日目に開始、16日かかった",
    }),
  ).toBeTruthy()
  expect(within(grid).getAllByText("最終面接")).toHaveLength(1)

  await userEvent.click(within(grid).getByText("佐藤 美咲"))
  expect(screen.getByText("佐藤 美咲：16日")).toBeTruthy()
})
