import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "画面の上に重ねて、今の作業を止めずに別の内容を見せたり入力させたりする部品。住所の編集や詳細の確認など、ページを移るほどではない作業に使う。",
    "取り消せない操作の確認には AlertDialog を使う。画面の端から出して一覧と並べて見たいなら Sheet、スマートフォンで下から引き出すなら Drawer を選ぶ。",
    "トリガーは buttonVariants で見た目を付け、DialogTitle で必ず題名を付ける。右上の閉じるボタンは自動で入るので、フッターに同じ名前のボタンを重ねない。どのボタンで閉じたかは DialogClose の value が onOpenChange の details.returnValue に届く。",
  ],
  sdk: [
    "UI SDK の Dialog の上に作っている。ブラウザのトップレイヤーにその場で描くので Portal は要らない。開くとフォーカスが中へ移り、モーダルのあいだは Tab が中で回り、ページの他の部分は操作もスクロールもできない。Escape か外側の押下で閉じ、フォーカスはトリガーに戻る。行き先は DialogContent の initialFocus と finalFocus で変えられる。",
    "開閉は open と onOpenChange で受ける。details.reason は trigger-press、close-press、outside-press、escape-key、action、shortcut、imperative などで、details.cancel() で止められ、details.returnValue には閉じた DialogClose の value が入る。dismissible を false にして断った操作は onDismissAttempt に届く。見た目は data-open と data-closed、アニメーションは data-starting-style と data-ending-style で付ける。",
    "DialogClose の action が Promise を返すと、終わるまで開いたままになり data-pending が付く。method が dialog のフォームは送信で閉じ、送信ボタンの value が returnValue になる。DialogTrigger の shortcut はキーを登録し、ページのどこからでも開ける。createDialogController() を使うと、離れたトリガーや行ごとの payload を1つの Dialog につなげ、controller.open() は閉じたときに理由と returnValue で解決する Promise を返す。",
    "エージェントからは dialog として見え、名前は閉じているあいだはトリガー、開いているあいだは DialogTitle から付く。呼べる操作は setOpen と press で、press にボタンの文言を渡すと、閉じていれば開いてから中のそのボタンを押す。この部品集では SDK の DialogBackdrop を DialogOverlay の名前で DialogContent に入れ、右上の閉じるボタン（showCloseButton）、DialogHeader、DialogFooter を足している。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "題名と説明、内容、閉じるボタンだけのいちばん小さいダイアログ。",
      en: {
        title: "Basic",
        description:
          "The smallest dialog: a title, a description, the content and a close button.",
      },
    },
    {
      id: "with-form",
      title: "フォームを入れる",
      description:
        "入力中の値は下書きとして持ち、保存のボタンで閉じたときだけ反映する。",
      en: {
        title: "With a form",
        description:
          "Keep the input as a draft and apply it only when the dialog closes from the save button.",
      },
    },
    {
      id: "scrollable",
      title: "長い内容",
      description:
        "本文に高さの上限を付けて中だけスクロールさせ、題名とボタンは見えたままにする。",
      en: {
        title: "Long content",
        description:
          "Cap the body height and scroll inside it, so the title and buttons stay in view.",
      },
    },
    {
      id: "unsaved-changes",
      title: "書きかけを守る",
      description:
        "書きかけがあるあいだは dismissible を false にし、Esc や外側の押下で閉じないようにする。",
      en: {
        title: "Guard unsaved changes",
        description:
          "Set dismissible to false while there is a draft, so Escape or an outside press does not close it.",
      },
    },
  ],
  en: {
    usage: [
      "A dialog shows content or a form on top of the page without leaving the current task. Use it for work that does not deserve a page of its own, like editing an address or checking details.",
      "Use AlertDialog to confirm actions that cannot be undone. Choose Sheet to slide in from an edge next to a list, and Drawer to pull up from the bottom on phones.",
      "Style the trigger with buttonVariants and always give it a DialogTitle. The close button in the corner is added for you, so do not add another button with the same name in the footer. The value of the DialogClose that closed it reaches details.returnValue in onOpenChange.",
    ],
    sdk: [
      "Built on the UI SDK Dialog. It renders in place in the browser's top layer, so no Portal is needed. Opening moves focus inside; while modal, Tab wraps inside and the rest of the page is inert and does not scroll. Escape or an outside press closes it and focus returns to the trigger. Change the targets with initialFocus and finalFocus on DialogContent.",
      "Read open and close through open and onOpenChange. details.reason is trigger-press, close-press, outside-press, escape-key, action, shortcut, imperative and so on; details.cancel() stops the change, and details.returnValue holds the value of the DialogClose that closed it. With dismissible false, refused dismissals reach onDismissAttempt. Style states with data-open and data-closed, and transitions with data-starting-style and data-ending-style.",
      "When the action of a DialogClose returns a Promise, the dialog stays open until it settles and the part gets data-pending. A form with method dialog closes it on submit, and the submit button's value becomes returnValue. shortcut on DialogTrigger registers the keys and opens the dialog from anywhere on the page. createDialogController() connects triggers elsewhere, each with a payload, to one Dialog, and controller.open() returns a Promise that resolves on close with the reason and returnValue.",
      "To an agent it is a dialog, named by its trigger while closed and by DialogTitle while open. Its actions are setOpen and press; press with a button's text opens the dialog if needed and presses that button inside it. This registry places the SDK's DialogBackdrop inside DialogContent under the name DialogOverlay, and adds the corner close button (showCloseButton), DialogHeader and DialogFooter.",
    ],
  },
} satisfies ComponentGuide
