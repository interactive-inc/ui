import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "押したままの状態を持つボタンを束ねた部品。文字の装飾や配置、一覧の絞り込みのように、ツールバーで表示や編集の状態を切り替えるときに使う。フォームで送る値を選ぶなら SegmentedControl や RadioGroup、ボタン1つなら Toggle を使う。",
    "フォームの入力ではないので Field では包まず、ToggleGroup に aria-label でグループの名前を付ける。アイコンだけの項目には ToggleGroupItem ごとに aria-label を付ける。",
    "値はいつも配列で、onValueChange で受ける。既定では1つだけを押せて、multiple で複数を押せる。常にどれか1つを押した状態に保つなら deselectable={false} を付ける。spacing={0} でボタンをくっつけて並べる。",
  ],
  sdk: [
    "UI SDK の ToggleGroup と Toggle の上に作っている。ToggleGroupItem が SDK の Toggle にあたり、aria-pressed を持つ native の button になる。variant、size、spacing はこの部品集で足した props で、ToggleGroup に渡すと中の ToggleGroupItem に引き継がれる。",
    "グループは group の role を持ち、タブ移動は1か所になる。横並びでは左右、縦並びでは上下の矢印キーと、Home、End でフォーカスが動き、Enter か Space でフォーカス中の項目を押す、または戻す。押されている項目は data-pressed、並びの向きは data-orientation として出る。",
    "値は常に配列で、onValueChange の details.reason は item-press か imperative になる。Toggle はフォームに値を送らないので name は持たない。フォームで送る選択には Checkbox か RadioGroup を使う。",
    "エージェントからは toggle という種類で見え、setValue と toggle を呼べる。画面の別の場所から押すときは createToggleGroupController の setValue や toggle を使う。",
  ],
  patterns: [
    {
      id: "single",
      title: "1つだけ選ぶ",
      description:
        "deselectable={false} で、押した項目をもう一度押しても外れないようにする。",
      en: {
        title: "Single selection",
        description:
          "With deselectable={false}, pressing the pressed item again does not release it.",
      },
    },
    {
      id: "multiple",
      title: "複数を押す",
      description: "multiple で、太字と斜体のように同時に押せるようにする。",
      en: {
        title: "Multiple pressed",
        description:
          "With multiple, items such as bold and italic can be pressed together.",
      },
    },
    {
      id: "attached",
      title: "つなげて並べる",
      description:
        "spacing={0} と outline でボタンをくっつけ、一覧の表示切り替えに使う。",
      en: {
        title: "Attached buttons",
        description:
          "Join the buttons with spacing={0} and outline to switch a list's layout.",
      },
    },
    {
      id: "filter",
      title: "一覧の絞り込み",
      description:
        "押した項目を useState で持ち、一覧をその状態で絞り込む。何も押していなければすべて表示する。",
      en: {
        title: "Filtering a list",
        description:
          "Keep the pressed items in useState and filter the list by them. Show everything when nothing is pressed.",
      },
    },
  ],
  en: {
    usage: [
      "A toggle group bundles buttons that stay pressed. Use it in toolbars to switch view or editing states, such as text styles, alignment or list filters. Use SegmentedControl or RadioGroup to choose a value submitted with a form, and Toggle for a single button.",
      "It is not a form input, so do not wrap it in a Field; name the group with aria-label on ToggleGroup instead. Give each icon-only ToggleGroupItem its own aria-label.",
      "The value is always an array, read in onValueChange. By default only one item can be pressed; multiple allows several. Add deselectable={false} to keep one item pressed at all times, and spacing={0} to join the buttons.",
    ],
    sdk: [
      "Built on the UI SDK ToggleGroup and Toggle. ToggleGroupItem is the SDK Toggle, a native button with aria-pressed. variant, size, and spacing are props this library adds; set them on ToggleGroup and its ToggleGroupItems inherit them.",
      "The group has the group role and is a single tab stop. Left and Right in a horizontal group, Up and Down in a vertical one, plus Home and End, move focus; Enter or Space presses or unpresses the focused toggle. A pressed toggle exposes data-pressed, and the direction is exposed as data-orientation.",
      "The value is always an array, and details.reason in onValueChange is item-press or imperative. Toggles do not submit form values, so there is no name prop; use Checkbox or RadioGroup for choices a form submits.",
      "To an agent it appears with the kind toggle and offers the setValue and toggle actions. To press toggles from elsewhere on the page, use setValue or toggle on a controller from createToggleGroupController.",
    ],
  },
} satisfies ComponentGuide
