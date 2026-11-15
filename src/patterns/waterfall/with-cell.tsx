import type { CSSProperties } from "react"
import {
  Waterfall,
  WaterfallAxis,
  WaterfallBar,
  WaterfallCell,
  WaterfallColumnHeader,
  WaterfallHeaderRow,
  WaterfallRow,
  WaterfallRowHeader,
} from "@/components/ui/waterfall"

const orders = [
  { value: "10479", label: "#10479 北斗工業", start: 0, duration: 4 },
  { value: "10480", label: "#10480 さくら工房", start: 1, duration: 2 },
  { value: "10481", label: "#10481 青葉フーズ", start: 2, duration: 6 },
  { value: "10482", label: "#10482 みなと商事", start: 3, duration: 3 },
]

export function WaterfallWithCell() {
  return (
    <Waterfall
      aria-label="注文から出荷までの日数"
      items={orders}
      format={(days) => `${days}日`}
      getBarLabel={(item, details) =>
        `${item.label}、${details.start}目に受付、出荷まで${details.duration}`
      }
      style={
        {
          "--waterfall-columns": "minmax(8rem,10rem) 3rem minmax(0,1fr)",
        } as CSSProperties
      }
    >
      <WaterfallHeaderRow>
        <WaterfallColumnHeader>注文</WaterfallColumnHeader>
        <WaterfallColumnHeader>日数</WaterfallColumnHeader>
        <WaterfallColumnHeader aria-label="11月10日からの日数">
          <WaterfallAxis maxTicks={4} />
        </WaterfallColumnHeader>
      </WaterfallHeaderRow>
      {orders.map((order) => (
        <WaterfallRow key={order.value} value={order.value}>
          <WaterfallRowHeader>{order.label}</WaterfallRowHeader>
          <WaterfallCell>{order.duration}日</WaterfallCell>
          <WaterfallBar />
        </WaterfallRow>
      ))}
    </Waterfall>
  )
}
