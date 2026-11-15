import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Multi-level hierarchy (folders, org); one level -> Accordion/Collapsible, way back up -> Breadcrumb.",
    "Pass full data to items and build TreeItem from same data. Put TreeItemIndicator on every row (arrow only on branches) for even indent.",
    "All SDK parts exported: Tree, TreeItem, TreeItemLabel, TreeItemIndicator, TreeItemCheckbox, TreeGroup. Also treeFromPaths, visibleTreeRows, toggleTreeChecked, treeCheckedStates.",
    "Controlled: value/onValueChange, expanded/onExpandedChange, checkable + checked/onCheckedChange; all give { reason, cancel }. mode: single | multiple | none.",
    "Attrs: data-selected, data-expanded, data-checked, data-indeterminate, data-current, data-disabled, data-loading; depth in --tree-level.",
    "Default pendingAnnouncement is Japanese. Single tab stop; arrows, Home/End, type-ahead, Enter = select + onAction, Space = check.",
    "Agent: kind tree, actions setValue, setChecked, setExpanded, expand, collapse, expandAll, collapseAll; sees items in collapsed branches. Controller createTreeController(); reveal expands ancestors + focuses.",
  ],
  patterns: [
    {
      id: "basic",
      title: "1つを選ぶ",
      description: "選んだ項目を useState に持ち、下に選択中の内容を出す。",
      en: {
        title: "Single selection",
        description: "Selected item in useState.",
      },
    },
    {
      id: "multiple",
      title: "複数を選ぶ",
      description:
        'mode="multiple" で value が配列になる。Shift で範囲、Cmd や Ctrl で1件ずつ足せる。',
      en: {
        title: "Multiple selection",
        description:
          'mode="multiple": array value; Shift range, Cmd/Ctrl toggle.',
      },
    },
    {
      id: "checkable",
      title: "チェックで選ぶ",
      description:
        "checkable と TreeItemCheckbox で、選択とは別にチェックを持つ。枝をチェックすると中の項目もまとめて切り替わる。",
      en: {
        title: "Checkboxes",
        description:
          "checkable and TreeItemCheckbox; checks separate from selection.",
      },
    },
    {
      id: "links",
      title: "ページの目次にする",
      description:
        'mode="none" にして TreeItemLabel を render で a 要素に変え、current でいまのページを示す。',
      en: {
        title: "Navigation links",
        description: 'mode="none", TreeItemLabel as a link, current page.',
      },
    },
  ],
} satisfies ComponentGuide
