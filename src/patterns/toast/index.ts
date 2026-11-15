import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "操作の結果を画面の隅に短く知らせ、しばらくすると自分で消える通知。保存や送信が終わったこと、失敗したことを、操作の流れを止めずに伝える。",
    "ページに残しておきたい知らせは Alert、判断を求めるなら Alert Dialog を使う。Toast は読み逃しても困らない内容に限り、取り消しのような次の一手は action で添える。",
    "Toaster はアプリのルートに1つだけ置き、どこからでも toast() を呼ぶ。ここの例は1つのページに並ぶので、それぞれ createToaster() で自分の列を作って Toaster の toaster に渡している。",
  ],
  sdk: [
    "@ui-sdk/react/toast の上に作っている。ToastViewport が SDK の ToastRegion にあたり、toast() と createToaster() は SDK のものをそのまま出している。通知はトップレイヤーに出るので Portal は要らず、モーダルの Dialog が開いていても上に見えて操作できる。",
    "F6 で最新の通知へフォーカスが移り、もう一度押すと元の場所へ戻る。Escape はフォーカスのある通知を閉じ、タイマーはポインターやフォーカスが中にあるあいだ止まる。読み上げは共有のライブリージョンで1回だけ行われ、エラーはすぐに、ほかは間を待って読まれる。",
    "閉じた理由は toast() の onDismiss で受け取る。details.reason は timeout、close-press、swipe、escape-key、action、imperative のいずれかで、details.cancel() を呼ぶと閉じずに残る。action.onAction が Promise を返すと、終わるまでボタンに data-pending が付き、通知は開いたままになる。",
    "Toaster は種類ごとのアイコン、タイトル、説明、action のボタン、閉じるボタンを並べて描く。toast() の cancel は描かないので、使うときは ToastViewport に children を渡して ToastClose を自分で並べる。ToastViewport には data-agent-hidden を付けてあり、エージェントの snapshot と query に通知は出ない。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "タイトルと説明を渡して通知を出す。",
      en: {
        title: "Basic",
        description: "Show a notification with a title and a description.",
      },
    },
    {
      id: "types",
      title: "種類",
      description:
        "success、info、warning、error で種類を選ぶと、アイコンが付く。",
      en: {
        title: "Types",
        description:
          "Pick success, info, warning or error to add a matching icon.",
      },
    },
    {
      id: "with-action",
      title: "取り消しを添える",
      description: "action に文言と onAction を渡すと、通知にボタンが付く。",
      en: {
        title: "With an undo action",
        description:
          "Pass a label and onAction to action to add a button to the toast.",
      },
    },
    {
      id: "promise",
      title: "処理の進み具合",
      description:
        "promise に渡すと、読み込み中から成功か失敗の表示へ切り替わる。",
      en: {
        title: "Promise",
        description:
          "Pass a promise to switch from loading to success or failure when it settles.",
      },
    },
  ],
  en: {
    usage: [
      "A notification that briefly reports the result of an action in a corner of the screen and goes away on its own. Use it to say that a save or send finished, or failed, without stopping the flow.",
      "Use Alert for messages that should stay on the page, and Alert Dialog when you need a decision. Keep toasts to things people can safely miss, and add the next step, such as undo, with action.",
      "Place one Toaster at the root of your app and call toast() from anywhere. The examples here share one page, so each makes its own queue with createToaster() and passes it to the Toaster's toaster prop.",
    ],
    sdk: [
      "Built on @ui-sdk/react/toast. ToastViewport is the SDK's ToastRegion, and toast() and createToaster() are re-exported as they are. Toasts show in the top layer, so no Portal is needed and they stay visible and usable above a modal Dialog.",
      "F6 moves focus to the newest toast, and pressing it again returns focus to where it was. Escape dismisses the focused toast, and timers pause while the pointer or focus is inside the region. Each toast is announced once through shared live regions: errors right away, other types after a pause.",
      "Read why a toast closed with onDismiss in the toast() options. details.reason is one of timeout, close-press, swipe, escape-key, action or imperative, and calling details.cancel() keeps the toast open. When action.onAction returns a Promise, the button gets data-pending and the toast stays open until it settles.",
      "Toaster renders the icon for the toast's type, the title, the description, the action button and a close button. It does not render the cancel option of toast(); to use it, pass children to ToastViewport and place a ToastClose yourself. ToastViewport carries data-agent-hidden, so toasts are left out of an agent's snapshot and query.",
    ],
  },
} satisfies ComponentGuide
