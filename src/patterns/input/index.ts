import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "1行の文字を入力する欄。名前、メールアドレス、電話番号など短い値に使う。",
    "複数行の文章は Textarea、数値は NumberInput、パスワードは PasswordInput、候補から選ばせたいなら Autocomplete や Combobox を使う。前後にアイコンやボタンを置くなら InputGroup で包む。",
    "必ず Field と FieldLabel で包んで名前を付ける。値は onValueChange で受け取り、type と autoComplete で入力の種類をブラウザに伝える。エラーは FieldError で出す。",
  ],
  sdk: [
    'UI SDK の Input の上に作られたネイティブの input。Field の中に置くとラベル、説明、エラーが自動で結び付き、name がなければ Field の name で送信される。required や type="email" などブラウザの検証もそのまま効く。',
    "onValueChange の第2引数 details の reason で、入力（input-change）、フォームのリセット（reset）、controller からの変更（imperative）を見分けられる。details.cancel() を呼ぶと変更が取り消され、文字とキャレットの位置が元に戻るので、入力の制限に使える。",
    "状態は data-filled、data-disabled、data-readonly、data-required で見た目を付ける。createInputController() の controller で、外から getValue、setValue、clear、focus を呼べる。",
    "エージェントからは input として見え、名前は FieldLabel か aria-label から付き、setValue と clear を呼べる。その変更も onValueChange に source が agent として届く。SDK の InputGroup と InputClear は出しておらず、前後の飾りはこの部品集の InputGroup を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "Field と FieldLabel で包み、onValueChange で値を受ける。",
      en: {
        title: "Basic",
        description:
          "Wrap it in Field and FieldLabel, and read the value with onValueChange.",
      },
    },
    {
      id: "types",
      title: "入力の種類",
      description:
        "type と autoComplete を指定すると、スマホのキーボードや自動入力が合う。",
      en: {
        title: "Input types",
        description:
          "Set type and autoComplete so mobile keyboards and autofill match the value.",
      },
    },
    {
      id: "states",
      title: "状態",
      description:
        "読み取り専用、無効、エラーの見た目。無効とエラーは Field に指定する。",
      en: {
        title: "States",
        description:
          "Read-only, disabled and invalid. Set disabled and invalid on the Field.",
      },
    },
    {
      id: "validation",
      title: "送信時の検証",
      description:
        "required や type の検証に、FieldError の match で問題ごとの文言を出す。",
      en: {
        title: "Validation on submit",
        description:
          "Show a message for each problem from required or type with FieldError's match.",
      },
    },
  ],
  en: {
    usage: [
      "A field for a single line of text. Use it for short values such as names, email addresses and phone numbers.",
      "Use Textarea for several lines, NumberInput for numbers, PasswordInput for passwords, and Autocomplete or Combobox for picking from suggestions. Wrap it in InputGroup to add icons or buttons around it.",
      "Always wrap it in Field and FieldLabel to give it a name. Read the value with onValueChange, and tell the browser what it holds with type and autoComplete. Show errors with FieldError.",
    ],
    sdk: [
      'A native input built on the UI SDK Input. Inside a Field, the label, description and error connect on their own, and it submits under the Field\'s name when it has none. Browser validation such as required and type="email" works as is.',
      "The reason in the details argument of onValueChange tells typing (input-change), a form reset (reset) and a controller change (imperative) apart. Calling details.cancel() rejects the change and restores the text and caret, which is how you filter what is typed.",
      "Style states with data-filled, data-disabled, data-readonly and data-required. A controller from createInputController() lets you call getValue, setValue, clear and focus from outside.",
      "An agent sees it as an input, named by FieldLabel or aria-label, and can call setValue and clear. Those changes also reach onValueChange with source set to agent. The SDK's InputGroup and InputClear are not exposed; use this library's InputGroup for extras around the field.",
    ],
  },
} satisfies ComponentGuide
