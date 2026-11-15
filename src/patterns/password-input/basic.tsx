import { Field, FieldLabel } from "@/components/ui/field"
import {
  PasswordInput,
  PasswordInputControl,
  PasswordInputToggle,
} from "@/components/ui/password-input"

export function PasswordInputBasic() {
  return (
    <Field name="password" className="max-w-sm">
      <FieldLabel>パスワード</FieldLabel>
      <PasswordInput autoComplete="current-password">
        <PasswordInputControl />
        <PasswordInputToggle />
      </PasswordInput>
    </Field>
  )
}
