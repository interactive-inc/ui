"use client"

import { useState } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  PasswordInput,
  PasswordInputControl,
} from "@/components/ui/password-input"
import { Switch } from "@/components/ui/switch"

export function PasswordInputControlledVisibility() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="flex max-w-sm flex-col gap-4">
      <Field name="smtpPassword">
        <FieldLabel>送信メールサーバーのパスワード</FieldLabel>
        <PasswordInput
          autoComplete="off"
          visible={visible}
          onVisibleChange={(value) => setVisible(value)}
        >
          <PasswordInputControl />
        </PasswordInput>
      </Field>
      <Field orientation="horizontal">
        <Switch
          checked={visible}
          onCheckedChange={(value) => setVisible(value)}
        />
        <FieldLabel>入力中の文字を表示する</FieldLabel>
      </Field>
    </div>
  )
}
