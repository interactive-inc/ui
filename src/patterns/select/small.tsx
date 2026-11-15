import { Field, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectSmall() {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="font-medium text-sm">注文一覧</span>
      <Field orientation="horizontal" className="w-fit">
        <FieldLabel className="font-normal text-muted-foreground">
          並び順
        </FieldLabel>
        <Select name="sort" defaultValue="newest">
          <SelectTrigger size="sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">注文日が新しい順</SelectItem>
            <SelectItem value="oldest">注文日が古い順</SelectItem>
            <SelectItem value="amount">金額が大きい順</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </div>
  )
}
