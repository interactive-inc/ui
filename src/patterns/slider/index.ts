import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "決まった範囲の中で数値を選ぶ入力。音量や割引率のように、だいたいの量を手早く決めたいときに向く。正確な数値を打ち込ませたいなら NumberInput を使う。",
    "Field で包むと FieldLabel が名前になる。つまみだけでは今の値が分からないので、ラベルの横に値を表示する。min、max、step で範囲と刻みを決める。",
    "値は onValueChange で受ける。value に配列を渡すとつまみが2つになり、価格帯のような範囲を選べる。変えられないときは Field に disabled を付けて理由を添える。",
  ],
  sdk: [
    "UI SDK の Slider の上に作っている。SliderControl、SliderTrack、SliderIndicator、SliderThumb は Slider の中に組んであり、つまみの数は value か defaultValue の配列の長さから決まる。min と max は 0 と 100 を既定にしている。この部品集から出しているパーツは Slider と SliderValue だけ。",
    "各つまみは native の range input で、矢印キーで step ずつ、Page Up と Page Down または Shift と矢印キーで largeStep ずつ、Home と End で端まで動く。ドラッグ中は data-dragging、向きは data-orientation として出る。",
    'onValueChange はドラッグの途中も毎回呼ばれ、onValueCommit は操作が終わったときに1回だけ呼ばれるので、保存は onValueCommit で行う。details には reason（track-press、drag、step-key など）と、動いたつまみを示す thumb が入る。name を渡すと値が FormData に載り、範囲のときは "200/800" のように開始と終了を / でつないだ形になる。',
    "エージェントからは slider という種類で見え、setValue で値を渡せる。渡した値は範囲に収められ、step にそろえられる。画面の別の場所から変えるときは createSliderController を使う。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description: "0〜100 の範囲で値を選ぶ。",
      en: {
        title: "Basic",
        description: "Choose a value from 0 to 100.",
      },
    },
    {
      id: "with-value",
      title: "値を表示する",
      description:
        "値を useState で持ち、ラベルの横と説明に表示する。step で5%刻みにする。",
      en: {
        title: "Showing the value",
        description:
          "Keep the value in useState and show it beside the label and in the description. step makes it move in 5% steps.",
      },
    },
    {
      id: "range",
      title: "範囲を選ぶ",
      description: "value に配列を渡すと、つまみが2つの範囲選択になる。",
      en: {
        title: "Range",
        description:
          "Pass an array to value to get two thumbs that select a range.",
      },
    },
    {
      id: "disabled",
      title: "変更できない",
      description: "Field に disabled を付け、変えられない理由を書く。",
      en: {
        title: "Disabled",
        description:
          "Add disabled to the Field and explain why it cannot be changed.",
      },
    },
  ],
  en: {
    usage: [
      "A slider picks a number within a fixed range. It suits quickly setting a rough amount, such as volume or a discount rate. Use NumberInput when people need to type an exact number.",
      "Wrap it in a Field so the FieldLabel names it. The thumb alone does not tell the current value, so show it beside the label. Set the range and step with min, max and step.",
      "Read the value in onValueChange. Pass an array to value for two thumbs that select a range, such as a price band. When it cannot be changed, add disabled to the Field and say why.",
    ],
    sdk: [
      "Built on the UI SDK Slider. SliderControl, SliderTrack, SliderIndicator, and SliderThumb are assembled inside Slider, and the number of thumbs comes from the length of the value or defaultValue array. min and max default to 0 and 100. This library exports only Slider and SliderValue.",
      "Each thumb is a native range input: arrow keys move it by step, Page Up and Page Down or Shift with an arrow by largeStep, and Home and End to the ends. data-dragging is present during a drag, and the axis is exposed as data-orientation.",
      'onValueChange runs on every step of a drag, while onValueCommit runs once when the interaction ends, so save in onValueCommit. details carries reason (track-press, drag, step-key, and others) and thumb, the thumb that moved. With name the value is added to FormData; a range is submitted as start/end, like "200/800".',
      "To an agent it appears with the kind slider and offers the setValue action. The value it sets is clamped to the range and snapped to the step. To change it from elsewhere on the page, use createSliderController.",
    ],
  },
} satisfies ComponentGuide
