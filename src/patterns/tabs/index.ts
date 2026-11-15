import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Switch panes of one subject in place; page navigation -> NavigationMenu/Sidebar, form value -> SegmentedControl.",
    "Pair TabsTrigger and TabsContent by value; aria-label on TabsList. value, onValueChange(value, { reason, cancel }).",
    "TabsTrigger = SDK TabsTab, TabsContent = TabsPanel. TabsIndicator, TabsTabIcon not exported (underline is pseudo-element).",
    'activation="manual": arrows move focus only, Enter/Space selects. Disabled tab focusable, never selected.',
    "Attrs: data-selected (tab, panel), data-disabled, data-orientation. reason: item-press | list-navigation | imperative.",
    "Agent: kind tabs, action setValue (value or label); reports openable tabs when target is in unselected tab. Controller: setValue, select, focus.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "defaultValue で最初のタブを決める。使えないタブは disabled にする。",
      en: {
        title: "Basic",
        description: "defaultValue picks first tab; disabled tabs.",
      },
    },
    {
      id: "line",
      title: "下線の見た目",
      description:
        'TabsList に variant="line" を付けると、背景のない下線のタブになる。',
      en: {
        title: "Line",
        description: 'variant="line" on TabsList for underlined tabs.',
      },
    },
    {
      id: "with-icon",
      title: "アイコンと件数",
      description:
        "タブの文言にアイコンや件数の Badge を添えて、中身を見ずに状況がわかるようにする。",
      en: {
        title: "With icon and count",
        description: "Icon or count Badge in each tab.",
      },
    },
    {
      id: "vertical",
      title: "縦に並べる",
      description:
        'orientation="vertical" で設定画面のように左に並べる。矢印キーも上下で動く。',
      en: {
        title: "Vertical",
        description: 'orientation="vertical" stacks tabs on the left.',
      },
    },
    {
      id: "controlled",
      title: "選択を外で持つ",
      description:
        "value と onValueChange で選択中のタブを useState に持ち、ほかの表示と連動させる。",
      en: {
        title: "Controlled",
        description: "value and onValueChange sync the tab with other UI.",
      },
    },
  ],
} satisfies ComponentGuide
