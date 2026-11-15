import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "1つの項目をオンとオフで選ぶ入力。同意の確認や、一覧から複数の項目を選ぶときに使う。押した瞬間に設定が反映されるものは Switch、1つだけ選ぶなら RadioGroup を使う。",
    "Field の orientation を horizontal にして、Checkbox と FieldLabel を横に並べる。ラベルを押しても切り替わり、FieldDescription の補足は読み上げにも付く。",
    "値は onCheckedChange で受ける。複数の項目を1つの値として扱うときは CheckboxGroup で包み、選ばれた value の配列を onValueChange で受ける。すべて選択は CheckboxGroup の中に parent を付けた Checkbox を置く。CheckboxGroup の中では Field ではなく Label で Checkbox を包んで名前を付ける。",
  ],
  sdk: [
    "UI SDK の Checkbox、CheckboxIndicator、CheckboxGroup の上に作っている。checkbox の role を持つ button と、フォームに参加する隠れた native の checkbox が描かれる。チェックと横線のアイコンは Checkbox の中に入れてあるので、CheckboxIndicator を自分で置かなくてよい。",
    "Space で切り替わり、Enter は切り替えずにフォームを送信する。状態は data-checked、data-unchecked、data-indeterminate、data-disabled、data-readonly、data-required として出るので、見た目はこれらの属性で付ける。",
    'onCheckedChange の第1引数は true、false、"indeterminate" のいずれかで、第2引数の details から reason（press、reset、restore、imperative）と source が分かり、details.cancel() で変更を止められる。name と value を渡すとチェックされている間だけ FormData に載り、value を省くと "on" になる。required はチェックされるまで送信を止め、フォームのリセットは defaultChecked に戻す。',
    "エージェントからは Checkbox も CheckboxGroup も checkbox という種類で見え、名前は FieldLabel や aria-label などのアクセシブルな名前から付く。Checkbox は setChecked、CheckboxGroup は setValue と setAll を呼べる。画面の別の場所から切り替えるときは createCheckboxController と createCheckboxGroupController を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "Field で包み、FieldLabel で名前を付ける。",
      en: {
        title: "Basic",
        description: "Wrap it in a Field and name it with a FieldLabel.",
      },
    },
    {
      id: "with-description",
      title: "説明付き",
      description:
        "FieldContent にラベルと説明をまとめる。変更できない項目は Field に disabled を付ける。",
      en: {
        title: "With a description",
        description:
          "Group the label and description in FieldContent. Add disabled to the Field for options that cannot be changed.",
      },
    },
    {
      id: "controlled",
      title: "状態で操作を切り替える",
      description:
        "チェックの状態を useState で持ち、確認が済むまで確定ボタンを押せなくする。",
      en: {
        title: "Gating an action",
        description:
          "Keep the checked state in useState and keep the confirm button disabled until the box is checked.",
      },
    },
    {
      id: "select-all",
      title: "すべて選択",
      description:
        "CheckboxGroup で包み、parent を付けた Checkbox を置く。各項目は Label で包む。一部だけ選ばれている状態は自動で表示される。",
      en: {
        title: "Select all",
        description:
          "Wrap the items in a CheckboxGroup, each in a Label, and add a Checkbox with parent. The partly selected state is shown for you.",
      },
    },
  ],
  en: {
    usage: [
      "A checkbox turns a single option on or off. Use it to confirm consent or to pick several items from a list. Use Switch for settings that apply the moment they change, and RadioGroup when only one option may be chosen.",
      "Set the Field orientation to horizontal to place the Checkbox beside its FieldLabel. Pressing the label toggles it too, and a FieldDescription is announced along with it.",
      "Read the value in onCheckedChange. To treat several options as one value, wrap them in a CheckboxGroup and read the array of checked values in onValueChange. For select-all, put a Checkbox with parent inside the CheckboxGroup. Inside a CheckboxGroup, name each Checkbox by wrapping it in a Label rather than a Field.",
    ],
    sdk: [
      "Built on the UI SDK Checkbox, CheckboxIndicator, and CheckboxGroup. It renders a button with the checkbox role plus a hidden native checkbox that takes part in forms. The check and minus icons are already inside Checkbox, so you do not place a CheckboxIndicator yourself.",
      "Space toggles it, and Enter submits the form without toggling. State is exposed as data-checked, data-unchecked, data-indeterminate, data-disabled, data-readonly, and data-required; style it with those attributes.",
      'The first argument of onCheckedChange is true, false, or "indeterminate". The second, details, carries reason (press, reset, restore, imperative) and source, and details.cancel() stops the change. With name and value it is added to FormData only while checked, and value defaults to "on". required blocks submission until it is checked, and a form reset returns it to defaultChecked.',
      "To an agent, both Checkbox and CheckboxGroup appear with the kind checkbox, labelled by their accessible name such as a FieldLabel or aria-label. Checkbox offers the setChecked action; CheckboxGroup offers setValue and setAll. To change it from elsewhere on the page, use createCheckboxController and createCheckboxGroupController.",
    ],
  },
} satisfies ComponentGuide
