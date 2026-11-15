import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Opens suggestions on trigger char (@, /) and inserts into text: mentions, slash commands. Whole value from list -> Autocomplete/Combobox. Inside TokenInput keeps chip.",
    "Props triggers (chars + items); TriggerMenuInput wrapped in Field. Single-line: pass Input to render and autoHighlight={false}.",
    "Up/Down highlight, Enter/Tab choose, Escape closes and stays closed while typing; shortcut (default Control+Space) reopens.",
    "onSelect(item, details): details.insert() inserts something else, details.preventDefault() skips default insert. onOpenChange(reason, trigger), onQueryChange(text). Insert stays in native undo.",
    "Renders in place at caret; container prop to relocate. Data: data-highlighted, data-trigger (content).",
    "Controller createTriggerMenuController(): open() types trigger, insert() at caret. Agent: kind trigger-menu, setOpen, insert; with shared name setValue goes to Textarea.",
    "textFieldAdapter exposed.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "@ で開き、TriggerMenuItem の label が文に挿入される。値は Textarea の onValueChange で受ける。",
      en: {
        title: "Basic",
        description:
          "Opens on @, and the TriggerMenuItem's label is inserted into the text.",
      },
    },
    {
      id: "multiple-triggers",
      title: "複数のきっかけ",
      description:
        "triggers に候補をデータで渡し、state.trigger でグループ名を切り替える。",
      en: {
        title: "Multiple triggers",
        description:
          "Items as data in triggers; group label via state.trigger.",
      },
    },
    {
      id: "commands",
      title: "引数付きのコマンド",
      description:
        "arguments で引数を順に尋ね、TriggerMenuHint で残りを示す。onSelect で結果を受ける。",
      en: {
        title: "Commands with arguments",
        description:
          "Ask arguments in turn with arguments and TriggerMenuHint; result in onSelect.",
      },
    },
    {
      id: "single-line",
      title: "1行の欄",
      description:
        "render に Input を渡す。autoHighlight を切ると、矢印キーで選ぶまで Enter で挿入されない。",
      en: {
        title: "Single line",
        description: "Pass an Input to render.",
      },
    },
  ],
} satisfies ComponentGuide
