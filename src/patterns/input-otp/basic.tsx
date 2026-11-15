"use client"

import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPBasic() {
  const [code, setCode] = useState("")

  return (
    <Field name="code">
      <FieldLabel>確認コード</FieldLabel>
      <InputOTP
        maxLength={6}
        pattern="digits"
        autoComplete="one-time-code"
        value={code}
        onValueChange={(value) => setCode(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>
        {code.length < 6
          ? "登録メールアドレスに届いた6桁の数字を入力してください。"
          : "入力が終わりました。"}
      </FieldDescription>
    </Field>
  )
}
