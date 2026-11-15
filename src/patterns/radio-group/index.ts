import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Pick one of few visible options; many/tight -> Select; multiple -> Checkbox.",
    "FieldLabel names group; name each RadioGroupItem by wrapping in Label. Description goes inside Label.",
    "RadioGroupItem = SDK Radio with RadioIndicator built in.",
    "onValueChange(value | null, { reason: item-press|list-navigation|reset|restore|imperative }).",
    "Single tab stop; arrows move and check, skipping disabled. loop={false} stops at ends.",
    "State attrs: data-checked, data-unchecked, data-disabled, data-readonly, data-required.",
    "Form: name on RadioGroup; required blocks submit until chosen.",
    "Agent: kind radio, action setValue (value must be an item, else refused). Controller: createRadioGroupController.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "FieldLabel がグループの名前、各 Label が選択肢の名前になる。",
      en: {
        title: "Basic",
        description: "FieldLabel names group; Label names each option.",
      },
    },
    {
      id: "with-description",
      title: "説明付き",
      description:
        "選択肢の下に補足を添える。選べない選択肢は disabled にして理由を書く。",
      en: {
        title: "With descriptions",
        description: "Add a note under each option; disable unavailable ones.",
      },
    },
    {
      id: "controlled",
      title: "選んだ値を使う",
      description: "値を useState で持ち、選択に応じて説明を変える。",
      en: {
        title: "Using the value",
        description: "Keep value in useState; update description.",
      },
    },
    {
      id: "choice-card",
      title: "カード型の選択肢",
      description:
        "Label をカードにして、どこを押しても選べるようにする。選ばれたカードは has-data-checked で目立たせる。",
      en: {
        title: "Choice cards",
        description: "Label as card; style selected with has-data-checked.",
      },
    },
  ],
} satisfies ComponentGuide
