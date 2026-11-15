"use client"

import { FilterIcon, PlusIcon } from "lucide-react"
import { useState } from "react"
import {
  Toolbar,
  ToolbarButton,
  ToolbarInput,
  ToolbarLink,
  ToolbarSeparator,
} from "@/components/ui/toolbar"

export function ToolbarWithInput() {
  const [query, setQuery] = useState("")

  return (
    <div className="flex flex-col gap-2">
      <Toolbar aria-label="注文一覧の操作">
        <ToolbarInput
          aria-label="注文番号で検索"
          placeholder="注文番号で検索"
          value={query}
          onValueChange={(value) => setQuery(value)}
        />
        <ToolbarButton>
          <FilterIcon data-icon="inline-start" />
          絞り込み
        </ToolbarButton>
        <ToolbarSeparator />
        <ToolbarButton variant="default">
          <PlusIcon data-icon="inline-start" />
          手動で注文を登録
        </ToolbarButton>
        <ToolbarLink href="#order-help">使い方</ToolbarLink>
      </Toolbar>
      <p className="text-muted-foreground text-sm">
        {query === ""
          ? "すべての注文を表示中"
          : `「${query}」を含む注文を表示中`}
      </p>
    </div>
  )
}
