import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "ブラウザ標準の select に見た目だけを合わせた部品。スマートフォンでは OS のピッカーが開くので、都道府県のような長い一覧を手早く選ばせたいときに向く。選択肢に説明やアイコンを付けたい、複数を選ばせたいときは Select を使う。",
    "UI SDK の部品ではないので、Field の中では FieldControl の render に NativeSelect を渡して FieldLabel とつなぐ。選択肢は NativeSelectOption、見出しで分けるときは NativeSelectOptGroup で並べる。",
    "値は標準の onChange の event.currentTarget.value で受ける。エージェントは UI SDK の部品しか操作できないので、エージェントにも入力させたいフォームでは Select を選ぶ。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "FieldControl の render に NativeSelect を渡して、ラベルとつなぐ。",
      en: {
        title: "Basic",
        description:
          "Pass NativeSelect to the render prop of FieldControl to connect it to the label.",
      },
    },
    {
      id: "groups",
      title: "グループ分け",
      description:
        "NativeSelectOptGroup で選択肢を見出しごとにまとめる。選べない選択肢は disabled にする。",
      en: {
        title: "Groups",
        description:
          "Group options under headings with NativeSelectOptGroup. Disable options that cannot be chosen.",
      },
    },
    {
      id: "controlled",
      title: "選んだ値を使う",
      description: "value と onChange で値を持ち、選んだ数量から小計を出す。",
      en: {
        title: "Using the value",
        description:
          "Hold the value with value and onChange, and show a subtotal from the chosen quantity.",
      },
    },
    {
      id: "small",
      title: "小さな設定",
      description: 'size="sm" にして、ラベルと同じ行に置く。',
      en: {
        title: "Compact setting",
        description: 'Use size="sm" and place it on the same row as its label.',
      },
    },
  ],
  en: {
    usage: [
      "A native select styled to match. On phones it opens the system picker, so it suits picking quickly from long lists such as prefectures. Use Select when options need descriptions or icons, or when several can be chosen.",
      "It is not a UI SDK component, so inside a Field pass NativeSelect to the render prop of FieldControl to connect it to the FieldLabel. List options with NativeSelectOption and group them under headings with NativeSelectOptGroup.",
      "Read the value from event.currentTarget.value in the standard onChange. Agents can only operate UI SDK components, so choose Select for forms an agent should also fill in.",
    ],
  },
} satisfies ComponentGuide
