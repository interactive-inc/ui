"use client"

import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputBasic() {
  const [name, setName] = useState("")

  return (
    <Field name="shopName" className="max-w-sm">
      <FieldLabel>ショップ名</FieldLabel>
      <Input
        placeholder="例: 花森ストア"
        value={name}
        onValueChange={(value) => setName(value)}
      />
      <FieldDescription>
        {name === ""
          ? "注文確認メールの差出人に表示されます。"
          : `差出人は「${name}」になります。`}
      </FieldDescription>
    </Field>
  )
}
