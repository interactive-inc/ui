"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputValidation() {
  const [saved, setSaved] = useState("")

  return (
    <form
      className="flex max-w-sm flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        setSaved(`${data.get("contact")} に通知を送ります。`)
      }}
    >
      <Field name="contact">
        <FieldLabel>在庫通知の送り先</FieldLabel>
        <Input type="email" required placeholder="stock@example.jp" />
        <FieldError match="valueMissing">
          メールアドレスを入力してください。
        </FieldError>
        <FieldError match="typeMismatch">
          メールアドレスの形式が正しくありません。
        </FieldError>
      </Field>
      <Button type="submit" className="w-fit">
        保存する
      </Button>
      {saved && <p className="text-muted-foreground text-sm">{saved}</p>}
    </form>
  )
}
