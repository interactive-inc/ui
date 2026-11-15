import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "星の数で評価を選ぶ入力。満足度のアンケートや商品レビューのように、段階で気持ちを聞きたいときに使う。数値そのものを決めさせたいなら Slider や NumberInput を使う。",
    "Field で包むと FieldLabel が名前になる。星の数は max で変えられ、step={0.5} で半分の星まで選べる。読み上げでは「5点中4点」のように点数が伝わる。",
    "値は onValueChange で受け、未評価は null になる。deselectable を付けると選んだ星をもう一度押して取り消せる。平均点のような表示だけのときは readOnly にして aria-label で名前を付ける。",
  ],
  sdk: [
    "UI SDK の Rating と RatingItem の上に作っている。Rating は子を星の数だけ繰り返して描くので、中に置く RatingItem は1つでよく、何も渡さなければ星のアイコンが入る。星の読み上げ名は getValueLabel で「5点中3点」の形にしてある。",
    "振る舞いはラジオグループと同じで、タブ移動は1か所になり、矢印キーで点数を動かして選び、Space でフォーカス中の星を選ぶ。readOnly にすると img の role になり、点数を見せるだけになる。",
    "星の状態は data-filled、data-partial、data-checked、data-highlighted として出て、塗る割合は CSS 変数 --rating-fill に入る。ポインターを乗せている間は、その点数までの星に data-highlighted が付く。",
    "onValueChange の details.reason は item-press、list-navigation、reset、restore、imperative のいずれか。name を渡すと点数が FormData に載り、required は点数が付くまで送信を止める。エージェントからは rating という種類で見え、setValue で点数を渡せる。画面の別の場所から変えるときは createRatingController を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "5つの星から評価を選ぶ。",
      en: {
        title: "Basic",
        description: "Choose a score from five stars.",
      },
    },
    {
      id: "half",
      title: "半分の星",
      description: "step={0.5} で星の半分まで選べるようにする。",
      en: {
        title: "Half stars",
        description: "Use step={0.5} to allow half-star scores.",
      },
    },
    {
      id: "controlled",
      title: "評価に応じた言葉を出す",
      description:
        "値を useState で持ち、点数に合わせた言葉を出す。deselectable で取り消せる。",
      en: {
        title: "Describing the score",
        description:
          "Keep the score in useState and show a word for it. deselectable lets people clear it.",
      },
    },
    {
      id: "read-only",
      title: "表示だけ",
      description:
        "readOnly で平均点を表示する。小数の点数もそのまま星の塗りに出る。",
      en: {
        title: "Read-only",
        description:
          "Show an average with readOnly. Fractional scores fill the stars as they are.",
      },
    },
  ],
  en: {
    usage: [
      "A rating picks a score as a number of stars. Use it to ask how people feel on a scale, such as satisfaction surveys or product reviews. Use Slider or NumberInput when the number itself matters.",
      "Wrap it in a Field so the FieldLabel names it. Change the number of stars with max, and allow half stars with step={0.5}. Screen readers announce the score out of the maximum.",
      "Read the value in onValueChange; no score is null. Add deselectable so pressing the chosen star again clears it. For display only, such as an average, use readOnly and name it with aria-label.",
    ],
    sdk: [
      "Built on the UI SDK Rating and RatingItem. Rating renders its children once per star, so one RatingItem inside is enough, and with no children it renders star icons. getValueLabel names each star in Japanese, in the form 「5点中3点」.",
      "It behaves like a radio group: a single tab stop, arrow keys that move to a score and check it, and Space to check the focused star. With readOnly it takes the img role and only shows its score.",
      "Star state is exposed as data-filled, data-partial, data-checked, and data-highlighted, and how full a star is arrives in the CSS variable --rating-fill. While a pointer is over the stars, data-highlighted marks the stars up to the previewed score.",
      "details.reason in onValueChange is one of item-press, list-navigation, reset, restore, or imperative. With name the score is added to FormData, and required blocks submission until there is a score. To an agent it appears with the kind rating and offers the setValue action. To change it from elsewhere on the page, use createRatingController.",
    ],
  },
} satisfies ComponentGuide
