import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "文字を入力して候補を絞り込み、その中から選ぶ入力。取引先や担当者のように候補が多く、名前の一部で探したいときに使う。候補が少ないなら Select、候補にない文字もそのまま入力させたいなら Autocomplete を使う。",
    "Field で包むと FieldLabel が入力欄の名前になる。ComboboxItem には value と、入力欄に出す label を渡す。候補がないときの文言は ComboboxEmpty に書く。",
    "値は onValueChange で受ける。multiple を付けると値が配列になり、ComboboxChips と ComboboxValue で選んだ値をチップとして並べられる。",
  ],
  sdk: [
    "UI SDK の Combobox の上に作っている。ComboboxInput は入力欄を InputGroup で包み、候補を開くボタン（showTrigger）と消去ボタン（showClear）を中に持つ。ComboboxItem にはチェックの印、ComboboxChip には外すボタン（showRemove）を入れてある。ComboboxLabel は SDK の ComboboxGroupLabel にあたり、ComboboxValue の子の関数には値を必ず配列で受け取れる values を足している。",
    'ポップアップはトップレイヤーに出るので Portal は要らない。文字を打つと候補が絞られて一覧が開き、上下の矢印キーでハイライトを動かし、Enter で選び、Escape で閉じて選択中のラベルに戻す。フォーカスは入力欄に残ったまま aria-activedescendant でハイライトを伝えるので、キーボードのハイライトは ComboboxContent の data-modality="keyboard" と項目の data-highlighted で見分ける。チップがあるときは、空の入力欄で Backspace を押すと最後のチップが外れ、左右の矢印キーでチップの間を移る。',
    "選択は value と onValueChange、入力中の文字は query と onQueryChange、開閉は open と onOpenChange に分かれていて、必要なものだけを制御できる。どのコールバックも details.reason と details.cancel() を持つ。name を渡すと入力中の文字ではなく選んだ値が FormData に載り、multiple のときは値ごとに載る。",
    "エージェントからは combobox という種類で見え、setOpen、setValue、clear、setQuery を呼べる。createComboboxController を使うと、外から開閉、値、入力中の文字を変えられる。SDK にある ComboboxArrow、ComboboxItemIcon、ComboboxValueIcon と、入力欄に名前を付ける SDK の ComboboxLabel はこの部品集では出していない。名前は Field の FieldLabel で付ける。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "入力した文字で候補を絞る。showClear で入力を消すボタンを出す。",
      en: {
        title: "Basic",
        description:
          "Typing narrows the options. showClear adds a button that clears the input.",
      },
    },
    {
      id: "groups",
      title: "グループ分け",
      description:
        "ComboboxGroup と ComboboxLabel で候補を見出しごとにまとめる。",
      en: {
        title: "Groups",
        description:
          "Group options under headings with ComboboxGroup and ComboboxLabel.",
      },
    },
    {
      id: "controlled",
      title: "選んだ値を使う",
      description: "値を useState で持ち、選んだ担当者に合わせて説明を変える。",
      en: {
        title: "Using the value",
        description:
          "Keep the value in useState and update the description for the chosen assignee.",
      },
    },
    {
      id: "multiple",
      title: "複数選択とチップ",
      description: "multiple で複数を選び、選んだ値を ComboboxChip で並べる。",
      en: {
        title: "Multiple selection with chips",
        description:
          "Use multiple to choose several values and show them as ComboboxChip parts.",
      },
    },
  ],
  en: {
    usage: [
      "A combobox lets people type to narrow a list and then pick from it. Use it when there are many options, such as clients or assignees, that people find by part of a name. Use Select for a short list, and Autocomplete when text outside the options should be accepted as is.",
      "Wrap it in a Field so the FieldLabel names the input. Give each ComboboxItem a value and the label shown in the input. Put the text for no matches in ComboboxEmpty.",
      "Read the value in onValueChange. Add multiple to make the value an array, and show the chosen values as chips with ComboboxChips and ComboboxValue.",
    ],
    sdk: [
      "Built on the UI SDK Combobox. ComboboxInput wraps the input in an InputGroup and holds the button that opens the list (showTrigger) and the clear button (showClear). ComboboxItem already contains the check, and ComboboxChip its remove button (showRemove). ComboboxLabel is the SDK's ComboboxGroupLabel, and the children function of ComboboxValue also receives values, the selection always as an array.",
      'The popup opens in the top layer, so no Portal is needed. Typing filters the options and opens the list, ArrowDown and ArrowUp move the highlight, Enter chooses, and Escape closes the list and restores the selection\'s label. Focus stays in the input while aria-activedescendant identifies the highlighted option, so a keyboard highlight is told apart by data-modality="keyboard" on ComboboxContent and data-highlighted on the item. With chips, Backspace in an empty input removes the last chip, and ArrowLeft and ArrowRight move between chips.',
      "The selection (value, onValueChange), the typed text (query, onQueryChange), and the popup (open, onOpenChange) are separate, so control only what you need. Every callback receives details.reason and details.cancel(). With name, the selected value is added to FormData rather than the typed text; with multiple, each value is a separate entry.",
      "To an agent it appears with the kind combobox and offers the setOpen, setValue, clear, and setQuery actions. createComboboxController changes the open state, the value, and the typed text from outside. The SDK parts ComboboxArrow, ComboboxItemIcon, and ComboboxValueIcon, and the SDK's own ComboboxLabel that names the input, are not exported by this library; name the input with a FieldLabel in a Field.",
    ],
  },
} satisfies ComponentGuide
