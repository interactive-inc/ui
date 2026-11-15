"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldValidation() {
  const [message, setMessage] = useState("")

  return (
    <form
      className="flex max-w-sm flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        setMessage(`${data.get("sku")} を登録しました。`)
      }}
    >
      <Field name="sku">
        <FieldLabel>品番</FieldLabel>
        <Input required pattern="[A-Z]{2}-[0-9]{4}" placeholder="HB-0012" />
        <FieldDescription>
          英大文字2つ、ハイフン、数字4桁です。
        </FieldDescription>
        <FieldError match="valueMissing">品番を入力してください。</FieldError>
        <FieldError match="patternMismatch">
          品番の形式が正しくありません。
        </FieldError>
      </Field>
      <Button type="submit" className="w-fit">
        商品を登録
      </Button>
      {message && <p className="text-muted-foreground text-sm">{message}</p>}
    </form>
  )
}
