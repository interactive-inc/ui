import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "画面を複数の区画に分け、境目をドラッグやキーボードで動かして広さを変えられるようにする。一覧と詳細を並べる画面、メールの受信箱、エディタと結果の表示などに使う。",
    "広さを変える必要がなければ grid や flex で十分。ページ全体の左のナビゲーションなら Sidebar を使う。Resizable は使う人が自分で配分を決めたい作業画面のための部品。",
    "ResizablePanelGroup に高さを付け、ResizablePanel の間に ResizableHandle を置く。ハンドルには何を広げるかを aria-label で書く。広さは defaultSize と minSize で百分率で決め、入れ子にすると縦横を組み合わせられる。配分を外で使うときは layout と onLayoutChange で持つ。",
  ],
  sdk: [
    "`@ui-sdk/react/resizable` の上に作ってある。ResizablePanelGroup は SDK の Resizable にあたる。ResizableHandle に withHandle を付けると、つまみの印を描く。",
    "ハンドルにフォーカスして矢印キーを押すと step ずつ、Shift を足すと largeStep ずつ動き、Home と End で動かせる端まで移る。collapsible のパネルは、隣のハンドルで Enter を押すかダブルクリックすると畳まれ、もう一度で戻る。ハンドルの役割と aria-valuenow などは SDK が付けるので、aria-label で名前だけ渡す。",
    "各パーツに data-orientation、ドラッグ中のグループとハンドルに data-dragging、ポインターが載ったハンドルに data-hovering、畳まれたパネルに data-collapsed が付く。onLayoutChange はドラッグの毎フレームとキーごとに走り、details.reason（drag、step-key、collapse、resize、imperative）と details.cancel() が使える。保存には操作が終わったときに1度走る onLayoutCommit か、autoSaveId を使う。",
    'エージェントからは resizable という種類で見え、setLayout、collapse、expand を呼べる。setLayout は "30,70" のような文字列も受け取る。ほかの場所から動かすときは createResizableController() の setLayout、resize、collapse、expand を使う。',
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "一覧と詳細を左右に並べる。withHandle で境目につまみを出す。",
      en: {
        title: "Basic",
        description:
          "Place a list and its details side by side. withHandle shows a grip on the divider.",
      },
    },
    {
      id: "vertical",
      title: "上下に分ける",
      description:
        'orientation="vertical" で上下に積む。矢印キーも上下で動く。',
      en: {
        title: "Vertical",
        description:
          'Stack panels with orientation="vertical". Arrow keys move up and down.',
      },
    },
    {
      id: "nested",
      title: "入れ子にする",
      description:
        "パネルの中にもう1つの ResizablePanelGroup を置き、左右と上下を組み合わせる。",
      en: {
        title: "Nested",
        description:
          "Put another ResizablePanelGroup inside a panel to combine horizontal and vertical splits.",
      },
    },
    {
      id: "controlled",
      title: "配分を外で持つ",
      description:
        "layout と onLayoutChange で各パネルの割合を useState に持ち、画面に出す。",
      en: {
        title: "Controlled",
        description:
          "Keep each panel's share in useState with layout and onLayoutChange, and show it on screen.",
      },
    },
  ],
  en: {
    usage: [
      "Splits the screen into areas whose dividers can be dragged or moved with the keyboard to resize them. Use it for list-and-detail screens, mail inboxes, or an editor beside its output.",
      "If sizes never change, grid or flex is enough. For the page-wide left navigation, use Sidebar. Resizable is for work screens where people want to decide the split themselves.",
      "Give ResizablePanelGroup a height and place a ResizableHandle between ResizablePanel elements. Name each handle with aria-label to say what it resizes. Set sizes in percent with defaultSize and minSize, and nest groups to combine directions. Keep the split with layout and onLayoutChange when other parts need it.",
    ],
    sdk: [
      "Built on `@ui-sdk/react/resizable`. ResizablePanelGroup is the SDK Resizable. Adding withHandle to ResizableHandle draws a grip mark.",
      "With focus on a handle, arrow keys move it by step and Shift with an arrow key by largeStep, and Home and End move it as far as the panels allow. A collapsible panel collapses with Enter or a double-click on the handle beside it, and the same restores it. The SDK sets the handle's role, aria-valuenow and related attributes, so you only pass a name with aria-label.",
      "Every part gets data-orientation, the group and the handle being dragged get data-dragging, a handle under the pointer gets data-hovering, and a collapsed panel gets data-collapsed. onLayoutChange runs on every frame of a drag and on every key, with details.reason (drag, step-key, collapse, resize or imperative) and details.cancel(). To save, use onLayoutCommit, which runs once when the interaction ends, or autoSaveId.",
      'An agent sees it as the kind resizable and can call setLayout, collapse and expand. setLayout also accepts text such as "30,70". To drive it from elsewhere, use setLayout, resize, collapse and expand on createResizableController().',
    ],
  },
} satisfies ComponentGuide
