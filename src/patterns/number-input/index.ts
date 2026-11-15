import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Numbers with range/step (quantity, price, rate). Fixed options -> Select; rough range -> Slider; non-calculated digits (phone, postal) -> Input.",
    "Value is number | null. Props min, max, step, largeStep, smallStep, format (currency, percent: 10% = 0.1).",
    "onValueChange during interaction; onValueCommit on commit/release (save here); commit clamps to range and snaps to step. details.reason: input-change, input-commit, step-key, increment-press, decrement-press, wheel, scrub; cancel().",
    "Keys: Up/Down step, Shift/PageUp/PageDown largeStep, Alt smallStep, Home/End min/max. Step buttons repeat, not tabbable.",
    "name submits unformatted number via hidden input. Data: data-disabled, data-readonly, data-required, data-scrubbing.",
    "Agent: kind number-input, setValue, increment, decrement. Parts incl. NumberInputScrubArea; step buttons default names 減らす/増やす.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "増減ボタン付き。min と max の外には出ない。ボタンには何を増減するか名前を付ける。",
      en: {
        title: "Basic",
        description: "With step buttons, clamped to min and max.",
      },
    },
    {
      id: "currency",
      title: "金額",
      description:
        "format で円表示にする。largeStep で Shift を押したときの刻みを決める。",
      en: {
        title: "Currency",
        description: "Show yen with format.",
      },
    },
    {
      id: "percent",
      title: "割合",
      description: "percent の書式では 10% を 0.1 として扱う。",
      en: {
        title: "Percent",
        description: "With the percent format, 10% is handled as 0.1.",
      },
    },
    {
      id: "commit",
      title: "確定したら保存",
      description:
        "onValueCommit は入力の確定やボタンを離したときに1回だけ呼ばれる。",
      en: {
        title: "Save on commit",
        description:
          "onValueCommit runs once, when typing is committed or a button is released.",
      },
    },
  ],
} satisfies ComponentGuide
