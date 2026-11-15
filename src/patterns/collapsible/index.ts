import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Single in-place panel; several headings -> Accordion, floating -> Popover/Dialog.",
    "No styles; shape CollapsibleTrigger/CollapsibleContent with className. CollapsibleContent = SDK CollapsiblePanel.",
    "open, onOpenChange(open, { reason, cancel }), onOpenChangeComplete. reason: trigger-press | find-in-page | imperative.",
    "keepMounted keeps field values while closed; hiddenUntilFound enables find-in-page.",
    "Attrs: data-open | data-closed, data-starting-style, data-ending-style; var --collapsible-panel-height.",
    "Agent: kind collapsible, action setOpen. Controller: open, close, toggle.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "注文の要約を見出しにして、押すと明細が開く。矢印は data-open で回す。",
      en: {
        title: "Basic",
        description: "Summary trigger; data-open rotates the arrow.",
      },
    },
    {
      id: "controlled",
      title: "開閉を外で持つ",
      description:
        "open と onOpenChange で開閉を useState に持ち、ボタンの文言を切り替える。",
      en: {
        title: "Controlled",
        description: "open and onOpenChange in useState.",
      },
    },
    {
      id: "advanced-filters",
      title: "詳しい条件をしまう",
      description:
        "よく使う条件だけを出し、残りは閉じておく。keepMounted で閉じても入力を残す。",
      en: {
        title: "Advanced filters",
        description: "keepMounted keeps typed values while closed.",
      },
    },
  ],
} satisfies ComponentGuide
