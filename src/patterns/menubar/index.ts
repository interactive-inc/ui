import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Row of menus (File, Edit, View) for app top bar. Single menu -> DropdownMenu; page navigation -> NavigationMenu.",
    "aria-label on Menubar. Each MenubarMenu: MenubarTrigger + MenubarContent. Items as DropdownMenu: onAction on MenubarMenu, onCheckedChange on MenubarCheckboxItem, onValueChange on MenubarRadioGroup.",
    "One tab stop. Left/Right move triggers; ArrowDown/Enter/Space opens first item, ArrowUp last; Home/End/letter pick trigger. Open menu switches on Left/Right or pointer. orientation vertical: Up/Down.",
    "loop false stops at ends; disabled on Menubar disables all triggers. Bar data-open while any menu open; trigger only for own. Switch closes with reason submenu-switch.",
    "Item shortcut in JSX only displays; registered only for items passed as data (MenuData) via items on MenubarMenu, active even when closed.",
    "Agent: bar kind menubar (action close), menus kind menu (setOpen, press). createMenubarController(): focus(), close().",
    "No SDK menubar item parts: MenubarMenu, MenubarItem etc. are restyled DropdownMenu parts. Always popovers.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "メニューを横に並べ、選ばれた項目をメニューごとの onAction で受ける。",
      en: {
        title: "Basic",
        description: "Side-by-side menus; onAction per menu.",
      },
    },
    {
      id: "with-shortcuts",
      title: "ショートカットと区切り",
      description:
        "MenubarItem の shortcut でキーを添え、MenubarSeparator で項目のまとまりを分ける。",
      en: {
        title: "Shortcuts and separators",
        description: "shortcut key hints and MenubarSeparator groups.",
      },
    },
    {
      id: "checkbox-radio",
      title: "表示の切り替え",
      description:
        "表示メニューで、オンとオフを MenubarCheckboxItem、並び順を MenubarRadioGroup で選ぶ。",
      en: {
        title: "View options",
        description: "View menu: MenubarCheckboxItem and MenubarRadioGroup.",
      },
    },
    {
      id: "submenu",
      title: "サブメニュー",
      description: "MenubarSub で関連する項目を横に開く。",
      en: {
        title: "Submenu",
        description: "MenubarSub opens related items aside.",
      },
    },
  ],
} satisfies ComponentGuide
