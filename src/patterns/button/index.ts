import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "One-off actions; stay-pressed state -> Toggle.",
    "One default (primary) per surface; others secondary. destructive for irreversible.",
    'Icon-only needs aria-label. Icons: data-icon="inline-start" | "inline-end".',
    "onClick returning Promise: data-pending + aria-busy until settled, further presses ignored.",
    "onClick(event, { source }): keyboard | mouse | agent.",
    "render={<a href />} keeps disabled/pending behavior. focusableWhenDisabled keeps focus with aria-disabled.",
    "Agent: kind button, action press; data-agent-confirm blocks press until a person confirms.",
  ],
  patterns: [
    {
      id: "variants",
      title: "見た目の種類",
      description:
        "操作の重さに合わせて variant を選ぶ。取り消せない操作は destructive。",
      en: {
        title: "Variants",
        description: "Pick a variant that matches the weight of the action.",
      },
    },
    {
      id: "sizes",
      title: "大きさ",
      description:
        "size でボタンの高さをそろえる。アイコンだけなら icon 系のサイズを使う。",
      en: {
        title: "Sizes",
        description: "Use size to align button heights.",
      },
    },
    {
      id: "with-icon",
      title: "アイコン付き",
      description:
        "文言の前後に lucide のアイコンを置く。大きさはボタンが合わせる。",
      en: {
        title: "With an icon",
        description:
          "Place a lucide icon before or after the label with data-icon.",
      },
    },
    {
      id: "icon-only",
      title: "アイコンだけ",
      description: "文言がないので aria-label で必ず名前を付ける。",
      en: {
        title: "Icon only",
        description:
          "There is no visible label, so always name it with aria-label.",
      },
    },
    {
      id: "as-link",
      title: "リンクとして描く",
      description:
        "render に a 要素を渡すと、見た目はボタンのままページ移動のリンクになる。",
      en: {
        title: "As a link",
        description: "Render as a link with render, keeping button styling.",
      },
    },
  ],
} satisfies ComponentGuide
