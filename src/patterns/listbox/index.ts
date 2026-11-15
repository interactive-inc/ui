import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Always-open list to pick from (side panels, export settings); save space -> Select; per-row on/off -> Checkbox.",
    "ListboxItem shows check when selected (ListboxItemIndicator built in). Rich content: pass spoken name to label.",
    "Same-name styled SDK parts: ListboxItemIcon, ListboxGroup, ListboxGroupLabel, ListboxSeparator.",
    'multiple -> array value. activation="manual": arrows move focus only, Space/Enter select.',
    "onValueChange details.reason: item-press|list-navigation|reset|restore|imperative.",
    "State attrs: data-selected, data-highlighted (can differ when selection does not follow focus).",
    "Single tab stop; options take real DOM focus. Single-select: arrows/Home/End/typing select with focus.",
    "Form: name -> FormData; multiple -> repeated entries.",
    "Agent: kind listbox; actions setValue (must be an item), clear, selectAll. createListboxController.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "1つだけを選ぶ一覧。選んだ項目にチェックが付く。",
      en: {
        title: "Basic",
        description: "Single-select list; chosen option shows a check.",
      },
    },
    {
      id: "with-icon",
      title: "アイコン付き",
      description:
        "ListboxItemIcon でアイコンを添える。使えない項目は disabled にする。",
      en: {
        title: "With icons",
        description: "ListboxItemIcon adds icons; disable unavailable options.",
      },
    },
    {
      id: "multiple",
      title: "複数選択",
      description:
        'multiple で値が配列になる。activation="manual" で押したものだけを切り替える。',
      en: {
        title: "Multiple selection",
        description: "multiple gives an array; manual activation.",
      },
    },
    {
      id: "groups",
      title: "グループと補足",
      description: "ListboxGroup で見出しを付け、項目に補足の文字を添える。",
      en: {
        title: "Groups and details",
        description: "Headings via ListboxGroup; detail line per option.",
      },
    },
  ],
} satisfies ComponentGuide
