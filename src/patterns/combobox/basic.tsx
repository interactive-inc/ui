import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field, FieldLabel } from "@/components/ui/field"

const customers = [
  { value: "c-1024", label: "株式会社青葉商事" },
  { value: "c-1031", label: "みなと物流株式会社" },
  { value: "c-1047", label: "有限会社さくら食品" },
  { value: "c-1052", label: "北斗システム株式会社" },
]

export function ComboboxBasic() {
  return (
    <Field>
      <FieldLabel>取引先</FieldLabel>
      <Combobox name="customer">
        <ComboboxInput
          className="w-full"
          placeholder="会社名で検索"
          showClear
        />
        <ComboboxContent>
          <ComboboxEmpty>該当する取引先がありません</ComboboxEmpty>
          <ComboboxList>
            {customers.map((customer) => (
              <ComboboxItem
                key={customer.value}
                value={customer.value}
                label={customer.label}
              >
                {customer.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
