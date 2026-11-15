import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { Meter, MeterLabel, MeterValue } from "@/components/ui/meter"
import { DemoBoard } from "@/src/demos/demo"
import { SdkDisplayDemos } from "@/src/demos/sdk-display"

test("a meter is named by its label and draws its own track", () => {
  render(
    <Meter value={2} max={4} format={(value) => `${value} / 4名`}>
      <MeterLabel>経理</MeterLabel>
      <MeterValue />
    </Meter>,
  )

  const meter = screen.getByRole("meter", { name: "経理" })
  expect(meter.getAttribute("aria-valuenow")).toBe("2")
  expect(screen.getByText("2 / 4名")).toBeTruthy()
  expect(
    meter.querySelector(
      '[data-slot="meter-track"] > [data-slot="meter-indicator"]',
    ),
  ).not.toBe(null)
})

test("the demo shows one meter per job with a spoken goal", async () => {
  render(
    <DemoBoard>
      <SdkDisplayDemos />
    </DemoBoard>,
  )

  const meter = await screen.findByRole("meter", {
    name: "フロントエンドエンジニア",
  })
  expect(meter.getAttribute("aria-valuetext")).toBe(
    "目標3名のうち2名、達成率67%",
  )
  expect(screen.getAllByRole("meter")).toHaveLength(4)
})
