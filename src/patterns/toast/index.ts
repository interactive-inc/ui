import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Brief auto-dismissing result of an action. Persistent message -> Alert; decision -> Alert Dialog.",
    "One Toaster at app root; call toast() anywhere. Per-instance queue: createToaster() passed to Toaster toaster prop.",
    "Built on @ui-sdk/react/toast. ToastViewport = SDK ToastRegion; toast(), createToaster() re-exported. Top layer, no Portal; works above modal Dialog.",
    "Undo etc.: toast({ action: { label, onAction } }). Promise from onAction: data-pending, toast stays open until settled.",
    "onDismiss(details) in toast() options: details.reason timeout | close-press | swipe | escape-key | action | imperative; details.cancel() keeps it open.",
    "F6 focuses newest toast; Escape dismisses; timers pause on pointer/focus. Errors announced immediately, others after a pause.",
    "Toaster renders type icon, title, description, action, close. Not the cancel option: pass children to ToastViewport and place ToastClose yourself.",
    "ToastViewport has data-agent-hidden: toasts are excluded from agent snapshot and query.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "タイトルと説明を渡して通知を出す。",
      en: {
        title: "Basic",
        description: "Notification with title and description.",
      },
    },
    {
      id: "types",
      title: "種類",
      description:
        "success、info、warning、error で種類を選ぶと、アイコンが付く。",
      en: {
        title: "Types",
        description: "success, info, warning or error adds a matching icon.",
      },
    },
    {
      id: "with-action",
      title: "取り消しを添える",
      description: "action に文言と onAction を渡すと、通知にボタンが付く。",
      en: {
        title: "With an undo action",
        description: "action: { label, onAction } adds a button.",
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
          "Promise switches loading to success or failure on settle.",
      },
    },
  ],
} satisfies ComponentGuide
