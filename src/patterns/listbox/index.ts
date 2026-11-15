import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "選択肢を開いたままの一覧で見せて、その中から選ぶ入力。ポップアップを開かずに候補を見比べられるので、画面に余裕があるサイドパネルや書き出しの設定に向く。場所を取りたくないなら Select、行ごとにオンとオフを持たせたいなら Checkbox を使う。",
    "Field で包むと FieldLabel が一覧の名前になる。項目は ListboxItem で並べ、選ばれた項目には右端にチェックが付く。中身が文字だけでないときは label に読み上げ用の名前を渡す。",
    '値は onValueChange で受ける。multiple を付けると値が配列になる。activation="manual" にすると、矢印キーでは選ばれずに Space や Enter で選ぶようになる。',
  ],
  sdk: [
    "UI SDK の Listbox の上に作っている。ListboxItem の中に ListboxItemIndicator を入れてあり、選ばれた項目にだけチェックが出る。ListboxItemIcon、ListboxGroup、ListboxGroupLabel、ListboxSeparator は SDK の同じ名前のパーツに見た目を付けたもの。",
    "一覧全体でタブ移動は1か所になり、Tab は最後にフォーカスした項目、なければ選ばれている項目か最初の有効な項目に入る。項目は実際に DOM のフォーカスを受けるので focus-visible がそのまま効く。単一選択では矢印キー、Home、End、文字入力でフォーカスと一緒に選択も動く。",
    "選ばれた項目は data-selected、フォーカスのある項目は data-highlighted として出る。選択がフォーカスに付いてこない設定では、この2つが別の項目を指すことがある。onValueChange の details.reason は item-press、list-navigation、reset、restore、imperative のいずれか。name を渡すと選択が FormData に載り、multiple のときは値ごとに載る。",
    "エージェントからは listbox という種類で見え、setValue、clear、selectAll を呼べる。値は項目のいずれかに限られるので、項目にないものを指定した操作は断られる。画面の別の場所から変えるときは createListboxController を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "1つだけを選ぶ一覧。選んだ項目にチェックが付く。",
      en: {
        title: "Basic",
        description:
          "A list that selects one option. The chosen option shows a check.",
      },
    },
    {
      id: "with-icon",
      title: "アイコン付き",
      description:
        "ListboxItemIcon でアイコンを添える。使えない項目は disabled にする。",
      en: {
        title: "With icons",
        description:
          "Add an icon with ListboxItemIcon. Disable options that are unavailable.",
      },
    },
    {
      id: "multiple",
      title: "複数選択",
      description:
        'multiple で値が配列になる。activation="manual" で押したものだけを切り替える。',
      en: {
        title: "Multiple selection",
        description:
          'With multiple the value becomes an array. activation="manual" toggles only the options that are pressed.',
      },
    },
    {
      id: "groups",
      title: "グループと補足",
      description: "ListboxGroup で見出しを付け、項目に補足の文字を添える。",
      en: {
        title: "Groups and details",
        description:
          "Add headings with ListboxGroup and a line of detail to each option.",
      },
    },
  ],
  en: {
    usage: [
      "A listbox shows its options as an open list to pick from. People can compare options without opening a popup, so it suits side panels and export settings where there is room. Use Select to save space, and Checkbox when each row needs its own on and off state.",
      "Wrap it in a Field so the FieldLabel names the list. List options with ListboxItem; the chosen option shows a check at the end. When an option holds more than text, pass its spoken name to label.",
      'Read the value in onValueChange. Add multiple to make the value an array. With activation="manual", arrow keys only move focus and Space or Enter selects.',
    ],
    sdk: [
      "Built on the UI SDK Listbox. ListboxItem already contains a ListboxItemIndicator, so the check shows only on selected options. ListboxItemIcon, ListboxGroup, ListboxGroupLabel, and ListboxSeparator are the SDK parts of the same names with styles added.",
      "The whole list is a single tab stop: Tab returns to the last focused option, or else the selected option or the first enabled one. Options take real DOM focus, so focus-visible works directly. In a single-select list, arrow keys, Home, End, and typing move the selection along with focus.",
      "Selected options expose data-selected and the focused option exposes data-highlighted; when selection does not follow focus, the two can point at different options. details.reason in onValueChange is one of item-press, list-navigation, reset, restore, or imperative. With name the selection is added to FormData; with multiple, each value is a separate entry.",
      "To an agent it appears with the kind listbox and offers the setValue, clear, and selectAll actions. Its value is always among its items, so a step that names something else is refused. To change it from elsewhere on the page, use createListboxController.",
    ],
  },
} satisfies ComponentGuide
