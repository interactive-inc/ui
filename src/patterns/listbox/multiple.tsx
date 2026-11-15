import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Listbox, ListboxItem } from "@/components/ui/listbox"

const columns = [
  { value: "orderId", label: "注文番号" },
  { value: "customer", label: "顧客名" },
  { value: "amount", label: "金額" },
  { value: "status", label: "ステータス" },
]

export function ListboxMultiple() {
  const [selected, setSelected] = useState<string[]>(["orderId", "amount"])

  return (
    <Field>
      <FieldLabel>書き出す列</FieldLabel>
      <Listbox
        name="columns"
        multiple
        activation="manual"
        value={selected}
        onValueChange={(value) => setSelected(value)}
      >
        {columns.map((column) => (
          <ListboxItem key={column.value} value={column.value}>
            {column.label}
          </ListboxItem>
        ))}
      </Listbox>
      <FieldDescription>{selected.length}列を書き出します。</FieldDescription>
    </Field>
  )
}
