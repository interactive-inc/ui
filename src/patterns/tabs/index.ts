import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "同じ対象についての情報を、いくつかの面に分けて切り替えて見せる。注文の詳細を「概要」「明細」「履歴」に分けるような場面で使う。",
    "別のページへ移るなら NavigationMenu や Sidebar、選んだ値をフォームで送るなら SegmentedControl を使う。Tabs はその場で表示を切り替えるだけの部品。",
    "TabsTrigger と TabsContent は同じ value で組にする。TabsList には aria-label で名前を付ける。選択中のタブを外から知りたいときは value と onValueChange で持つ。",
  ],
  sdk: [
    "`@ui-sdk/react/tabs` の上に作ってある。TabsTrigger は SDK の TabsTab、TabsContent は TabsPanel にあたる。SDK の TabsIndicator と TabsTabIcon は出しておらず、下線は TabsTrigger の疑似要素で描いている。",
    'Tab キーは選択中のタブに入り、左右の矢印（縦並びでは上下）でタブを移ると同時に選ぶ。Home と End で最初と最後へ移り、右から左へ書く言語では左右が入れ替わる。activation="manual" を渡すと、矢印はフォーカスだけを動かし、Enter か Space で選ぶ。disabled のタブはフォーカスは受けるが選ばれない。',
    "選択中のタブとパネルに data-selected、使えないタブに data-disabled、各パーツに data-orientation が付く。onValueChange の第2引数 details の reason は item-press、list-navigation、imperative などで、details.cancel() で切り替えを止められる。",
    "エージェントからは tabs という種類で見え、setValue にタブの value か文言を渡して切り替える。選ばれていないタブの中にある部品を探すときは、どのタブを開けばよいかがエージェントに伝わる。ほかの場所から切り替えるときは createTabsController() の setValue、select、focus を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "defaultValue で最初のタブを決める。使えないタブは disabled にする。",
      en: {
        title: "Basic",
        description:
          "Set the first tab with defaultValue. Mark tabs that cannot be used as disabled.",
      },
    },
    {
      id: "line",
      title: "下線の見た目",
      description:
        'TabsList に variant="line" を付けると、背景のない下線のタブになる。',
      en: {
        title: "Line",
        description:
          'Add variant="line" to TabsList for underlined tabs without a background.',
      },
    },
    {
      id: "with-icon",
      title: "アイコンと件数",
      description:
        "タブの文言にアイコンや件数の Badge を添えて、中身を見ずに状況がわかるようにする。",
      en: {
        title: "With icon and count",
        description:
          "Add an icon or a count Badge to each tab so people can see the state without opening it.",
      },
    },
    {
      id: "vertical",
      title: "縦に並べる",
      description:
        'orientation="vertical" で設定画面のように左に並べる。矢印キーも上下で動く。',
      en: {
        title: "Vertical",
        description:
          'Use orientation="vertical" to stack tabs on the left like a settings page. Arrow keys move up and down.',
      },
    },
    {
      id: "controlled",
      title: "選択を外で持つ",
      description:
        "value と onValueChange で選択中のタブを useState に持ち、ほかの表示と連動させる。",
      en: {
        title: "Controlled",
        description:
          "Keep the selected tab in useState with value and onValueChange to sync it with other parts of the screen.",
      },
    },
  ],
  en: {
    usage: [
      "Splits information about one subject into several panes and switches between them, like showing an order as Overview, Items and History.",
      "To move to another page, use NavigationMenu or Sidebar. To submit a chosen value in a form, use SegmentedControl. Tabs only switch what is shown in place.",
      "Pair each TabsTrigger with a TabsContent through the same value, and name the TabsList with aria-label. Use value and onValueChange when other parts of the screen need the selected tab.",
    ],
    sdk: [
      "Built on `@ui-sdk/react/tabs`. TabsTrigger is the SDK TabsTab and TabsContent is TabsPanel. The SDK parts TabsIndicator and TabsTabIcon are not exported; the underline is drawn with a pseudo-element on TabsTrigger.",
      'Tab enters the list at the selected tab, and Left and Right Arrow (Up and Down when vertical) move between tabs and select them. Home and End go to the first and last tab, and Left and Right swap in right-to-left text. With activation="manual", arrow keys only move focus and Enter or Space selects. A disabled tab takes focus but is never selected.',
      "The selected tab and its panel get data-selected, a disabled tab gets data-disabled, and every part gets data-orientation. In onValueChange, the reason in the second argument details is item-press, list-navigation, imperative and so on, and details.cancel() stops the switch.",
      "An agent sees it as the kind tabs and switches with setValue, passing a tab's value or its label. When an agent looks for a component inside an unselected tab, it is told which tabs it can open. To switch from elsewhere, use setValue, select and focus on createTabsController().",
    ],
  },
} satisfies ComponentGuide
