import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchControlled() {
  const [open, setOpen] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <Field orientation="horizontal">
        <Switch
          name="storeOpen"
          checked={open}
          onCheckedChange={(value) => setOpen(value)}
        />
        <FieldLabel>オンラインストアで注文を受け付ける</FieldLabel>
      </Field>
      <Field orientation="horizontal" disabled={!open}>
        <Switch name="giftWrap" size="sm" />
        <FieldLabel>ギフト包装を選べるようにする</FieldLabel>
      </Field>
      <FieldDescription>
        {open
          ? "ストアは公開中です。"
          : "ストアは休止中です。新しい注文は届きません。"}
      </FieldDescription>
    </div>
  )
}
