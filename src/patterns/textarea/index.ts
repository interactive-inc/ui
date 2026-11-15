import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Multi-line text. One line -> Input; insert after @ or / -> TriggerMenu; chips in text -> TokenInput.",
    "Same Field, name, onValueChange(reason, cancel()) behavior as Input.",
    "autoResize grows with text; bound with CSS min-h/max-h.",
    'submitShortcut="enter" (Shift+Enter newline) | "mod+enter"; no submit while IME composing. onSubmit(value) receives it and skips form submit; without onSubmit the form submits with validation.',
    "Agent: kind textarea, setValue, clear. Controller createInputController().",
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
          "submitShortcut mod+enter: Enter adds a line, Cmd+Enter submits.",
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
} satisfies ComponentGuide
