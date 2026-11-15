import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchWithDescription() {
  return (
    <FieldGroup>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel>新しい問い合わせを通知する</FieldLabel>
          <FieldDescription>
            問い合わせが届いたら担当チームにメールで知らせます。
          </FieldDescription>
        </FieldContent>
        <Switch name="inquiryNotice" defaultChecked />
      </Field>
      <Field orientation="horizontal" disabled>
        <FieldContent>
          <FieldLabel>操作ログを記録する</FieldLabel>
          <FieldDescription>
            管理者が必須にしているため変更できません。
          </FieldDescription>
        </FieldContent>
        <Switch name="auditLog" defaultChecked />
      </Field>
    </FieldGroup>
  )
}
