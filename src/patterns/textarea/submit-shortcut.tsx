"use client"

import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Textarea } from "@/components/ui/textarea"

export function TextareaSubmitShortcut() {
  const [reply, setReply] = useState("")
  const [sent, setSent] = useState<string | null>(null)

  return (
    <div className="flex max-w-md flex-col gap-3">
      <Field name="reply">
        <FieldLabel>問い合わせへの返信</FieldLabel>
        <Textarea
          submitShortcut="mod+enter"
          placeholder="返信を入力"
          value={reply}
          onValueChange={(value) => setReply(value)}
          onSubmit={(value) => {
            setSent(value)
            setReply("")
          }}
        />
        <FieldDescription>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>Enter</Kbd>
          </KbdGroup>{" "}
          で送信、Enter で改行します。
        </FieldDescription>
      </Field>
      {sent !== null && (
        <p className="text-muted-foreground text-sm">
          「{sent}」を送信しました
        </p>
      )}
    </div>
  )
}
