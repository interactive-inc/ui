"use client"

import { useState } from "react"
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/ui/autocomplete"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

const carriers = ["ヤマト運輸", "佐川急便", "日本郵便", "西濃運輸", "福山通運"]

export function AutocompleteBasic() {
  const [carrier, setCarrier] = useState("")

  return (
    <Field name="carrier" className="max-w-sm">
      <FieldLabel>配送業者</FieldLabel>
      <Autocomplete
        value={carrier}
        onValueChange={(value) => setCarrier(value)}
      >
        <AutocompleteInput placeholder="業者名を入力" />
        <AutocompleteContent>
          <AutocompleteEmpty>一致する業者はありません</AutocompleteEmpty>
          <AutocompleteList>
            {carriers.map((name) => (
              <AutocompleteItem key={name} value={name}>
                {name}
              </AutocompleteItem>
            ))}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
      <FieldDescription>
        候補にない業者もそのまま入力できます。
      </FieldDescription>
    </Field>
  )
}
