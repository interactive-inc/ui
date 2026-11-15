import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "決まった選択肢から選ぶ入力。閉じているときは選んだ値だけを見せるので、選択肢が多いときや画面が狭いときに向く。選択肢が数個で比べながら選ばせたいなら RadioGroup、入力して絞り込みたいなら Combobox を使う。",
    "Field で包むと FieldLabel が名前になる。SelectTrigger の中に SelectValue を置き、選択肢は SelectContent に SelectItem で並べる。何も選ばれていないときの文言は Select の placeholder に渡す。",
    '値は onValueChange で受ける。multiple を付けると値が配列になり、SelectValue の maxLabels で表示する件数を絞れる。一覧の並び替えのような小さな場所では SelectTrigger に size="sm" を渡す。',
  ],
  sdk: [
    "UI SDK の Select の上に作っている。Select 本体は SDK のものをそのまま出しているので、items、multiple、placeholder、presentation などの props がそのまま使える。SelectItem にはチェックの印（SelectItemIndicator）と文字（SelectItemText）、SelectTrigger には下向きの矢印を入れてある。SelectLabel は SDK の SelectGroupLabel にあたり、グループの見出しに使う。",
    "ポップアップはブラウザのトップレイヤーに出るので Portal は要らない。開いた一覧は矢印キーと Home、End で動き、文字を打つと一致する項目へハイライトが移り、Enter で選ぶ。閉じたまま SelectTrigger にフォーカスして文字を打つと、一覧を開かずに次に一致する項目が選ばれる。ハイライト中の項目は data-highlighted、選ばれた項目は data-selected、未選択の SelectTrigger は data-placeholder で見た目を付けている。",
    "値は onValueChange、開閉は onOpenChange で受ける。どちらも第2引数の details に reason（item-press、list-navigation、clear-press、trigger-press、outside-press、escape-key など）と cancel() を持つ。name を渡すと選んだ値が FormData に載り、multiple のときは同じ name で値ごとに載る。",
    "エージェントからは select という種類で見え、setOpen、setValue、clear、setQuery を呼べる。setValue には項目の value かラベルを渡せて、一覧にない項目は断られる。createSelectController は外からの開閉と値の変更に使え、離れた場所に置いた SelectTrigger にも渡せる。SDK にある SelectClear、SelectInput、SelectEmpty、SelectStatus、SelectSelectAll、SelectArrow、SelectItemIcon はこの部品集では出していない。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "placeholder で未選択のときの文言を決める。",
      en: {
        title: "Basic",
        description:
          "Set the text shown before anything is chosen with placeholder.",
      },
    },
    {
      id: "groups",
      title: "グループ分け",
      description:
        "SelectGroup と SelectLabel で選択肢をまとめ、SelectSeparator で区切る。",
      en: {
        title: "Groups",
        description:
          "Group options with SelectGroup and SelectLabel, and divide them with SelectSeparator.",
      },
    },
    {
      id: "controlled",
      title: "選んだ値を使う",
      description: "値を useState で持ち、選択に応じて説明を変える。",
      en: {
        title: "Using the value",
        description:
          "Keep the value in useState and change the description to match the choice.",
      },
    },
    {
      id: "multiple",
      title: "複数選択",
      description:
        "multiple で値が配列になる。maxLabels を超えた分は件数でまとめる。",
      en: {
        title: "Multiple selection",
        description:
          "With multiple the value becomes an array. Labels past maxLabels are summarized as a count.",
      },
    },
    {
      id: "small",
      title: "小さな並び替え",
      description:
        '一覧の見出しの横に置くときは size="sm" にして、ラベルと横に並べる。',
      en: {
        title: "Compact sort control",
        description:
          'Next to a list heading, use size="sm" and place the label beside the select.',
      },
    },
  ],
  en: {
    usage: [
      "A select picks from a fixed set of options. It shows only the chosen value while closed, so it suits long lists and tight spaces. Use RadioGroup for a few options people compare, and Combobox when people should type to narrow the list.",
      "Wrap it in a Field so the FieldLabel names it. Put SelectValue inside SelectTrigger and list SelectItem parts in SelectContent. Pass the text for an empty selection to placeholder on Select.",
      'Read the value in onValueChange. Add multiple to make the value an array, and limit the labels shown with maxLabels on SelectValue. In small places such as a list\'s sort control, pass size="sm" to SelectTrigger.',
    ],
    sdk: [
      "Built on the UI SDK Select. The Select root is the SDK's own, so props such as items, multiple, placeholder, and presentation work as documented. SelectItem already contains the check (SelectItemIndicator) and its text (SelectItemText), and SelectTrigger contains the chevron. SelectLabel is the SDK's SelectGroupLabel, used as a group heading.",
      "The popup opens in the browser's top layer, so no Portal is needed. In the open list, arrow keys, Home, and End move the highlight, typing moves it to a matching item, and Enter chooses it. Typing on a focused, closed SelectTrigger selects the next matching item without opening the list. Styles use data-highlighted for the active item, data-selected for chosen items, and data-placeholder on the SelectTrigger while nothing is selected.",
      "Read the value in onValueChange and the open state in onOpenChange. Both receive details with reason (item-press, list-navigation, clear-press, trigger-press, outside-press, escape-key, and others) and cancel(). With name the selected value is added to FormData; with multiple, each value is a separate entry under the same name.",
      "To an agent it appears with the kind select and offers the setOpen, setValue, clear, and setQuery actions. setValue accepts an item's value or its label, and a step naming an item that is not in the list is refused. createSelectController opens, closes, and changes it from outside, and can also be passed to a SelectTrigger placed elsewhere. The SDK parts SelectClear, SelectInput, SelectEmpty, SelectStatus, SelectSelectAll, SelectArrow, and SelectItemIcon are not exported by this library.",
    ],
  },
} satisfies ComponentGuide
