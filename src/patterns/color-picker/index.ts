import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "色を選ぶ入力。ストアのテーマカラーやラベルの色のように、利用者が見た目を決める設定に使う。決まった数色から選ばせるだけなら、ColorPickerSwatches だけを置く。",
    "ColorPicker の中に、色を面で選ぶ ColorPickerArea、色相の ColorPickerSlider、今の色を見せる ColorPickerSwatch、カラーコードの ColorPickerInput を必要な分だけ組み合わせる。Field で包むと FieldLabel が名前になる。",
    '値は onValueChange で文字列として受け、format="hex" で #rrggbb の形にそろう。場所を取りたくないときは Popover の中に部品を入れ、トリガーに今の色を見せる。',
  ],
  sdk: [
    "UI SDK の ColorPicker の上に作っている。パーツはどれも省けるので、ColorPickerArea、ColorPickerSlider、ColorPickerInput、ColorPickerChannelInput、ColorPickerSwatch、ColorPickerSwatches、ColorPickerEyeDropper から必要なものだけを並べる。SDK の読み上げ名は英語なので、この部品集では各パーツの aria-label に日本語の既定値を入れてある。ColorPickerSlider は中に ColorPickerSliderThumb を入れてある。",
    "エリアとスライダーのつまみはスライダーとして振る舞い、矢印キーで1ステップ、Shift と矢印キーで10ステップ、Page Up と Page Down で範囲の10分の1、Home と End で端まで動く。ColorPickerInput は Enter を押すかフォーカスを外したときに文字を CSS の色として読み、色でない文字は元の値に戻す。各パーツは今の色を CSS 変数 --color-picker-color に書くので、つまみや見本の塗りに使える。",
    "値は CSS の色の文字列で、onValueChange はドラッグの途中も呼ばれ、onValueCommit は操作が終わったときに1回呼ばれる。details には reason（drag、track-press、step-key、input-commit、item-press、eye-dropper-pick など）と color が入る。name を渡すと隠れた input が値を FormData に載せる。",
    "エージェントからは color-picker という種類で見え、setValue に CSS の色を渡せる。画面の別の場所から変えるときは createColorPickerController を使う。ColorPickerEyeDropper には、ブラウザが画面からの色の取得に対応していないとき data-unsupported が付く。",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "面と色相のスライダーで選び、カラーコードでも入力できるようにする。",
      en: {
        title: "Basic",
        description:
          "Pick with the area and the hue slider, and allow typing a color code too.",
      },
    },
    {
      id: "swatches",
      title: "候補から選ぶ",
      description:
        "ColorPickerSwatches に候補を並べ、決まった色だけを選ばせる。",
      en: {
        title: "Presets",
        description:
          "List presets in ColorPickerSwatches to limit the choice to set colors.",
      },
    },
    {
      id: "popover",
      title: "ポップオーバーで開く",
      description:
        "Popover の中に部品を入れ、トリガーのボタンに今の色を見せる。",
      en: {
        title: "In a popover",
        description:
          "Put the parts inside a Popover and show the current color on the trigger button.",
      },
    },
    {
      id: "preview",
      title: "選んだ色を反映する",
      description:
        "値を useState で持ち、選んだ色をその場のプレビューに反映する。",
      en: {
        title: "Live preview",
        description:
          "Keep the color in useState and apply it to a preview right away.",
      },
    },
  ],
  en: {
    usage: [
      "A color picker chooses a color. Use it for settings where people decide the look, such as a store's theme color or a label color. To offer only a few set colors, use ColorPickerSwatches alone.",
      "Inside ColorPicker, combine only the parts you need: ColorPickerArea to pick on a surface, ColorPickerSlider for hue, ColorPickerSwatch to show the current color and ColorPickerInput for the color code. Wrap it in a Field so the FieldLabel names it.",
      'Read the value as a string in onValueChange; format="hex" keeps it as #rrggbb. To save space, put the parts in a Popover and show the current color on its trigger.',
    ],
    sdk: [
      "Built on the UI SDK ColorPicker. Every part is optional, so compose only what you need from ColorPickerArea, ColorPickerSlider, ColorPickerInput, ColorPickerChannelInput, ColorPickerSwatch, ColorPickerSwatches, and ColorPickerEyeDropper. The SDK names its parts in English, so this library gives each part a Japanese default aria-label. ColorPickerSlider already contains a ColorPickerSliderThumb.",
      "The area and slider thumbs behave as sliders: arrow keys move one step, Shift with an arrow ten steps, Page Up and Page Down a tenth of the range, and Home and End to the ends. ColorPickerInput reads its text as a CSS color on Enter or when it loses focus, and text that is not a color goes back to the value. Each part writes the current color to the CSS variable --color-picker-color, which you can use to fill a thumb or a swatch.",
      "The value is a CSS color string. onValueChange runs on every step of a drag, and onValueCommit runs once when the interaction ends. details carries reason (drag, track-press, step-key, input-commit, item-press, eye-dropper-pick, and others) and color. With name, a hidden input adds the value to FormData.",
      "To an agent it appears with the kind color-picker and offers the setValue action, which takes any CSS color. To change it from elsewhere on the page, use createColorPickerController. ColorPickerEyeDropper gets data-unsupported when the browser cannot pick a color from the screen.",
    ],
  },
} satisfies ComponentGuide
