import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Chips (person, order) embedded in text. Value: array of strings and tokens {type, value, label}. Plain text -> Textarea; plain-text @ insert -> TriggerMenu + Textarea; keep chip -> TriggerMenu inside TokenInput.",
    "onValueChange details: reason (input-change, paste, drop, cut, undo, redo, remove-press, item-press), inputType, removed; cancel().",
    "tokenDeletion: whole | select | revert sets Backspace/Delete. Own undo/redo history. Arrow keys cross token in one press.",
    "renderToken customizes chip (default: label + remove button). submitShortcut + onSubmit.",
    "name submits codec text, default [@label](type:value); copy/paste keeps tokens. Exports toText, fromText, toLabel, defaultCodec.",
    "Controller createTokenInputController(): insert, updateToken, removeToken, undo, redo, clear, focus. insert resolve Promise -> data-pending on token.",
    "Agent: kind token-input, setValue, insert, removeToken, clear.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description:
        "トークンを含む値を onValueChange で受ける。toLabel で読める文に戻せる。",
      en: {
        title: "Basic",
        description: "Read a value with tokens through onValueChange.",
      },
    },
    {
      id: "with-mention",
      title: "メンション",
      description:
        "TriggerMenu を中に置き、@ で選んだ担当者をチップとして挿入する。",
      en: {
        title: "Mentions",
        description:
          "TriggerMenu inside inserts the person chosen after @ as a chip.",
      },
    },
    {
      id: "custom-token",
      title: "チップの見た目",
      description:
        "renderToken で種類ごとにアイコンを変える。status が unresolved のチップは赤くなる。",
      en: {
        title: "Custom tokens",
        description: "Change the icon per type with renderToken.",
      },
    },
    {
      id: "submit",
      title: "キーで送信",
      description:
        "submitShortcut を mod+enter にし、onSubmit で投稿して欄を空にする。",
      en: {
        title: "Submit shortcut",
        description:
          "Set submitShortcut to mod+enter, post in onSubmit and clear the field.",
      },
    },
  ],
} satisfies ComponentGuide
