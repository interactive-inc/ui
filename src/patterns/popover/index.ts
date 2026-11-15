import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "ボタンのそばに小さな箱を開き、補足や短い入力を見せる部品。メモの追加、表示の切り替え、詳しい説明など、その場で済む操作に使う。",
    "ページの他の部分は操作できたままなので、作業を止めて答えを求めるなら Dialog を使う。文字だけの短い説明なら Tooltip、リンク先の下見なら HoverCard が向く。",
    "PopoverTitle で題名を付けると箱の名前になる。出す位置は PopoverContent の side と align で決める。openOnHover を付けるとマウスを乗せても開くが、押しても開くのでキーボードやタッチでも使える。",
  ],
  sdk: [
    "UI SDK の Popover の上に作っている。位置決めは SDK が行い、場所が足りなければ反対側に回り込む。トップレイヤーに描くので Portal も Positioner も要らない。PopoverContent は dialog の role を持ち、PopoverTitle が名前、PopoverDescription が説明になる。",
    "開くとフォーカスは中の最初の要素に移り、閉じるとトリガーに戻る。既定では modal が false なので、Tab でページへ抜けられ、フォーカスが外へ出ると閉じる。マウスを乗せて開いたときはフォーカスを動かさない。modal を trap-focus や true にすると Tab を中に閉じ込める。",
    "onOpenChange の details.reason は trigger-press、trigger-hover、outside-press、escape-key、focus-out、close-press、shortcut、imperative などで、details.cancel() で止められる。書きかけがあるあいだは dismissible を false にし、onDismissAttempt で確かめる。見た目はトリガーの data-open、PopoverContent の data-side と data-align、CSS 変数の --transform-origin で付ける。",
    "エージェントからは popover として見え、名前は閉じているあいだはトリガー、開いているあいだは PopoverTitle から付く。呼べる操作は setOpen と press。PopoverTrigger の shortcut はキーを登録して開閉し、createPopoverController() は行ごとのトリガーと payload を1つの Popover につなげる。SDK の PopoverArrow は出しておらず、PopoverHeader はこの部品集で足したもの。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description: "題名と説明だけの補足を、ボタンのすぐ下に開く。",
      en: {
        title: "Basic",
        description:
          "Open a short note with a title and description right below the button.",
      },
    },
    {
      id: "placement",
      title: "出す位置",
      description:
        "side で上下左右、align で端のそろえ方を選ぶ。場所が足りなければ反対側に出る。",
      en: {
        title: "Placement",
        description:
          "Choose the side with side and the alignment with align. It flips when there is no room.",
      },
    },
    {
      id: "with-form",
      title: "短い入力",
      description:
        "入力欄を1つ置き、onValueChange で受けた値をそのまま画面に反映する。",
      en: {
        title: "Short form",
        description:
          "Place a single field and reflect the value from onValueChange on the screen right away.",
      },
    },
    {
      id: "open-on-hover",
      title: "マウスを乗せて開く",
      description:
        "openOnHover と delay で、乗せたときにも開くようにする。押しても開く。",
      en: {
        title: "Open on hover",
        description:
          "Use openOnHover and delay to open it on hover as well. Pressing still opens it.",
      },
    },
  ],
  en: {
    usage: [
      "A popover opens a small box next to a button for extra details or a short input. Use it for tasks that finish on the spot, like adding a note, switching a view or reading an explanation.",
      "The rest of the page stays usable, so use Dialog when you need to stop and ask for an answer. Use Tooltip for a short text hint and HoverCard to preview a link.",
      "A PopoverTitle names the box. Set its position with side and align on PopoverContent. openOnHover also opens it on hover, and pressing still works, so keyboard and touch users can open it too.",
    ],
    sdk: [
      "Built on the UI SDK Popover. The SDK positions it and flips it to the other side when there is no room. It renders in the top layer, so no Portal or Positioner is needed. PopoverContent has the dialog role, named by PopoverTitle and described by PopoverDescription.",
      "Opening moves focus to the first focusable element inside, and closing returns it to the trigger. modal is false by default, so Tab can leave into the page and focus leaving closes the popover. Opening on hover does not move focus. Set modal to trap-focus or true to keep Tab inside.",
      "details.reason in onOpenChange is trigger-press, trigger-hover, outside-press, escape-key, focus-out, close-press, shortcut, imperative and so on, and details.cancel() stops the change. While there is unsaved work, set dismissible to false and ask in onDismissAttempt. Style it with data-open on the trigger, data-side and data-align on PopoverContent, and the CSS variable --transform-origin.",
      "To an agent it is a popover, named by its trigger while closed and by PopoverTitle while open, with the actions setOpen and press. shortcut on PopoverTrigger registers keys that toggle it, and createPopoverController() connects one trigger per row, each with a payload, to a single Popover. The SDK's PopoverArrow is not exported, and PopoverHeader is added by this registry.",
    ],
  },
} satisfies ComponentGuide
