import { CopyIcon, RefreshCwIcon } from "lucide-react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

export function InputGroupWithButton() {
  return (
    <Field name="apiKey" className="max-w-sm">
      <FieldLabel>注文連携の API キー</FieldLabel>
      <InputGroup>
        <InputGroupInput defaultValue="key_7f3a92c18e05" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="API キーをコピー">
            <CopyIcon />
          </InputGroupButton>
          <InputGroupButton
            size="icon-xs"
            aria-label="API キーを再発行"
            data-agent-confirm="今の API キーを無効にして新しいキーを発行します"
          >
            <RefreshCwIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>
        再発行すると、今のキーはすぐに使えなくなります。
      </FieldDescription>
    </Field>
  )
}
