"use client"

import { useState } from "react"
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteItemText,
  AutocompleteList,
} from "@/components/ui/autocomplete"
import { Field, FieldLabel } from "@/components/ui/field"

const suggestions = [
  "返品",
  "返金",
  "配送の遅れ",
  "配送先の変更",
  "領収書の発行",
]

export function AutocompleteSearch() {
  const [query, setQuery] = useState("")
  const [searched, setSearched] = useState<string | null>(null)

  return (
    <div className="flex max-w-sm flex-col gap-3">
      <Field name="q">
        <FieldLabel>よくある質問を検索</FieldLabel>
        <Autocomplete
          submitOnSelect
          value={query}
          onValueChange={(value) => setQuery(value)}
          onSubmit={(value) => setSearched(value)}
        >
          <AutocompleteInput placeholder="例: 返品" showClear />
          <AutocompleteContent>
            <AutocompleteList>
              {suggestions.map((word) => (
                <AutocompleteItem key={word} value={word}>
                  <AutocompleteItemText />
                </AutocompleteItem>
              ))}
            </AutocompleteList>
          </AutocompleteContent>
        </Autocomplete>
      </Field>
      <p className="text-muted-foreground text-sm">
        {searched === null ? "Enter で検索します" : `「${searched}」の検索結果`}
      </p>
    </div>
  )
}
