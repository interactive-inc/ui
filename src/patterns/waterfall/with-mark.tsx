import {
  Waterfall,
  WaterfallAxis,
  WaterfallBar,
  WaterfallColumnHeader,
  WaterfallHeaderRow,
  WaterfallMark,
  WaterfallRow,
  WaterfallRowHeader,
} from "@/components/ui/waterfall"

const tasks = [
  { value: "collect", label: "請求データの集計", start: 0, duration: 3 },
  { value: "check", label: "金額の確認", start: 3, duration: 2 },
  { value: "issue", label: "請求書の発行", start: 5, duration: 2 },
  { value: "send", label: "郵送の手配", start: 6, duration: 3 },
]

export function WaterfallWithMark() {
  return (
    <Waterfall
      aria-label="月末の請求作業"
      items={tasks}
      format={(days) => `${days}日`}
      getBarLabel={(item, details) =>
        `${item.label}、${details.start}目に開始、${details.duration}かかる`
      }
    >
      <WaterfallHeaderRow>
        <WaterfallColumnHeader>作業</WaterfallColumnHeader>
        <WaterfallColumnHeader aria-label="月初からの日数" className="pt-6">
          <WaterfallAxis maxTicks={4} />
          <WaterfallMark time={7}>締め切り</WaterfallMark>
        </WaterfallColumnHeader>
      </WaterfallHeaderRow>
      {tasks.map((task) => (
        <WaterfallRow key={task.value} value={task.value}>
          <WaterfallRowHeader>{task.label}</WaterfallRowHeader>
          <WaterfallBar />
        </WaterfallRow>
      ))}
    </Waterfall>
  )
}
