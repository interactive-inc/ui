import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Vertical headings, open what is needed (FAQ); one panel -> Collapsible, one pane at a time -> Tabs.",
    "AccordionItem needs value. value (array) + onValueChange(value, { reason, cancel }); single item: onOpenChange, onOpenChangeComplete. Default one open; multiple for several. disabled per item.",
    "AccordionTrigger = SDK Header + Trigger with chevron. AccordionContent = Panel; className goes to inner wrapper. Height var --accordion-panel-height.",
    "hiddenUntilFound: find-in-page opens item. Arrows do not move focus. reason: trigger-press | find-in-page | imperative.",
    "Attrs: data-open | data-closed, data-disabled.",
    "Agent: kind accordion, actions setValue, open, close, toggle, openAll, closeAll; opens closed items to reach inner components. Controller createAccordionController().",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "1度に1つだけ開く。defaultValue で最初に開く項目を決める。",
      en: {
        title: "Basic",
        description: "One item open at a time; defaultValue.",
      },
    },
    {
      id: "multiple",
      title: "複数を開く",
      description:
        "multiple を付けると、ほかの項目を閉じずに開ける。見比べたい手順に向く。",
      en: {
        title: "Multiple",
        description: "multiple opens several items.",
      },
    },
    {
      id: "controlled",
      title: "開閉を外で持つ",
      description:
        "value と onValueChange で開いている項目を useState に持ち、進み具合を表示する。",
      en: {
        title: "Controlled",
        description: "value and onValueChange in useState.",
      },
    },
    {
      id: "disabled",
      title: "使えない項目",
      description:
        "準備中の項目は disabled にする。フォーカスは残るので存在は伝わる。",
      en: {
        title: "Disabled",
        description: "disabled items stay focusable.",
      },
    },
  ],
} satisfies ComponentGuide
