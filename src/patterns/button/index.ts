import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "1回きりの操作を実行するボタン。押したままの状態を持たせたいときは Toggle を使う。",
    "見た目は variant、大きさは size で選ぶ。ページの主要な操作は default を1つだけにし、ほかは outline や ghost にする。",
    "アイコンだけのボタンには aria-label で名前を付ける。リンクとして描きたいときは render に a 要素を渡す。",
  ],
  sdk: [
    "UI SDK の Button の上に作られている。onClick が Promise を返すと、終わるまで data-pending と aria-busy が付き、その間の押下は無視されるので、二重送信を防ぐ処理を自分で書かなくてよい。1秒たつと pendingAnnouncement（既定は Loading）がスクリーンリーダーに読まれ、失敗した理由は state.error に入る。",
    "onClick の第2引数は { source } で、keyboard、mouse、agent など何で押されたかが分かる。disabled は data-disabled で見た目を付け、focusableWhenDisabled を足すと aria-disabled のままフォーカスを受けられる。render に a 要素を渡してリンクにしても、無効と実行中の扱いは変わらない。",
    "@ui-sdk/react/agent からは button として見え、名前は文言か aria-label から付き、操作は press。data-agent-confirm に説明文を書いたボタンは、人の確認なしにはエージェントから押せない。",
    "この部品集では variant と size の見た目を足しただけで、props は SDK の Button のまま渡る。className には状態を受け取る関数も渡せる。",
  ],
  patterns: [
    {
      id: "variants",
      title: "見た目の種類",
      description:
        "操作の重さに合わせて variant を選ぶ。取り消せない操作は destructive。",
      en: {
        title: "Variants",
        description:
          "Pick a variant that matches the weight of the action. Use destructive for actions that cannot be undone.",
      },
    },
    {
      id: "sizes",
      title: "大きさ",
      description:
        "size でボタンの高さをそろえる。アイコンだけなら icon 系のサイズを使う。",
      en: {
        title: "Sizes",
        description:
          "Use size to align button heights. Use the icon sizes for icon-only buttons.",
      },
    },
    {
      id: "with-icon",
      title: "アイコン付き",
      description:
        "文言の前後に lucide のアイコンを置く。大きさはボタンが合わせる。",
      en: {
        title: "With an icon",
        description:
          "Place a lucide icon before or after the label with data-icon. The button sizes it.",
      },
    },
    {
      id: "icon-only",
      title: "アイコンだけ",
      description: "文言がないので aria-label で必ず名前を付ける。",
      en: {
        title: "Icon only",
        description:
          "There is no visible label, so always name it with aria-label.",
      },
    },
    {
      id: "as-link",
      title: "リンクとして描く",
      description:
        "render に a 要素を渡すと、見た目はボタンのままページ移動のリンクになる。",
      en: {
        title: "As a link",
        description:
          "Pass an a element to render to keep the button look while navigating like a link.",
      },
    },
  ],
  en: {
    usage: [
      "A button runs a one-off action. Use Toggle when the button needs to stay pressed.",
      "Choose the look with variant and the size with size. Keep a single default button for the main action of a page and use outline or ghost for the rest.",
      "Name icon-only buttons with aria-label. To render it as a link, pass an a element to render.",
    ],
    sdk: [
      "Built on the UI SDK Button. When onClick returns a Promise, the button gets data-pending and aria-busy until it settles and ignores further presses, so you do not write double-submit guards yourself. After one second pendingAnnouncement (Loading by default) is announced to screen readers, and a failure is kept in state.error.",
      "The second argument of onClick is { source }, which says how it was pressed: keyboard, mouse, agent and so on. Style disabled with data-disabled, and add focusableWhenDisabled to keep it focusable with aria-disabled. Passing an a element to render makes it a link with the same disabled and pending behavior.",
      "From @ui-sdk/react/agent it appears as a button, named by its text or aria-label, and its action is press. A button with a data-agent-confirm sentence cannot be pressed by an agent without a person's confirmation.",
      "This library only adds the variant and size looks; every other prop goes straight to the SDK Button. className also accepts a function of the state.",
    ],
  },
} satisfies ComponentGuide
