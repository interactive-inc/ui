import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "User-draggable splits (list/detail, editor/output); fixed sizes -> grid/flex, page nav -> Sidebar.",
    "ResizablePanelGroup needs a height; ResizableHandle between ResizablePanel; aria-label on each handle. withHandle draws grip. Group = SDK Resizable.",
    "Sizes in percent: defaultSize, minSize. Nest groups for mixed directions. layout + onLayoutChange.",
    "onLayoutChange fires every drag frame/key with { reason, cancel }; reason: drag | step-key | collapse | resize | imperative. Persist with onLayoutCommit or autoSaveId.",
    "Attrs: data-orientation, data-dragging, data-hovering, data-collapsed. Keys: arrows = step, Shift+arrow = largeStep.",
    'Agent: kind resizable, actions setLayout (accepts "30,70"), collapse, expand. Controller: setLayout, resize, collapse, expand.',
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "一覧と詳細を左右に並べる。withHandle で境目につまみを出す。",
      en: {
        title: "Basic",
        description: "List and detail panes; withHandle shows a grip.",
      },
    },
    {
      id: "vertical",
      title: "上下に分ける",
      description:
        'orientation="vertical" で上下に積む。矢印キーも上下で動く。',
      en: {
        title: "Vertical",
        description: 'orientation="vertical" stacks panels.',
      },
    },
    {
      id: "nested",
      title: "入れ子にする",
      description:
        "パネルの中にもう1つの ResizablePanelGroup を置き、左右と上下を組み合わせる。",
      en: {
        title: "Nested",
        description: "Nested ResizablePanelGroup mixes directions.",
      },
    },
    {
      id: "controlled",
      title: "配分を外で持つ",
      description:
        "layout と onLayoutChange で各パネルの割合を useState に持ち、画面に出す。",
      en: {
        title: "Controlled",
        description: "layout and onLayoutChange in useState.",
      },
    },
  ],
} satisfies ComponentGuide
