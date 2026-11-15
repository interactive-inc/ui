import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Lines of what an AI did before answering. Dated history -> Timeline; conversation breaks -> Marker.",
    "TraceLine holds TraceIcon, TraceTitle, TraceDescription. status running (shimmer) | pending (faded) | error (warning color).",
    "TraceCollapsible (+ Trigger, Content) wraps SDK Collapsible; TraceLine parts render span. Trigger adds chevron itself; Content className applies to inner div.",
    "Controlled: open requires onOpenChange. onOpenChange(open, { reason, cancel() }): trigger-press | find-in-page | imperative. External control: createCollapsibleController().",
    "keepMounted, hiddenUntilFound pass to TraceCollapsibleContent. State: data-open/data-closed; height via --collapsible-panel-height.",
    "Agent: kind collapsible named by trigger text; actions setOpen, press.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "手順を1行ずつ並べ、status で実行中と待ちを示す。",
      en: {
        title: "Basic",
        description: "One step per line; status marks running and pending.",
      },
    },
    {
      id: "collapsible",
      title: "詳細を畳む",
      description:
        "TraceCollapsible で包むと、行を押して中身を開ける。失敗は status を error にする。",
      en: {
        title: "Collapsible",
        description:
          "TraceCollapsible reveals details; status error for failures.",
      },
    },
    {
      id: "controlled",
      title: "開閉を自分で持つ",
      description: "open と onOpenChange を渡し、開閉に合わせて文言を変える。",
      en: {
        title: "Controlled",
        description: "open and onOpenChange; text follows state.",
      },
    },
    {
      id: "in-message",
      title: "回答の前に置く",
      description:
        "Message の中で回答の Bubble の前に置き、答えの根拠をたどれるようにする。",
      en: {
        title: "In a message",
        description: "Place before the answer Bubble in a Message.",
      },
    },
  ],
} satisfies ComponentGuide
