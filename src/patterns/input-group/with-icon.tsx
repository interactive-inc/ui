import { MailIcon, SearchIcon } from "lucide-react"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export function InputGroupWithIcon() {
  return (
    <FieldGroup className="max-w-sm">
      <Field name="q">
        <FieldLabel>問い合わせを検索</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput placeholder="件名か顧客名" />
        </InputGroup>
      </Field>
      <Field name="replyTo">
        <FieldLabel>返信先</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <MailIcon />
          </InputGroupAddon>
          <InputGroupInput type="email" defaultValue="support@example.jp" />
        </InputGroup>
      </Field>
    </FieldGroup>
  )
}
