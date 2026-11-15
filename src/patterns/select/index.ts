import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Pick from fixed options; few compared -> RadioGroup; type to filter -> Combobox.",
    "SelectTrigger > SelectValue; SelectContent > SelectItem. placeholder on Select. SelectLabel = SDK SelectGroupLabel (group heading).",
    "Select root is SDK's: items, multiple, placeholder, presentation work. SelectItem has indicator/text built in; SelectTrigger has chevron.",
    'multiple -> array value; SelectValue maxLabels. SelectTrigger size="sm" for compact places.',
    "onValueChange / onOpenChange(…, { reason: item-press|list-navigation|clear-press|trigger-press|outside-press|escape-key|…, cancel() }).",
    "State attrs: data-highlighted (item), data-selected (item), data-placeholder (SelectTrigger).",
    "Form: name -> FormData; multiple -> repeated entries under same name. Typing on closed trigger selects next match.",
    "Agent: kind select; actions setOpen, setValue (value or label; unknown refused), clear, setQuery. createSelectController.",
    "Not exported: SelectClear, SelectInput, SelectEmpty, SelectStatus, SelectSelectAll, SelectArrow, SelectItemIcon.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "placeholder で未選択のときの文言を決める。",
      en: {
        title: "Basic",
        description: "Set empty-state text with placeholder.",
      },
    },
    {
      id: "groups",
      title: "グループ分け",
      description:
        "SelectGroup と SelectLabel で選択肢をまとめ、SelectSeparator で区切る。",
      en: {
        title: "Groups",
        description:
          "Group with SelectGroup/SelectLabel; divide with SelectSeparator.",
      },
    },
    {
      id: "controlled",
      title: "選んだ値を使う",
      description: "値を useState で持ち、選択に応じて説明を変える。",
      en: {
        title: "Using the value",
        description: "Keep value in useState; update description.",
      },
    },
    {
      id: "multiple",
      title: "複数選択",
      description:
        "multiple で値が配列になる。maxLabels を超えた分は件数でまとめる。",
      en: {
        title: "Multiple selection",
        description:
          "multiple gives an array; maxLabels summarizes as a count.",
      },
    },
    {
      id: "small",
      title: "小さな並び替え",
      description:
        '一覧の見出しの横に置くときは size="sm" にして、ラベルと横に並べる。',
      en: {
        title: "Compact sort control",
        description: 'size="sm" beside a list heading.',
      },
    },
  ],
} satisfies ComponentGuide
