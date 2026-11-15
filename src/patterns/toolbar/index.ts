import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "One tab stop, arrow keys between items, Home/End to ends. Visual-only grouping -> ButtonGroup.",
    "Parts: ToolbarButton (variant, size; default ghost/sm), ToolbarInput (SDK Input props), ToolbarLink, ToolbarGroup. Toggle and ToggleGroup inside join navigation as is.",
    "Menu/Select triggers join via render on ToolbarButton.",
    "Name Toolbar and ToolbarGroup with aria-label; icon-only items too.",
    "Disabled items stay focusable (aria-disabled, ignore press); data-disabled; tooltip can explain.",
    'loop={false}; orientation="vertical". Controller createToolbarController().focus() for shortcuts.',
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "ToolbarButton を並べる。Tab で入り、矢印キーで隣のボタンへ移る。",
      en: {
        title: "Basic",
        description: "Line up ToolbarButtons.",
      },
    },
    {
      id: "groups",
      title: "グループと区切り",
      description:
        "ToolbarGroup で操作を分け、ToolbarSeparator で区切る。グループごと disabled にできる。",
      en: {
        title: "Groups and separators",
        description:
          "Split actions with ToolbarGroup and divide them with ToolbarSeparator.",
      },
    },
    {
      id: "with-toggles",
      title: "トグルを入れる",
      description:
        "Toggle と ToggleGroup は Toolbar の矢印キー移動に加わる。状態は変更コールバックで持つ。",
      en: {
        title: "With toggles",
        description:
          "Toggle and ToggleGroup join the toolbar's arrow-key navigation.",
      },
    },
    {
      id: "with-input",
      title: "入力欄とリンク",
      description:
        "ToolbarInput は onValueChange で値を受ける。ToolbarLink でページ移動も並べられる。",
      en: {
        title: "With an input and a link",
        description: "ToolbarInput reports its value through onValueChange.",
      },
    },
  ],
} satisfies ComponentGuide
