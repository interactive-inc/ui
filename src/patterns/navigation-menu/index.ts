import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Top links to main pages, items may open link panels. Left nav -> Sidebar; action lists -> DropdownMenu / Menubar.",
    "NavigationMenuList > NavigationMenuItem > NavigationMenuLink, or NavigationMenuTrigger + NavigationMenuContent. aria-label on NavigationMenu.",
    "NavigationMenuViewport built in; panel alignment via align on NavigationMenu. NavigationMenuLinkIcon not exported.",
    'Link current -> data-current + aria-current="page". Open item/trigger: data-open / data-closed.',
    "value, onValueChange(value, { reason, cancel }); reason: trigger-hover | trigger-press | escape-key | outside-press | focus-out | link-press. openOnHover={false} for click-only.",
    "Agent: kind navigation-menu, actions setValue, close. Controller: createNavigationMenuController() (setValue, close, focus).",
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
          "Plain links without panels; current marks the current page.",
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
          "NavigationMenuTrigger plus NavigationMenuContent groups related pages.",
      },
    },
    {
      id: "with-description",
      title: "説明付きのパネル",
      description:
        "パネルのリンクにアイコンと短い説明を添えて、行き先を選びやすくする。",
      en: {
        title: "With descriptions",
        description: "Panel links with icon and short description.",
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
          "openOnHover={false}; control with value and onValueChange.",
      },
    },
  ],
} satisfies ComponentGuide
