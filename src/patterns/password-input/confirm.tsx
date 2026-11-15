"use client"

import { useState } from "react"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  PasswordInput,
  PasswordInputControl,
  PasswordInputToggle,
} from "@/components/ui/password-input"

export function PasswordInputConfirm() {
  const [password, setPassword] = useState("")
  const [confirmation, setConfirmation] = useState("")

  const mismatch = confirmation !== "" && confirmation !== password

  return (
    <FieldGroup className="max-w-sm">
      <Field name="password">
        <FieldLabel>新しいパスワード</FieldLabel>
        <PasswordInput
          autoComplete="new-password"
          value={password}
          onValueChange={(value) => setPassword(value)}
        >
          <PasswordInputControl />
          <PasswordInputToggle aria-label="新しいパスワードを表示" />
        </PasswordInput>
      </Field>
      <Field name="passwordConfirmation" invalid={mismatch}>
        <FieldLabel>確認のためもう一度</FieldLabel>
        <PasswordInput
          autoComplete="new-password"
          value={confirmation}
          onValueChange={(value) => setConfirmation(value)}
        >
          <PasswordInputControl />
          <PasswordInputToggle aria-label="確認用のパスワードを表示" />
        </PasswordInput>
        <FieldError>パスワードが一致しません。</FieldError>
      </Field>
    </FieldGroup>
  )
}
