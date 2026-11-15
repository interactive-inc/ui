import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Page-wide left nav in admin/business apps; top links -> NavigationMenu, partial split -> Resizable.",
    "SidebarProvider wraps page, body in SidebarInset. SidebarHeader / SidebarContent / SidebarFooter, SidebarGroup inside content.",
    'Links: SidebarMenuButton render={<a />} + isActive on current page. collapsible="icon" shrinks to icons; add tooltip for names.',
    "No SDK Sidebar; built on definePrimitive/usePrimitive. Buttons = SDK Button, mobile = Sheet, collapsed names = Tooltip.",
    "SidebarProvider: open, defaultOpen, onOpenChange(open, { reason, source, cancel }); reason: trigger-press | rail-press | shortcut | imperative.",
    "State attrs on Sidebar: data-state (expanded | collapsed), data-collapsible. mod+b toggles all sidebars (registered once).",
    "Agent: kind sidebar, actions setOpen, toggle; details.source = agent.",
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
          "Header, menu, footer; body in SidebarInset; isActive on current page.",
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
          "SidebarGroupLabel for headings, SidebarGroupAction for add action.",
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
          "SidebarMenuSub for child pages, SidebarMenuBadge for counts.",
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
          'collapsible="icon" leaves icons only; control with open and onOpenChange.',
      },
    },
  ],
} satisfies ComponentGuide
