import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "ボタンを押すと操作の一覧を開くメニュー。一覧の行の「…」ボタン、アカウントのメニュー、表示の切り替えなど、普段は隠しておきたい操作をまとめるときに使う。",
    "値を選んでフォームに入れるなら Select を使う。右クリックで開くなら ContextMenu、アプリの上部に並べるなら Menubar を選ぶ。項目は DropdownMenuItem に value を付け、DropdownMenu の onAction でまとめて受ける。",
    "オンとオフは DropdownMenuCheckboxItem の onCheckedChange、1つを選ぶなら DropdownMenuRadioGroup の onValueChange で受ける。削除などの重い項目は variant を destructive にし、data-agent-confirm を付けて最後に置く。",
  ],
  sdk: [
    "UI SDK の Menu の上に作っている。トリガーで Enter、Space、下矢印を押すと最初の項目に、上矢印なら最後の項目にフォーカスして開く。中では矢印キーで移り（端で折り返す。loop を false にすると止まる）、文字を打つと名前で項目を探し、Escape で閉じてフォーカスがトリガーに戻る。トップレイヤーに描くので Portal は要らない。",
    "普通の項目は選ぶと閉じ、チェックとラジオの項目は開いたまま残る。どちらも closeOnSelect で変えられる。onAction や onSelect が Promise を返すと、終わるまで項目に data-pending が付き、メニューは開いたままになる。開閉は onOpenChange の details.reason（trigger-press、item-press、outside-press、escape-key、focus-out など）と details.cancel() で受ける。見た目は data-highlighted、data-disabled、data-checked、data-destructive で付ける。",
    "JSX で書いた DropdownMenuItem の shortcut は、キーの表示と aria-keyshortcuts を付けるだけで、キーは登録しない。押したときの処理はアプリ側で用意する。キーが登録されるのは、DropdownMenu の items にデータ（MenuData）を渡したメニューだけで、閉じていても項目のショートカットが走る（itemShortcuts を false にすると止まる）。items を渡したまま自分で DropdownMenuContent を書けば、見た目を付けながら登録も残せる。DropdownMenuTrigger の shortcut は、メニューを開くキーを登録する。",
    "エージェントからは menu として見え、名前はトリガーから付く。呼べる操作は setOpen と press で、press に項目の文言を渡すと、閉じていれば開いてからその項目を選ぶ。項目に data-agent-confirm を付けると、人の確認を待つ。createMenuController() は行ごとのトリガーと payload を1つのメニューにつなげる。この部品集では inset と variant を足し、DropdownMenuLabel には SDK の MenuGroupLabel を使っている。SDK の MenuItemIcon は出していない。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "アイコン付きの項目を並べ、選ばれた項目の value を onAction で受ける。",
      en: {
        title: "Basic",
        description:
          "List items with icons and receive the chosen item's value in onAction.",
      },
    },
    {
      id: "checkbox",
      title: "オンとオフ",
      description: "DropdownMenuCheckboxItem で表示する列などを切り替える。",
      en: {
        title: "Checkbox items",
        description:
          "Toggle options like visible columns with DropdownMenuCheckboxItem.",
      },
    },
    {
      id: "radio",
      title: "1つを選ぶ",
      description: "DropdownMenuRadioGroup で並び順などを1つだけ選ばせる。",
      en: {
        title: "Radio items",
        description:
          "Let people pick exactly one option, like the sort order, with DropdownMenuRadioGroup.",
      },
    },
    {
      id: "submenu",
      title: "サブメニュー",
      description: "関連する項目を DropdownMenuSub にまとめ、横に開く。",
      en: {
        title: "Submenu",
        description:
          "Group related items in a DropdownMenuSub that opens to the side.",
      },
    },
    {
      id: "row-actions",
      title: "行の操作",
      description:
        "見出し、ショートカット、区切り線で整え、取り消せない操作は最後に destructive で置く。",
      en: {
        title: "Row actions",
        description:
          "Organize with labels, shortcuts and separators, and put irreversible actions last as destructive.",
      },
    },
  ],
  en: {
    usage: [
      "A dropdown menu opens a list of actions from a button. Use it to gather actions that should stay out of sight, like a row's more button, an account menu or view options.",
      "Use Select to put a value into a form. Choose ContextMenu to open on right-click and Menubar for a row of menus at the top of an app. Give each DropdownMenuItem a value and handle them together in onAction on DropdownMenu.",
      "Handle on and off with onCheckedChange on DropdownMenuCheckboxItem, and a single choice with onValueChange on DropdownMenuRadioGroup. Make heavy items like delete destructive, add data-agent-confirm and place them last.",
    ],
    sdk: [
      "Built on the UI SDK Menu. On the trigger, Enter, Space or ArrowDown opens the menu with focus on the first item, and ArrowUp on the last. Inside, arrow keys move between items (wrapping at the ends unless loop is false), typing finds an item by name, and Escape closes the menu and returns focus to the trigger. It renders in the top layer, so no Portal is needed.",
      "A plain item closes the menu when chosen; checkbox and radio items keep it open. closeOnSelect changes either default. When onAction or onSelect returns a Promise, the item gets data-pending and the menu stays open until it settles. Read open and close through details.reason in onOpenChange (trigger-press, item-press, outside-press, escape-key, focus-out and so on) and details.cancel(). Style items with data-highlighted, data-disabled, data-checked and data-destructive.",
      "On a DropdownMenuItem written in JSX, shortcut only displays the keys and sets aria-keyshortcuts; it does not register them, so your app owns the key handler. Keys are registered only for a menu whose items are passed as data (MenuData) to items on DropdownMenu, and those shortcuts run even while the menu is closed (set itemShortcuts to false to turn that off). You can keep items and still write your own DropdownMenuContent, which keeps the shortcuts registered while you style the items. shortcut on DropdownMenuTrigger registers keys that open the menu.",
      "To an agent it is a menu, named by its trigger, with the actions setOpen and press; press with an item's text opens the menu if needed and chooses that item. An item marked with data-agent-confirm waits for a person. createMenuController() connects one trigger per row, each with a payload, to a single menu. This registry adds inset and variant, and DropdownMenuLabel uses the SDK's MenuGroupLabel. The SDK's MenuItemIcon is not exported.",
    ],
  },
} satisfies ComponentGuide
