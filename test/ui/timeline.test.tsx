import { render, screen, within } from "@testing-library/react"
import { expect, test } from "vitest"
import {
  Timeline,
  TimelineConnector,
  TimelineDescription,
  TimelineItem,
  TimelineMarker,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline"
import { DemoBoard } from "@/src/demos/demo"
import { SdkDisplayDemos } from "@/src/demos/sdk-display"

test("each event is named by its title and the current one is marked", async () => {
  render(
    <Timeline aria-label="選考の経過">
      <TimelineItem status="complete">
        <TimelineMarker />
        <TimelineConnector />
        <TimelineTitle>書類選考を通過</TimelineTitle>
        <TimelineTime dateTime="2026-11-05">11月5日</TimelineTime>
        <TimelineDescription>山本 直子が承認</TimelineDescription>
      </TimelineItem>
      <TimelineItem status="current">
        <TimelineMarker />
        <TimelineTitle>一次面接</TimelineTitle>
      </TimelineItem>
    </Timeline>,
  )

  const list = screen.getByRole("list", { name: "選考の経過" })
  const items = within(list).getAllByRole("listitem")
  expect(items).toHaveLength(2)
  expect(
    await within(list).findByRole("listitem", { name: "書類選考を通過" }),
  ).toBeTruthy()
  expect(items[1].getAttribute("aria-current")).toBe("step")
  expect(items[0].hasAttribute("aria-current")).toBe(false)
})

test("the demo puts the second interview as the current step", async () => {
  render(
    <DemoBoard>
      <SdkDisplayDemos />
    </DemoBoard>,
  )

  const list = await screen.findByRole("list", {
    name: "佐藤 美咲さんの選考の経過",
  })
  const current = await within(list).findByRole("listitem", {
    name: "二次面接（予定）",
  })
  expect(current.getAttribute("aria-current")).toBe("step")
})
