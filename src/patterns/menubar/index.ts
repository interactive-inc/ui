import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "「ファイル」「編集」「表示」のように、いくつものメニューを横一列に並べたバー。表計算や文書の編集画面など、操作が多いアプリの上部に置く。",
    "メニューが1つだけなら DropdownMenu で足りる。ページ間の移動に使うなら NavigationMenu を選ぶ。Menubar は左右の矢印キーでメニューを渡り歩けるので、キーボードで素早く操作できる。",
    "Menubar には aria-label で名前を付け、MenubarMenu ごとに MenubarTrigger と MenubarContent を置く。項目の受け方は DropdownMenu と同じで、MenubarMenu の onAction、MenubarCheckboxItem の onCheckedChange、MenubarRadioGroup の onValueChange を使う。",
  ],
  sdk: [
    "UI SDK の Menubar の中に Menu を並べて作っている。バー全体で Tab の止まる場所は1つで、左右の矢印でトリガーを移り、下矢印、Enter、Space で最初の項目に、上矢印で最後の項目にフォーカスして開く。メニューが開いているあいだは、左右の矢印や別のトリガーへのポインタの移動で隣のメニューに切り替わる。Home、End、文字のタイプでもトリガーを選べる。",
    "orientation を vertical にすると上下の矢印で移る。loop を false にすると端で止まり、Menubar の disabled は Tab の止まる場所を残したまま全部のトリガーを無効にする。バーにはどれかのメニューが開いているあいだ data-open が付き、トリガーには自分のメニューが開いているあいだだけ付く。別のメニューに取って代わられたメニューは、onOpenChange の reason が submenu-switch で閉じる。",
    "JSX で書いた MenubarItem の shortcut は、キーの表示と aria-keyshortcuts を付けるだけで、キーは登録しない。キーが登録されるのは、MenubarMenu の items にデータ（MenuData）を渡したメニューだけで、その場合は閉じていても項目のショートカットが走る。",
    "エージェントからは、バーが menubar（呼べる操作は close）、中のメニューがそれぞれ menu（setOpen と press）として見える。バーの名前は aria-label、メニューの名前はトリガーから付く。createMenubarController() の focus() でバーにフォーカスを移し、close() で開いているメニューを閉じられる。SDK に Menubar 専用のトリガーや項目はなく、MenubarMenu や MenubarItem はこの部品集の DropdownMenu のパーツに見た目を付け直したもの。メニューは常にポップオーバーで出る。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "メニューを横に並べ、選ばれた項目をメニューごとの onAction で受ける。",
      en: {
        title: "Basic",
        description:
          "Line up menus side by side and receive the chosen item in each menu's onAction.",
      },
    },
    {
      id: "with-shortcuts",
      title: "ショートカットと区切り",
      description:
        "MenubarItem の shortcut でキーを添え、MenubarSeparator で項目のまとまりを分ける。",
      en: {
        title: "Shortcuts and separators",
        description:
          "Add key hints with shortcut on MenubarItem and split groups of items with MenubarSeparator.",
      },
    },
    {
      id: "checkbox-radio",
      title: "表示の切り替え",
      description:
        "表示メニューで、オンとオフを MenubarCheckboxItem、並び順を MenubarRadioGroup で選ぶ。",
      en: {
        title: "View options",
        description:
          "In a view menu, toggle with MenubarCheckboxItem and pick the sort order with MenubarRadioGroup.",
      },
    },
    {
      id: "submenu",
      title: "サブメニュー",
      description: "MenubarSub で関連する項目を横に開く。",
      en: {
        title: "Submenu",
        description: "Open related items to the side with MenubarSub.",
      },
    },
  ],
  en: {
    usage: [
      "A menubar lines up several menus in a row, like File, Edit and View. Place it at the top of apps with many actions, like spreadsheet or document editors.",
      "A single menu only needs DropdownMenu. Choose NavigationMenu to move between pages. A Menubar lets people move between menus with the left and right arrow keys, so it is fast from the keyboard.",
      "Name the Menubar with aria-label and give every MenubarMenu a MenubarTrigger and a MenubarContent. Items work like DropdownMenu: use onAction on MenubarMenu, onCheckedChange on MenubarCheckboxItem and onValueChange on MenubarRadioGroup.",
    ],
    sdk: [
      "Built by placing Menus inside the UI SDK Menubar. The whole bar is one tab stop: Left and Right move between triggers, ArrowDown, Enter or Space opens a menu with focus on its first item, and ArrowUp on its last. While a menu is open, Left and Right or moving the pointer onto another trigger switch to that menu. Home, End and typing a letter also pick a trigger.",
      "With orientation set to vertical, Up and Down move between triggers. loop set to false stops at the ends, and disabled on Menubar disables every trigger while keeping the tab stop. The bar gets data-open while any menu is open, and a trigger gets it only for its own menu. A menu that another menu takes over closes with the reason submenu-switch in onOpenChange.",
      "On a MenubarItem written in JSX, shortcut only displays the keys and sets aria-keyshortcuts; it does not register them. Keys are registered only for a menu whose items are passed as data (MenuData) to items on MenubarMenu, and then the shortcuts run even while the menu is closed.",
      "To an agent the bar is a menubar (action: close) and each menu inside is a menu (setOpen and press). The bar is named by its aria-label and each menu by its trigger. With createMenubarController(), focus() moves focus to the bar and close() closes the open menu. The SDK has no menubar-specific trigger or item parts: MenubarMenu, MenubarItem and the rest are this registry's DropdownMenu parts restyled. Menus in the bar always present as popovers.",
    ],
  },
} satisfies ComponentGuide
