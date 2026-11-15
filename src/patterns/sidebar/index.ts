import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "アプリの左に主なページへのリンクを縦に並べ、どの画面からでも行き来できるようにする。管理画面や業務アプリの、ページ全体の骨組みになる部品。",
    "ページ上部に横に並べるなら NavigationMenu、画面の一部を区切るだけなら Resizable を使う。Sidebar は SidebarProvider がページ全体を包み、SidebarInset に本文を置く前提で作られている。ここのパターンは高さを決めた枠の中に収めて見せている。",
    'SidebarHeader、SidebarContent、SidebarFooter の3段で組み、SidebarContent の中を SidebarGroup で分ける。リンクは SidebarMenuButton の render に a 要素を渡し、いまのページに isActive を付ける。collapsible="icon" ではアイコンだけに縮むので、tooltip で名前を補う。開閉は SidebarTrigger か、open と onOpenChange で持つ。',
  ],
  sdk: [
    "Sidebar は UI SDK に対応する部品がないので、`@ui-sdk/core` の definePrimitive で開閉の状態を作り、`@ui-sdk/react/primitive` の usePrimitive でつないでいる。メニューのボタンは SDK の Button、スマートフォン幅の表示は Sheet、縮めたときの名前は Tooltip に任せている。",
    "開閉は SidebarProvider の open、defaultOpen、onOpenChange で持つ。変更は core の createChange を通るので、onOpenChange の第2引数 details で reason（trigger-press、rail-press、shortcut、imperative）と source が分かり、details.cancel() で開閉を止められる。状態は Sidebar の data-state（expanded か collapsed）と data-collapsible に出るので、それで見た目を付ける。",
    "mod+b（Mac は Command、ほかは Control）のショートカットを registerShortcut で登録してあり、SidebarProvider がページにいくつあってもキーの登録は1つで、全部のサイドバーが開閉する。スマートフォン幅では Sheet として開くので、フォーカスの閉じ込め、Escape で閉じること、開いたボタンへフォーカスを戻すことは Sheet が受け持つ。",
    "エージェントからは sidebar という種類で見え、setOpen と toggle を呼べる。エージェントの操作も onOpenChange を通り、details.source が agent になる。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "ヘッダー、メニュー、フッターで組み、本文を SidebarInset に置く。いまのページに isActive を付ける。",
      en: {
        title: "Basic",
        description:
          "Build it from a header, a menu and a footer, and put the page body in SidebarInset. Mark the current page with isActive.",
      },
    },
    {
      id: "groups",
      title: "グループに分ける",
      description:
        "SidebarGroupLabel で見出しを付け、グループの右上に SidebarGroupAction で追加の操作を置く。",
      en: {
        title: "Groups",
        description:
          "Label each group with SidebarGroupLabel and put an add action at the top right with SidebarGroupAction.",
      },
    },
    {
      id: "submenu",
      title: "下の階層と件数",
      description:
        "SidebarMenuSub で下の階層を並べ、SidebarMenuBadge で未処理の件数を出す。",
      en: {
        title: "Submenu and badges",
        description:
          "List child pages with SidebarMenuSub and show pending counts with SidebarMenuBadge.",
      },
    },
    {
      id: "collapsible-icon",
      title: "アイコンだけに縮める",
      description:
        'collapsible="icon" で閉じるとアイコンだけが残る。開閉は open と onOpenChange で useState に持つ。',
      en: {
        title: "Collapse to icons",
        description:
          'With collapsible="icon", closing leaves only the icons. Keep the open state in useState with open and onOpenChange.',
      },
    },
  ],
  en: {
    usage: [
      "Lists links to the main pages down the left of an app so people can move between them from anywhere. It forms the page-wide frame of admin screens and business apps.",
      "For links across the top, use NavigationMenu. To split part of a screen, use Resizable. Sidebar is designed for SidebarProvider to wrap the whole page with the body in SidebarInset; these patterns fit it inside a box with a fixed height.",
      'Build it from SidebarHeader, SidebarContent and SidebarFooter, and divide SidebarContent with SidebarGroup. For links, pass an a element to the render of SidebarMenuButton and mark the current page with isActive. With collapsible="icon" it shrinks to icons, so add names with tooltip. Toggle it with SidebarTrigger, or keep the state with open and onOpenChange.',
    ],
    sdk: [
      "UI SDK has no Sidebar component, so the open state is built with definePrimitive from `@ui-sdk/core` and connected with usePrimitive from `@ui-sdk/react/primitive`. Menu buttons are the SDK Button, the phone-width view is a Sheet, and names in the collapsed state come from Tooltip.",
      "Keep the open state with open, defaultOpen and onOpenChange on SidebarProvider. Changes go through createChange from core, so the second argument of onOpenChange, details, carries reason (trigger-press, rail-press, shortcut or imperative) and source, and details.cancel() stops the change. The state shows on Sidebar as data-state (expanded or collapsed) and data-collapsible, which you can style against.",
      "The mod+b shortcut (Command on Apple platforms, Control elsewhere) is registered with registerShortcut. However many SidebarProvider elements a page has, the key is registered once and toggles every sidebar. At phone width the sidebar opens as a Sheet, so the focus trap, closing with Escape and returning focus to the button that opened it are handled by Sheet.",
      "An agent sees it as the kind sidebar and can call setOpen and toggle. Agent actions also go through onOpenChange, with details.source set to agent.",
    ],
  },
} satisfies ComponentGuide
