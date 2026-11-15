import { useState } from "react"
import {
  Tree,
  TreeGroup,
  TreeItem,
  TreeItemIndicator,
  TreeItemLabel,
} from "@/components/ui/tree"

type Node = { value: string; label: string; children?: Node[] }

const folders: Node[] = [
  {
    value: "contracts",
    label: "契約書",
    children: [
      { value: "contracts-2025", label: "2025年度" },
      { value: "contracts-2026", label: "2026年度" },
    ],
  },
  {
    value: "invoices",
    label: "請求書",
    children: [
      { value: "invoices-oct", label: "10月分" },
      { value: "invoices-nov", label: "11月分" },
    ],
  },
  { value: "minutes", label: "議事録" },
]

function Nodes(props: { items: Node[] }) {
  return props.items.map((item) => (
    <TreeItem key={item.value} value={item.value}>
      <TreeItemLabel>
        <TreeItemIndicator />
        {item.label}
      </TreeItemLabel>
      {item.children && (
        <TreeGroup>
          <Nodes items={item.children} />
        </TreeGroup>
      )}
    </TreeItem>
  ))
}

export function TreeMultiple() {
  const [value, setValue] = useState<string[]>(["invoices-nov"])

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Tree
        aria-label="共有フォルダ"
        items={folders}
        mode="multiple"
        expandOnPress={false}
        defaultExpanded={["contracts", "invoices"]}
        value={value}
        onValueChange={setValue}
      >
        <Nodes items={folders} />
      </Tree>
      <p className="text-muted-foreground text-xs">
        {value.length}件のフォルダを選択中
      </p>
    </div>
  )
}
