import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "時間のかかる処理が、終わりまでどれだけ進んだかを示す棒。アップロードや書き出しのように、待っている間に進み具合を見せたい場面で使う。",
    "容量の使用率や目標の達成度のような、進んでいく処理ではない量を示すなら Meter を使う。終わりが見えない短い待ちなら Spinner で足りる。",
    "value に今の値を渡し、ProgressLabel で名前を付ける。どこまで進んだか分からないあいだは value に null を渡すと、行き来する表示になる。",
  ],
  sdk: [
    "@ui-sdk/react/progress の上に作っている。ルートが progressbar になり、ProgressLabel が名前を付け、format で整えた値が読み上げにも ProgressValue にも使われる。見える数字は読み上げから隠されるので、二重に読まれない。",
    "状態は全パーツに data-indeterminate、data-progressing、data-complete で付き、ルートには進み具合を表す CSS 変数 --progress-value が入る。表示だけの部品なので onValueChange はなく、渡した value に従う。",
    "エージェントからは progress として見え、名前は ProgressLabel から付く。value、min、max を読めるが、呼べる操作はない。",
    "この部品集の Progress は、子のあとに ProgressTrack と ProgressIndicator を自分で描くので、使う側は ProgressLabel と ProgressValue だけを書けばよい。ProgressTrack と ProgressIndicator も出しているが、Progress の中に置くと棒が2本になる。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "ProgressLabel で名前を付け、ProgressValue で割合を出す。",
      en: {
        title: "Basic",
        description:
          "Name it with ProgressLabel and show the percentage with ProgressValue.",
      },
    },
    {
      id: "indeterminate",
      title: "進み具合が分からないとき",
      description: "value を null にすると、棒が左右に行き来する。",
      en: {
        title: "Indeterminate",
        description:
          "Set value to null to show a bar that moves back and forth.",
      },
    },
    {
      id: "format",
      title: "件数で見せる",
      description: "max で全体の数を決め、format で表示の文言を変える。",
      en: {
        title: "Custom format",
        description:
          "Set the total with max and change the displayed text with format.",
      },
    },
    {
      id: "file-list",
      title: "ファイルごとの進み具合",
      description: "ファイルの数だけ並べ、状態の違いを見比べられるようにする。",
      en: {
        title: "File list",
        description:
          "Stack one bar per file so people can compare their states.",
      },
    },
  ],
  en: {
    usage: [
      "A bar that shows how far a long task has gone toward completion. Use it while people wait for uploads or exports and want to see progress.",
      "Use Meter for amounts that are not a running task, such as storage usage or progress toward a goal. For a short wait with no known end, a Spinner is enough.",
      "Pass the current value to value and name it with ProgressLabel. While progress is unknown, pass null to value to show an indeterminate bar.",
    ],
    sdk: [
      "Built on @ui-sdk/react/progress. The root is the progressbar, ProgressLabel names it, and the value formatted with format is used both for screen readers and for ProgressValue. The visible value is hidden from screen readers so it is not read twice.",
      "Every part gets data-indeterminate, data-progressing or data-complete, and the root exposes the CSS variable --progress-value. It only displays state, so there is no onValueChange; it follows the value you pass.",
      "An agent sees it as a progress component named by ProgressLabel. It can read value, min and max, and there are no actions to call.",
      "In this collection, Progress renders ProgressTrack and ProgressIndicator itself after its children, so you only write ProgressLabel and ProgressValue. ProgressTrack and ProgressIndicator are exported too, but placing them inside Progress draws a second bar.",
    ],
  },
} satisfies ComponentGuide
