import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Type-to-filter list that runs the chosen command. Form value -> Combobox/Select. Global: CommandDialog + Cmd+K.",
    "Keeps no value. Item chosen -> onAction(value) and CommandItem onSelect; distinct value per item. CommandEmpty for no match; CommandGroup heading.",
    "Combobox pattern: focus stays in CommandInput (aria-activedescendant). Fuzzy filter; Enter runs; Escape clears query, then back a page.",
    "Promise from onAction/onSelect: data-pending. Controlled separately: value/onValueChange (highlight), query/onQueryChange, pages/onPagesChange.",
    "CommandItem shortcut registers keys (unlike menus); works while list is in page, even when filtered out. In CommandDialog only while open.",
    "items (CommandData) ranked by match score; JSX children filtered in written order.",
    "Data attributes: data-highlighted, data-disabled (CommandItem), data-empty (CommandEmpty).",
    "Agent: kind command, named by aria-label on CommandInput; actions setValue, setQuery, setPages (none runs a command). CommandDialog is a separate dialog.",
    "Registry adds CommandDialog, heading on CommandGroup, checked on CommandItem. CommandItemText, CommandItemIcon not exported.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "検索欄、グループ、一致しないときの案内を並べ、選んだ操作を onAction で受ける。",
      en: {
        title: "Basic",
        description: "Search, groups, empty message; onAction handles choice.",
      },
    },
    {
      id: "with-shortcuts",
      title: "ショートカット",
      description:
        "CommandItem の shortcut でキーを登録し、CommandShortcut で表示する。",
      en: {
        title: "Shortcuts",
        description:
          "shortcut on CommandItem registers keys; show with CommandShortcut.",
      },
    },
    {
      id: "dialog",
      title: "コマンドパレット",
      description: "CommandDialog に入れ、⌘K でどこからでも開けるようにする。",
      en: {
        title: "Command palette",
        description: "CommandDialog opened with Cmd+K.",
      },
    },
    {
      id: "with-checked",
      title: "選択中の印",
      description:
        "checked で選ばれている項目に印を付け、onAction で切り替える。",
      en: {
        title: "Checked items",
        description: "checked marks selected; toggle in onAction.",
      },
    },
  ],
} satisfies ComponentGuide
