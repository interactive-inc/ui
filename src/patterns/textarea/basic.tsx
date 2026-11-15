"use client"

import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function TextareaBasic() {
  const [note, setNote] = useState("")

  return (
    <Field name="note" className="max-w-md">
      <FieldLabel>配送メモ</FieldLabel>
      <Textarea
        maxLength={200}
        placeholder="例: 不在時は宅配ボックスへ"
        value={note}
        onValueChange={(value) => setNote(value)}
      />
      <FieldDescription>{note.length} / 200 文字</FieldDescription>
    </Field>
  )
}
