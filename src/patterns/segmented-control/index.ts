import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "2〜4個の短い選択肢から1つを選ぶ入力。選んだ位置に背景が滑って動き、表示の切り替えや期間の選択のように、すぐに結果が変わる選択に向く。選択肢が長い文や5個以上になるなら RadioGroup か Select、押したまま複数を選ぶなら ToggleGroup を使う。",
    "Field で包むと FieldLabel が名前になり、name を付ければフォームの値として送られる。項目は SegmentedControlItem で並べ、文言は短くそろえる。",
    "値は onValueChange で受ける。値は null になりうるので、常にどれかを選ばせたいときは null を無視する。値を型で絞りたいときは SegmentedControl に型引数を渡す。",
  ],
  sdk: [
    "UI SDK の SegmentedControl の上に作っている。振る舞いはラジオグループと同じで、各 SegmentedControlItem は radio の role を持つ button と、フォームに参加する隠れた native の radio になる。選ばれた項目へ滑る SegmentedControlIndicator は SegmentedControl の中に入れてあるので、自分で置かなくてよい。",
    "タブ移動は1か所になり、矢印キーは無効な項目を飛ばして隣の項目へ移り、そのまま選ぶ。Space はフォーカス中の項目を選び、Enter はフォームを送信する。項目の状態は data-checked と data-unchecked として出て、インジケーターの位置と大きさは --segmented-control-indicator-left や --segmented-control-indicator-width などの CSS 変数で届く。",
    "onValueChange の details.reason は item-press、list-navigation、reset、restore、imperative のいずれか。name を渡すと選んだ値が FormData に載る。エージェントからは segmented-control という種類で見え、setValue で項目を選べる。画面の別の場所から選ぶときは createSegmentedControlController を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "短い選択肢を横に並べ、1つを選ぶ。",
      en: {
        title: "Basic",
        description: "Line up short options and choose one.",
      },
    },
    {
      id: "with-icon",
      title: "アイコン付き",
      description: "文言の前にアイコンを置く。アイコンは aria-hidden にする。",
      en: {
        title: "With icons",
        description: "Place an icon before the label and mark it aria-hidden.",
      },
    },
    {
      id: "switch-content",
      title: "表示を切り替える",
      description:
        "値を useState で持ち、選んだ期間の集計を出す。null は無視して常に1つを選ばせる。",
      en: {
        title: "Switching content",
        description:
          "Keep the value in useState and show totals for the chosen period. Ignore null so one option always stays selected.",
      },
    },
    {
      id: "disabled",
      title: "選べない項目",
      description:
        "項目に disabled を付け、選べない理由を FieldDescription に書く。",
      en: {
        title: "Unavailable options",
        description:
          "Add disabled to an item and explain why in a FieldDescription.",
      },
    },
  ],
  en: {
    usage: [
      "A segmented control picks one of two to four short options. A background slides to the chosen option, so it suits choices that change the view right away, such as a layout or a time range. Use RadioGroup or Select for long labels or five or more options, and ToggleGroup when several can stay pressed.",
      "Wrap it in a Field so the FieldLabel names it, and give it a name to submit the value with a form. List options with SegmentedControlItem and keep their labels short.",
      "Read the value in onValueChange. The value can be null, so ignore null when one option must always be selected. Pass a type argument to SegmentedControl to narrow the value type.",
    ],
    sdk: [
      "Built on the UI SDK SegmentedControl. It behaves like a radio group: each SegmentedControlItem renders a button with the radio role plus a hidden native radio that takes part in forms. The SegmentedControlIndicator that slides to the checked item is already inside SegmentedControl, so you do not place it yourself.",
      "It is a single tab stop. Arrow keys move to the neighbouring item, skipping disabled ones, and check it; Space checks the focused item, and Enter submits the form. Item state is exposed as data-checked and data-unchecked, and the indicator's position and size arrive as CSS variables such as --segmented-control-indicator-left and --segmented-control-indicator-width.",
      "details.reason in onValueChange is one of item-press, list-navigation, reset, restore, or imperative. With name the checked value is added to FormData. To an agent it appears with the kind segmented-control and offers the setValue action. To choose from elsewhere on the page, use createSegmentedControlController.",
    ],
  },
} satisfies ComponentGuide
