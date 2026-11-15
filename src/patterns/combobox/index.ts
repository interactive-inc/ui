import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Type to filter many options; short list -> Select; free text accepted -> Autocomplete.",
    "ComboboxItem needs value and label (shown in input). No-match text: ComboboxEmpty. ComboboxLabel = SDK ComboboxGroupLabel.",
    "ComboboxInput has InputGroup; showTrigger (open button), showClear. ComboboxItem has check built in.",
    "multiple -> array value; ComboboxChips + ComboboxValue; ComboboxChip showRemove. ComboboxValue children fn gets values (always array).",
    "Controlled separately: value/onValueChange, query/onQueryChange, open/onOpenChange. Callbacks get details.reason, cancel().",
    'Focus stays in input; keyboard highlight: data-modality="keyboard" on ComboboxContent, data-highlighted on item.',
    "Form: name -> selected value (not typed text); multiple -> repeated entries.",
    "Agent: kind combobox; actions setOpen, setValue, clear, setQuery. createComboboxController.",
    "Not exported: ComboboxArrow, ComboboxItemIcon, ComboboxValueIcon, SDK ComboboxLabel; name input with FieldLabel.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "入力した文字で候補を絞る。showClear で入力を消すボタンを出す。",
      en: {
        title: "Basic",
        description: "Typing narrows options; showClear adds a clear button.",
      },
    },
    {
      id: "groups",
      title: "グループ分け",
      description:
        "ComboboxGroup と ComboboxLabel で候補を見出しごとにまとめる。",
      en: {
        title: "Groups",
        description: "Group with ComboboxGroup and ComboboxLabel.",
      },
    },
    {
      id: "controlled",
      title: "選んだ値を使う",
      description: "値を useState で持ち、選んだ担当者に合わせて説明を変える。",
      en: {
        title: "Using the value",
        description: "Keep value in useState; update description.",
      },
    },
    {
      id: "multiple",
      title: "複数選択とチップ",
      description: "multiple で複数を選び、選んだ値を ComboboxChip で並べる。",
      en: {
        title: "Multiple selection with chips",
        description: "multiple with ComboboxChip parts.",
      },
    },
  ],
} satisfies ComponentGuide
