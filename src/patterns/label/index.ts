import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "部品に名前を付ける文字。押すと結び付いた部品が反応し、チェックボックスなら切り替わり、入力欄ならフォーカスが移る。",
    "フォームの入力欄には Field と FieldLabel を使う。Label は Field の外で、チェックボックスやラジオボタンを文と並べるときや、設定の行で文字とスイッチを結ぶときに使う。",
    "部品を Label で包むか、htmlFor と id で結ぶ。入力欄でない部品にも aria-labelledby で名前が届くので、自分で aria 属性を足す必要はない。",
  ],
  sdk: [
    "UI SDK の Label の上に作られたネイティブの label。ブラウザの label が届かない Slider や RadioGroup のような部品にも aria-labelledby で名前を付け、押したときはチェックを切り替えるか、フォーカスを移す。部品に aria-label か aria-labelledby があればそちらが優先される。",
    "ダブルクリックで文字が選択されないので、user-select の指定はなくてよい。無効な部品のラベルを押しても何も起きない。render に要素を渡して label 以外で描いても、名前付けと押したときの動きは残る。",
    "エージェントの一覧には Label は出ず、名前を付けた先の部品がその文言を名前として持つ。",
  ],
  patterns: [
    {
      id: "wrap-control",
      title: "部品を包む",
      description:
        "Label の中にチェックボックスと文を置くと、文を押しても切り替わる。",
      en: {
        title: "Wrapping a control",
        description:
          "Put a checkbox and its text inside Label so pressing the text toggles it.",
      },
    },
    {
      id: "html-for",
      title: "離れた部品と結ぶ",
      description: "文字と部品が離れているときは htmlFor と id で結ぶ。",
      en: {
        title: "Linking with htmlFor",
        description:
          "When the text and the control are apart, link them with htmlFor and id.",
      },
    },
    {
      id: "radio-options",
      title: "ラジオボタンの選択肢",
      description: "選択肢ごとに Label で包み、文を押しても選べるようにする。",
      en: {
        title: "Radio options",
        description:
          "Wrap each option in a Label so pressing the text selects it.",
      },
    },
  ],
  en: {
    usage: [
      "Text that names a control. Pressing it acts on the linked control: a checkbox toggles, and an input gets focus.",
      "Use Field and FieldLabel for form inputs. Use Label outside a Field, to put text next to checkboxes and radio buttons or to tie text to a switch in a settings row.",
      "Wrap the control in Label, or link them with htmlFor and id. Controls that are not inputs get their name through aria-labelledby, so there is no need to add aria attributes yourself.",
    ],
    sdk: [
      "A native label built on the UI SDK Label. It also names controls a browser label cannot reach, such as a Slider or RadioGroup, through aria-labelledby, and a press toggles the control or moves focus to it. A control's own aria-label or aria-labelledby wins.",
      "A double click does not select its text, so no user-select rule is needed. Pressing the label of a disabled control does nothing. Passing an element to render draws something other than a label while keeping the naming and the press behavior.",
      "A Label never appears in what an agent lists; the control it names carries its text as the name.",
    ],
  },
} satisfies ComponentGuide
