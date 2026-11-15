import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "いくつもの作業が、いつ始まりどれだけかかったかを横棒で並べて見せる。案件の工程表、処理の所要時間、選考のリードタイムなどに使う。",
    "出来事の順番を文章で追うなら Timeline、数値の大小や推移なら Chart を使う。Waterfall は開始の時点と長さの両方を、同じ時間軸の上で比べたいときの部品。",
    "items に value、label、start、duration を持つデータを渡し、同じデータから WaterfallRow を並べる。時間はミリ秒として扱われるので、日数などで使うときは format で表示を整え、getBarLabel で読み上げる文を日本語にする。列の幅は --waterfall-columns で決める。",
  ],
  sdk: [
    "`@ui-sdk/react/waterfall` の上に作ってあり、SDK のパーツをすべて出している。この部品集では、WaterfallAxis が目盛りを自分で並べ、WaterfallIndicator に山形のアイコンを描き、バーの読み上げ（getBarLabel）に日本語の文言を入れている。別の言語で使うときは getBarLabel を渡す。行の深さや親子は items から SDK が読むので、WaterfallRow は平らに並べるだけでよい。",
    "キー操作は treegrid のもので、Tab で止まる場所は全体で1つ。上下の矢印で行を移り、右で行を開くか最初のセルへ、左で行を閉じるか親へ移る。Home と End、PageUp と PageDown、文字を打って行へ飛ぶ動き、Enter と Space での選択も SDK が持つ。",
    "選ばれた行とそのパーツに data-selected、子を持つ行に data-branch、開いた行に data-expanded が付き、深さは `--waterfall-level`、バーの位置と長さは `--waterfall-start` と `--waterfall-size` で読める。選択は value と onValueChange、開いている行は expanded と onExpandedChange で持ち、どちらも details.reason と details.cancel() が使える。",
    "エージェントからは waterfall という種類で見え、setValue、setExpanded、expand、collapse、expandAll、collapseAll を呼べる。ほかの場所から動かすときは createWaterfallController() を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "工程ごとの開始日と日数を横棒で並べ、上に目盛りを出す。",
      en: {
        title: "Basic",
        description:
          "Show each phase's start and length as bars, with an axis on top.",
      },
    },
    {
      id: "with-cell",
      title: "数値の列を足す",
      description:
        "--waterfall-columns で列を増やし、WaterfallCell に日数を並べる。",
      en: {
        title: "With a value column",
        description:
          "Add a column with --waterfall-columns and list the number of days in WaterfallCell.",
      },
    },
    {
      id: "with-mark",
      title: "締め切りを引く",
      description:
        "WaterfallMark で特定の時点に線を引き、締め切りとの前後関係を見せる。",
      en: {
        title: "With a mark",
        description:
          "Draw a line at a point in time with WaterfallMark to show what falls before or after a deadline.",
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
          "Rows with children expand to show their breakdown. Keep the expanded and selected rows in useState.",
      },
    },
  ],
  en: {
    usage: [
      "Shows when each of many tasks started and how long it took, as horizontal bars. Use it for project schedules, processing times or hiring lead times.",
      "To follow the order of events in words, use Timeline. For sizes and trends of numbers, use Chart. Waterfall is for comparing both start and length on one shared time axis.",
      "Pass data with value, label, start and duration to items, and render WaterfallRow elements from the same data. Times are treated as milliseconds, so when you use days, format the display with format and write the spoken bar text with getBarLabel. Set column widths with --waterfall-columns.",
    ],
    sdk: [
      "Built on `@ui-sdk/react/waterfall`, with every SDK part exported. In this library WaterfallAxis lays out its own ticks, WaterfallIndicator draws a chevron, and the bar's screen reader text (getBarLabel) defaults to Japanese. Pass getBarLabel for another language. The SDK reads each row's depth and parent from items, so WaterfallRow elements are simply flat siblings.",
      "The keyboard follows the treegrid pattern with one tab stop. Up and Down Arrow move between rows, Right Arrow expands a row or moves into its first cell, and Left Arrow collapses a row or moves to its parent. The SDK also handles Home and End, Page Up and Page Down, typing to jump to a row, and selecting with Enter or Space.",
      "The selected row and its parts get data-selected, a row with children gets data-branch, and an expanded row gets data-expanded. The depth is in `--waterfall-level`, and the bar's position and length are in `--waterfall-start` and `--waterfall-size`. Keep the selection with value and onValueChange and expanded rows with expanded and onExpandedChange; both give details.reason and details.cancel().",
      "An agent sees it as the kind waterfall and can call setValue, setExpanded, expand, collapse, expandAll and collapseAll. To drive it from elsewhere, use createWaterfallController().",
    ],
  },
} satisfies ComponentGuide
