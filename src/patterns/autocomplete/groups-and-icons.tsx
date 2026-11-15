"use client"

import { PackageIcon, UserIcon } from "lucide-react"
import { useState } from "react"
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteItemIcon,
  AutocompleteItemText,
  AutocompleteList,
  AutocompleteSeparator,
} from "@/components/ui/autocomplete"
import { Field, FieldLabel } from "@/components/ui/field"

const customers = [
  { name: "山田 花子", email: "hanako@example.jp" },
  { name: "佐藤 健", email: "ken.sato@example.jp" },
]

const products = [
  { name: "ひのきのまな板", sku: "HB-0012" },
  { name: "竹のせいろ", sku: "BS-0201" },
]

export function AutocompleteGroupsAndIcons() {
  const [query, setQuery] = useState("")

  return (
    <Field name="q" className="max-w-sm">
      <FieldLabel>管理画面を検索</FieldLabel>
      <Autocomplete value={query} onValueChange={(value) => setQuery(value)}>
        <AutocompleteInput placeholder="顧客名、メール、品番" />
        <AutocompleteContent>
          <AutocompleteEmpty>見つかりませんでした</AutocompleteEmpty>
          <AutocompleteList>
            <AutocompleteGroup>
              <AutocompleteGroupLabel>顧客</AutocompleteGroupLabel>
              {customers.map((customer) => (
                <AutocompleteItem
                  key={customer.email}
                  value={customer.name}
                  keywords={[customer.email]}
                >
                  <AutocompleteItemIcon>
                    <UserIcon />
                  </AutocompleteItemIcon>
                  <AutocompleteItemText />
                  <span className="text-muted-foreground text-xs">
                    {customer.email}
                  </span>
                </AutocompleteItem>
              ))}
            </AutocompleteGroup>
            <AutocompleteSeparator />
            <AutocompleteGroup>
              <AutocompleteGroupLabel>商品</AutocompleteGroupLabel>
              {products.map((product) => (
                <AutocompleteItem
                  key={product.sku}
                  value={product.name}
                  keywords={[product.sku]}
                >
                  <AutocompleteItemIcon>
                    <PackageIcon />
                  </AutocompleteItemIcon>
                  <AutocompleteItemText />
                  <span className="text-muted-foreground text-xs">
                    {product.sku}
                  </span>
                </AutocompleteItem>
              ))}
            </AutocompleteGroup>
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </Field>
  )
}
