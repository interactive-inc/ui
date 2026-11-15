import { Field, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectMultiple() {
  return (
    <Field>
      <FieldLabel>配送できる地域</FieldLabel>
      <Select
        name="regions"
        multiple
        defaultValue={["kanto", "kansai"]}
        placeholder="地域を選択"
      >
        <SelectTrigger className="w-full">
          <SelectValue maxLabels={2} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="hokkaido">北海道</SelectItem>
          <SelectItem value="tohoku">東北</SelectItem>
          <SelectItem value="kanto">関東</SelectItem>
          <SelectItem value="chubu">中部</SelectItem>
          <SelectItem value="kansai">関西</SelectItem>
          <SelectItem value="kyushu">九州・沖縄</SelectItem>
        </SelectContent>
      </Select>
    </Field>
  )
}
