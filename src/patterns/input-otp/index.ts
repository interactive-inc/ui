import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "ワンタイムコードや招待コードなど、決まった桁数のコードを1文字ずつの枠で入力する部品。中身は1つの入力欄なので、貼り付けやスマホの自動入力がそのまま使える。",
    "桁数が決まっていない値は Input、パスワードは PasswordInput を使う。maxLength で桁数を、pattern で受け付ける文字を決め、枠は InputOTPSlot を桁数ぶん並べる。",
    'Field と FieldLabel で包んで名前を付ける。SMS やメールのコードには autoComplete="one-time-code" を付ける。全桁がそろったときの確認は onValueCommit で行う。',
  ],
  sdk: [
    "UI SDK の OTPInput の上に作られている。見えている枠は1つのネイティブ input の値を映しているだけなので、Tab で止まるのは1回で、選択、貼り付け、取り消し、自動入力はブラウザのものがそのまま働く。矢印キーと Home、End で枠を移り、123-456 のような貼り付けは区切りが除かれる。",
    "onValueChange の details.reason は input-change、paste、undo、redo、reset、imperative などで、details.cancel() で止められる。onValueCommit は全桁が埋まった変更のたびに呼ばれ、フォームのリセットでは呼ばれない。name を渡すと FormData に載り、桁が足りないコードは検証で止まる。",
    "全桁がそろうとルートに data-complete、入力中の枠に data-active、キャレットを描く枠に data-fake-caret が付く。createOTPInputController() で外から setValue、clear、focus を呼べる。",
    "エージェントからは otp-input として見え、setValue と clear を呼べるが、値は [redacted] としか読めない。この部品集では名前を InputOTP、InputOTPGroup、InputOTPSlot、InputOTPSeparator に変え、枠の中のキャレットと区切りの既定のアイコンを足している。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "6桁の数字。値は onValueChange で受ける。",
      en: {
        title: "Basic",
        description: "A six-digit code. Read the value with onValueChange.",
      },
    },
    {
      id: "with-separator",
      title: "区切りを入れる",
      description:
        "InputOTPGroup を分けて InputOTPSeparator を挟むと、桁が読みやすくなる。",
      en: {
        title: "With a separator",
        description:
          "Split the slots into InputOTPGroups with an InputOTPSeparator between them to make the code easier to read.",
      },
    },
    {
      id: "alphanumeric",
      title: "英数字のコード",
      description:
        "pattern を alphanumeric にすると英字も受け付ける。合わない文字は入らない。",
      en: {
        title: "Alphanumeric",
        description:
          "Set pattern to alphanumeric to accept letters too. Other characters are ignored.",
      },
    },
    {
      id: "verify-on-complete",
      title: "そろったら確かめる",
      description:
        "onValueCommit は全桁がそろったときに呼ばれる。結果に合わせて Field を invalid にする。",
      en: {
        title: "Verify when complete",
        description:
          "onValueCommit runs once every slot is filled. Mark the Field invalid based on the result.",
      },
    },
  ],
  en: {
    usage: [
      "Enters a fixed-length code, like a one-time or invite code, in one box per character. It is a single input underneath, so paste and mobile autofill work as they are.",
      "Use Input for values without a fixed length and PasswordInput for passwords. Set the length with maxLength and the accepted characters with pattern, and render one InputOTPSlot per character.",
      'Wrap it in Field and FieldLabel to name it. Add autoComplete="one-time-code" for codes sent by SMS or email. Check the code in onValueCommit, once every slot is filled.',
    ],
    sdk: [
      "Built on the UI SDK OTPInput. The visible boxes only mirror one native input, so it is a single tab stop and the browser's own selection, paste, undo and autofill keep working. Arrow keys, Home and End move between boxes, and a paste such as 123-456 drops the separators.",
      "details.reason in onValueChange is input-change, paste, undo, redo, reset, imperative and so on, and details.cancel() stops the change. onValueCommit runs on every change that fills all boxes, and not on a form reset. With name the code goes into FormData, and a partial code fails validation.",
      "The root gets data-complete when every box is filled, the box typing goes to gets data-active, and the box that draws the caret gets data-fake-caret. A controller from createOTPInputController() calls setValue, clear and focus from outside.",
      "An agent sees it as an otp-input and can call setValue and clear, but the value only reads as [redacted]. This library renames the parts to InputOTP, InputOTPGroup, InputOTPSlot and InputOTPSeparator, and adds the caret inside a box and a default separator icon.",
    ],
  },
} satisfies ComponentGuide
