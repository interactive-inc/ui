"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function FieldHorizontal() {
  const [giftWrap, setGiftWrap] = useState(true)
  const [notify, setNotify] = useState(false)

  return (
    <FieldGroup className="max-w-md">
      <Field name="giftWrap" orientation="horizontal">
        <Checkbox
          checked={giftWrap}
          onCheckedChange={(value) => setGiftWrap(value === true)}
        />
        <FieldContent>
          <FieldLabel>ギフト包装を受け付ける</FieldLabel>
          <FieldDescription>
            注文画面に包装の選択肢を表示します。
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field name="notify" orientation="horizontal">
        <FieldContent>
          <FieldLabel>発送時にメールで知らせる</FieldLabel>
          <FieldDescription>
            {notify ? "購入者に追跡番号を送ります。" : "メールは送りません。"}
          </FieldDescription>
        </FieldContent>
        <Switch
          checked={notify}
          onCheckedChange={(value) => setNotify(value)}
        />
      </Field>
    </FieldGroup>
  )
}
