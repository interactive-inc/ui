import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@/components/ui/combobox"
import { Field, FieldLabel } from "@/components/ui/field"

const categories = [
  {
    label: "パソコン周辺機器",
    items: [
      { value: "keyboard", label: "キーボード" },
      { value: "mouse", label: "マウス" },
      { value: "monitor", label: "モニター" },
    ],
  },
  {
    label: "オフィス家具",
    items: [
      { value: "desk", label: "デスク" },
      { value: "chair", label: "オフィスチェア" },
    ],
  },
]

export function ComboboxGroups() {
  return (
    <Field>
      <FieldLabel>商品カテゴリ</FieldLabel>
      <Combobox name="category">
        <ComboboxInput className="w-full" placeholder="カテゴリを検索" />
        <ComboboxContent>
          <ComboboxEmpty>該当するカテゴリがありません</ComboboxEmpty>
          <ComboboxList>
            {categories.map((group, index) => (
              <ComboboxGroup key={group.label}>
                {index > 0 && <ComboboxSeparator />}
                <ComboboxLabel>{group.label}</ComboboxLabel>
                {group.items.map((item) => (
                  <ComboboxItem
                    key={item.value}
                    value={item.value}
                    label={item.label}
                  >
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxGroup>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
