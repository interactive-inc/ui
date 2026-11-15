import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Swipe-closable panel, quick phone tasks. Desktop beside list -> Sheet/Dialog.",
    "DrawerTitle required. No auto close button: put DrawerClose in footer. showSwipeHandle shows DrawerSwipeHandle (decoration, aria-hidden).",
    "snapPoints: rest at in-between heights; onSnapPointChange reports position and reason (swipe|content-resize|imperative).",
    "onOpenChange reason adds swipe; returnValue = value of closing DrawerClose. dismissible false blocks Escape, outside press, swipe; onDismissAttempt.",
    "Data attributes on DrawerContent: data-side, data-snap-point, data-expanded, data-dragging. CSS vars --drawer-progress, --drawer-stack. Do not override content translate or backdrop opacity.",
    "Agent: kind drawer, named by trigger/DrawerTitle; actions setOpen, setSnapPoint, press. createDrawerController().",
    "Not exported: SDK DrawerHandle, DrawerOutlet. DrawerOverlay only when modal true.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description: "下から引き出し、上のつまみで動かせることを見せる。",
      en: {
        title: "Basic",
        description: "Bottom drawer with swipe handle.",
      },
    },
    {
      id: "side",
      title: "横から出す",
      description: "side を right にすると、右から出る縦長のパネルになる。",
      en: {
        title: "From the side",
        description: "side right: tall panel from the right.",
      },
    },
    {
      id: "snap-points",
      title: "途中の高さで止める",
      description:
        "snapPoints で半分と全体の2段階に止め、地図アプリのように使えるようにする。",
      en: {
        title: "Snap points",
        description: "snapPoints: half and full height.",
      },
    },
    {
      id: "with-filters",
      title: "絞り込み",
      description:
        "チェックボックスで条件を選び、決定ボタンで閉じたときに一覧へ反映する。",
      en: {
        title: "Filters",
        description: "Checkbox filters applied on apply close.",
      },
    },
  ],
} satisfies ComponentGuide
