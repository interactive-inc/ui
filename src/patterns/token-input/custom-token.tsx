import { PackageIcon, ReceiptIcon } from "lucide-react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import type { TokenInputValue } from "@/components/ui/token-input"
import {
  TokenInput,
  TokenInputEditor,
  TokenInputToken,
  TokenInputTokenRemove,
} from "@/components/ui/token-input"

const draft: TokenInputValue = [
  { type: "order", value: "ORD-0042", label: "#0042" },
  " で届いた ",
  { type: "product", value: "HB-0012", label: "ひのきのまな板" },
  " に割れがありました。",
  { type: "order", value: "ORD-0057", label: "#0057", status: "unresolved" },
  " も同じ症状か確認中です。",
]

export function TokenInputCustomToken() {
  return (
    <Field name="report" className="max-w-md">
      <FieldLabel>不良品の報告</FieldLabel>
      <TokenInput
        defaultValue={draft}
        renderToken={(token) => (
          <TokenInputToken>
            {token.type === "order" ? <ReceiptIcon /> : <PackageIcon />}
            {token.label}
            <TokenInputTokenRemove />
          </TokenInputToken>
        )}
      >
        <TokenInputEditor />
      </TokenInput>
      <FieldDescription>
        赤いチップは見つからなかった注文です。
      </FieldDescription>
    </Field>
  )
}
