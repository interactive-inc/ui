import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "One form item: FieldLabel, control, FieldDescription, FieldError in Field. Label only (no state) -> Label.",
    'FieldGroup spaces items; FieldSet + FieldLegend (variant) groups related; FieldContent, FieldTitle, FieldSeparator. orientation="horizontal" for checkbox/switch.',
    "Field name is what the form submits. SDK controls inside get id, aria-labelledby, aria-describedby, aria-invalid automatically.",
    "Validation: browser constraints; errors after submit attempt, first invalid control focused. invalid={true} shows error at once; omit to follow browser.",
    "FieldError: match=<validity key> per problem; errors=[...] for server errors (merges duplicates); always shows when given children or errors unless match set.",
    "data-invalid, data-disabled on all parts. useFieldControl joins custom control; non-SDK control via FieldControl invisible to agents.",
    "Agent: sees Field only while it has errors, else inner control. data-agent-secret on Field: fillable, value reads [redacted].",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "FieldLabel、入力部品、FieldDescription を並べる。",
      en: {
        title: "Basic",
        description:
          "Line up a FieldLabel, the control and a FieldDescription.",
      },
    },
    {
      id: "validation",
      title: "ブラウザの検証",
      description:
        "required や pattern の結果に合わせ、FieldError の match で文言を出し分ける。",
      en: {
        title: "Browser validation",
        description: "Per-problem messages with FieldError match.",
      },
    },
    {
      id: "server-error",
      title: "サーバーからのエラー",
      description:
        "invalid を付け、errors に渡したメッセージを一覧で表示する。",
      en: {
        title: "Errors from the server",
        description:
          "Set invalid and pass the messages to errors to list them.",
      },
    },
    {
      id: "horizontal",
      title: "横に並べる",
      description:
        "チェックボックスやスイッチは orientation を horizontal にし、FieldContent で文をまとめる。",
      en: {
        title: "Horizontal",
        description:
          "Horizontal orientation for checkboxes and switches; text in FieldContent.",
      },
    },
    {
      id: "fieldset",
      title: "項目のまとまり",
      description:
        "FieldSet と FieldLegend で囲み、FieldGroup と FieldSeparator で並べる。",
      en: {
        title: "Field sets",
        description:
          "Group related fields with FieldSet, FieldLegend, FieldGroup, FieldSeparator.",
      },
    },
  ],
} satisfies ComponentGuide
