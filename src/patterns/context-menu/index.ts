import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Actions for right-click/long-press spot (file lists, cards, rows). Also offer via button/DropdownMenu. Button open -> DropdownMenu; top bar -> Menubar.",
    "Built on SDK Menu with MenuContextTrigger. ContextMenuTrigger needs tabIndex + aria-label: Shift+F10 / context-menu key open it. disabled leaves browser menu.",
    "Items as DropdownMenu: value + onAction, onCheckedChange, onValueChange; same keys, dismissal, data attributes. Always popover, ignores presentation.",
    "Item shortcut in JSX only displays; registered only for items passed as data (MenuData) via items on ContextMenu.",
    "Agent: kind menu, actions setOpen, press. Registry passes ContextMenuTrigger aria-label/aria-labelledby to ContextMenuContent as menu name.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "カードを右クリックすると操作が並び、選んだ項目を onAction で受ける。",
      en: {
        title: "Basic",
        description: "Right-click a card for actions via onAction.",
      },
    },
    {
      id: "checkbox-radio",
      title: "切り替えと選択",
      description:
        "ContextMenuCheckboxItem でオンとオフ、ContextMenuRadioGroup で1つを選ぶ。",
      en: {
        title: "Checkbox and radio items",
        description:
          "ContextMenuCheckboxItem toggles; ContextMenuRadioGroup picks one.",
      },
    },
    {
      id: "submenu",
      title: "サブメニュー",
      description: "移動先のように数が多い項目は ContextMenuSub にまとめる。",
      en: {
        title: "Submenu",
        description: "ContextMenuSub groups long lists.",
      },
    },
    {
      id: "destructive",
      title: "取り消せない操作",
      description:
        "削除は最後に区切って置き、variant を destructive にして data-agent-confirm を付ける。",
      en: {
        title: "Destructive",
        description: "Delete last, destructive, data-agent-confirm.",
      },
    },
  ],
} satisfies ComponentGuide
