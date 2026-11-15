import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Pick/drop/paste files, submit with form. Upload is app's job. Already-uploaded files -> Attachment.",
    "Trigger alone for single file; multiple: FileInputDropzone + FileInputList.",
    "Rules: accept, minSize, maxSize, maxFiles, validate. Failed file never joins value; onReject gets reasons (file-type, file-too-large, file-too-small, too-many-files, or validate string).",
    "onValueChange(value, details): reason picker|drop|paste|remove-press|reset|imperative; added, removed, rejected; cancel().",
    "name puts files in FormData; form reset -> defaultValue. In Field: label press opens picker, required blocks empty submit.",
    "Styling on FileInputDropzone: data-dragging, data-drag-accept, data-drag-reject.",
    "Agent: kind file-input, named by Field label; actions setValue, addFiles, removeFile, clear, open. createFileInputController() as controller.",
    "Registry adds Japanese defaults: FileInputTrigger text, FileInputItem content (name, size, remove button named after file).",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "ドロップ領域の中にボタンを置き、追加したファイルを下に一覧で出す。",
      en: {
        title: "Basic",
        description: "Trigger in a drop zone, added files listed below.",
      },
    },
    {
      id: "upload-button",
      title: "ボタンだけ",
      description:
        "1ファイルだけ選ぶなら、ボタンと選んだファイル名を並べるだけでよい。",
      en: {
        title: "Upload button",
        description: "Single file: button with chosen file name beside it.",
      },
    },
    {
      id: "limits",
      title: "形式と大きさの制限",
      description:
        "accept と maxSize で条件を決め、外れたファイルは onReject で理由を見せる。",
      en: {
        title: "Type and size limits",
        description: "accept and maxSize rules; explain rejects in onReject.",
      },
    },
    {
      id: "controlled",
      title: "値を持つ",
      description:
        "value と onValueChange でファイルを状態に持ち、合計サイズなどを画面に出す。",
      en: {
        title: "Controlled",
        description: "Files in state via value and onValueChange.",
      },
    },
  ],
} satisfies ComponentGuide
