import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { Field, FieldControl, FieldLabel } from "@/components/ui/field"
import {
  TriggerMenu,
  TriggerMenuInput,
  TriggerMenuStatus,
} from "@/components/ui/trigger-menu"
import { DemoBoard } from "@/src/demos/demo"
import { SdkInputDemos } from "@/src/demos/sdk-input"

const staff = [
  { value: "yamamoto", label: "山本 直子" },
  { value: "nakamura", label: "中村 大輔" },
]

// Typing a trigger doesn't open the list in jsdom, so opening and choosing are left to a real browser.
test("the field label names the styled textarea the menu suggests into", () => {
  render(
    <TriggerMenu triggers={[{ char: "@", items: staff }]}>
      <Field>
        <FieldLabel>選考メモ</FieldLabel>
        <FieldControl render={<TriggerMenuInput placeholder="@ で担当者" />} />
      </Field>
      <TriggerMenuStatus />
    </TriggerMenu>,
  )

  const input = screen.getByRole("textbox", { name: "選考メモ" })
  expect(input.tagName).toBe("TEXTAREA")
  expect(input.getAttribute("data-slot")).toBe("trigger-menu-input")
  expect(input.getAttribute("aria-haspopup")).toBe("listbox")
  expect(input.className).toContain("rounded-xl")
})

test("an input rendered through render gets the single-line shape", () => {
  render(
    <TriggerMenu triggers={[{ char: "@", items: staff }]}>
      <TriggerMenuInput aria-label="担当者を割り当て" render={<input />} />
    </TriggerMenu>,
  )

  const input = screen.getByRole("combobox", { name: "担当者を割り当て" })
  expect(input.tagName).toBe("INPUT")
  expect(input.className).toContain("[&:is(input)]:h-9")
})

test("the demo memo keeps its default text", async () => {
  render(
    <DemoBoard>
      <SdkInputDemos />
    </DemoBoard>,
  )

  const memo = (await screen.findByRole("textbox", {
    name: "選考メモ",
  })) as HTMLTextAreaElement
  expect(memo.value).toBe("#一次面接 通過。")
})
