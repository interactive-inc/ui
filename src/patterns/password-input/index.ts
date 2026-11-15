import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "パスワードを入力する欄。伏せ字と表示を切り替えるボタンが付き、入力ミスを確かめられる。",
    'ふつうの Input に type="password" を付けるのと違い、表示の切り替え、フォーム送信やページを離れたときに伏せ字へ戻す処理まで受け持つ。ワンタイムコードは InputOTP を使う。',
    "autoComplete にはログインなら current-password、登録や変更なら new-password を指定し、パスワード管理ツールが正しく動くようにする。1つの画面に欄が2つあるときは、表示ボタンの aria-label をそれぞれ書き分ける。",
  ],
  sdk: [
    "UI SDK の PasswordInput の上に作られている。表示ボタンは input の type を password と text で切り替え、aria-pressed と aria-controls が付く。ポインターで押してもフォーカスとキャレットは入力欄に残り、フォームの送信、リセット、ページを離れるときには伏せ字へ戻る。",
    "onVisibleChange の details.reason は toggle-press、form-submit、reset、page-hide、imperative のどれかで、details.cancel() で止められる。値は onValueChange で受け、name、required、disabled などフォーム向けの props はルートの PasswordInput に渡す。",
    "表示中は data-visible、Caps Lock が入っている間は data-capslock がすべてのパーツに付くので、警告を CSS だけで出せる。createPasswordInputController() で外から setValue、clear、setVisible、toggleVisible、focus を呼べる。",
    "エージェントからは password-input として見え、setValue、clear、setVisible、toggleVisible を呼べるが、値は表示中でも [redacted] としか読めない。この部品集では表示ボタンに既定の名前（パスワードを表示）と、状態で変わる目のアイコンを足している。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "PasswordInputControl と PasswordInputToggle を並べる。ログインには current-password。",
      en: {
        title: "Basic",
        description:
          "Line up PasswordInputControl and PasswordInputToggle. Use current-password for sign-in.",
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
          "Use new-password and show how many characters are missing from the value in onValueChange.",
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
          "Compare the two values and mark the Field invalid when they differ. Give each toggle its own name.",
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
  en: {
    usage: [
      "A field for passwords, with a button that shows and hides the text so people can check what they typed.",
      'Unlike an Input with type="password", it handles the show toggle and hides the text again when the form submits or the page is left. Use InputOTP for one-time codes.',
      "Set autoComplete to current-password for sign-in and new-password for sign-up or changes, so password managers work. When a screen has two fields, give each toggle its own aria-label.",
    ],
    sdk: [
      "Built on the UI SDK PasswordInput. The toggle switches the input's type between password and text and carries aria-pressed and aria-controls. A pointer press keeps focus and the caret in the field, and the text is hidden again on form submit, reset and page hide.",
      "details.reason in onVisibleChange is toggle-press, form-submit, reset, page-hide or imperative, and details.cancel() stops the change. Read the value with onValueChange, and put form props such as name, required and disabled on the root PasswordInput.",
      "Every part gets data-visible while the text is shown and data-capslock while Caps Lock is on, so a warning needs only CSS. A controller from createPasswordInputController() calls setValue, clear, setVisible, toggleVisible and focus from outside.",
      "An agent sees it as a password-input and can call setValue, clear, setVisible and toggleVisible, but the value always reads as [redacted], even while shown. This library adds a default name for the toggle (パスワードを表示) and eye icons that follow the state.",
    ],
  },
} satisfies ComponentGuide
