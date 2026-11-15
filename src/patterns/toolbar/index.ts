import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "エディタの書式や一覧の一括操作など、同じ画面に効く操作を1行にまとめる部品。Tab で入るのは1回だけで、中は矢印キーで行き来する。",
    "ButtonGroup は見た目をまとめるだけだが、Toolbar はキーボード操作まで受け持つ。中には ToolbarButton、ToolbarInput、ToolbarLink のほか、Toggle や ToggleGroup をそのまま置ける。",
    "Toolbar と ToolbarGroup には aria-label で名前を付け、アイコンだけのボタンにも名前を付ける。使えない項目は disabled にしてもフォーカスが残るので、理由をツールチップなどで伝えられる。",
  ],
  sdk: [
    "UI SDK の Toolbar の上に作られている。Tab で止まるのは1か所だけで、矢印キーで項目を移り、Home と End で端へ飛び、次に Tab で入ると最後にいた項目へ戻る。このフォーカスの管理を自分で書く必要はない。",
    '中に置いた Toggle と ToggleGroup はそのまま同じ移動に加わり、Menu や Select のトリガーは ToolbarButton の render に渡して加える。入力欄ではキャレットが端にあるときだけ矢印キーで隣へ抜ける。loop={false} で端で止まり、orientation="vertical" で上下キーになる。',
    "無効な項目は aria-disabled でフォーカスを受けたまま押せなくなり、data-disabled で見た目を付ける。createToolbarController() の focus() で、Alt+F10 のようなショートカットからツールバーへフォーカスを移せる。",
    "この部品集では ToolbarButton に Button の variant と size を足し（既定は ghost と sm）、ToolbarInput を SDK の Input として描いているので、value、defaultValue、onValueChange がそのまま使える。SDK のパーツはすべて出している。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "ToolbarButton を並べる。Tab で入り、矢印キーで隣のボタンへ移る。",
      en: {
        title: "Basic",
        description:
          "Line up ToolbarButtons. Tab enters the toolbar and arrow keys move to the next button.",
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
          "Split actions with ToolbarGroup and divide them with ToolbarSeparator. A whole group can be disabled.",
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
          "Toggle and ToggleGroup join the toolbar's arrow-key navigation. Keep their state with the change callbacks.",
      },
    },
    {
      id: "with-input",
      title: "入力欄とリンク",
      description:
        "ToolbarInput は onValueChange で値を受ける。ToolbarLink でページ移動も並べられる。",
      en: {
        title: "With an input and a link",
        description:
          "ToolbarInput reports its value through onValueChange. ToolbarLink adds navigation to the same row.",
      },
    },
  ],
  en: {
    usage: [
      "A single row of controls that act on the same screen, like editor formatting or bulk actions on a list. Tab enters it once, and arrow keys move between its items.",
      "ButtonGroup only groups the look, while Toolbar also handles keyboard navigation. Put ToolbarButton, ToolbarInput and ToolbarLink inside, along with Toggle and ToggleGroup as they are.",
      "Name Toolbar and ToolbarGroup with aria-label, and name icon-only buttons too. Disabled items stay focusable, so a tooltip can explain why they are unavailable.",
    ],
    sdk: [
      "Built on the UI SDK Toolbar. It is a single tab stop: arrow keys move between items, Home and End jump to the ends, and Tab returns to the item focused last. You do not write this focus management yourself.",
      'Toggle and ToggleGroup placed inside join the same navigation on their own, and Menu or Select triggers join by being passed to ToolbarButton\'s render. In a field, an arrow key leaves only when the caret is at that edge. loop={false} stops at the ends, and orientation="vertical" switches to Up and Down.',
      "A disabled item stays focusable with aria-disabled but ignores presses; style it with data-disabled. focus() on a controller from createToolbarController() moves focus into the toolbar from a shortcut such as Alt+F10.",
      "This library adds Button's variant and size to ToolbarButton (ghost and sm by default) and draws ToolbarInput as the SDK Input, so value, defaultValue and onValueChange work on it. Every SDK part is exposed.",
    ],
  },
} satisfies ComponentGuide
