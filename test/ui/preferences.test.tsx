import { act, render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test } from "vitest"
import {
  createPreference,
  Preferences,
  usePreference,
} from "@/components/ui/preferences"
import { DemoBoard } from "@/src/demos/demo"
import { SdkDisplayDemos } from "@/src/demos/sdk-display"

const density = createPreference({
  values: ["comfortable", "compact"],
  defaultValue: "comfortable",
  attribute: "data-density",
})

function Current() {
  const { value } = usePreference(density)
  return <p>{value}</p>
}

test("the wrapper puts the preference on its attribute", async () => {
  const { container } = render(
    <Preferences preferences={[density]}>
      <Current />
    </Preferences>,
  )

  const root = container.querySelector('[data-slot="preferences"]')
  expect(root?.getAttribute("data-density")).toBe("comfortable")

  act(() => {
    density.set("compact")
  })

  expect(root?.getAttribute("data-density")).toBe("compact")
  expect(screen.getByText("compact")).toBeTruthy()
})

test("the demo turns notifications off and disables every switch", async () => {
  render(
    <DemoBoard>
      <SdkDisplayDemos />
    </DemoBoard>,
  )

  const group = await screen.findByRole("radiogroup", {
    name: "通知のタイミング",
  })
  const switches = ["新しい応募", "面接日程の確定", "評価の記入"].map((label) =>
    screen.getByRole("switch", { name: `${label}を通知` }),
  )
  for (const control of switches) {
    expect(control.hasAttribute("aria-disabled")).toBe(false)
  }

  await userEvent.click(within(group).getByRole("radio", { name: "オフ" }))

  expect(screen.getByText("通知はすべて止まっています")).toBeTruthy()
  expect(document.querySelector('[data-notification="off"]')).not.toBe(null)
  for (const control of switches) {
    expect(
      control.hasAttribute("disabled") ||
        control.getAttribute("aria-disabled") === "true",
    ).toBe(true)
  }
})
