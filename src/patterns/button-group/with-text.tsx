import { CopyIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function ButtonGroupWithText() {
  return (
    <Field name="shopUrl">
      <FieldLabel>ショップの URL</FieldLabel>
      <ButtonGroup className="w-full">
        <ButtonGroupText>https://</ButtonGroupText>
        <Input defaultValue="shop.example.jp/hanamori" readOnly />
        <Button variant="outline" size="icon" aria-label="URL をコピー">
          <CopyIcon />
        </Button>
      </ButtonGroup>
    </Field>
  )
}
