import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "右クリックや長押しで、その場所に合った操作を開くメニュー。ファイルの一覧、カード、表の行など、対象を指して操作するのに慣れた画面で使う。",
    "右クリックは見つけにくいので、同じ操作をボタンや DropdownMenu でも出せるようにしておく。ボタンから開くなら DropdownMenu、アプリの上部に並べるなら Menubar を使う。",
    "ContextMenuTrigger には tabIndex と aria-label を付け、キーボードからも Shift+F10 で開けるようにする。項目の受け方は DropdownMenu と同じで、value と onAction、onCheckedChange、onValueChange を使う。",
  ],
  sdk: [
    "UI SDK の Menu を土台に、トリガーだけ MenuContextTrigger に替えている。右クリックと長押しで、その位置に開く。領域に tabIndex があれば、Shift+F10 とコンテキストメニューキーでも開ける。開いたまま同じ領域の別の場所を右クリックすると、位置だけ移る。ContextMenuTrigger に disabled を付けると、その領域ではブラウザ自身のメニューが出る。",
    "開いたあとのキー操作、閉じ方、onAction、onCheckedChange、onValueChange、状態の data 属性は DropdownMenu と同じ。常にポップオーバーとして出て、presentation を渡してもシートにはならない。",
    "JSX で書いた ContextMenuItem の shortcut は、キーの表示と aria-keyshortcuts を付けるだけで、キーは登録しない。キーが登録されるのは、ContextMenu の items にデータ（MenuData）を渡したメニューだけ。",
    "エージェントからは menu として見え、呼べる操作は setOpen と press。SDK は、ボタンから開くメニューにはトリガーの名前を付けるが、右クリックの領域の名前は開いたメニューに付けない。この部品集では ContextMenuTrigger の aria-label や aria-labelledby を ContextMenuContent に渡し、開いているあいだもメニューに名前が残るようにしている。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "カードを右クリックすると操作が並び、選んだ項目を onAction で受ける。",
      en: {
        title: "Basic",
        description:
          "Right-click a card to list actions and receive the chosen one in onAction.",
      },
    },
    {
      id: "checkbox-radio",
      title: "切り替えと選択",
      description:
        "ContextMenuCheckboxItem でオンとオフ、ContextMenuRadioGroup で1つを選ぶ。",
      en: {
        title: "Checkbox and radio items",
        description:
          "Toggle with ContextMenuCheckboxItem and pick one with ContextMenuRadioGroup.",
      },
    },
    {
      id: "submenu",
      title: "サブメニュー",
      description: "移動先のように数が多い項目は ContextMenuSub にまとめる。",
      en: {
        title: "Submenu",
        description:
          "Group long lists, like move destinations, in a ContextMenuSub.",
      },
    },
    {
      id: "destructive",
      title: "取り消せない操作",
      description:
        "削除は最後に区切って置き、variant を destructive にして data-agent-confirm を付ける。",
      en: {
        title: "Destructive",
        description:
          "Put delete last after a separator, make it destructive and add data-agent-confirm.",
      },
    },
  ],
  en: {
    usage: [
      "A context menu opens actions for the spot that was right-clicked or long-pressed. Use it on screens where people point at things to act on them, like file lists, cards or table rows.",
      "Right-click is hard to discover, so offer the same actions through a button or a DropdownMenu too. Use DropdownMenu to open from a button and Menubar for a row of menus at the top of an app.",
      "Give ContextMenuTrigger a tabIndex and an aria-label so keyboard users can open it with Shift+F10. Items work like DropdownMenu: use value with onAction, onCheckedChange and onValueChange.",
    ],
    sdk: [
      "Built on the UI SDK Menu, with MenuContextTrigger in place of the trigger. A right-click or a long press opens it at that point. If the area has a tabIndex, Shift+F10 and the context-menu key open it too. Right-clicking elsewhere in the same area while it is open only repositions it. disabled on ContextMenuTrigger leaves the browser's own menu for that area.",
      "Once open, the keys, dismissal, onAction, onCheckedChange, onValueChange and the state data attributes are the same as DropdownMenu. It always presents as a popover and never becomes a sheet, even with presentation.",
      "On a ContextMenuItem written in JSX, shortcut only displays the keys and sets aria-keyshortcuts; it does not register them. Keys are registered only for a menu whose items are passed as data (MenuData) to items on ContextMenu.",
      "To an agent it is a menu, with the actions setOpen and press. The SDK names a menu opened from a button after its trigger, but does not pass the name of a right-click area to the open menu. This registry passes the aria-label or aria-labelledby of ContextMenuTrigger to ContextMenuContent, so the menu keeps its name while open.",
    ],
  },
} satisfies ComponentGuide
