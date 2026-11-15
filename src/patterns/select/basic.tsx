import { Field, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectBasic() {
  return (
    <Field>
      <FieldLabel>お問い合わせの種類</FieldLabel>
      <Select name="category" placeholder="選択してください">
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="order">注文について</SelectItem>
          <SelectItem value="shipping">配送について</SelectItem>
          <SelectItem value="return">返品・交換について</SelectItem>
          <SelectItem value="other">その他</SelectItem>
        </SelectContent>
      </Select>
    </Field>
  )
}
