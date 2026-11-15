import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Scroll inside a fixed-size box; paging -> Pagination, hiding -> Collapsible.",
    "Give height or width. orientation (this library): vertical | horizontal | both. aria-label goes to viewport (role=region).",
    "stickToEnd keeps end in view as content grows; scrolling up releases. ScrollAreaScrollToEnd not exported.",
    "type: auto | always | scroll | hover. Attrs: data-visible (scrollbar), data-overflow-x/y, data-at-start, data-at-end, data-scrolling; vars --scroll-area-overflow-y-start etc.",
    "Controller createScrollAreaController(): scrollToEnd, scrollToStart.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "高さを決めた枠の中で、長い一覧を縦にスクロールさせる。",
      en: {
        title: "Basic",
        description: "Vertical scroll in a fixed-height box.",
      },
    },
    {
      id: "horizontal",
      title: "横に流す",
      description:
        'orientation="horizontal" にして、中身を w-max で横に並べる。',
      en: {
        title: "Horizontal",
        description: 'orientation="horizontal" with w-max content.',
      },
    },
    {
      id: "with-table",
      title: "大きな表",
      description:
        'orientation="both" で、列の多い Table を縦横どちらにも動かせるようにする。',
      en: {
        title: "With a table",
        description: 'orientation="both" for a wide Table.',
      },
    },
    {
      id: "stick-to-end",
      title: "末尾に付いていく",
      description:
        "stickToEnd を付けると最初から末尾を表示し、行が増えても下に付いていく。",
      en: {
        title: "Stick to end",
        description: "stickToEnd follows new rows at the bottom.",
      },
    },
  ],
} satisfies ComponentGuide
