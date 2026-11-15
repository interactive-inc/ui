import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "One question per screen with number-key selection, required checks, skip. All fields at once -> Field form.",
    "One QuestionnaireItem per question, with name. Props: multiple, required, value/defaultValue/onValueChange, item/onItemChange for current question.",
    "Parts: QuestionnaireTitle (= FieldLabel, names the control), QuestionnaireChoice (description is description, not name), QuestionnaireInput, QuestionnaireError.",
    "Built on Field, RadioGroup, CheckboxGroup+Checkbox, Input. Title names the radiogroup/group/textbox; choice text names Radio/Checkbox.",
    "Keys: ArrowUp/Down between checkboxes, ArrowLeft/Right prev/next question, Enter next, number/letter via shortcuts.",
    "Required unanswered on next: Field invalid (data-invalid, QuestionnaireError).",
    "onValueChange(value, { reason, source, cancel() }): value string|null, string[] with multiple; reason item-press | input-change | imperative (Skip clears).",
    "Submit: answers in FormData under item name; blank inputs and skipped omitted.",
    "Agent: single choice kind radio (setValue choice text); multiple setChecked per choice; text setValue on title; press 次へ / 送信. source agent.",
  ],
  patterns: [
    {
      id: "single-choice",
      title: "1つを選ぶ",
      description:
        "回答を value と onValueChange で持つ。required を付けると、選ばずに送ったときに QuestionnaireError が出る。",
      en: {
        title: "Single choice",
        description:
          "value and onValueChange; required shows QuestionnaireError.",
      },
    },
    {
      id: "multiple-choice",
      title: "複数を選ぶ",
      description:
        "multiple を付けると選択肢がチェックボックスになり、回答は配列になる。補足は QuestionnaireChoice の description に書く。",
      en: {
        title: "Multiple choice",
        description: "multiple makes checkboxes and an array answer.",
      },
    },
    {
      id: "text-input",
      title: "自由に書く",
      description:
        "QuestionnaireInput で1行の回答を受ける。入力の名前は QuestionnaireTitle から付く。",
      en: {
        title: "Text input",
        description: "QuestionnaireInput takes name from QuestionnaireTitle.",
      },
    },
    {
      id: "steps",
      title: "複数の質問を順に進む",
      description:
        "進み具合、戻る、スキップ、次へを並べ、今の質問を item と onItemChange で持つ。",
      en: {
        title: "Steps",
        description:
          "previous, skip, next; item and onItemChange keep position.",
      },
    },
  ],
} satisfies ComponentGuide
