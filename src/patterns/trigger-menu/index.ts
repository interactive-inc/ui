import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "入力欄で @ や / などの文字を打つと候補を開き、選んだものを文に挿入する部品。担当者のメンション、状態のタグ、スラッシュコマンドに使う。",
    "欄全体の値を候補から選ぶなら Autocomplete や Combobox を使う。TriggerMenu は文の途中に差し込むためのもの。挿入したものをチップとして残したいときは TokenInput の中に置く。",
    "triggers に文字と候補を渡し、TriggerMenuInput を Field と FieldLabel で包む。1行の欄にするときは render に Input を渡し、Enter で誤って選ばないよう autoHighlight を切る。",
  ],
  sdk: [
    "UI SDK の TriggerMenu の上に作られている。フォーカスは入力欄に残したまま上下の矢印キーでハイライトが動き、Enter か Tab で選び、Escape で閉じる。Escape で閉じた一致は打ち続けても開かず、shortcut（既定は Control+Space）で開き直せる。",
    "選んだ項目は onSelect に届き、details.insert() で別の内容を差し込むか、details.preventDefault() で既定の挿入を止められる。開閉は onOpenChange に reason とどの trigger かが届き、打った文字は onQueryChange で読める。挿入はネイティブの取り消し履歴に残る。",
    "候補はキャレットの位置にその場で描かれ、container を渡したときだけ別の要素に描く。ハイライト中の項目に data-highlighted、候補の枠に今の文字を表す data-trigger が付く。createTriggerMenuController() の open() は文字を打ち込んで開き、insert() はキャレットに差し込む。",
    "エージェントからは trigger-menu として見え、setOpen と insert を呼べる。同じ欄に Textarea と TriggerMenu があって名前が重なっても、setValue はそれを受け付ける Textarea のほうに届く。SDK のパーツと textFieldAdapter はすべて出していて、足したのは見た目だけ。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "@ で開き、TriggerMenuItem の label が文に挿入される。値は Textarea の onValueChange で受ける。",
      en: {
        title: "Basic",
        description:
          "Opens on @, and the TriggerMenuItem's label is inserted into the text. Read the value through the Textarea's onValueChange.",
      },
    },
    {
      id: "multiple-triggers",
      title: "複数のきっかけ",
      description:
        "triggers に候補をデータで渡し、state.trigger でグループ名を切り替える。",
      en: {
        title: "Multiple triggers",
        description:
          "Pass the items as data in triggers, and switch the group label with state.trigger.",
      },
    },
    {
      id: "commands",
      title: "引数付きのコマンド",
      description:
        "arguments で引数を順に尋ね、TriggerMenuHint で残りを示す。onSelect で結果を受ける。",
      en: {
        title: "Commands with arguments",
        description:
          "Ask for each argument in turn with arguments, show what is left with TriggerMenuHint, and receive the result in onSelect.",
      },
    },
    {
      id: "single-line",
      title: "1行の欄",
      description:
        "render に Input を渡す。autoHighlight を切ると、矢印キーで選ぶまで Enter で挿入されない。",
      en: {
        title: "Single line",
        description:
          "Pass an Input to render. With autoHighlight off, Enter inserts nothing until an arrow key highlights an item.",
      },
    },
  ],
  en: {
    usage: [
      "Opens suggestions when a character such as @ or / is typed in a field, and inserts the choice into the text. Use it for mentions, status tags and slash commands.",
      "Use Autocomplete or Combobox when the whole value comes from suggestions. TriggerMenu inserts in the middle of text. Put it inside TokenInput to keep the inserted item as a chip.",
      "Pass the characters and items to triggers, and wrap TriggerMenuInput in Field and FieldLabel. For a single-line field, pass an Input to render and turn off autoHighlight so Enter does not choose by accident.",
    ],
    sdk: [
      "Built on the UI SDK TriggerMenu. Focus stays in the field while Up and Down move the highlight, Enter or Tab chooses, and Escape closes. A match dismissed with Escape does not reopen as you keep typing; shortcut (Control+Space by default) reopens it.",
      "The chosen item arrives in onSelect, where details.insert() inserts something else and details.preventDefault() skips the default insertion. onOpenChange receives the reason and which trigger, and onQueryChange reports the typed text. An insertion stays in the native undo history.",
      "The list renders in place at the caret, and elsewhere only when container is passed. The highlighted item gets data-highlighted and the content gets data-trigger for the current character. On a controller from createTriggerMenuController(), open() types the trigger and opens, and insert() inserts at the caret.",
      "An agent sees it as a trigger-menu and can call setOpen and insert. When a Textarea and the TriggerMenu sit on the same field and share a name, setValue goes to the Textarea, the one that takes it. Every SDK part and textFieldAdapter is exposed; this library only adds the looks.",
    ],
  },
} satisfies ComponentGuide
