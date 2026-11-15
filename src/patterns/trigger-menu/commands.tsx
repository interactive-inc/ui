"use client"

import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import type { TriggerMenuDataItem } from "@/components/ui/trigger-menu"
import {
  TriggerMenu,
  TriggerMenuContent,
  TriggerMenuHint,
  TriggerMenuInput,
  TriggerMenuItem,
  TriggerMenuList,
} from "@/components/ui/trigger-menu"

const commands = [
  {
    value: "status",
    label: "status",
    arguments: [
      {
        name: "status",
        hint: "<状態>",
        required: true,
        items: ["未対応", "返信待ち", "対応済み"],
      },
    ],
  },
  {
    value: "refund",
    label: "refund",
    arguments: [{ name: "amount", hint: "<金額>", required: true }],
  },
  { value: "close", label: "close" },
]

export function TriggerMenuCommands() {
  const [last, setLast] = useState<string | null>(null)

  return (
    <TriggerMenu
      triggers={[{ char: "/", boundary: "start", items: commands }]}
      onSelect={(value, details) =>
        setLast([`/${value}`, ...Object.values(details.arguments)].join(" "))
      }
    >
      <Field name="command" className="max-w-md">
        <FieldLabel>コマンド</FieldLabel>
        <TriggerMenuInput placeholder="/ でコマンドを入力" />
        <TriggerMenuHint />
        <FieldDescription>
          {last === null
            ? "Tab で候補を確定し、次の引数へ進みます。"
            : `${last} を実行します。`}
        </FieldDescription>
      </Field>
      <TriggerMenuContent>
        <TriggerMenuList>
          {(state) =>
            (state.items as TriggerMenuDataItem[]).map((item) => (
              <TriggerMenuItem
                key={String(item.value)}
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
