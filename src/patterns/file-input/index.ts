import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "ファイルを選ぶ、ドロップする、貼り付けるの3通りで受け取り、フォームと一緒に送る入力。サーバーへのアップロードはアプリ側で行う。",
    "選ぶだけなら FileInputTrigger だけで足りる。複数のファイルを扱うときは FileInputDropzone と FileInputList を組み合わせ、受け取ったファイルを一覧で見せる。送信済みのファイルを並べるだけなら Attachment を使う。",
    "accept、maxSize、maxFiles で受け付ける条件を決め、外れたファイルは onReject で理由を伝える。フォームで送るときは name を必ず付け、Field と FieldLabel で包んで名前を付ける。",
  ],
  sdk: [
    "UI SDK の FileInput の上に作っている。ファイルの選択、ドロップ、貼り付けの受け取りと、accept、maxFiles、minSize、maxSize、validate による確認は SDK が行う。通らなかったファイルは値に入らず、理由（file-type、file-too-large、file-too-small、too-many-files、または validate が返した文字列）と一緒に onReject に届く。",
    "FileInputList は Tab で止まる場所が1つで、矢印キー、Home、End でファイルを移り、Delete か Backspace でフォーカス中のファイルを外す。追加、削除、拒否はスクリーンリーダーに読み上げられる。ドロップ中の見た目は FileInputDropzone の data-dragging、data-drag-accept、data-drag-reject で付ける。",
    "onValueChange の details には reason（picker、drop、paste、remove-press、reset、imperative）と added、removed、rejected が入り、details.cancel() で今の値を保てる。name を渡すとネイティブの file input を通して FormData に載り、フォームのリセットで defaultValue に戻る。Field で包むとトリガーがその入力になり、ラベルを押すと選択画面が開き、required は空のままの送信を止める。",
    "エージェントからは file-input として見え、名前は Field のラベルから付く。呼べる操作は setValue、addFiles、removeFile、clear、open。createFileInputController() を controller に渡すと、外のボタンから選択画面を開いたり、ファイルを足したり消したりできる。この部品集では、FileInputTrigger の既定の文言と、FileInputItem の既定の中身（ファイル名、大きさ、ファイル名入りの削除ボタン）を日本語で足している。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "ドロップ領域の中にボタンを置き、追加したファイルを下に一覧で出す。",
      en: {
        title: "Basic",
        description:
          "Put the trigger inside a drop zone and list the added files below it.",
      },
    },
    {
      id: "upload-button",
      title: "ボタンだけ",
      description:
        "1ファイルだけ選ぶなら、ボタンと選んだファイル名を並べるだけでよい。",
      en: {
        title: "Upload button",
        description:
          "For a single file, a button with the chosen file name beside it is enough.",
      },
    },
    {
      id: "limits",
      title: "形式と大きさの制限",
      description:
        "accept と maxSize で条件を決め、外れたファイルは onReject で理由を見せる。",
      en: {
        title: "Type and size limits",
        description:
          "Set rules with accept and maxSize, and explain rejected files from onReject.",
      },
    },
    {
      id: "controlled",
      title: "値を持つ",
      description:
        "value と onValueChange でファイルを状態に持ち、合計サイズなどを画面に出す。",
      en: {
        title: "Controlled",
        description:
          "Keep the files in state with value and onValueChange to show totals elsewhere on the screen.",
      },
    },
  ],
  en: {
    usage: [
      "A file input takes files by picking, dropping or pasting, and submits them with a form. Uploading them to a server is up to the app.",
      "A FileInputTrigger alone is enough when you only need to pick a file. For several files, combine FileInputDropzone and FileInputList to show what was added. Use Attachment to show files that are already uploaded.",
      "Set the rules with accept, maxSize and maxFiles, and explain rejected files in onReject. Always give it a name when a form submits it, and wrap it in Field and FieldLabel to label it.",
    ],
    sdk: [
      "Built on the UI SDK FileInput. The SDK takes files from the picker, drops and pastes, and checks them against accept, maxFiles, minSize, maxSize and validate. A file that fails never joins the value; it reaches onReject with its reasons (file-type, file-too-large, file-too-small, too-many-files, or the string your validate returned).",
      "FileInputList is a single tab stop: arrow keys, Home and End move between files, and Delete or Backspace removes the focused one. Added, removed and rejected files are announced to screen readers. Style a drag in progress with data-dragging, data-drag-accept and data-drag-reject on FileInputDropzone.",
      "The details of onValueChange carry reason (picker, drop, paste, remove-press, reset, imperative) plus added, removed and rejected, and details.cancel() keeps the current value. With name, the files go into FormData through a native file input, and a form reset returns to defaultValue. Inside a Field the trigger becomes the field's control, pressing the label opens the picker, and required blocks submitting with no file.",
      "To an agent it is a file-input, named by the Field label, with the actions setValue, addFiles, removeFile, clear and open. Pass createFileInputController() as controller to open the picker or add and remove files from a button elsewhere. This registry adds Japanese defaults: the text of FileInputTrigger and the content of FileInputItem (file name, size, and a remove button named after the file).",
    ],
  },
} satisfies ComponentGuide
