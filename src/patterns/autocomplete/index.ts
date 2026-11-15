import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "文字を入力しながら候補を選べる欄。値は入力した文字そのもので、候補にない言葉もそのまま使える。検索欄や、配送業者のように自由入力も許す欄に向く。",
    "決まった選択肢の中からしか選ばせないなら Combobox か Select を使う。文中の @ や / で候補を出すなら TriggerMenu を使う。",
    "Field と FieldLabel で包み、値は onValueChange で受ける。AutocompleteItemText を使うと一致した部分が強調される。keywords で表示しない語でも絞り込め、onSubmit で Enter や候補の選択による検索を受けられる。",
  ],
  sdk: [
    "UI SDK の Autocomplete の上に作られている。入力欄は combobox の役割を持ち、フォーカスは欄に残したまま上下の矢印キーでハイライトが動き、Enter でその文字が入り、Escape で候補が閉じる。候補はトップレイヤーにその場で描かれるので、Portal は要らない。",
    "値は常に文字列で onValueChange に届き、候補の開閉は onOpenChange に届く。どちらも details.reason（input-change、item-press、escape-key、outside-press など）で理由が分かり、details.cancel() で止められる。name を渡すと文字がそのまま FormData に載り、候補にない文字でも送信できる。",
    "ハイライト中の候補に data-highlighted、開閉の途中に data-starting-style と data-ending-style が付く。createAutocompleteController() で外から setValue、clear、setOpen、focus を呼べ、open() は閉じたときに解決する Promise を返す。",
    "エージェントからは autocomplete として見え、setOpen、setValue、clear を呼べる。この部品集では AutocompleteInput を枠で包み、showClear と showTrigger で消去ボタンと開くボタンを出せるようにし、両方に既定の名前を付けている。SDK のパーツはすべて出している。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "AutocompleteItem を並べるだけで、入力に合わせて候補が絞られる。",
      en: {
        title: "Basic",
        description:
          "List AutocompleteItems and they narrow down as people type.",
      },
    },
    {
      id: "clear-and-trigger",
      title: "消去と一覧ボタン",
      description:
        "showClear と showTrigger でボタンを出し、openOnFocus でフォーカス時に候補を開く。",
      en: {
        title: "Clear and trigger",
        description:
          "Add buttons with showClear and showTrigger, and open the suggestions on focus with openOnFocus.",
      },
    },
    {
      id: "groups-and-icons",
      title: "グループとアイコン",
      description:
        "AutocompleteGroup で候補を分け、keywords でメールや品番でも見つかるようにする。",
      en: {
        title: "Groups and icons",
        description:
          "Split suggestions with AutocompleteGroup, and use keywords so an email or a SKU also finds them.",
      },
    },
    {
      id: "search",
      title: "検索欄",
      description:
        "submitOnSelect を付けると、候補を選んだときも onSubmit が呼ばれる。",
      en: {
        title: "Search box",
        description:
          "With submitOnSelect, choosing a suggestion also calls onSubmit.",
      },
    },
  ],
  en: {
    usage: [
      "A field that suggests options while people type. The value is the typed text itself, so words outside the suggestions work too. It suits search boxes and fields that allow free input, like a carrier name.",
      "Use Combobox or Select when people must pick from fixed options. Use TriggerMenu to suggest after @ or / inside text.",
      "Wrap it in Field and FieldLabel and read the value with onValueChange. AutocompleteItemText highlights the matched part. keywords match words that are not shown, and onSubmit receives searches from Enter or a chosen suggestion.",
    ],
    sdk: [
      "Built on the UI SDK Autocomplete. The input has the combobox role: focus stays in it while Up and Down move the highlight, Enter fills in that text, and Escape closes the suggestions. The popup renders in place in the top layer, so no Portal is needed.",
      "The value is always a string and arrives in onValueChange, and opening and closing arrive in onOpenChange. Both carry details.reason (input-change, item-press, escape-key, outside-press and so on) and can be stopped with details.cancel(). With name the text goes into FormData as is, even when it matches no suggestion.",
      "The highlighted suggestion gets data-highlighted, and the content gets data-starting-style and data-ending-style while it opens and closes. A controller from createAutocompleteController() calls setValue, clear, setOpen and focus from outside, and open() returns a Promise that resolves when the popup closes.",
      "An agent sees it as an autocomplete and can call setOpen, setValue and clear. This library wraps AutocompleteInput in a frame, adds showClear and showTrigger for the clear and open buttons, and gives both a default name. Every SDK part is exposed.",
    ],
  },
} satisfies ComponentGuide
