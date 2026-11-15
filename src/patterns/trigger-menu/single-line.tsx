"use client"

import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import type { TriggerMenuDataItem } from "@/components/ui/trigger-menu"
import {
  TriggerMenu,
  TriggerMenuContent,
  TriggerMenuInput,
  TriggerMenuItem,
  TriggerMenuList,
} from "@/components/ui/trigger-menu"

const staff = [
  { value: "kimura", label: "木村 さやか" },
  { value: "ono", label: "小野 拓海" },
  { value: "mori", label: "森 美穂" },
]

export function TriggerMenuSingleLine() {
  return (
    <TriggerMenu
      triggers={[{ char: "@", items: staff }]}
      autoHighlight={false}
      loop={false}
    >
      <Field name="task" className="max-w-md">
        <FieldLabel>タスク</FieldLabel>
        <TriggerMenuInput
          render={<Input />}
          placeholder="例: 在庫を数える @木村 さやか"
        />
      </Field>
      <TriggerMenuContent>
        <TriggerMenuList>
          {(state) =>
            (state.items as TriggerMenuDataItem[]).map((item) => (
              <TriggerMenuItem
                key={item.value}
                value={item.value}
                label={item.label}
              >
                {item.label}
              </TriggerMenuItem>
            ))
          }
        </TriggerMenuList>
      </TriggerMenuContent>
    </TriggerMenu>
  )
}
