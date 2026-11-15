import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

export function InputGroupWithText() {
  return (
    <FieldGroup className="max-w-sm">
      <Field name="slug">
        <FieldLabel>商品ページの URL</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>shop.example.jp/items/</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput defaultValue="hinoki-board" />
        </InputGroup>
      </Field>
      <Field name="freeShipping">
        <FieldLabel>送料無料になる金額</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>¥</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput inputMode="numeric" defaultValue="5,000" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>以上</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </FieldGroup>
  )
}
