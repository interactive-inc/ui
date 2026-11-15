import type { ComponentGuide } from "@/src/patterns/types"

export const guide = {
  usage: [
    "数値の大小や推移を図にして、表より速く傾向をつかめるようにする。月ごとの売上、チャネル別の受注、売上の内訳などに使う。",
    "recharts の上に作られていて、グラフ本体は recharts の BarChart や LineChart をそのまま使う。ChartContainer は色と文言の対応（config）と、ツールチップや凡例の見た目をそろえる役目を持つ。正確な値を読ませたいときは Table を併せて置く。",
    "ChartContainer には必ず高さを付ける。config のキーごとに label と color を決めると、var(--color-キー) で色を参照できる。ツールチップは ChartTooltip と ChartTooltipContent、凡例は ChartLegend と ChartLegendContent で出す。",
  ],
  patterns: [
    {
      id: "bar",
      title: "棒グラフ",
      description:
        "月ごとの売上を棒で並べる。ホバーで ChartTooltipContent が値を出す。",
      en: {
        title: "Bar chart",
        description:
          "Show monthly sales as bars. ChartTooltipContent shows the value on hover.",
      },
    },
    {
      id: "multiple-bar",
      title: "系列を比べる",
      description:
        "2つの系列を並べ、ChartLegendContent で凡例を出す。色は config から引く。",
      en: {
        title: "Multiple series",
        description:
          "Place two series side by side and add a legend with ChartLegendContent. Colors come from config.",
      },
    },
    {
      id: "line",
      title: "折れ線グラフ",
      description:
        "推移を線で見せる。点を消して線だけにすると傾きが読みやすい。",
      en: {
        title: "Line chart",
        description:
          "Show a trend as a line. Dropping the dots makes the slope easier to read.",
      },
    },
    {
      id: "stacked-area",
      title: "積み上げの面グラフ",
      description:
        "stackId をそろえて内訳を積み上げ、合計と内訳の両方の動きを見せる。",
      en: {
        title: "Stacked area",
        description:
          "Share a stackId to stack the breakdown and show how both the total and its parts move.",
      },
    },
    {
      id: "pie",
      title: "円グラフ",
      description:
        "全体に占める割合を見せる。項目ごとの色は data の fill に渡す。",
      en: {
        title: "Pie chart",
        description:
          "Show each part's share of the whole. Pass each slice's color through fill in the data.",
      },
    },
  ],
  en: {
    usage: [
      "Turns numbers into a picture so trends and sizes are faster to grasp than in a table. Use it for monthly sales, orders by channel or a breakdown of revenue.",
      "It is built on recharts, and the chart itself is a plain recharts BarChart, LineChart and so on. ChartContainer maps series to colors and labels (config) and keeps tooltips and legends consistent. When exact values matter, add a Table next to it.",
      "Always give ChartContainer a height. Set a label and color for each key in config, then refer to the color as var(--color-key). Add tooltips with ChartTooltip and ChartTooltipContent, and legends with ChartLegend and ChartLegendContent.",
    ],
  },
} satisfies ComponentGuide
