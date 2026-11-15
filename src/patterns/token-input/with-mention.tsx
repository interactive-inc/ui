"use client"

import { UserIcon } from "lucide-react"
import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import type { TokenInputValue } from "@/components/ui/token-input"
import { TokenInput, TokenInputEditor } from "@/components/ui/token-input"
import type { TriggerMenuDataItem } from "@/components/ui/trigger-menu"
import {
  TriggerMenu,
  TriggerMenuContent,
  TriggerMenuEmpty,
  TriggerMenuItem,
  TriggerMenuItemIcon,
  TriggerMenuList,
} from "@/components/ui/trigger-menu"

const staff = [
  { value: "kimura", label: "木村 さやか" },
  { value: "ono", label: "小野 拓海" },
  { value: "mori", label: "森 美穂" },
]

export function TokenInputWithMention() {
  const [value, setValue] = useState<TokenInputValue>([])

  const mentioned = value.flatMap((part) =>
    typeof part === "string" ? [] : [part.label],
  )

  return (
    <Field name="handoff" className="max-w-md">
      <FieldLabel>引き継ぎメモ</FieldLabel>
      <TokenInput value={value} onValueChange={(next) => setValue(next)}>
        <TokenInputEditor placeholder="@ で担当者をメンション" />
        <TriggerMenu triggers={[{ char: "@", type: "mention", items: staff }]}>
          <TriggerMenuContent>
            <TriggerMenuEmpty>該当する担当者はいません</TriggerMenuEmpty>
            <TriggerMenuList>
              {(state) =>
                (state.items as TriggerMenuDataItem[]).map((item) => (
                  <TriggerMenuItem
                    key={item.value}
                    value={item.value}
                    label={item.label}
                  >
                    <TriggerMenuItemIcon>
                      <UserIcon />
                    </TriggerMenuItemIcon>
                    {item.label}
                  </TriggerMenuItem>
                ))
              }
            </TriggerMenuList>
          </TriggerMenuContent>
        </TriggerMenu>
      </TokenInput>
      <FieldDescription>
        {mentioned.length === 0
          ? "メンションした担当者に通知が届きます。"
          : `${mentioned.join("、")}に通知が届きます。`}
      </FieldDescription>
    </Field>
  )
}
