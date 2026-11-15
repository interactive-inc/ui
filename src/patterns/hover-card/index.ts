import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "リンクにマウスを乗せたりフォーカスしたりすると、行き先の中身を小さなカードで下見させる部品。担当者のプロフィールや注文の概要など、開く前に確かめたい情報に使う。",
    "トリガーはリンクなので href を必ず渡す。カードの中身は見るだけにし、ボタンや入力は置かない。押して操作させたいなら Popover、短い文字の説明なら Tooltip を使う。",
    "タッチ操作では開かないので、カードにしかない情報を置かない。開くまでの待ち時間は delay、閉じるまでは closeDelay で調整する。",
  ],
  sdk: [
    "UI SDK の HoverCard の上に作っている。トリガーは a 要素のままで、押せばリンクとして移動する。マウスを乗せるかキーボードでフォーカスして delay（既定は 600 ミリ秒）待つと開き、離れて closeDelay（既定は 300 ミリ秒）たつと閉じる。リンクとカードのあいだの隙間は、閉じずに渡れる。",
    "カードが開いているあいだは Tab で中へ入れ、Escape はフォーカスをリンクに残したまま閉じる。タッチではタップがそのままリンクの移動になり、カードは開かない。disabled を付けるとただのリンクになる。トップレイヤーに描くので Portal は要らない。",
    "onOpenChange の details.reason は trigger-hover、trigger-focus、focus-out、escape-key、outside-press、imperative などで、details.cancel() で止められる。見た目はトリガーの data-open と HoverCardContent の data-side で付ける。createHoverCardController() を使うと、一覧のたくさんのリンクが payload を渡して1枚のカードを共有できる。",
    "エージェントからは hover-card として見え、名前はリンクの文字から付き、呼べる操作は setOpen と press。SDK の HoverCardArrow は出していない。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description: "注文番号のリンクに、注文の概要を下見させる。",
      en: {
        title: "Basic",
        description: "Preview an order's summary from its order number link.",
      },
    },
    {
      id: "profile",
      title: "人のプロフィール",
      description:
        "担当者の名前のリンクに、アバターと所属、連絡先をまとめたカードを出す。",
      en: {
        title: "Profile",
        description:
          "Show a card with an avatar, team and contact details on a person's name link.",
      },
    },
    {
      id: "delay",
      title: "開くまでの時間",
      description:
        "delay と closeDelay で、うっかり開いたり閉じたりしないように待ち時間を決める。",
      en: {
        title: "Delay",
        description:
          "Set wait times with delay and closeDelay so it does not open or close by accident.",
      },
    },
  ],
  en: {
    usage: [
      "A hover card previews where a link goes in a small card when the link is hovered or focused. Use it for things worth checking before opening, like a teammate's profile or an order summary.",
      "The trigger is a link, so always pass href. Keep the card read-only, with no buttons or inputs. Use Popover when people need to press and act, and Tooltip for a short text hint.",
      "It does not open on touch, so do not put information only in the card. Tune the wait before opening with delay and before closing with closeDelay.",
    ],
    sdk: [
      "Built on the UI SDK HoverCard. The trigger stays an a element, and pressing it follows the link. The card opens after the pointer rests on the link or keyboard focus stays on it for delay (600 ms by default), and closes closeDelay (300 ms by default) after the pointer leaves. The pointer can cross the gap between the link and the card without closing it.",
      "While the card is open, Tab moves into it, and Escape closes it and leaves focus on the link. On touch a tap just follows the link and the card does not open. disabled leaves a plain link. It renders in the top layer, so no Portal is needed.",
      "details.reason in onOpenChange is trigger-hover, trigger-focus, focus-out, escape-key, outside-press, imperative and so on, and details.cancel() stops the change. Style it with data-open on the trigger and data-side on HoverCardContent. With createHoverCardController(), many links in a list can pass a payload and share one card.",
      "To an agent it is a hover-card, named by the link's text, with the actions setOpen and press. The SDK's HoverCardArrow is not exported.",
    ],
  },
} satisfies ComponentGuide
