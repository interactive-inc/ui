import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Fixed-size pages with page numbers; short list -> ScrollArea, ordered feed -> Load more button.",
    "Count via pageCount, or total + pageSize. PaginationContent takes function child (items). siblings, boundaries tune skipped numbers. paginationRange exported.",
    "PaginationContent = SDK PaginationList. PaginationFirst, PaginationLast exported.",
    "Default aria-labels are Japanese; override aria-label and PaginationPrevious/PaginationNext text for other languages.",
    "page, onPageChange(page, { reason, cancel }); reason: item-press | previous-press | next-press | first-press | last-press | imperative.",
    'Current: data-current + aria-current="page". Edge step: data-disabled + aria-disabled, focusable, no-op. getHref -> links, else buttons.',
    "Agent: kind pagination, actions setPage, next, previous, first, last. Controller: createPaginationController().",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "ページ数の少ない一覧。番号と前後の移動だけを並べる。",
      en: {
        title: "Basic",
        description: "Page numbers with previous/next.",
      },
    },
    {
      id: "with-ellipsis",
      title: "番号を省略する",
      description:
        "ページ数が多いときは siblings と boundaries で見せる番号を絞り、間を PaginationEllipsis にする。",
      en: {
        title: "With ellipsis",
        description:
          "siblings and boundaries limit numbers; PaginationEllipsis fills gaps.",
      },
    },
    {
      id: "with-summary",
      title: "件数の表示と連動",
      description:
        "total と pageSize でページ数を出し、何件目を表示中かを添える。",
      en: {
        title: "With summary",
        description: "total and pageSize derive pages; shows item range.",
      },
    },
    {
      id: "with-links",
      title: "リンクにする",
      description:
        "getHref を渡すと各ページがリンクになり、新しいタブでも開ける。",
      en: {
        title: "As links",
        description: "getHref turns pages into links.",
      },
    },
  ],
} satisfies ComponentGuide
