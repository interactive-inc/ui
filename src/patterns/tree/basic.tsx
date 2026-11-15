import { useState } from "react"
import {
  Tree,
  TreeGroup,
  TreeItem,
  TreeItemIndicator,
  TreeItemLabel,
} from "@/components/ui/tree"

type Node = { value: string; label: string; children?: Node[] }

const departments: Node[] = [
  {
    value: "sales",
    label: "営業部",
    children: [
      { value: "sales-1", label: "法人営業1課" },
      { value: "sales-2", label: "法人営業2課" },
    ],
  },
  {
    value: "admin",
    label: "管理部",
    children: [
      { value: "accounting", label: "経理課" },
      { value: "hr", label: "人事課" },
    ],
  },
  { value: "dev", label: "開発部" },
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

export function TreeBasic() {
  const [value, setValue] = useState<string | null>("accounting")

  const label = departments
    .flatMap((item) => [item, ...(item.children ?? [])])
    .find((item) => item.value === value)?.label

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Tree
        aria-label="部署"
        items={departments}
        defaultExpanded={["admin"]}
        value={value}
        onValueChange={setValue}
      >
        <Nodes items={departments} />
      </Tree>
      <p className="text-muted-foreground text-xs">
        {label === undefined
          ? "部署を選んでください"
          : `${label}のメンバーを表示中`}
      </p>
    </div>
  )
}
