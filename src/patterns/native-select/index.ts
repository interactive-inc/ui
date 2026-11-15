import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Native <select> styled; mobile system picker, good for long lists (prefectures). Needs descriptions/icons/multiple -> Select.",
    "Not an SDK component: in Field use render={<NativeSelect />} on FieldControl. Parts: NativeSelectOption, NativeSelectOptGroup.",
    'Value: event.currentTarget.value in standard onChange. size="sm" available.',
    "Agents cannot operate it (no agent kind); use Select for agent-fillable forms.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "FieldControl の render に NativeSelect を渡して、ラベルとつなぐ。",
      en: {
        title: "Basic",
        description: "Pass NativeSelect to FieldControl render.",
      },
    },
    {
      id: "groups",
      title: "グループ分け",
      description:
        "NativeSelectOptGroup で選択肢を見出しごとにまとめる。選べない選択肢は disabled にする。",
      en: {
        title: "Groups",
        description: "Group with NativeSelectOptGroup; disable options.",
      },
    },
    {
      id: "controlled",
      title: "選んだ値を使う",
      description: "value と onChange で値を持ち、選んだ数量から小計を出す。",
      en: {
        title: "Using the value",
        description: "Hold value with value and onChange.",
      },
    },
    {
      id: "small",
      title: "小さな設定",
      description: 'size="sm" にして、ラベルと同じ行に置く。',
      en: {
        title: "Compact setting",
        description: 'size="sm" on the label\'s row.',
      },
    },
  ],
} satisfies ComponentGuide
