import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "サイトやアプリの上部に、主なページへのリンクを横に並べる。項目の下にパネルを開いて、関連するページをまとめて見せることもできる。",
    "画面の左に常に出しておくなら Sidebar、操作の一覧を出すなら DropdownMenu や Menubar を使う。NavigationMenu はページを移るためのリンクの集まりで、パネルの中身もリンクにする。",
    "NavigationMenuList に NavigationMenuItem を並べる。リンクだけの項目は NavigationMenuLink、パネルを持つ項目は NavigationMenuTrigger と NavigationMenuContent を組にする。いまのページには current を付ける。NavigationMenu には aria-label で名前を付ける。",
  ],
  sdk: [
    "`@ui-sdk/react/navigation-menu` の上に作ってある。NavigationMenu は中に NavigationMenuViewport を置いた状態で出しているので、開いたパネルを収める枠を自分で書かなくてよく、パネルの寄せ方は NavigationMenu の align で決める。SDK の NavigationMenuLinkIcon は出していない。",
    "トリガーはポインターを載せるか押すと開き、Enter と Space でも開く。左右の矢印（縦並びでは上下）で項目の間を、下矢印でパネルの中へ、パネルの中では矢印と Home、End でリンクの間を移る。Escape はパネルを閉じてトリガーへフォーカスを戻し、フォーカスがメニューの外へ出ても閉じる。パネルはトップレイヤーに出るので Portal は要らず、親の overflow で切れない。",
    '開いている項目とトリガーに data-open、閉じているものに data-closed、current を付けたリンクに data-current と aria-current="page" が付く。開いている項目は value と onValueChange で持て、details.reason で trigger-hover、trigger-press、escape-key、outside-press、focus-out、link-press などを見分けて、details.cancel() で止められる。ホバーで開かせたくないときは openOnHover を false にする。',
    "エージェントからは navigation-menu という種類で見え、setValue で項目のパネルを開き、close で閉じる。ほかの場所から開閉するときは createNavigationMenuController() の setValue、close、focus を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "リンクを並べる",
      description:
        "パネルを持たないリンクだけを並べ、いまのページに current を付ける。",
      en: {
        title: "Links",
        description:
          "Line up plain links without panels and mark the current page with current.",
      },
    },
    {
      id: "with-submenu",
      title: "パネルを開く",
      description:
        "NavigationMenuTrigger の下に NavigationMenuContent を開き、関連するページをまとめる。",
      en: {
        title: "With submenu",
        description:
          "Open NavigationMenuContent under a NavigationMenuTrigger to group related pages.",
      },
    },
    {
      id: "with-description",
      title: "説明付きのパネル",
      description:
        "パネルのリンクにアイコンと短い説明を添えて、行き先を選びやすくする。",
      en: {
        title: "With descriptions",
        description:
          "Add an icon and a short description to each panel link so people can pick a destination easily.",
      },
    },
    {
      id: "click-only",
      title: "押して開く",
      description:
        "openOnHover={false} でホバーでは開かず、押したときだけパネルを開く。開いている項目は value と onValueChange で持つ。",
      en: {
        title: "Click to open",
        description:
          "With openOnHover={false}, panels open only on press, not on hover. Keep the open item with value and onValueChange.",
      },
    },
  ],
  en: {
    usage: [
      "Lines up links to the main pages across the top of a site or app. An item can also open a panel that groups related pages.",
      "For navigation that stays on the left, use Sidebar. For a list of actions, use DropdownMenu or Menubar. NavigationMenu is a set of links for moving between pages, and its panels hold links too.",
      "Place NavigationMenuItem elements in NavigationMenuList. Use NavigationMenuLink for link-only items, and pair NavigationMenuTrigger with NavigationMenuContent for items with a panel. Mark the current page with current, and name NavigationMenu with aria-label.",
    ],
    sdk: [
      "Built on `@ui-sdk/react/navigation-menu`. NavigationMenu already renders a NavigationMenuViewport inside, so you do not write the frame that holds the open panel, and you set how panels line up with align on NavigationMenu. The SDK part NavigationMenuLinkIcon is not exported.",
      "A trigger opens when the pointer rests on it or when it is pressed, and with Enter or Space. Left and Right Arrow (Up and Down in a vertical menu) move between items, Down Arrow moves into the panel, and inside a panel the arrow keys, Home and End move between links. Escape closes the panel and returns focus to its trigger, and the panel also closes when focus leaves the menu. Panels show in the top layer, so no Portal is needed and an ancestor's overflow does not clip them.",
      'The open item and its trigger get data-open, closed ones get data-closed, and a link with current gets data-current and aria-current="page". Keep the open item with value and onValueChange; details.reason tells apart trigger-hover, trigger-press, escape-key, outside-press, focus-out, link-press and others, and details.cancel() stops the change. Set openOnHover to false to stop opening on hover.',
      "An agent sees it as the kind navigation-menu, opens an item's panel with setValue and closes it with close. To open or close it from elsewhere, use setValue, close and focus on createNavigationMenuController().",
    ],
  },
} satisfies ComponentGuide
