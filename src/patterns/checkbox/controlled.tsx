import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function CheckboxControlled() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <Field orientation="horizontal">
        <Checkbox
          name="cancelPolicy"
          checked={agreed}
          onCheckedChange={(value) => setAgreed(value === true)}
        />
        <FieldLabel>キャンセル規定を確認しました</FieldLabel>
      </Field>
      <Button
        className="w-fit"
        disabled={!agreed}
        data-agent-confirm="キャンセル規定に同意して注文を確定します"
      >
        注文を確定する
      </Button>
    </div>
  )
}
