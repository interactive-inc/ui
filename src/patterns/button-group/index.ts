import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "関係の深いボタンをひとかたまりに並べる枠。隣り合うボタンの角と境目をつなげて、同じ対象への操作だと一目で分かるようにする。",
    "ButtonGroup は見た目をまとめるだけで、矢印キーでの移動や選択の状態は持たない。どれか1つを選ぶなら ToggleGroup や SegmentedControl、キーボードで行き来する操作の列なら Toolbar を使う。",
    "グループには aria-label で何の操作かを書く。ButtonGroupText で前後に文字を添えたり、ButtonGroup を入れ子にして操作のまとまりを分けたりできる。",
  ],
  sdk: [
    'ButtonGroup は role="group" を付けた div で、UI SDK の部品ではない。キー操作も状態も持たず、エージェントからは枠としては見えずに、中の Button がそれぞれ button として見える。',
    "ButtonGroupText は SDK の renderElement で描いていて、render に要素を渡すと label などに差し替えられる。ButtonGroupSeparator は SDK の Separator を包んだもの。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "同じ対象への操作を横に並べ、ひとつながりの形にする。",
      en: {
        title: "Basic",
        description:
          "Line up actions on the same object so they read as one connected shape.",
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
          "Buttons without a border, such as secondary, need ButtonGroupSeparator to show where one ends.",
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
        description:
          "Put ButtonGroups inside a ButtonGroup to keep a gap between each set of actions.",
      },
    },
    {
      id: "with-text",
      title: "文字や入力欄と並べる",
      description:
        "ButtonGroupText で接頭辞を添え、入力欄とボタンをひと続きにする。",
      en: {
        title: "With text and an input",
        description:
          "Add a prefix with ButtonGroupText and join an input and a button into one row.",
      },
    },
  ],
  en: {
    usage: [
      "A frame that lines up closely related buttons. It joins the corners and borders of neighboring buttons so it is clear they act on the same thing.",
      "ButtonGroup only groups the look. It has no arrow-key navigation and no selected state. Use ToggleGroup or SegmentedControl to pick one option, and Toolbar for a row of controls people move through with the keyboard.",
      "Describe the group with aria-label. Add text before or after with ButtonGroupText, or nest ButtonGroups to separate sets of actions.",
    ],
    sdk: [
      'ButtonGroup is a div with role="group", not a UI SDK component. It has no keyboard handling or state, and an agent does not see the frame itself, only each Button inside it as a button.',
      "ButtonGroupText is drawn with the SDK's renderElement, so passing an element to render swaps it for a label or another element. ButtonGroupSeparator wraps the SDK Separator.",
    ],
  },
} satisfies ComponentGuide
