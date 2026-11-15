import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "On/off option or multi-select; apply-instantly setting -> Switch; pick one -> RadioGroup.",
    "Horizontal Field: Checkbox + FieldLabel. Label press toggles.",
    'onCheckedChange(true | false | "indeterminate", { reason: press|reset|restore|imperative, source, cancel() }).',
    "Check/minus icons built in; do not place CheckboxIndicator.",
    "Group: CheckboxGroup, onValueChange(string[]). Select-all: Checkbox with parent inside group. Inside group name each with Label, not Field.",
    "State attrs: data-checked, data-unchecked, data-indeterminate, data-disabled, data-readonly, data-required.",
    'Form: name+value in FormData only while checked (value default "on"); reset -> defaultChecked. Enter submits, Space toggles.',
    "Agent: kind checkbox; Checkbox setChecked, CheckboxGroup setValue/setAll. Controllers: createCheckboxController, createCheckboxGroupController.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "Field で包み、FieldLabel で名前を付ける。",
      en: {
        title: "Basic",
        description: "Wrap in Field; name with FieldLabel.",
      },
    },
    {
      id: "with-description",
      title: "説明付き",
      description:
        "FieldContent にラベルと説明をまとめる。変更できない項目は Field に disabled を付ける。",
      en: {
        title: "With a description",
        description: "Group label and description in FieldContent.",
      },
    },
    {
      id: "controlled",
      title: "状態で操作を切り替える",
      description:
        "チェックの状態を useState で持ち、確認が済むまで確定ボタンを押せなくする。",
      en: {
        title: "Gating an action",
        description: "Gate a confirm button on the checked state.",
      },
    },
    {
      id: "select-all",
      title: "すべて選択",
      description:
        "CheckboxGroup で包み、parent を付けた Checkbox を置く。各項目は Label で包む。一部だけ選ばれている状態は自動で表示される。",
      en: {
        title: "Select all",
        description: "Select-all with a parent Checkbox in CheckboxGroup.",
      },
    },
  ],
} satisfies ComponentGuide
