import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldServerError() {
  return (
    <Field name="couponCode" invalid className="max-w-sm">
      <FieldLabel>クーポンコード</FieldLabel>
      <Input defaultValue="WINTER2026" />
      <FieldError
        errors={[
          { message: "このコードはすでに使われています。" },
          { message: "有効期限は 2026年10月31日 で切れています。" },
        ]}
      />
    </Field>
  )
}
