import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Suggests while typing; value is the typed string (free text allowed). Fixed options -> Combobox/Select; suggest after @ or / -> TriggerMenu.",
    "onValueChange(string, details), onOpenChange(open, details): reason input-change, item-press, escape-key, outside-press; cancel(). name submits text as is.",
    "onSubmit receives Enter or chosen suggestion. AutocompleteItemText highlights match; keywords match hidden words.",
    "Props showClear, showTrigger on AutocompleteInput frame (default names). Popup renders in place, no Portal.",
    "Data: data-highlighted (item), data-starting-style, data-ending-style (content).",
    "Controller createAutocompleteController(): setValue, clear, setOpen, focus, open() Promise resolves on close. Agent: kind autocomplete, setOpen, setValue, clear.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "AutocompleteItem を並べるだけで、入力に合わせて候補が絞られる。",
      en: {
        title: "Basic",
        description:
          "List AutocompleteItems and they narrow down as people type.",
      },
    },
    {
      id: "clear-and-trigger",
      title: "消去と一覧ボタン",
      description:
        "showClear と showTrigger でボタンを出し、openOnFocus でフォーカス時に候補を開く。",
      en: {
        title: "Clear and trigger",
        description:
          "showClear, showTrigger buttons; openOnFocus opens suggestions on focus.",
      },
    },
    {
      id: "groups-and-icons",
      title: "グループとアイコン",
      description:
        "AutocompleteGroup で候補を分け、keywords でメールや品番でも見つかるようにする。",
      en: {
        title: "Groups and icons",
        description:
          "AutocompleteGroup splits suggestions; keywords match hidden words.",
      },
    },
    {
      id: "search",
      title: "検索欄",
      description:
        "submitOnSelect を付けると、候補を選んだときも onSubmit が呼ばれる。",
      en: {
        title: "Search box",
        description:
          "With submitOnSelect, choosing a suggestion also calls onSubmit.",
      },
    },
  ],
} satisfies ComponentGuide
