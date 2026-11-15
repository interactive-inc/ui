import { FileJsonIcon, FileSpreadsheetIcon, FileTextIcon } from "lucide-react"
import { Field, FieldLabel } from "@/components/ui/field"
import { Listbox, ListboxItem, ListboxItemIcon } from "@/components/ui/listbox"

export function ListboxWithIcon() {
  return (
    <Field>
      <FieldLabel>ファイル形式</FieldLabel>
      <Listbox name="format" defaultValue="csv">
        <ListboxItem value="csv" label="CSV">
          <ListboxItemIcon>
            <FileSpreadsheetIcon />
          </ListboxItemIcon>
          CSV
        </ListboxItem>
        <ListboxItem value="pdf" label="PDF">
          <ListboxItemIcon>
            <FileTextIcon />
          </ListboxItemIcon>
          PDF
        </ListboxItem>
        <ListboxItem value="json" label="JSON" disabled>
          <ListboxItemIcon>
            <FileJsonIcon />
          </ListboxItemIcon>
          JSON(上位プランで利用できます)
        </ListboxItem>
      </Listbox>
    </Field>
  )
}
