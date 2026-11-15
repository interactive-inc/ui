import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Names a control; press toggles checkbox or focuses input. Inside forms use Field + FieldLabel; Label for checkbox/radio text and settings-row switches.",
    "Wrap control in Label or link htmlFor/id. Non-input controls (Slider, RadioGroup) named via aria-labelledby automatically; control's own aria-label wins.",
    "Disabled control: press does nothing. render swaps element, keeps behavior.",
    "Never listed by agents; control carries the name.",
  ],
  patterns: [
    {
      id: "wrap-control",
      title: "部品を包む",
      description:
        "Label の中にチェックボックスと文を置くと、文を押しても切り替わる。",
      en: {
        title: "Wrapping a control",
        description: "Wrap checkbox and text in Label so text toggles it.",
      },
    },
    {
      id: "html-for",
      title: "離れた部品と結ぶ",
      description: "文字と部品が離れているときは htmlFor と id で結ぶ。",
      en: {
        title: "Linking with htmlFor",
        description: "Link distant text and control with htmlFor and id.",
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
} satisfies ComponentGuide
