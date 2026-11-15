import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Stay-pressed button for instant two-way choices. Form on/off -> Switch; submit-time choice -> Checkbox; pick one of several -> ToggleGroup.",
    "State: pressed / onPressedChange(pressed, details); details: reason (press | imperative), source, cancel(). Style with data-pressed, data-disabled.",
    "Keep label constant across states; aria-label when icon-only. Icons go directly as children (no ToggleIcon).",
    "Submits no form value.",
    "Controller: createToggleController() -> setPressed, toggle, focus.",
    "Agent: kind toggle, reads pressed, action setPressed. Props variant, size.",
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
          "The outline variant keeps its shape visible while not pressed.",
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
          "Disabled but focusable with focusableWhenDisabled; explain why nearby.",
      },
    },
  ],
} satisfies ComponentGuide
