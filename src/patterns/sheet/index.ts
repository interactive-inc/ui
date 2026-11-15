import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Edge panel for record details beside a list, or filters/settings. Longer content than Dialog; phone drag-close -> Drawer.",
    "Built on SDK Dialog (no Sheet in SDK): onOpenChange details, dismissible, onDismissAttempt, focus as Dialog.",
    "side on SheetContent (data-side, CSS-pinned; registry feature). Not Dialog presentation sheet.",
    "SheetTitle required; SheetHeader, SheetFooter, corner close (showCloseButton) auto. Name footer buttons differently (Save).",
    "Agent: kind dialog (no sheet kind); named by trigger/SheetTitle; actions setOpen, press. Controller: createDialogController().",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description: "右から出して、1件の詳細を一覧の横で見せる。",
      en: {
        title: "Basic",
        description: "Right-side panel with one record's details.",
      },
    },
    {
      id: "sides",
      title: "出す向き",
      description: "side で上下左右のどこから出すかを選ぶ。",
      en: {
        title: "Sides",
        description: "side picks the edge.",
      },
    },
    {
      id: "with-form",
      title: "設定をまとめて変える",
      description:
        "入力欄やスイッチを並べ、フッターの保存ボタンで閉じたときに反映する。",
      en: {
        title: "Settings form",
        description: "Fields and switches applied on footer save.",
      },
    },
    {
      id: "from-list",
      title: "一覧の行から開く",
      description: "行ごとにトリガーを置き、名前に行の内容を入れて区別する。",
      en: {
        title: "Open from list rows",
        description: "Trigger per row; row in its name.",
      },
    },
  ],
} satisfies ComponentGuide
