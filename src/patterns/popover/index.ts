import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Small box by a button: extra details, short input finishing on the spot. Must-answer -> Dialog; text hint -> Tooltip; link preview -> HoverCard.",
    "PopoverTitle names it (role dialog), PopoverDescription describes. side, align on PopoverContent; flips when no room. PopoverHeader registry-only; PopoverArrow not exported.",
    "openOnHover also opens on hover (focus not moved); press still works.",
    "modal default false: Tab leaves, focus-out closes. trap-focus | true keeps Tab inside.",
    "onOpenChange reason: trigger-press|trigger-hover|outside-press|escape-key|focus-out|close-press|shortcut|imperative; cancel(). Unsaved work: dismissible false + onDismissAttempt.",
    "Data attributes: data-open (trigger), data-side, data-align (content). CSS var --transform-origin.",
    "Agent: kind popover, named by trigger/PopoverTitle; actions setOpen, press. PopoverTrigger shortcut toggles. createPopoverController(): per-row payload.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description: "題名と説明だけの補足を、ボタンのすぐ下に開く。",
      en: {
        title: "Basic",
        description: "Short note with title and description below a button.",
      },
    },
    {
      id: "placement",
      title: "出す位置",
      description:
        "side で上下左右、align で端のそろえ方を選ぶ。場所が足りなければ反対側に出る。",
      en: {
        title: "Placement",
        description: "side and align; flips when no room.",
      },
    },
    {
      id: "with-form",
      title: "短い入力",
      description:
        "入力欄を1つ置き、onValueChange で受けた値をそのまま画面に反映する。",
      en: {
        title: "Short form",
        description: "One field, value shown via onValueChange.",
      },
    },
    {
      id: "open-on-hover",
      title: "マウスを乗せて開く",
      description:
        "openOnHover と delay で、乗せたときにも開くようにする。押しても開く。",
      en: {
        title: "Open on hover",
        description: "openOnHover with delay; press still opens.",
      },
    },
  ],
} satisfies ComponentGuide
