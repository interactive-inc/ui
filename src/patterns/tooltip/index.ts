import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "ボタンなどにマウスを乗せたりフォーカスしたりしたとき、短い説明を出す部品。アイコンだけのボタンの意味や、キーボードショートカットを伝えるのに使う。",
    "中身は1行ほどの文字だけにする。リンクやボタンを入れたいなら Popover、リンク先の下見なら HoverCard を使う。タッチでは出ないので、欠かせない情報はツールチップだけに置かない。",
    "トリガーそのものが操作になるので、buttonVariants で見た目を付け、アイコンだけなら aria-label で名前を付ける。説明だけのヘルプアイコンには toggleable を付け、押しても開けるようにする。",
  ],
  sdk: [
    "UI SDK の Tooltip の上に作っている。TooltipContent は tooltip の role を持ち、閉じているあいだも隠れたままページにあるので、フォーカスが届く前からトリガーの名前や説明になる。自分の名前がないトリガー（アイコンだけのボタンなど）には名前を、それ以外には説明を付ける。type に label か description を渡すと決め打ちできる。",
    "マウスを乗せて delay（既定は 600 ミリ秒）待つと開き、キーボードのフォーカスではすぐ開く。Provider は要らず、1つ開いた直後は次のツールチップがすぐ開いて data-instant が付く。Escape はフォーカスを残して閉じ、周りの Dialog やメニューは閉じない。トリガーを押すと閉じるが、closeOnPress を false にすると残り、toggleable を付けると押して開閉できる。",
    "Tooltip の shortcut は、TooltipShortcut の表示とトリガーの aria-keyshortcuts を付けるだけで、キーは登録しない。キーは registerShortcut か、DialogTrigger のようにキーを登録する部品の shortcut で登録する。ツールチップはフォーカスを動かさないので、中のリンクやボタンには届かない。",
    "エージェントからは tooltip として見え、名前はトリガーの名前から付き、呼べる操作は setOpen と press。onOpenChange の details.reason（trigger-hover、trigger-focus、escape-key など）と details.cancel() を使うと、文字が切れているときだけ開くといった制御ができる。この部品集では SDK の TooltipArrow を TooltipContent に組み込んでいて、別のパーツとしては出していない。createTooltipController() を使うと、1つのツールチップを多くのトリガーで共有できる。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description: "アイコンだけのボタンに、何をするかを短く添える。",
      en: {
        title: "Basic",
        description:
          "Add a short hint to an icon-only button about what it does.",
      },
    },
    {
      id: "sides",
      title: "出す位置",
      description: "side で上下左右を選ぶ。場所が足りなければ反対側に出る。",
      en: {
        title: "Sides",
        description:
          "Choose the side with side. It flips when there is no room.",
      },
    },
    {
      id: "with-shortcut",
      title: "ショートカットを添える",
      description:
        "Tooltip の shortcut でキーを伝え、TooltipShortcut で見せる。表記は OS に合わせて変わる。キーの処理は別に登録する。",
      en: {
        title: "With a shortcut",
        description:
          "Declare the keys with shortcut on Tooltip and show them with TooltipShortcut, which formats them for the platform. Register the key handler separately.",
      },
    },
    {
      id: "help",
      title: "ヘルプのアイコン",
      description:
        "toggleable を付けると押しても開くので、タッチでも説明を読める。",
      en: {
        title: "Help icon",
        description:
          "toggleable opens it on press too, so touch users can read the explanation.",
      },
    },
  ],
  en: {
    usage: [
      "A tooltip shows a short hint when a button or other control is hovered or focused. Use it to explain icon-only buttons or to show keyboard shortcuts.",
      "Keep it to about one line of text. Use Popover when you need links or buttons, and HoverCard to preview a link. It does not appear on touch, so do not keep essential information only in a tooltip.",
      "The trigger is the control itself, so style it with buttonVariants and name icon-only triggers with aria-label. Add toggleable to help icons whose only job is the hint, so a press opens it.",
    ],
    sdk: [
      "Built on the UI SDK Tooltip. TooltipContent has the tooltip role and stays in the page, hidden, while closed, so it names or describes its trigger before focus reaches it. It names a trigger with no name of its own (such as an icon-only button) and describes any other. Pass label or description as type to decide it yourself.",
      "It opens after the pointer rests for delay (600 ms by default) and at once on keyboard focus. No provider is needed: right after one tooltip was open, the next opens at once and gets data-instant. Escape closes it, keeps focus on the trigger, and does not close a Dialog or menu around it. Pressing the trigger closes it; closeOnPress set to false keeps it open, and toggleable lets a press open and close it.",
      "shortcut on Tooltip only shows the keys in TooltipShortcut and sets aria-keyshortcuts on the trigger; it does not register the keys. Register them with registerShortcut, or with the shortcut of a component that binds keys, such as DialogTrigger. A tooltip never moves focus, so links or buttons inside it cannot be reached.",
      "To an agent it is a tooltip, named by its trigger's name, with the actions setOpen and press. With details.reason in onOpenChange (trigger-hover, trigger-focus, escape-key and so on) and details.cancel(), you can for example open it only when the text is truncated. This registry builds the SDK's TooltipArrow into TooltipContent and does not export it as a separate part. createTooltipController() shares one tooltip across many triggers.",
    ],
  },
} satisfies ComponentGuide
