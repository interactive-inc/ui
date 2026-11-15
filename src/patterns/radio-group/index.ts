import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "いくつかの選択肢から1つだけを選ぶ入力。選択肢がすべて見えているので、比べながら選ばせたいときに向く。選択肢が多いときや画面が狭いときは Select、複数を選ぶなら Checkbox を使う。",
    "RadioGroup を Field で包むと、FieldLabel がグループ全体の名前になる。選択肢ごとの名前は Label で RadioGroupItem を包んで付ける。",
    "値は onValueChange で受ける。説明を添えたいときは Label の中に文章を並べ、カードのように広い範囲を押せるようにしたいときは Label にカードの見た目を付ける。",
  ],
  sdk: [
    "UI SDK の RadioGroup、Radio、RadioIndicator の上に作っている。RadioGroupItem が SDK の Radio にあたり、中の丸い印は RadioIndicator として入れてある。各項目は radio の role を持つ button と、フォームに参加する隠れた native の radio になる。",
    "グループ全体でタブ移動は1か所になり、Tab は選ばれている項目、なければ最初の有効な項目に入る。矢印キーは無効な項目を飛ばして隣の項目へ移り、そのまま選ぶ。端で折り返したくないときは loop={false} を渡す。Space はフォーカス中の項目を選び、Enter はフォームを送信する。",
    "onValueChange の値は選ばれた項目の value で、何も選ばれていないときは null になる。details.reason は item-press、list-navigation、reset、restore、imperative のいずれかなので、押して選んだのか矢印キーで選んだのかを分けられる。RadioGroup に name を渡すと選んだ値が FormData に載り、required は選ぶまで送信を止める。",
    "項目の状態は data-checked、data-unchecked、data-disabled、data-readonly、data-required として出る。エージェントからは radio という種類で見え、setValue で項目を選べる。値は項目のいずれかに限られるので、項目にないものを指定した操作は断られる。画面の別の場所から選ぶときは createRadioGroupController を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "FieldLabel がグループの名前、各 Label が選択肢の名前になる。",
      en: {
        title: "Basic",
        description:
          "The FieldLabel names the group and each Label names an option.",
      },
    },
    {
      id: "with-description",
      title: "説明付き",
      description:
        "選択肢の下に補足を添える。選べない選択肢は disabled にして理由を書く。",
      en: {
        title: "With descriptions",
        description:
          "Add a note under each option. Disable options that are unavailable and say why.",
      },
    },
    {
      id: "controlled",
      title: "選んだ値を使う",
      description: "値を useState で持ち、選択に応じて説明を変える。",
      en: {
        title: "Using the value",
        description:
          "Keep the value in useState and change the description to match the choice.",
      },
    },
    {
      id: "choice-card",
      title: "カード型の選択肢",
      description:
        "Label をカードにして、どこを押しても選べるようにする。選ばれたカードは has-data-checked で目立たせる。",
      en: {
        title: "Choice cards",
        description:
          "Turn each Label into a card so a press anywhere selects it. Highlight the selected card with has-data-checked.",
      },
    },
  ],
  en: {
    usage: [
      "A radio group picks exactly one option from a few. Every option stays visible, so it suits choices people compare side by side. Use Select when there are many options or little room, and Checkbox when several can be chosen.",
      "Wrap the RadioGroup in a Field so the FieldLabel names the whole group. Name each option by wrapping its RadioGroupItem in a Label.",
      "Read the value in onValueChange. To add a description, put the text inside the Label; to make a large card clickable, style the Label as a card.",
    ],
    sdk: [
      "Built on the UI SDK RadioGroup, Radio, and RadioIndicator. RadioGroupItem is the SDK Radio with its dot already inside as a RadioIndicator. Each item renders a button with the radio role plus a hidden native radio that takes part in forms.",
      "The whole group is a single tab stop: Tab lands on the checked item, or the first enabled one. Arrow keys move to the neighbouring item, skipping disabled ones, and check it. Pass loop={false} to stop at the ends instead of wrapping. Space checks the focused item, and Enter submits the form.",
      "onValueChange receives the checked item's value, or null when nothing is checked. details.reason is one of item-press, list-navigation, reset, restore, or imperative, so you can tell a press from an arrow-key move. Pass name to RadioGroup to add the checked value to FormData; required blocks submission until one is chosen.",
      "Item state is exposed as data-checked, data-unchecked, data-disabled, data-readonly, and data-required. To an agent it appears with the kind radio and offers the setValue action. Its value is always one of its items, so a step that names something else is refused. To choose from elsewhere on the page, use createRadioGroupController.",
    ],
  },
} satisfies ComponentGuide
