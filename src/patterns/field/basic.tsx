import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldBasic() {
  return (
    <Field name="storeName" className="max-w-sm">
      <FieldLabel>店舗名</FieldLabel>
      <Input placeholder="例: 花森ストア 渋谷店" />
      <FieldDescription>
        レシートと注文確認メールに印字されます。
      </FieldDescription>
    </Field>
  )
}
