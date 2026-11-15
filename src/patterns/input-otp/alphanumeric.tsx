import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPAlphanumeric() {
  return (
    <Field name="inviteCode">
      <FieldLabel>スタッフ招待コード</FieldLabel>
      <InputOTP maxLength={8} pattern="alphanumeric">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>
        英字と数字の8文字です。ハイフンや空白は貼り付けても無視されます。
      </FieldDescription>
    </Field>
  )
}
