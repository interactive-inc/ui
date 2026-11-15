import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Password with show/hide toggle; hides again on submit, reset, page hide. One-time codes -> InputOTP.",
    "autoComplete: current-password (sign-in) | new-password (sign-up/change). Two fields on a screen: distinct aria-label on each toggle (default パスワードを表示).",
    "onVisibleChange(visible, details): reason toggle-press | form-submit | reset | page-hide | imperative; cancel(). Value via onValueChange; name, required, disabled on root.",
    "Data on all parts: data-visible, data-capslock (CSS-only caps warning).",
    "Controller createPasswordInputController(): setValue, clear, setVisible, toggleVisible, focus.",
    "Agent: kind password-input, setValue, clear, setVisible, toggleVisible; value always [redacted].",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "PasswordInputControl と PasswordInputToggle を並べる。ログインには current-password。",
      en: {
        title: "Basic",
        description: "Line up PasswordInputControl and PasswordInputToggle.",
      },
    },
    {
      id: "new-password",
      title: "新しいパスワード",
      description:
        "new-password を指定し、onValueChange で受けた値から足りない文字数を示す。",
      en: {
        title: "New password",
        description:
          "new-password with a remaining-characters hint from onValueChange.",
      },
    },
    {
      id: "confirm",
      title: "確認の入力",
      description:
        "2つの値を比べ、違えば Field を invalid にする。表示ボタンの名前は欄ごとに変える。",
      en: {
        title: "Confirmation",
        description:
          "Compare the two values and mark the Field invalid when they differ.",
      },
    },
    {
      id: "controlled-visibility",
      title: "表示をほかの部品で切り替える",
      description:
        "visible と onVisibleChange で表示を持ち、スイッチから切り替える。",
      en: {
        title: "Controlled visibility",
        description:
          "Hold visibility with visible and onVisibleChange, and switch it from a Switch.",
      },
    },
  ],
} satisfies ComponentGuide
