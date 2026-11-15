import { Field, FieldControl, FieldLabel } from "@/components/ui/field"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export function NativeSelectSmall() {
  return (
    <Field orientation="horizontal" className="justify-between">
      <FieldLabel>1ページの表示件数</FieldLabel>
      <FieldControl
        render={<NativeSelect size="sm" />}
        name="perPage"
        defaultValue="20"
      >
        <NativeSelectOption value="20">20件</NativeSelectOption>
        <NativeSelectOption value="50">50件</NativeSelectOption>
        <NativeSelectOption value="100">100件</NativeSelectOption>
      </FieldControl>
    </Field>
  )
}
