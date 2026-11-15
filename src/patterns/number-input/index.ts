import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "数値を入力する欄。数量、価格、割引率、在庫数のように、範囲と刻みが決まった数に使う。ボタンや矢印キーで増減でき、値は number か null で受け取る。",
    "決まった選択肢から選ぶなら Select、範囲の中の大まかな値なら Slider が向く。電話番号や郵便番号のように計算しない数字の並びは Input を使う。",
    "min、max、step で範囲と刻みを決め、format で通貨や割合として表示する。送信される値は書式なしの数のまま。保存はやり取りが終わったときに呼ばれる onValueCommit で行う。",
  ],
  sdk: [
    "UI SDK の NumberInput の上に作られている。上下の矢印キーで step、Shift 付きや Page Up と Page Down で largeStep、Alt 付きで smallStep だけ動き、Home と End で min と max へ飛ぶ。増減ボタンは押し続けると繰り返し、Tab の順には入らない。",
    "onValueChange はやり取りの途中の値を、onValueCommit は入力の確定やボタンを離したあとの値を受け取る。details.reason は input-change、input-commit、step-key、increment-press、decrement-press、wheel、scrub などで、details.cancel() で止められる。確定のときに値は範囲に収められ、刻みにそろえられる。",
    "name を渡すと、隠しの input が書式なしの数を FormData に載せる。状態は data-disabled、data-readonly、data-required、data-scrubbing で、限界に達した増減ボタンにも data-disabled が付く。",
    "エージェントからは number-input として見え、setValue、increment、decrement を呼べる。この部品集では増減ボタンに既定の名前（減らす、増やす）とアイコンを足していて、ドラッグで値を変える NumberInputScrubArea も含め SDK のパーツをすべて出している。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "増減ボタン付き。min と max の外には出ない。ボタンには何を増減するか名前を付ける。",
      en: {
        title: "Basic",
        description:
          "With step buttons, clamped to min and max. Name the buttons after what they change.",
      },
    },
    {
      id: "currency",
      title: "金額",
      description:
        "format で円表示にする。largeStep で Shift を押したときの刻みを決める。",
      en: {
        title: "Currency",
        description:
          "Show yen with format. largeStep sets the step while Shift is held.",
      },
    },
    {
      id: "percent",
      title: "割合",
      description: "percent の書式では 10% を 0.1 として扱う。",
      en: {
        title: "Percent",
        description: "With the percent format, 10% is handled as 0.1.",
      },
    },
    {
      id: "commit",
      title: "確定したら保存",
      description:
        "onValueCommit は入力の確定やボタンを離したときに1回だけ呼ばれる。",
      en: {
        title: "Save on commit",
        description:
          "onValueCommit runs once, when typing is committed or a button is released.",
      },
    },
  ],
  en: {
    usage: [
      "A field for numbers. Use it for values with a set range and step, like quantity, price, discount rate or stock. Buttons and arrow keys step it, and the value is a number or null.",
      "Use Select to pick from fixed options and Slider for a rough value in a range. Use Input for digits you never calculate with, like phone numbers or postal codes.",
      "Set the range and step with min, max and step, and show currency or percent with format. The submitted value stays an unformatted number. Save in onValueCommit, which runs when an interaction ends.",
    ],
    sdk: [
      "Built on the UI SDK NumberInput. Up and Down step by step, Shift or Page Up and Page Down by largeStep, Alt by smallStep, and Home and End jump to min and max. The step buttons repeat while held and stay out of the tab order.",
      "onValueChange receives values during an interaction, and onValueCommit the value once typing is committed or a button is released. details.reason is input-change, input-commit, step-key, increment-press, decrement-press, wheel, scrub and so on, and details.cancel() stops the change. On commit the value is clamped to the range and snapped to the step.",
      "With name, a hidden input puts the unformatted number into FormData. States are data-disabled, data-readonly, data-required and data-scrubbing, and a step button at its bound also gets data-disabled.",
      "An agent sees it as a number-input and can call setValue, increment and decrement. This library adds default names (減らす, 増やす) and icons to the step buttons, and exposes every SDK part, including NumberInputScrubArea for dragging the value.",
    ],
  },
} satisfies ComponentGuide
