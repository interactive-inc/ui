"use client"

import { useState } from "react"
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteItemText,
  AutocompleteList,
} from "@/components/ui/autocomplete"
import { Field, FieldLabel } from "@/components/ui/field"

const prefectures = [
  "東京都",
  "神奈川県",
  "千葉県",
  "埼玉県",
  "大阪府",
  "京都府",
  "兵庫県",
  "愛知県",
  "福岡県",
  "北海道",
]

export function AutocompleteClearAndTrigger() {
  const [prefecture, setPrefecture] = useState("")

  return (
    <Field name="prefecture" className="max-w-sm">
      <FieldLabel>倉庫の所在地</FieldLabel>
      <Autocomplete
        openOnFocus
        autoHighlight
        value={prefecture}
        onValueChange={(value) => setPrefecture(value)}
      >
        <AutocompleteInput placeholder="都道府県" showClear showTrigger />
        <AutocompleteContent>
          <AutocompleteEmpty>一致する都道府県はありません</AutocompleteEmpty>
          <AutocompleteList>
            {prefectures.map((name) => (
              <AutocompleteItem key={name} value={name}>
                <AutocompleteItemText />
              </AutocompleteItem>
            ))}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </Field>
  )
}
