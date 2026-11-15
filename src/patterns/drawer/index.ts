import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "画面の端から引き出し、指でなぞって閉じられるパネル。スマートフォンでの絞り込み、並び替え、ちょっとした確認など、手元で済ませたい操作に向く。",
    "Sheet と見た目は近いが、Drawer はスワイプで動かせて、snapPoints で途中の高さに止められる。パソコンで一覧と並べて見せるだけなら Sheet や Dialog で足りる。",
    "DrawerTitle で題名を付け、showSwipeHandle で引き出せることを見せる。閉じるボタンは自動で入らないので、DrawerClose をフッターに置く。どのボタンで閉じたかは value が onOpenChange に届く。",
  ],
  sdk: [
    "UI SDK の Drawer の上に作っている。フォーカスの移し方と閉じ方は Dialog と同じで、そこにドラッグ、スナップポイント、ばねの動きが加わる。トップレイヤーに描くので Portal は要らない。動きを減らす設定のときは、スライドの代わりにフェードする。",
    "onOpenChange の details.reason には、スワイプで閉じたときの swipe が加わり、details.returnValue には閉じた DrawerClose の value が入る。snapPoints を渡すと、止まった位置が onSnapPointChange に理由（swipe、content-resize、imperative など）と一緒に届く。dismissible を false にすると Escape、外側の押下、スワイプでは閉じず、試みが onDismissAttempt に届く。",
    "見た目は DrawerContent の data-side、data-snap-point、data-expanded、data-dragging と、CSS 変数の --drawer-progress、--drawer-stack で付ける。位置の translate と背景の不透明度は SDK が動かすので、自分では触らない。",
    "エージェントからは drawer として見え、名前は閉じているあいだはトリガー、開いているあいだは DrawerTitle から付く。呼べる操作は setOpen、setSnapPoint、press で、createDrawerController() でも開閉とスナップポイントの移動ができる。この部品集の DrawerSwipeHandle は飾り（aria-hidden）で、キーボードでスナップポイントを移る SDK の DrawerHandle と、背後の要素を連動させる DrawerOutlet は出していない。背景の DrawerOverlay は modal が true のときだけ入る。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description: "下から引き出し、上のつまみで動かせることを見せる。",
      en: {
        title: "Basic",
        description:
          "Pull it up from the bottom and show the swipe handle so people know it moves.",
      },
    },
    {
      id: "side",
      title: "横から出す",
      description: "side を right にすると、右から出る縦長のパネルになる。",
      en: {
        title: "From the side",
        description:
          "Set side to right for a tall panel that slides in from the right.",
      },
    },
    {
      id: "snap-points",
      title: "途中の高さで止める",
      description:
        "snapPoints で半分と全体の2段階に止め、地図アプリのように使えるようにする。",
      en: {
        title: "Snap points",
        description:
          "Let it rest at half and full height with snapPoints, like a maps app.",
      },
    },
    {
      id: "with-filters",
      title: "絞り込み",
      description:
        "チェックボックスで条件を選び、決定ボタンで閉じたときに一覧へ反映する。",
      en: {
        title: "Filters",
        description:
          "Pick conditions with checkboxes and apply them to the list when the apply button closes it.",
      },
    },
  ],
  en: {
    usage: [
      "A drawer is a panel pulled in from an edge of the screen that can be swiped closed. It suits quick tasks on phones, like filtering, sorting or a short confirmation.",
      "It looks like Sheet, but a Drawer follows swipes and can rest at in-between heights with snapPoints. On desktop, Sheet or Dialog is enough when you only need it next to a list.",
      "Give it a DrawerTitle and use showSwipeHandle to show it can be dragged. No close button is added for you, so put a DrawerClose in the footer. The value of the button that closed it reaches onOpenChange.",
    ],
    sdk: [
      "Built on the UI SDK Drawer. Focus and dismissal work as in Dialog, with dragging, snap points and spring motion on top. It renders in the top layer, so no Portal is needed. With reduced motion it fades instead of sliding.",
      "details.reason in onOpenChange gains swipe for a swipe that closed it, and details.returnValue holds the value of the DrawerClose that closed it. With snapPoints, onSnapPointChange reports where it came to rest and why (swipe, content-resize, imperative and so on). With dismissible false, Escape, an outside press and a swipe leave it open and the attempt reaches onDismissAttempt.",
      "Style it with data-side, data-snap-point, data-expanded and data-dragging on DrawerContent, and the CSS variables --drawer-progress and --drawer-stack. The SDK drives the content's translate and the backdrop's opacity, so leave those alone.",
      "To an agent it is a drawer, named by its trigger while closed and by DrawerTitle while open, with the actions setOpen, setSnapPoint and press; createDrawerController() opens, closes and moves between snap points too. This registry's DrawerSwipeHandle is decoration (aria-hidden). The SDK's DrawerHandle, which moves between snap points from the keyboard, and DrawerOutlet, which makes an element behind follow the sheet, are not exported. DrawerOverlay is rendered only when modal is true.",
    ],
  },
} satisfies ComponentGuide
