import { useState } from "react"
import {
  Tree,
  TreeGroup,
  TreeItem,
  TreeItemIndicator,
  TreeItemLabel,
} from "@/components/ui/tree"

type Node = { value: string; label: string; href?: string; children?: Node[] }

const pages: Node[] = [
  {
    value: "guide",
    label: "はじめに",
    children: [
      { value: "signup", label: "アカウントの作成", href: "#signup" },
      { value: "invite", label: "メンバーの招待", href: "#invite" },
    ],
  },
  {
    value: "billing",
    label: "請求と支払い",
    children: [
      { value: "plans", label: "料金プラン", href: "#plans" },
      { value: "receipts", label: "領収書の発行", href: "#receipts" },
    ],
  },
  { value: "faq", label: "よくある質問", href: "#faq" },
]

const links = pages
  .flatMap((page) => [page, ...(page.children ?? [])])
  .filter((page) => page.href)
  .map((page) => page.value)

function Nodes(props: { items: Node[] }) {
  return props.items.map((item) => (
    <TreeItem key={item.value} value={item.value}>
      <TreeItemLabel
        render={
          item.href
            ? (linkProps) => <a {...linkProps} href={item.href} />
            : undefined
        }
      >
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

export function TreeLinks() {
  const [current, setCurrent] = useState("plans")

  return (
    <Tree
      aria-label="ヘルプの目次"
      items={pages}
      mode="none"
      current={current}
      onAction={(value) => {
        if (links.includes(value)) {
          setCurrent(value)
        }
      }}
      className="max-w-xs"
    >
      <Nodes items={pages} />
    </Tree>
  )
}
