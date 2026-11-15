import { useState } from "react"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

const agents = [
  { value: "yamada", label: "山田 花子", team: "一次対応" },
  { value: "kato", label: "加藤 翔太", team: "技術サポート" },
  { value: "ono", label: "小野 美穂", team: "請求・契約" },
]

export function ComboboxControlled() {
  const [agent, setAgent] = useState<string | null>("kato")

  const current = agents.find((item) => item.value === agent)

  return (
    <Field>
      <FieldLabel>問い合わせの担当者</FieldLabel>
      <Combobox
        name="assignee"
        value={agent}
        onValueChange={(value) => setAgent(value)}
      >
        <ComboboxInput className="w-full" placeholder="氏名で検索" showClear />
        <ComboboxContent>
          <ComboboxEmpty>該当する担当者がいません</ComboboxEmpty>
          <ComboboxList>
            {agents.map((item) => (
              <ComboboxItem
                key={item.value}
                value={item.value}
                label={item.label}
              >
                {item.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldDescription>
        {current
          ? `${current.team}チームの${current.label}さんに割り当てます。`
          : "担当者が未定です。"}
      </FieldDescription>
    </Field>
  )
}
