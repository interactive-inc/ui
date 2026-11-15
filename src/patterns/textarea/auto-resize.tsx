import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function TextareaAutoResize() {
  return (
    <Field name="description" className="max-w-md">
      <FieldLabel>商品の説明</FieldLabel>
      <Textarea
        autoResize
        className="max-h-48"
        defaultValue="国産ひのきを使ったまな板です。水はけがよく、においが残りにくいのが特長です。"
      />
      <FieldDescription>
        行が増えると広がり、一定の高さを超えるとスクロールします。
      </FieldDescription>
    </Field>
  )
}
