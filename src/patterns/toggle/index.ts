import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "押すたびにオンとオフが切り替わり、押した状態が残るボタン。お気に入りや通知、文字の太字のように、その場で効く2択に使う。",
    "フォームで保存する設定の On/Off は Switch、送信まで確定しない選択は Checkbox が向く。複数の Toggle から1つを選ぶなら ToggleGroup を使う。",
    "状態は pressed と onPressedChange で持つ。押した状態でも文言が変わらないよう、ラベルは操作の名前にする。アイコンだけなら aria-label を付ける。",
  ],
  sdk: [
    "UI SDK の Toggle の上に作られている。ネイティブの button に aria-pressed が付き、Enter と Space で切り替わる。押した状態は data-pressed、無効は data-disabled で見た目を付ける。",
    "onPressedChange の第2引数 details で、理由 reason（press か imperative）と source が分かり、details.cancel() で切り替えを止められる。Toggle はフォームに値を送らないので、送信したい選択には Checkbox か Radio を使う。",
    "createToggleController() で作った controller を渡すと、ショートカットなど外から setPressed、toggle、focus を呼べる。エージェントからは toggle として見え、pressed を読み、setPressed で切り替える。",
    "この部品集では variant と size を足している。SDK の ToggleIcon は出していないので、アイコンはそのまま子に置く。ToggleGroup は別の部品 toggle-group にある。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "pressed と onPressedChange で押した状態を持つ。",
      en: {
        title: "Basic",
        description: "Hold the pressed state with pressed and onPressedChange.",
      },
    },
    {
      id: "outline",
      title: "枠線と大きさ",
      description:
        "variant を outline にすると押していないときも形が見える。size で高さを変える。",
      en: {
        title: "Outline and sizes",
        description:
          "The outline variant keeps its shape visible while not pressed. Change the height with size.",
      },
    },
    {
      id: "icon-only",
      title: "アイコンだけ",
      description:
        "文字の書式のように意味が通じるアイコンは aria-label で名前を付ける。",
      en: {
        title: "Icon only",
        description:
          "For well-known icons such as text formatting, name each toggle with aria-label.",
      },
    },
    {
      id: "disabled",
      title: "使えないとき",
      description:
        "focusableWhenDisabled でフォーカスを残し、使えない理由を近くに書く。",
      en: {
        title: "Disabled",
        description:
          "Keep it focusable with focusableWhenDisabled and explain nearby why it cannot be used.",
      },
    },
  ],
  en: {
    usage: [
      "A button that switches on and off with each press and stays pressed. Use it for two-way choices that take effect immediately, like favorites, notifications or bold text.",
      "For an on/off setting saved with a form, use Switch. For a choice confirmed only on submit, use Checkbox. To pick one of several toggles, use ToggleGroup.",
      "Hold the state with pressed and onPressedChange. Name it after the action so the label does not change when pressed. Add aria-label when it shows only an icon.",
    ],
    sdk: [
      "Built on the UI SDK Toggle. It is a native button with aria-pressed that switches on Enter and Space. Style the pressed state with data-pressed and the disabled state with data-disabled.",
      "The details argument of onPressedChange carries reason (press or imperative) and source, and details.cancel() stops the change. A Toggle submits no form value, so use Checkbox or Radio for choices a form should send.",
      "Pass a controller from createToggleController() to call setPressed, toggle and focus from outside, such as a keyboard shortcut. An agent sees it as a toggle, reads pressed, and switches it with setPressed.",
      "This library adds variant and size. The SDK's ToggleIcon is not exposed, so put icons directly as children. ToggleGroup lives in the separate toggle-group component.",
    ],
  },
} satisfies ComponentGuide
