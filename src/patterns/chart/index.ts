import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  notes: [
    "recharts wrapper; use plain recharts BarChart/LineChart etc. inside ChartContainer. Exact values -> add Table.",
    "ChartContainer must have a height. config: label + color per key; color as var(--color-key).",
    "ChartTooltip + ChartTooltipContent, ChartLegend + ChartLegendContent.",
  ],
  patterns: [
    {
      id: "bar",
      title: "棒グラフ",
      description:
        "月ごとの売上を棒で並べる。ホバーで ChartTooltipContent が値を出す。",
      en: {
        title: "Bar chart",
        description: "Bars with ChartTooltipContent.",
      },
    },
    {
      id: "multiple-bar",
      title: "系列を比べる",
      description:
        "2つの系列を並べ、ChartLegendContent で凡例を出す。色は config から引く。",
      en: {
        title: "Multiple series",
        description: "Two series side by side with ChartLegendContent.",
      },
    },
    {
      id: "line",
      title: "折れ線グラフ",
      description:
        "推移を線で見せる。点を消して線だけにすると傾きが読みやすい。",
      en: {
        title: "Line chart",
        description: "Trend line without dots.",
      },
    },
    {
      id: "stacked-area",
      title: "積み上げの面グラフ",
      description:
        "stackId をそろえて内訳を積み上げ、合計と内訳の両方の動きを見せる。",
      en: {
        title: "Stacked area",
        description: "Shared stackId stacks the series.",
      },
    },
    {
      id: "pie",
      title: "円グラフ",
      description:
        "全体に占める割合を見せる。項目ごとの色は data の fill に渡す。",
      en: {
        title: "Pie chart",
        description: "Slice colors via fill in data.",
      },
    },
  ],
} satisfies ComponentGuide
