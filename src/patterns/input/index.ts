import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Single-line text. Multi-line -> Textarea; number -> NumberInput; password -> PasswordInput; suggestions -> Autocomplete/Combobox; icons/buttons around -> InputGroup.",
    "onValueChange(value, details): reason input-change | reset | imperative; details.cancel() rejects change and restores text (use to filter input).",
    "Set type and autoComplete. Submits under Field name. Native validation (required, type=email) works; errors via FieldError.",
    "Data attributes: data-filled, data-disabled, data-readonly, data-required.",
    "Controller createInputController(): getValue, setValue, clear, focus.",
    "Agent: kind input, actions setValue, clear (onValueChange source agent). SDK InputGroup/InputClear not exported.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "Field と FieldLabel で包み、onValueChange で値を受ける。",
      en: {
        title: "Basic",
        description:
          "Wrap it in Field and FieldLabel, and read the value with onValueChange.",
      },
    },
    {
      id: "types",
      title: "入力の種類",
      description:
        "type と autoComplete を指定すると、スマホのキーボードや自動入力が合う。",
      en: {
        title: "Input types",
        description:
          "Set type and autoComplete so mobile keyboards and autofill match the value.",
      },
    },
    {
      id: "states",
      title: "状態",
      description:
        "読み取り専用、無効、エラーの見た目。無効とエラーは Field に指定する。",
      en: {
        title: "States",
        description: "Read-only, disabled and invalid.",
      },
    },
    {
      id: "validation",
      title: "送信時の検証",
      description:
        "required や type の検証に、FieldError の match で問題ごとの文言を出す。",
      en: {
        title: "Validation on submit",
        description: "Per-problem messages with FieldError match.",
      },
    },
  ],
} satisfies ComponentGuide
