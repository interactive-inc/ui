import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "決まった範囲の中で、今の量がどのあたりにあるかを示す棒。ストレージの使用量、席の埋まり具合、目標に対する実績のように、測った値を見せるときに使う。",
    "処理が終わりに向かって進んでいく様子を見せるなら Progress を使う。Meter は止まった値を示すもので、読み込み中の状態を持たない。",
    "min と max で範囲を決め、format で単位や通貨の表示にする。見える数字だけでは足りないときは getValueLabel で読み上げの文を足す。",
  ],
  sdk: [
    "@ui-sdk/react/meter の上に作っている。ルートが meter になり、MeterLabel が名前を付け、format で整えた値が読み上げにも MeterValue にも使われる。見える数字は読み上げから隠されるので、二重に読まれない。",
    "状態を表す data 属性はなく、値の位置はルートの CSS 変数 --meter-value と MeterIndicator の幅に入る。表示だけの部品なので onValueChange はなく、渡した value に従う。",
    "エージェントからは meter として見え、名前は MeterLabel から付く。value、min、max を読めるが、呼べる操作はない。",
    "この部品集の Meter は、子のあとに MeterTrack と MeterIndicator を自分で描くので、使う側は MeterLabel と MeterValue だけを書けばよい。MeterTrack と MeterIndicator も出しているが、Meter の中に置くと棒が2本になる。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "0〜100 の値を割合で見せる。",
      en: {
        title: "Basic",
        description: "Show a value from 0 to 100 as a percentage.",
      },
    },
    {
      id: "format",
      title: "単位と通貨",
      description: "format に Intl.NumberFormat の設定を渡す。",
      en: {
        title: "Units and currency",
        description: "Pass Intl.NumberFormat options to format.",
      },
    },
    {
      id: "value-label",
      title: "読み上げの文を足す",
      description: "getValueLabel で、数字の意味を言葉にして伝える。",
      en: {
        title: "Value label",
        description:
          "Use getValueLabel to put the meaning of the number into words for screen readers.",
      },
    },
    {
      id: "goals",
      title: "目標との比較",
      description: "max を項目ごとに変え、達成度を並べて見せる。",
      en: {
        title: "Goals",
        description:
          "Give each item its own max and line them up to compare progress toward goals.",
      },
    },
  ],
  en: {
    usage: [
      "A bar that shows where a measured amount sits within a known range. Use it for storage usage, seats taken, or results against a goal.",
      "Use Progress to show a task moving toward completion. A meter shows a settled value and has no loading state.",
      "Set the range with min and max, and use format for units or currency. When the visible number is not enough, add a spoken description with getValueLabel.",
    ],
    sdk: [
      "Built on @ui-sdk/react/meter. The root is the meter, MeterLabel names it, and the value formatted with format is used both for screen readers and for MeterValue. The visible value is hidden from screen readers so it is not read twice.",
      "There are no state data attributes; the reading is in the root's CSS variable --meter-value and in the width of MeterIndicator. It only displays state, so there is no onValueChange; it follows the value you pass.",
      "An agent sees it as a meter component named by MeterLabel. It can read value, min and max, and there are no actions to call.",
      "In this collection, Meter renders MeterTrack and MeterIndicator itself after its children, so you only write MeterLabel and MeterValue. MeterTrack and MeterIndicator are exported too, but placing them inside Meter draws a second bar.",
    ],
  },
} satisfies ComponentGuide
