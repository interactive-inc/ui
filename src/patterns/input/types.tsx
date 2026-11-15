import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputTypes() {
  return (
    <FieldGroup className="max-w-sm">
      <Field name="email">
        <FieldLabel>連絡先メールアドレス</FieldLabel>
        <Input
          type="email"
          autoComplete="email"
          placeholder="info@example.jp"
        />
      </Field>
      <Field name="tel">
        <FieldLabel>電話番号</FieldLabel>
        <Input type="tel" autoComplete="tel" placeholder="03-1234-5678" />
      </Field>
      <Field name="logo">
        <FieldLabel>ロゴ画像</FieldLabel>
        <Input type="file" accept="image/png,image/jpeg" />
      </Field>
    </FieldGroup>
  )
}
