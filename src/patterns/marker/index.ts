import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "One-line event or break in a conversation/history (not a message). Messages -> Message + Bubble; attention notices -> Alert.",
    "Parts: MarkerIcon, MarkerContent. variant separator = lines both sides (date breaks); border = underline.",
    "Not an SDK component; renders div. render={<a href />} makes whole marker a link (via renderElement); not in agent snapshot.",
  ],
  patterns: [
    {
      id: "basic",
      title: "基本形",
      description: "MarkerIcon と MarkerContent で出来事を1行にする。",
      en: {
        title: "Basic",
        description: "MarkerIcon and MarkerContent on one line.",
      },
    },
    {
      id: "separator",
      title: "日付の区切り",
      description: "variant を separator にすると、文言の左右に線が引かれる。",
      en: {
        title: "Separator",
        description: "separator draws lines on both sides.",
      },
    },
    {
      id: "border",
      title: "下線付き",
      description:
        "variant を border にすると、下に線が引かれる。文中のリンクも置ける。",
      en: {
        title: "Border",
        description: "border draws a line underneath; holds inline links.",
      },
    },
    {
      id: "in-conversation",
      title: "会話の中に挟む",
      description: "Message の間に置き、日付や手続きの完了を流れの中で伝える。",
      en: {
        title: "In a conversation",
        description: "Markers between messages for dates and steps.",
      },
    },
  ],
} satisfies ComponentGuide
