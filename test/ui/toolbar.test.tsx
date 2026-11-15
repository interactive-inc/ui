import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import {
  Toolbar,
  ToolbarButton,
  ToolbarInput,
  ToolbarSeparator,
} from "@/components/ui/toolbar"
import { DemoBoard } from "@/src/demos/demo"
import { SdkDisplayDemos } from "@/src/demos/sdk-display"

test("buttons run their actions and a disabled one stays reachable", async () => {
  const onSend = vi.fn()
  const onReject = vi.fn()
  render(
    <Toolbar aria-label="操作">
      <ToolbarInput aria-label="検索" />
      <ToolbarSeparator />
      <ToolbarButton onClick={onSend}>メールを送る</ToolbarButton>
      <ToolbarButton disabled onClick={onReject}>
        不採用
      </ToolbarButton>
    </Toolbar>,
  )

  const toolbar = screen.getByRole("toolbar", { name: "操作" })
  const send = within(toolbar).getByRole("button", { name: "メールを送る" })
  const reject = within(toolbar).getByRole("button", { name: "不採用" })

  await userEvent.click(send)
  expect(onSend).toHaveBeenCalledOnce()
  expect(send.hasAttribute("aria-disabled")).toBe(false)

  await userEvent.click(reject)
  expect(onReject).not.toHaveBeenCalled()
  expect(reject.getAttribute("aria-disabled")).toBe("true")
})

test("the demo bar names every control and reports what ran", async () => {
  render(
    <DemoBoard>
      <SdkDisplayDemos />
    </DemoBoard>,
  )

  const toolbar = await screen.findByRole("toolbar", {
    name: "応募者一覧の操作",
  })
  expect(
    within(toolbar).getByRole("textbox", { name: "氏名で応募者を絞り込む" }),
  ).toBeTruthy()
  for (const name of [
    "次の選考へ",
    "不採用",
    "選択した2名にメールを送る",
    "CSVを書き出す",
  ]) {
    expect(within(toolbar).getByRole("button", { name })).toBeTruthy()
  }

  await userEvent.click(
    within(toolbar).getByRole("button", { name: "CSVを書き出す" }),
  )
  expect(screen.getByText("応募者一覧をCSVに書き出しました")).toBeTruthy()
})
