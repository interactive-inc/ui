import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

export function CheckboxWithDescription() {
  return (
    <FieldGroup>
      <Field orientation="horizontal">
        <Checkbox name="orderMail" defaultChecked />
        <FieldContent>
          <FieldLabel>注文確定メールを受け取る</FieldLabel>
          <FieldDescription>
            注文が確定したときに、登録メールアドレスへ明細を送ります。
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal" disabled>
        <Checkbox name="invoiceMail" defaultChecked />
        <FieldContent>
          <FieldLabel>請求書メールを受け取る</FieldLabel>
          <FieldDescription>
            経理担当者の設定で必須になっているため変更できません。
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  )
}
