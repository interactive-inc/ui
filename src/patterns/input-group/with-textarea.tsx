"use client"

import { SendIcon } from "lucide-react"
import { useState } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

export function InputGroupWithTextarea() {
  const [message, setMessage] = useState("")

  return (
    <Field name="message" className="max-w-md">
      <FieldLabel>お客様への返信</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          maxLength={500}
          placeholder="山田 花子様への返信を入力"
          value={message}
          onValueChange={(value) => setMessage(value)}
        />
        <InputGroupAddon align="block-end">
          <InputGroupText>{message.length} / 500</InputGroupText>
          <InputGroupButton
            className="ml-auto"
            variant="default"
            size="icon-xs"
            disabled={message.length === 0}
            aria-label="返信を送信"
            data-agent-confirm="山田 花子様に返信を送信します"
          >
            <SendIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
