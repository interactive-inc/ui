import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@/components/ui/combobox"
import { Field, FieldLabel } from "@/components/ui/field"

const tags = [
  { value: "urgent", label: "至急" },
  { value: "refund", label: "返金" },
  { value: "damaged", label: "破損" },
  { value: "delay", label: "配送遅延" },
  { value: "vip", label: "優良顧客" },
]

export function ComboboxMultiple() {
  return (
    <Field>
      <FieldLabel>タグ</FieldLabel>
      <Combobox name="tags" multiple defaultValue={["refund", "damaged"]}>
        <ComboboxChips className="w-full">
          <ComboboxValue>
            {(state) =>
              state.values.map((value) => (
                <ComboboxChip key={value} value={value} />
              ))
            }
          </ComboboxValue>
          <ComboboxChipsInput placeholder="タグを追加" />
        </ComboboxChips>
        <ComboboxContent>
          <ComboboxEmpty>該当するタグがありません</ComboboxEmpty>
          <ComboboxList>
            {tags.map((tag) => (
              <ComboboxItem key={tag.value} value={tag.value} label={tag.label}>
                {tag.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
