"use client"

import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  PasswordInput,
  PasswordInputControl,
  PasswordInputToggle,
} from "@/components/ui/password-input"

export function PasswordInputNewPassword() {
  const [password, setPassword] = useState("")

  const rest = 12 - password.length

  return (
    <Field name="newPassword" className="max-w-sm">
      <FieldLabel>登録するパスワード</FieldLabel>
      <PasswordInput
        autoComplete="new-password"
        required
        value={password}
        onValueChange={(value) => setPassword(value)}
      >
        <PasswordInputControl placeholder="12文字以上" minLength={12} />
        <PasswordInputToggle />
      </PasswordInput>
      <FieldDescription>
        {rest > 0 ? `あと${rest}文字必要です。` : "十分な長さです。"}
      </FieldDescription>
    </Field>
  )
}
