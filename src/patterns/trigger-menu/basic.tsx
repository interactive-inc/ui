"use client"

import { UserIcon } from "lucide-react"
import { useState } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import {
  TriggerMenu,
  TriggerMenuContent,
  TriggerMenuEmpty,
  TriggerMenuInput,
  TriggerMenuItem,
  TriggerMenuItemIcon,
  TriggerMenuList,
} from "@/components/ui/trigger-menu"

const staff = [
  { value: "kimura", label: "木村 さやか" },
  { value: "ono", label: "小野 拓海" },
  { value: "mori", label: "森 美穂" },
]

export function TriggerMenuBasic() {
  const [memo, setMemo] = useState("")

  return (
    <TriggerMenu triggers={[{ char: "@" }]}>
      <Field name="memo" className="max-w-md">
        <FieldLabel>対応メモ</FieldLabel>
        <TriggerMenuInput
          render={
            <Textarea value={memo} onValueChange={(value) => setMemo(value)} />
          }
          placeholder="@ で担当者を呼ぶ"
        />
      </Field>
      <TriggerMenuContent>
        <TriggerMenuEmpty>該当する担当者はいません</TriggerMenuEmpty>
        <TriggerMenuList>
          {staff.map((person) => (
            <TriggerMenuItem
              key={person.value}
              value={person.value}
              label={person.label}
            >
              <TriggerMenuItemIcon>
                <UserIcon />
              </TriggerMenuItemIcon>
              {person.label}
            </TriggerMenuItem>
          ))}
        </TriggerMenuList>
      </TriggerMenuContent>
    </TriggerMenu>
  )
}
