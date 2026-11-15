import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Overlay for edits/details without leaving the page. Irreversible confirm -> AlertDialog; edge panel -> Sheet; phone pull-up -> Drawer.",
    "DialogTitle required. Corner close button auto (showCloseButton); no duplicate footer close.",
    "onOpenChange details: reason trigger-press|close-press|outside-press|escape-key|action|shortcut|imperative; cancel(); returnValue = value of closing DialogClose.",
    "dismissible false: refused dismissals reach onDismissAttempt. initialFocus/finalFocus on DialogContent.",
    "DialogClose action returning Promise: stays open, data-pending. Form method dialog closes on submit; submit button value -> returnValue.",
    "DialogTrigger shortcut registers keys, opens from anywhere. createDialogController(): remote triggers with payload; controller.open() Promise resolves with reason, returnValue.",
    "Data attributes: data-open, data-closed, data-starting-style, data-ending-style.",
    "Agent: kind dialog, named by trigger (closed) or DialogTitle (open); actions setOpen, press (button text; opens first).",
    "Registry: SDK DialogBackdrop is DialogOverlay inside DialogContent; adds DialogHeader, DialogFooter.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "題名と説明、内容、閉じるボタンだけのいちばん小さいダイアログ。",
      en: {
        title: "Basic",
        description:
          "Smallest dialog: title, description, content, close button.",
      },
    },
    {
      id: "with-form",
      title: "フォームを入れる",
      description:
        "入力中の値は下書きとして持ち、保存のボタンで閉じたときだけ反映する。",
      en: {
        title: "With a form",
        description: "Input as draft, applied only on save close.",
      },
    },
    {
      id: "scrollable",
      title: "長い内容",
      description:
        "本文に高さの上限を付けて中だけスクロールさせ、題名とボタンは見えたままにする。",
      en: {
        title: "Long content",
        description: "Body height capped, scrolls inside.",
      },
    },
    {
      id: "unsaved-changes",
      title: "書きかけを守る",
      description:
        "書きかけがあるあいだは dismissible を false にし、Esc や外側の押下で閉じないようにする。",
      en: {
        title: "Guard unsaved changes",
        description: "dismissible false while a draft exists.",
      },
    },
  ],
} satisfies ComponentGuide
