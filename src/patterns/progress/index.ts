import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Running task progress (upload, export). Settled amount -> Meter; short unknown wait -> Spinner.",
    "value number; null = indeterminate. Name with ProgressLabel; ProgressValue shows formatted value (format, max).",
    "Progress renders ProgressTrack and ProgressIndicator itself after children; do not place them inside (draws second bar).",
    "Data attributes on all parts: data-indeterminate | data-progressing | data-complete. CSS var --progress-value on root.",
    "Display only, no onValueChange. Agent: kind progress, named by ProgressLabel, reads value/min/max, no actions.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "ProgressLabel で名前を付け、ProgressValue で割合を出す。",
      en: {
        title: "Basic",
        description: "ProgressLabel names it; ProgressValue shows percent.",
      },
    },
    {
      id: "indeterminate",
      title: "進み具合が分からないとき",
      description: "value を null にすると、棒が左右に行き来する。",
      en: {
        title: "Indeterminate",
        description: "value null shows a back-and-forth bar.",
      },
    },
    {
      id: "format",
      title: "件数で見せる",
      description: "max で全体の数を決め、format で表示の文言を変える。",
      en: {
        title: "Custom format",
        description: "max sets the total; format changes displayed text.",
      },
    },
    {
      id: "file-list",
      title: "ファイルごとの進み具合",
      description: "ファイルの数だけ並べ、状態の違いを見比べられるようにする。",
      en: {
        title: "File list",
        description: "One bar per file to compare states.",
      },
    },
  ],
} satisfies ComponentGuide
