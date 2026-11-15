import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Confirm before irreversible/high-impact action. Form or details -> Dialog.",
    "role alertdialog, always modal, outside press never closes. No modal, closeOnOutsidePress, presentation options. Escape closes.",
    "Title as question. AlertDialogCancel first (initial focus = first Close part); AlertDialogAction confirms. Both are SDK AlertDialogClose; value -> details.returnValue in onOpenChange.",
    "action returning Promise: open with data-pending; closes (reason action) on success, stays on rejection.",
    "createConfirm(): await in handler; pass controller to AlertDialog; true only when Close with value confirm closes. createAlertDialogController() for open/close only.",
    "Agent: kind alert-dialog, named by trigger/AlertDialogTitle; actions setOpen, press. data-agent-confirm on confirm button blocks agent press.",
    "Registry adds size on AlertDialogContent, AlertDialogMedia, AlertDialogHeader, AlertDialogFooter. SDK confirm() not exported.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "問いの題名、起きることの説明、キャンセルと確定の2つのボタン。",
      en: {
        title: "Basic",
        description: "Question title, description, cancel and confirm.",
      },
    },
    {
      id: "destructive",
      title: "取り消せない操作",
      description:
        "AlertDialogMedia でアイコンを添え、確定ボタンを destructive にして重さを伝える。",
      en: {
        title: "Destructive",
        description: "AlertDialogMedia icon, destructive confirm.",
      },
    },
    {
      id: "small",
      title: "小さい確認",
      description:
        "size を sm にすると、短い確認向けにボタンが横に並んだ小さい形になる。",
      en: {
        title: "Small",
        description: "size sm: compact, buttons side by side.",
      },
    },
    {
      id: "with-result",
      title: "結果を受け取る",
      description:
        "onOpenChange の details.returnValue で、確定で閉じたかどうかを見分けて画面に反映する。",
      en: {
        title: "Read the result",
        description: "details.returnValue tells which button closed it.",
      },
    },
  ],
} satisfies ComponentGuide
