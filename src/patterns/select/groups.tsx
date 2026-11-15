import { Field, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectGroups() {
  return (
    <Field>
      <FieldLabel>担当部署</FieldLabel>
      <Select name="department" defaultValue="cs">
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>営業本部</SelectLabel>
            <SelectItem value="sales">法人営業部</SelectItem>
            <SelectItem value="cs">カスタマーサポート部</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>管理本部</SelectLabel>
            <SelectItem value="accounting">経理部</SelectItem>
            <SelectItem value="legal" disabled>
              法務部(受付停止中)
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
