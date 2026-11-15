import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "入力欄の前後や上下にアイコン、文字、ボタンを置き、ひとつの枠に見せる部品。検索欄の虫めがね、金額の単位、コピーボタン付きの欄などに使う。",
    "中身は InputGroupInput か InputGroupTextarea にし、飾りは InputGroupAddon に入れる。align で inline-start、inline-end、block-start、block-end の位置を選ぶ。枠の余白を押すと入力欄にフォーカスが移る。",
    "ButtonGroup は独立したボタンを並べるのに対し、InputGroup は入力欄が主役。外側を Field と FieldLabel で包んで欄に名前を付け、InputGroupButton にも aria-label を付ける。",
  ],
  sdk: [
    'InputGroup の枠は role="group" を付けたただの div、InputGroupAddon もただの div で、UI SDK の InputGroup は使っていない。枠そのものは操作する対象ではないので、エージェントの一覧に名前のない項目が増えないようにしている。',
    "中の InputGroupInput、InputGroupTextarea、InputGroupButton は、それぞれ SDK の Input、Textarea、Button を包んだもの。onValueChange、Field との結び付き、実行中の表示、エージェントからの setValue や press は、単体で使うときと同じに働く。",
    "SDK の InputClear にあたる消去ボタンは持たない。消去ボタンを置くときは InputGroupButton を置き、値を自分で空にする。",
  ],
  patterns: [
    {
      id: "with-icon",
      title: "アイコンを添える",
      description: "InputGroupAddon にアイコンを置いて、欄の用途を示す。",
      en: {
        title: "With an icon",
        description:
          "Put an icon in InputGroupAddon to show what the field is for.",
      },
    },
    {
      id: "with-text",
      title: "前後に文字を添える",
      description: "InputGroupText で URL の前半や通貨記号、単位を表示する。",
      en: {
        title: "With text",
        description:
          "Show a URL prefix, a currency symbol or a unit with InputGroupText.",
      },
    },
    {
      id: "with-button",
      title: "ボタンを置く",
      description: "InputGroupButton でコピーや再発行の操作を欄の中に置く。",
      en: {
        title: "With buttons",
        description:
          "Place actions such as copy or regenerate inside the field with InputGroupButton.",
      },
    },
    {
      id: "with-textarea",
      title: "複数行の欄",
      description:
        "InputGroupTextarea の下に block-end の Addon を置き、文字数と送信ボタンを並べる。",
      en: {
        title: "With a textarea",
        description:
          "Add a block-end addon under InputGroupTextarea for a character count and a send button.",
      },
    },
  ],
  en: {
    usage: [
      "Places icons, text or buttons around an input so they read as one field. Use it for a search icon, a unit next to an amount, or a field with a copy button.",
      "Use InputGroupInput or InputGroupTextarea inside, and put the extras in InputGroupAddon. Choose inline-start, inline-end, block-start or block-end with align. Pressing the padding focuses the input.",
      "ButtonGroup lines up independent buttons, while InputGroup centers on the input. Wrap it in Field and FieldLabel to name the field, and give each InputGroupButton an aria-label.",
    ],
    sdk: [
      'The InputGroup frame is a plain div with role="group" and InputGroupAddon is a plain div; the UI SDK InputGroup is not used. The frame is not something to operate, so it adds no unnamed entry to what an agent lists.',
      "InputGroupInput, InputGroupTextarea and InputGroupButton wrap the SDK Input, Textarea and Button. onValueChange, the Field connection, the pending state, and an agent's setValue or press all work as they do on the standalone components.",
      "There is no clear button like the SDK's InputClear. To add one, place an InputGroupButton and empty the value yourself.",
    ],
  },
} satisfies ComponentGuide
