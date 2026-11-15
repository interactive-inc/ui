import { Field, FieldLabel } from "@/components/ui/field"
import { Listbox, ListboxItem } from "@/components/ui/listbox"

export function ListboxBasic() {
  return (
    <Field>
      <FieldLabel>書き出す期間</FieldLabel>
      <Listbox name="period" defaultValue="month">
        <ListboxItem value="week">今週</ListboxItem>
        <ListboxItem value="month">今月</ListboxItem>
        <ListboxItem value="quarter">今四半期</ListboxItem>
        <ListboxItem value="year">今年度</ListboxItem>
      </Listbox>
    </Field>
  )
}
