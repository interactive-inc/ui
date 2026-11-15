"use client"

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import type { TriggerMenuDataItem } from "@/components/ui/trigger-menu"
import {
  TriggerMenu,
  TriggerMenuContent,
  TriggerMenuEmpty,
  TriggerMenuGroup,
  TriggerMenuGroupLabel,
  TriggerMenuInput,
  TriggerMenuItem,
  TriggerMenuList,
} from "@/components/ui/trigger-menu"

const staff = [
  { value: "kimura", label: "木村 さやか" },
  { value: "ono", label: "小野 拓海" },
]

const statuses = [
  { value: "pending", label: "未対応" },
  { value: "waiting", label: "返信待ち" },
  { value: "done", label: "対応済み" },
]

export function TriggerMenuMultipleTriggers() {
  return (
    <TriggerMenu
      triggers={[
        { char: "@", items: staff },
        { char: "#", items: statuses },
      ]}
    >
      <Field name="note" className="max-w-md">
        <FieldLabel>問い合わせのメモ</FieldLabel>
        <TriggerMenuInput placeholder="@ で担当者、# で状態を挿入" />
        <FieldDescription>メモはスタッフだけが見られます。</FieldDescription>
      </Field>
      <TriggerMenuContent>
        <TriggerMenuEmpty>候補がありません</TriggerMenuEmpty>
        <TriggerMenuList>
          {(state) => (
            <TriggerMenuGroup>
              <TriggerMenuGroupLabel>
                {state.trigger === "#" ? "対応の状態" : "担当者"}
              </TriggerMenuGroupLabel>
              {(state.items as TriggerMenuDataItem[]).map((item) => (
                <TriggerMenuItem
                  key={item.value}
                  value={item.value}
                  label={item.label}
                >
                  {item.label}
                </TriggerMenuItem>
              ))}
            </TriggerMenuGroup>
          )}
        </TriggerMenuList>
      </TriggerMenuContent>
    </TriggerMenu>
  )
}
