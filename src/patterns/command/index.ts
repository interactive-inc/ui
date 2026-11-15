import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "文字を打って候補を絞り込み、選んだ操作をその場で実行する一覧。画面の移動、よく使う操作の呼び出し、取引先の検索など、探してすぐ実行したいときに使う。",
    "値を選んでフォームに入れるなら Combobox や Select を使う。Command は選んだ時点で onAction が走り、値を保持しない。どこからでも呼び出すなら CommandDialog に入れ、⌘K などのショートカットで開く。",
    "CommandItem の value が onAction に届くので、操作ごとに区別できる値を付ける。CommandEmpty で一致しないときの案内を出し、CommandGroup の heading で種類ごとにまとめる。",
  ],
  sdk: [
    "UI SDK の Command の上に作っている。WAI-ARIA の combobox の形で、フォーカスは CommandInput に置いたまま、aria-activedescendant でハイライト中の項目を指す。文字を打つと絞り込み（既定は fuzzy）、いちばん合う項目をハイライトする。上下の矢印で移り、Enter で実行し、Escape は検索の文字を消してから前のページへ戻る。",
    "実行すると onAction に項目の value が届く。onAction や CommandItem の onSelect が Promise を返すと、終わるまで項目に data-pending が付く。ハイライトは value と onValueChange、検索の文字は query と onQueryChange、ページの重なりは pages と onPagesChange で別々に制御できる。見た目は CommandItem の data-highlighted と data-disabled、CommandEmpty の data-empty で付ける。",
    "CommandItem の shortcut は、メニューの項目と違ってキーを登録する。一覧がページにあるあいだは、検索や別のページで項目が隠れていても、そのキーで実行される。CommandDialog の中では、開いているあいだだけ効く。items にデータ（CommandData）を渡すと一致の点数順に並び、JSX で書いた項目は書いた順のまま絞り込まれる。",
    "エージェントからは command として見え、名前は CommandInput の aria-label から付き、項目の一覧も読める。呼べる操作は setValue（ハイライト）、setQuery、setPages で、項目を実行する操作は含まれない。CommandDialog は dialog として別に見える。この部品集では、Dialog に入れた CommandDialog、CommandGroup の heading、CommandItem の checked を足している。SDK の CommandItemText（一致した文字の強調）と CommandItemIcon は出していない。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本の形",
      description:
        "検索欄、グループ、一致しないときの案内を並べ、選んだ操作を onAction で受ける。",
      en: {
        title: "Basic",
        description:
          "Line up a search field, groups and an empty message, and handle the chosen command in onAction.",
      },
    },
    {
      id: "with-shortcuts",
      title: "ショートカット",
      description:
        "CommandItem の shortcut でキーを登録し、CommandShortcut で表示する。",
      en: {
        title: "Shortcuts",
        description:
          "Register keys with shortcut on CommandItem and display them with CommandShortcut.",
      },
    },
    {
      id: "dialog",
      title: "コマンドパレット",
      description: "CommandDialog に入れ、⌘K でどこからでも開けるようにする。",
      en: {
        title: "Command palette",
        description:
          "Put it in a CommandDialog and open it from anywhere with Cmd+K.",
      },
    },
    {
      id: "with-checked",
      title: "選択中の印",
      description:
        "checked で選ばれている項目に印を付け、onAction で切り替える。",
      en: {
        title: "Checked items",
        description:
          "Mark selected items with checked and toggle them in onAction.",
      },
    },
  ],
  en: {
    usage: [
      "A command list narrows options as you type and runs the chosen command right away. Use it to jump between screens, call common actions or search for a customer and act on it.",
      "Use Combobox or Select to put a value into a form. Command runs onAction when an item is chosen and keeps no value. To call it from anywhere, put it in a CommandDialog and open it with a shortcut like Cmd+K.",
      "Each CommandItem's value reaches onAction, so give every command a distinct value. Show a hint with CommandEmpty when nothing matches, and group commands with the heading of CommandGroup.",
    ],
    sdk: [
      "Built on the UI SDK Command. It follows the WAI-ARIA combobox pattern: focus stays in CommandInput, which points to the highlighted command with aria-activedescendant. Typing filters the commands (fuzzy by default) and highlights the best match. ArrowDown and ArrowUp move the highlight, Enter runs it, and Escape clears the search and then goes back a page.",
      "Running a command sends its value to onAction. When onAction or the onSelect of a CommandItem returns a Promise, the item gets data-pending until it settles. The highlight (value, onValueChange), the search text (query, onQueryChange) and the page stack (pages, onPagesChange) are controlled separately. Style it with data-highlighted and data-disabled on CommandItem and data-empty on CommandEmpty.",
      "Unlike a menu item's, the shortcut of a CommandItem registers its keys. While the list is in the page the keys run the command, even when the search or another page hides it. Inside CommandDialog they work only while the dialog is open. Commands passed as data through items (CommandData) are ranked by match score, while commands written in JSX are filtered in the order you wrote them.",
      "To an agent it is a command, named by the aria-label on CommandInput, with its commands listed as items. Its actions are setValue (the highlight), setQuery and setPages; there is no action that runs a command. CommandDialog appears separately as a dialog. This registry adds CommandDialog (a Command inside its Dialog), heading on CommandGroup, and checked on CommandItem. The SDK's CommandItemText (which marks the matched text) and CommandItemIcon are not exported.",
    ],
  },
} satisfies ComponentGuide
