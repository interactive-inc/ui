import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "親子の階層を持つデータを、開いたり閉じたりしながらたどる。部署と担当者、フォルダとファイル、カテゴリと商品のような入れ子の一覧に使う。",
    "階層が1段だけなら Accordion や Collapsible で足りる。上の階層への戻り道だけを示すなら Breadcrumb。Tree は何段もの入れ子をキーボードで行き来できる部品で、矢印キーで開閉と移動ができる。",
    "items に全体の形を渡し、同じデータから TreeItem を組み立てる。TreeItemIndicator は枝にだけ矢印を出すので、すべての行に置いて字下げをそろえる。選択は value と onValueChange、開閉は expanded と onExpandedChange、チェックは checkable と onCheckedChange で持つ。",
  ],
  sdk: [
    "`@ui-sdk/react/tree` の上に作ってあり、SDK のパーツ（Tree、TreeItem、TreeItemLabel、TreeItemIndicator、TreeItemCheckbox、TreeGroup）をすべて出している。この部品集では、TreeItemIndicator に山形のアイコン、TreeItemCheckbox にチェックと一部選択の印を既定で描き、pendingAnnouncement に日本語の文言を入れている。treeFromPaths、visibleTreeRows、toggleTreeChecked、treeCheckedStates もここから読み込める。",
    "Tab で止まる場所は木全体で1つ。上下の矢印で見えている項目を移り、右で枝を開くか最初の子へ、左で枝を閉じるか親へ移る。Home と End、文字を打って項目へ飛ぶ動き、Enter で選んで onAction を走らせること、Space でチェックを付けることも SDK が持つ。",
    "項目には data-selected、data-expanded、data-checked、data-indeterminate、data-current、data-disabled、data-loading が付き、深さは `--tree-level` で読める。選択は value と onValueChange、開いている枝は expanded と onExpandedChange、チェックは checked と onCheckedChange で持ち、どれも details.reason と details.cancel() が使える。",
    "エージェントからは tree という種類で見え、setValue、setChecked、setExpanded、expand、collapse、expandAll、collapseAll を呼べる。閉じた枝の中の項目もエージェントは一覧できる。ほかの場所から動かすときは createTreeController() を使い、reveal で項目の親を開いてそこへフォーカスを移せる。",
  ],
  patterns: [
    {
      id: "basic",
      title: "1つを選ぶ",
      description: "選んだ項目を useState に持ち、下に選択中の内容を出す。",
      en: {
        title: "Single selection",
        description:
          "Keep the selected item in useState and show what is selected below the tree.",
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
          'With mode="multiple" the value becomes an array. Shift extends a range and Cmd or Ctrl adds one item at a time.',
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
          "Use checkable and TreeItemCheckbox to keep checks apart from selection. Checking a branch toggles everything inside it.",
      },
    },
    {
      id: "links",
      title: "ページの目次にする",
      description:
        'mode="none" にして TreeItemLabel を render で a 要素に変え、current でいまのページを示す。',
      en: {
        title: "Navigation links",
        description:
          'Set mode="none", render TreeItemLabel as an a element, and mark the current page with current.',
      },
    },
  ],
  en: {
    usage: [
      "Lets people walk through hierarchical data by expanding and collapsing it. Use it for nested lists such as departments and staff, folders and files, or categories and products.",
      "For one level of nesting, Accordion or Collapsible is enough. To show only the way back up, use Breadcrumb. Tree handles many levels and is fully keyboard navigable, with arrow keys to move, expand and collapse.",
      "Pass the whole shape to items and build TreeItem elements from the same data. TreeItemIndicator shows an arrow only on branches, so place it on every row to keep the indent even. Keep selection with value and onValueChange, expansion with expanded and onExpandedChange, and checks with checkable and onCheckedChange.",
    ],
    sdk: [
      "Built on `@ui-sdk/react/tree`, with every SDK part exported: Tree, TreeItem, TreeItemLabel, TreeItemIndicator, TreeItemCheckbox and TreeGroup. This library draws a chevron in TreeItemIndicator and check and mixed marks in TreeItemCheckbox by default, and sets pendingAnnouncement to Japanese text. treeFromPaths, visibleTreeRows, toggleTreeChecked and treeCheckedStates can be imported from here as well.",
      "The whole tree is one tab stop. Up and Down Arrow move between visible items, Right Arrow expands a branch or enters its first child, and Left Arrow collapses a branch or moves to its parent. The SDK also handles Home and End, typing to jump to an item, Enter to select and run onAction, and Space to check an item.",
      "Items get data-selected, data-expanded, data-checked, data-indeterminate, data-current, data-disabled and data-loading, and the depth is in `--tree-level`. Keep the selection with value and onValueChange, expanded branches with expanded and onExpandedChange, and checkboxes with checked and onCheckedChange; each gives details.reason and details.cancel().",
      "An agent sees it as the kind tree and can call setValue, setChecked, setExpanded, expand, collapse, expandAll and collapseAll. An agent can also list items inside collapsed branches. To drive it from elsewhere, use createTreeController(); reveal expands an item's ancestors and focuses it.",
    ],
  },
} satisfies ComponentGuide
