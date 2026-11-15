import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "文の中に、担当者や注文などを指すチップを埋め込める入力欄。値は文字列とトークンが交互に並んだ配列で、トークンは種類、アプリ用の値、表示用のラベルを持つ。",
    "ただの文章なら Textarea で足りる。@ で候補を出して文字として挿入するだけなら TriggerMenu を Textarea と組み合わせ、挿入したものをチップとして扱いたいときに TokenInput の中へ TriggerMenu を置く。",
    "Field と FieldLabel で包み、値は onValueChange で受ける。renderToken でチップの見た目を変えられ、submitShortcut と onSubmit でキー操作による送信を受けられる。",
  ],
  sdk: [
    "UI SDK の TokenInput の上に作られている。トークンは1つのかたまりとして動き、左右の矢印キーは1回で飛び越え、Backspace と Delete の扱いは tokenDeletion（whole、select、revert）で選ぶ。取り消しとやり直しの履歴は部品が持ち、入力はまとめて、貼り付けやトークンの変更は1手ずつ戻る。",
    "onValueChange の details には reason（input-change、paste、drop、cut、undo、redo、remove-press、item-press など）、inputType、消えたトークンの removed が入り、details.cancel() で止められる。name を渡すと、codec で文字列にした値（既定は [@label](type:value)）が FormData に載り、コピーと貼り付けでも同じ形でトークンが保たれる。",
    "createTokenInputController() で外から insert、updateToken、removeToken、undo、redo、clear、focus を呼べる。insert の resolve に Promise を渡すと、終わるまでトークンに data-pending が付く。",
    "エージェントからは token-input として見え、setValue、insert、removeToken、clear を呼べる。この部品集では、renderToken を渡さなくてもラベルと消すボタンの付いたチップを描くようにし、toText、fromText、toLabel、defaultCodec も出している。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "トークンを含む値を onValueChange で受ける。toLabel で読める文に戻せる。",
      en: {
        title: "Basic",
        description:
          "Read a value with tokens through onValueChange. toLabel turns it back into readable text.",
      },
    },
    {
      id: "with-mention",
      title: "メンション",
      description:
        "TriggerMenu を中に置き、@ で選んだ担当者をチップとして挿入する。",
      en: {
        title: "Mentions",
        description:
          "Put a TriggerMenu inside to insert the person chosen after @ as a chip.",
      },
    },
    {
      id: "custom-token",
      title: "チップの見た目",
      description:
        "renderToken で種類ごとにアイコンを変える。status が unresolved のチップは赤くなる。",
      en: {
        title: "Custom tokens",
        description:
          "Change the icon per type with renderToken. Tokens with the unresolved status turn red.",
      },
    },
    {
      id: "submit",
      title: "キーで送信",
      description:
        "submitShortcut を mod+enter にし、onSubmit で投稿して欄を空にする。",
      en: {
        title: "Submit shortcut",
        description:
          "Set submitShortcut to mod+enter, post in onSubmit and clear the field.",
      },
    },
  ],
  en: {
    usage: [
      "An input that embeds chips pointing at people, orders and the like inside the text. The value is an array of strings and tokens, and each token has a type, a value for the app and a label to show.",
      "Plain text only needs Textarea. To insert suggestions after @ as plain text, pair TriggerMenu with a Textarea. Put the TriggerMenu inside TokenInput when the inserted item should stay a chip.",
      "Wrap it in Field and FieldLabel and read the value with onValueChange. Change how chips look with renderToken, and send from the keyboard with submitShortcut and onSubmit.",
    ],
    sdk: [
      "Built on the UI SDK TokenInput. A token moves as one piece: Left and Right cross it in one press, and tokenDeletion (whole, select, revert) decides what Backspace and Delete do. The component keeps its own undo and redo history, grouping typing and treating pastes and token changes as single steps.",
      "details in onValueChange holds reason (input-change, paste, drop, cut, undo, redo, remove-press, item-press and so on), inputType, and removed, the tokens that went away; details.cancel() stops the change. With name, the codec text (by default [@label](type:value)) goes into FormData, and copy and paste keep tokens in the same format.",
      "A controller from createTokenInputController() calls insert, updateToken, removeToken, undo, redo, clear and focus from outside. Passing a Promise as resolve to insert keeps data-pending on the token until it settles.",
      "An agent sees it as a token-input and can call setValue, insert, removeToken and clear. This library draws a chip with its label and a remove button when no renderToken is passed, and also exposes toText, fromText, toLabel and defaultCodec.",
    ],
  },
} satisfies ComponentGuide
