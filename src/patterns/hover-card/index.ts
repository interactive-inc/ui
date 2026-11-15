import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Read-only link preview on hover/focus (profile, order summary). Actions -> Popover; text hint -> Tooltip.",
    "Trigger is <a>: pass href; press follows link. No buttons/inputs in card.",
    "No touch open (tap follows link): never put info only in card.",
    "delay 600ms, closeDelay 300ms default. Pointer can cross gap. Tab enters open card; Escape closes, focus stays on link. disabled -> plain link.",
    "onOpenChange reason: trigger-hover|trigger-focus|focus-out|escape-key|outside-press|imperative; cancel(). Data: data-open (trigger), data-side. createHoverCardController(): shared card with payload.",
    "Agent: kind hover-card, named by link text; actions setOpen, press. HoverCardArrow not exported.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description: "注文番号のリンクに、注文の概要を下見させる。",
      en: {
        title: "Basic",
        description: "Order summary from an order number link.",
      },
    },
    {
      id: "profile",
      title: "人のプロフィール",
      description:
        "担当者の名前のリンクに、アバターと所属、連絡先をまとめたカードを出す。",
      en: {
        title: "Profile",
        description: "Avatar, team and contact on a name link.",
      },
    },
    {
      id: "delay",
      title: "開くまでの時間",
      description:
        "delay と closeDelay で、うっかり開いたり閉じたりしないように待ち時間を決める。",
      en: {
        title: "Delay",
        description: "delay and closeDelay against accidental open/close.",
      },
    },
  ],
} satisfies ComponentGuide
