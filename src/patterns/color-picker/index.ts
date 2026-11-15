import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "Color choice (theme, label color); few fixed colors -> ColorPickerSwatches alone.",
    "Compose only needed parts: ColorPickerArea, ColorPickerSlider (thumb built in), ColorPickerSwatch, ColorPickerSwatches, ColorPickerInput, ColorPickerChannelInput, ColorPickerEyeDropper.",
    "Parts get Japanese default aria-label. Compact: put parts in Popover, current color on trigger.",
    'Value is CSS color string; format="hex" keeps #rrggbb. onValueChange per drag step; onValueCommit once at end.',
    "details: reason (drag|track-press|step-key|input-commit|item-press|eye-dropper-pick|…), color.",
    "ColorPickerInput commits on Enter/blur; invalid text reverts. CSS var --color-picker-color on each part.",
    "ColorPickerEyeDropper gets data-unsupported if browser lacks it. name -> hidden input in FormData.",
    "Agent: kind color-picker, action setValue(any CSS color). createColorPickerController.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本",
      description:
        "面と色相のスライダーで選び、カラーコードでも入力できるようにする。",
      en: {
        title: "Basic",
        description: "Area, hue slider and color-code input.",
      },
    },
    {
      id: "swatches",
      title: "候補から選ぶ",
      description:
        "ColorPickerSwatches に候補を並べ、決まった色だけを選ばせる。",
      en: {
        title: "Presets",
        description: "Preset colors in ColorPickerSwatches.",
      },
    },
    {
      id: "popover",
      title: "ポップオーバーで開く",
      description:
        "Popover の中に部品を入れ、トリガーのボタンに今の色を見せる。",
      en: {
        title: "In a popover",
        description: "Parts in a Popover; color on trigger.",
      },
    },
    {
      id: "preview",
      title: "選んだ色を反映する",
      description:
        "値を useState で持ち、選んだ色をその場のプレビューに反映する。",
      en: {
        title: "Live preview",
        description: "Apply the color to a live preview.",
      },
    },
  ],
} satisfies ComponentGuide
