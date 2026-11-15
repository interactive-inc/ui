import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Settings that apply immediately; consent or submit-time choices -> Checkbox.",
    "Horizontal Field; settings row: FieldContent + switch at end. Disable dependent Fields from its state.",
    'size="sm" (library addition) -> data-size. SwitchThumb built in.',
    "onCheckedChange(checked, { reason: press|reset|restore|imperative, source, cancel() }).",
    "To wait for a save: details.cancel(), then setChecked on createSwitchController.",
    "State attrs: data-checked, data-unchecked, data-disabled, data-readonly, data-required; in invalid Field data-invalid + aria-invalid.",
    'Form: name+value (default "on") in FormData only while on. Space toggles, Enter submits.',
    'Agent: kind switch, action setChecked(true|false); goes through onCheckedChange with source "agent".',
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "スイッチとラベルを横に並べる。ラベルを押しても切り替わる。",
      en: {
        title: "Basic",
        description: "Switch beside its label.",
      },
    },
    {
      id: "with-description",
      title: "説明付きの設定行",
      description:
        "FieldContent にラベルと説明をまとめ、スイッチを右に置く。変えられない設定は disabled にする。",
      en: {
        title: "Setting rows with descriptions",
        description: "Label and description in FieldContent, switch at end.",
      },
    },
    {
      id: "sizes",
      title: "大きさ",
      description: "size で標準と sm を選ぶ。",
      en: {
        title: "Sizes",
        description: "Default and sm sizes via size.",
      },
    },
    {
      id: "controlled",
      title: "ほかの設定と連動させる",
      description:
        "状態を useState で持ち、オフのときは関連する設定を disabled にする。",
      en: {
        title: "Linked settings",
        description: "Disable the dependent setting while off.",
      },
    },
  ],
} satisfies ComponentGuide
