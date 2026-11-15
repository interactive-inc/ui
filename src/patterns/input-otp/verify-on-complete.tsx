"use client"

import { useState } from "react"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPVerifyOnComplete() {
  const [result, setResult] = useState<"idle" | "ok" | "ng">("idle")

  return (
    <Field name="exportCode" invalid={result === "ng"}>
      <FieldLabel>書き出しの確認コード</FieldLabel>
      <InputOTP
        maxLength={4}
        pattern="digits"
        onValueChange={() => setResult("idle")}
        onValueCommit={(value) => setResult(value === "2026" ? "ok" : "ng")}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>
        {result === "ok"
          ? "確認できました。注文データを書き出せます。"
          : "4桁がそろうと自動で確かめます。"}
      </FieldDescription>
      <FieldError>コードが違います。もう一度入力してください。</FieldError>
    </Field>
  )
}
