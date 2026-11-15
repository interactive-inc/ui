import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "複数行の文章を入力する欄。問い合わせの本文、配送メモ、商品の説明など、改行を含む文に使う。",
    "1行で足りる値は Input を使う。@ のメンションや / のコマンドで候補を挿入したいときは TriggerMenu、文中にチップを埋め込むなら TokenInput を使う。",
    "Field と FieldLabel で包み、値は onValueChange で受ける。autoResize で文に合わせて高さが変わり、submitShortcut と onSubmit でキー操作による送信を受けられる。",
  ],
  sdk: [
    "UI SDK の Textarea の上に作られたネイティブの textarea。Field との結び付き、name での送信、onValueChange の reason と details.cancel() は Input と同じ。",
    "autoResize は文に合わせて高さを変え、CSS の min-height と max-height が上限と下限になる。submitShortcut を付けると、enter なら Enter で送信して Shift+Enter で改行、mod+enter なら Command か Control+Enter で送信する。日本語などの変換中は送信しない。",
    "onSubmit を渡すとショートカットで値を受け取り、フォームは送信されない。渡さなければ、欄が入っているフォームが required などの検証を通って送信される。",
    "エージェントからは textarea として見え、setValue と clear を呼べる。controller は Input と同じ createInputController() で作る。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "値を onValueChange で受け、文字数を FieldDescription に出す。",
      en: {
        title: "Basic",
        description:
          "Read the value with onValueChange and show the character count in FieldDescription.",
      },
    },
    {
      id: "auto-resize",
      title: "高さを文に合わせる",
      description: "autoResize を付け、max-h で上限を決める。",
      en: {
        title: "Auto resize",
        description: "Turn on autoResize and cap the height with max-h.",
      },
    },
    {
      id: "submit-shortcut",
      title: "キーで送信",
      description:
        "submitShortcut を mod+enter にすると、Enter は改行のまま ⌘ + Enter で onSubmit が呼ばれる。",
      en: {
        title: "Submit shortcut",
        description:
          "With submitShortcut set to mod+enter, Enter still adds a line and Cmd + Enter calls onSubmit.",
      },
    },
    {
      id: "states",
      title: "エラーと無効",
      description: "Field に invalid や disabled を付けて状態を見せる。",
      en: {
        title: "Invalid and disabled",
        description: "Set invalid or disabled on the Field to show the state.",
      },
    },
  ],
  en: {
    usage: [
      "A field for text that spans several lines. Use it for inquiry messages, delivery notes and product descriptions.",
      "Use Input when one line is enough. Use TriggerMenu to insert suggestions after @ or /, and TokenInput to embed chips in the text.",
      "Wrap it in Field and FieldLabel and read the value with onValueChange. autoResize grows it with the text, and submitShortcut with onSubmit sends from the keyboard.",
    ],
    sdk: [
      "A native textarea built on the UI SDK Textarea. The Field connection, submission under name, and onValueChange with reason and details.cancel() work the same as Input.",
      "autoResize grows and shrinks it with the text, bounded by CSS min-height and max-height. With submitShortcut, enter submits on Enter and adds a line on Shift+Enter, and mod+enter submits on Command or Control+Enter. Nothing submits while an input method is composing.",
      "Pass onSubmit to receive the value on the shortcut without submitting the form. Without it, the surrounding form submits through its usual validation such as required.",
      "An agent sees it as a textarea and can call setValue and clear. Create its controller with createInputController(), the same one Input uses.",
    ],
  },
} satisfies ComponentGuide
