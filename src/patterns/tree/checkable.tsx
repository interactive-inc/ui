import { useState } from "react"
import {
  Tree,
  TreeGroup,
  TreeItem,
  TreeItemCheckbox,
  TreeItemIndicator,
  TreeItemLabel,
} from "@/components/ui/tree"

type Node = { value: string; label: string; children?: Node[] }

const permissions: Node[] = [
  {
    value: "orders",
    label: "注文",
    children: [
      { value: "orders-read", label: "注文を見る" },
      { value: "orders-edit", label: "注文を編集する" },
      { value: "orders-cancel", label: "注文を取り消す" },
    ],
  },
  {
    value: "billing",
    label: "請求",
    children: [
      { value: "billing-read", label: "請求書を見る" },
      { value: "billing-issue", label: "請求書を発行する" },
    ],
  },
]

function Nodes(props: { items: Node[] }) {
  return props.items.map((item) => (
    <TreeItem key={item.value} value={item.value}>
      <TreeItemLabel>
        <TreeItemIndicator />
        <TreeItemCheckbox />
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

export function TreeCheckable() {
  const [checked, setChecked] = useState<string[]>([
    "orders-read",
    "billing-read",
  ])

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Tree
        aria-label="編集者の権限"
        items={permissions}
        mode="none"
        checkable
        defaultExpanded={["orders", "billing"]}
        checked={checked}
        onCheckedChange={setChecked}
      >
        <Nodes items={permissions} />
      </Tree>
      <p className="text-muted-foreground text-xs">
        {checked.length}個の権限を付与
      </p>
    </div>
  )
}
