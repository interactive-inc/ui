import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Short (about one line) hint for icon-only buttons, shortcuts. Links/buttons -> Popover; link preview -> HoverCard. No touch: no essential info.",
    "Trigger is the control itself. Icon-only trigger needs aria-label. TooltipContent stays hidden in page; type label|description (auto: names unnamed trigger, else describes).",
    "Opens after delay 600ms, instantly on focus. No provider: consecutive tooltips open at once with data-instant. Escape does not close surrounding Dialog/menu.",
    "Press closes; closeOnPress false keeps open; toggleable lets press open/close (help icons, touch).",
    "shortcut only shows keys (TooltipShortcut) + aria-keyshortcuts; does not register. Use registerShortcut.",
    "Never takes focus: no links/buttons inside.",
    "Agent: kind tooltip, named by trigger name; actions setOpen, press. onOpenChange reason + cancel(). TooltipArrow built into TooltipContent. createTooltipController(): shared across triggers.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description: "アイコンだけのボタンに、何をするかを短く添える。",
      en: {
        title: "Basic",
        description: "Short hint on an icon-only button.",
      },
    },
    {
      id: "sides",
      title: "出す位置",
      description: "side で上下左右を選ぶ。場所が足りなければ反対側に出る。",
      en: {
        title: "Sides",
        description: "side picks position; flips when no room.",
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
          "shortcut and TooltipShortcut show keys; register handler separately.",
      },
    },
    {
      id: "help",
      title: "ヘルプのアイコン",
      description:
        "toggleable を付けると押しても開くので、タッチでも説明を読める。",
      en: {
        title: "Help icon",
        description: "toggleable opens on press for touch users.",
      },
    },
  ],
} satisfies ComponentGuide
