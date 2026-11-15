import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "2-4 short options that change view instantly; long labels/5+ -> RadioGroup/Select; multi-press -> ToggleGroup.",
    "Parts: SegmentedControlItem. Indicator built in; do not place SegmentedControlIndicator.",
    "onValueChange value can be null: ignore null to keep one always selected. Generic type arg narrows value type.",
    "Radio-like: single tab stop, arrows move and check. reason: item-press|list-navigation|reset|restore|imperative.",
    "State attrs: data-checked, data-unchecked. Indicator CSS vars: --segmented-control-indicator-left, --segmented-control-indicator-width.",
    "Form: name -> FormData.",
    "Agent: kind segmented-control, action setValue. createSegmentedControlController.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "短い選択肢を横に並べ、1つを選ぶ。",
      en: {
        title: "Basic",
        description: "Short options in a row; choose one.",
      },
    },
    {
      id: "with-icon",
      title: "アイコン付き",
      description: "文言の前にアイコンを置く。アイコンは aria-hidden にする。",
      en: {
        title: "With icons",
        description: "Icon before label; mark aria-hidden.",
      },
    },
    {
      id: "switch-content",
      title: "表示を切り替える",
      description:
        "値を useState で持ち、選んだ期間の集計を出す。null は無視して常に1つを選ばせる。",
      en: {
        title: "Switching content",
        description: "Keep value in useState; ignore null.",
      },
    },
    {
      id: "disabled",
      title: "選べない項目",
      description:
        "項目に disabled を付け、選べない理由を FieldDescription に書く。",
      en: {
        title: "Unavailable options",
        description: "disabled item; explain in FieldDescription.",
      },
    },
  ],
} satisfies ComponentGuide
