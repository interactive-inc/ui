import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const notes: Record<string, string> = {
  low: "5営業日以内に回答します。",
  normal: "2営業日以内に回答します。",
  high: "当日中に担当者から連絡します。",
}

export function SelectControlled() {
  const [priority, setPriority] = useState<string | null>("normal")

  return (
    <Field>
      <FieldLabel>優先度</FieldLabel>
      <Select
        name="priority"
        value={priority}
        onValueChange={(value) => setPriority(value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">低</SelectItem>
          <SelectItem value="normal">通常</SelectItem>
          <SelectItem value="high">至急</SelectItem>
        </SelectContent>
      </Select>
      <FieldDescription>
        {priority ? notes[priority] : "優先度を選んでください。"}
      </FieldDescription>
    </Field>
  )
}
