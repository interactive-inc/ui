import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Start + duration bars on shared time axis; word order -> Timeline, number trends -> Chart.",
    "items: { value, label, start, duration, ... }; render flat WaterfallRow siblings from same data. Times are ms; use format and getBarLabel for days.",
    "Column widths via --waterfall-columns. Bar: --waterfall-start, --waterfall-size; depth: --waterfall-level.",
    "All SDK parts exported. Default getBarLabel is Japanese; pass own for other languages.",
    "Attrs: data-selected, data-branch, data-expanded. value/onValueChange, expanded/onExpandedChange give { reason, cancel }. Treegrid keyboard, one tab stop.",
    "Agent: kind waterfall, actions setValue, setExpanded, expand, collapse, expandAll, collapseAll. Controller createWaterfallController().",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "工程ごとの開始日と日数を横棒で並べ、上に目盛りを出す。",
      en: {
        title: "Basic",
        description: "Bars for start and length, axis on top.",
      },
    },
    {
      id: "with-cell",
      title: "数値の列を足す",
      description:
        "--waterfall-columns で列を増やし、WaterfallCell に日数を並べる。",
      en: {
        title: "With a value column",
        description: "Extra column via --waterfall-columns and WaterfallCell.",
      },
    },
    {
      id: "with-mark",
      title: "締め切りを引く",
      description:
        "WaterfallMark で特定の時点に線を引き、締め切りとの前後関係を見せる。",
      en: {
        title: "With a mark",
        description: "WaterfallMark draws a line at a point in time.",
      },
    },
    {
      id: "nested",
      title: "内訳を開く",
      description:
        "children を持つ行を開くと内訳が出る。開いた行と選んだ行を useState に持つ。",
      en: {
        title: "Nested",
        description:
          "Rows with children expand; expanded and selected in useState.",
      },
    },
  ],
} satisfies ComponentGuide
