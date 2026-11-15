import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "設定をオンとオフで切り替える入力。保存ボタンを待たずにすぐ反映される設定に向く。フォームを送るまで確定しない同意や選択には Checkbox を使う。",
    "Field の orientation を horizontal にしてラベルと横に並べる。設定画面のように説明を添えるときは、FieldContent にラベルと説明をまとめ、スイッチを右端に置く。",
    "値は onCheckedChange で受け取る。ほかの設定の前提になるスイッチは、その状態で子の Field を disabled にする。小さく置きたいときは size に sm を渡す。",
  ],
  sdk: [
    "UI SDK の Switch と SwitchThumb の上に作っている。switch の role を持つ button と、フォームに参加する隠れた native の checkbox が描かれる。つまみの SwitchThumb は中に入れてある。size はこの部品集で足した props で、data-size として出る。",
    "Space で切り替わり、Enter は切り替えずにフォームを送信する。状態は data-checked、data-unchecked、data-disabled、data-readonly、data-required として出て、エラーのある Field の中では data-invalid と aria-invalid も付く。",
    'onCheckedChange の第2引数の details から reason（press、reset、restore、imperative）と source が分かる。保存が済むまで表示を変えたくないときは details.cancel() で止めておき、保存のあとに createSwitchController の setChecked で確定する。name を渡すとオンの間だけ value（省くと "on"）が FormData に載る。',
    'エージェントからは switch という種類で見え、setChecked に true か false を渡して切り替えられる。その変更も onCheckedChange を通り、details.source は "agent" になる。',
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "スイッチとラベルを横に並べる。ラベルを押しても切り替わる。",
      en: {
        title: "Basic",
        description:
          "Place the switch beside its label. Pressing the label toggles it too.",
      },
    },
    {
      id: "with-description",
      title: "説明付きの設定行",
      description:
        "FieldContent にラベルと説明をまとめ、スイッチを右に置く。変えられない設定は disabled にする。",
      en: {
        title: "Setting rows with descriptions",
        description:
          "Group the label and description in FieldContent and put the switch on the right. Disable settings that cannot be changed.",
      },
    },
    {
      id: "sizes",
      title: "大きさ",
      description: "size で標準と sm を選ぶ。",
      en: {
        title: "Sizes",
        description: "Choose between the default and sm sizes with size.",
      },
    },
    {
      id: "controlled",
      title: "ほかの設定と連動させる",
      description:
        "状態を useState で持ち、オフのときは関連する設定を disabled にする。",
      en: {
        title: "Linked settings",
        description:
          "Keep the state in useState and disable the dependent setting while it is off.",
      },
    },
  ],
  en: {
    usage: [
      "A switch turns a setting on or off. It suits settings that apply right away without a save button. Use Checkbox for consent or choices that only take effect when the form is submitted.",
      "Set the Field orientation to horizontal to place it beside its label. On settings screens, group the label and description in FieldContent and put the switch at the end of the row.",
      "Read the value in onCheckedChange. When a switch is a prerequisite for other settings, use its state to disable their Fields. Pass sm to size for a smaller switch.",
    ],
    sdk: [
      "Built on the UI SDK Switch and SwitchThumb. It renders a button with the switch role plus a hidden native checkbox that takes part in forms. The SwitchThumb is already inside. size is a prop this library adds, exposed as data-size.",
      "Space toggles it, and Enter submits the form without toggling. State is exposed as data-checked, data-unchecked, data-disabled, data-readonly, and data-required; inside an invalid Field it also gets data-invalid and aria-invalid.",
      'The second argument of onCheckedChange, details, carries reason (press, reset, restore, imperative) and source. To hold the display until a save finishes, call details.cancel(), then commit with setChecked on a controller from createSwitchController once the save is done. With name, its value (default "on") is added to FormData only while it is on.',
      'To an agent it appears with the kind switch and offers the setChecked action, which takes true or false. That change also goes through onCheckedChange, with details.source set to "agent".',
    ],
  },
} satisfies ComponentGuide
