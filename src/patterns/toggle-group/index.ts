import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Toolbar buttons that stay pressed (styles, alignment, filters); form value -> SegmentedControl/RadioGroup; single -> Toggle.",
    "Not a form input: no Field, no name. Name with aria-label on ToggleGroup; icon-only ToggleGroupItem needs own aria-label.",
    "value always array. Default one pressed; multiple for several. deselectable={false} keeps one pressed.",
    "variant, size, spacing (library additions) set on ToggleGroup, inherited by items. spacing={0} joins buttons.",
    "onValueChange details.reason: item-press|imperative.",
    "State attrs: data-pressed, data-orientation. Items are buttons with aria-pressed.",
    "Agent: kind toggle; actions setValue, toggle. createToggleGroupController.",
  ],
  patterns: [
    {
      id: "single",
      title: "1つだけ選ぶ",
      description:
        "deselectable={false} で、押した項目をもう一度押しても外れないようにする。",
      en: {
        title: "Single selection",
        description: "deselectable={false}: pressed item cannot be released.",
      },
    },
    {
      id: "multiple",
      title: "複数を押す",
      description: "multiple で、太字と斜体のように同時に押せるようにする。",
      en: {
        title: "Multiple pressed",
        description: "multiple: items press together.",
      },
    },
    {
      id: "attached",
      title: "つなげて並べる",
      description:
        "spacing={0} と outline でボタンをくっつけ、一覧の表示切り替えに使う。",
      en: {
        title: "Attached buttons",
        description: "spacing={0} and outline join buttons.",
      },
    },
    {
      id: "filter",
      title: "一覧の絞り込み",
      description:
        "押した項目を useState で持ち、一覧をその状態で絞り込む。何も押していなければすべて表示する。",
      en: {
        title: "Filtering a list",
        description: "Filter a list by pressed items.",
      },
    },
  ],
} satisfies ComponentGuide
