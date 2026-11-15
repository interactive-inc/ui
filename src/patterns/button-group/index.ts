import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Visual grouping only (div role=group): no arrow-key nav, no selected state. Pick one -> ToggleGroup/SegmentedControl; keyboard row -> Toolbar.",
    'Set aria-label on group. ButtonGroupText for labels (render swaps element), ButtonGroupSeparator, nest groups for sets. orientation="vertical".',
    "Agent sees only inner Buttons, not the frame.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "同じ対象への操作を横に並べ、ひとつながりの形にする。",
      en: {
        title: "Basic",
        description: "Join actions on one object into a single shape.",
      },
    },
    {
      id: "with-separator",
      title: "区切り線",
      description:
        "secondary など枠線のないボタンは ButtonGroupSeparator で境目を見せる。",
      en: {
        title: "With a separator",
        description:
          "Borderless buttons need ButtonGroupSeparator between them.",
      },
    },
    {
      id: "vertical",
      title: "縦に並べる",
      description: "orientation を vertical にすると縦につながる。",
      en: {
        title: "Vertical",
        description: "Set orientation to vertical to stack the buttons.",
      },
    },
    {
      id: "nested",
      title: "グループの入れ子",
      description:
        "ButtonGroup の中に ButtonGroup を置くと、まとまりごとに間が空く。",
      en: {
        title: "Nested groups",
        description: "Nest ButtonGroups to separate sets of actions.",
      },
    },
    {
      id: "with-text",
      title: "文字や入力欄と並べる",
      description:
        "ButtonGroupText で接頭辞を添え、入力欄とボタンをひと続きにする。",
      en: {
        title: "With text and an input",
        description: "Join an input and button with ButtonGroupText as prefix.",
      },
    },
  ],
} satisfies ComponentGuide
