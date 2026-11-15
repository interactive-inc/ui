import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Action list from a button (row more, account, view options). Form value -> Select; right-click -> ContextMenu; app top bar -> Menubar.",
    "Items: value + onAction on DropdownMenu. DropdownMenuCheckboxItem onCheckedChange; DropdownMenuRadioGroup onValueChange.",
    "Heavy items (delete): destructive variant, data-agent-confirm, last.",
    "Plain item closes menu; checkbox/radio stay open. closeOnSelect overrides. Promise from onAction/onSelect: data-pending, stays open.",
    "onOpenChange reason: trigger-press|item-press|outside-press|escape-key|focus-out; cancel(). Data: data-highlighted, data-disabled, data-checked, data-destructive.",
    "Keys: trigger Enter/Space/ArrowDown opens first item, ArrowUp last; arrows wrap unless loop false; typeahead.",
    "Item shortcut in JSX only displays + aria-keyshortcuts; does not register. Registered only for items passed as data (MenuData) via items on DropdownMenu, active even when closed (itemShortcuts false disables). DropdownMenuTrigger shortcut opens menu.",
    "Agent: kind menu, named by trigger; actions setOpen, press (item text; opens first). data-agent-confirm item waits for person. createMenuController(): per-row payload.",
    "Registry adds inset, variant; DropdownMenuLabel = SDK MenuGroupLabel. MenuItemIcon not exported.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "アイコン付きの項目を並べ、選ばれた項目の value を onAction で受ける。",
      en: {
        title: "Basic",
        description: "Items with icons; value arrives in onAction.",
      },
    },
    {
      id: "checkbox",
      title: "オンとオフ",
      description: "DropdownMenuCheckboxItem で表示する列などを切り替える。",
      en: {
        title: "Checkbox items",
        description: "DropdownMenuCheckboxItem toggles options.",
      },
    },
    {
      id: "radio",
      title: "1つを選ぶ",
      description: "DropdownMenuRadioGroup で並び順などを1つだけ選ばせる。",
      en: {
        title: "Radio items",
        description: "DropdownMenuRadioGroup picks exactly one.",
      },
    },
    {
      id: "submenu",
      title: "サブメニュー",
      description: "関連する項目を DropdownMenuSub にまとめ、横に開く。",
      en: {
        title: "Submenu",
        description: "DropdownMenuSub opens to the side.",
      },
    },
    {
      id: "row-actions",
      title: "行の操作",
      description:
        "見出し、ショートカット、区切り線で整え、取り消せない操作は最後に destructive で置く。",
      en: {
        title: "Row actions",
        description: "Labels, shortcuts, separators; destructive last.",
      },
    },
  ],
} satisfies ComponentGuide
