import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/ui/autocomplete"
import { Field, FieldLabel } from "@/components/ui/field"

const names = ["佐藤 美咲", "田中 健太", "鈴木 陽菜"]

function Fixture(props: { onValueChange?: (value: string) => void }) {
  return (
    <Field>
      <FieldLabel>応募者を検索</FieldLabel>
      <Autocomplete onValueChange={props.onValueChange}>
        <AutocompleteInput showClear showTrigger />
        <AutocompleteContent>
          <AutocompleteEmpty>一致する応募者はいません</AutocompleteEmpty>
          <AutocompleteList>
            {names.map((name) => (
              <AutocompleteItem key={name} value={name}>
                {name}
              </AutocompleteItem>
            ))}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </Field>
  )
}

test("the field label names the input and a suggestion fills it", async () => {
  const onValueChange = vi.fn()
  render(<Fixture onValueChange={onValueChange} />)

  const input = screen.getByRole("combobox", { name: "応募者を検索" })
  await userEvent.type(input, "鈴木")
  await userEvent.click(
    await screen.findByRole("option", { name: "鈴木 陽菜" }),
  )

  expect(onValueChange).toHaveBeenLastCalledWith(
    "鈴木 陽菜",
    expect.objectContaining({ reason: "item-press" }),
  )
  expect((input as HTMLInputElement).value).toBe("鈴木 陽菜")
})

test("the trigger and clear buttons have Japanese names", async () => {
  const onValueChange = vi.fn()
  render(<Fixture onValueChange={onValueChange} />)

  expect(screen.queryByRole("button", { name: "入力を消去" })).toBe(null)

  await userEvent.click(screen.getByRole("button", { name: "候補を表示" }))
  expect(screen.getAllByRole("option")).toHaveLength(3)

  await userEvent.type(
    screen.getByRole("combobox", { name: "応募者を検索" }),
    "経理",
  )
  await userEvent.click(screen.getByRole("button", { name: "入力を消去" }))

  expect(onValueChange).toHaveBeenLastCalledWith(
    "",
    expect.objectContaining({ reason: "clear-press" }),
  )
})
