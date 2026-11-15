import {
  Waterfall,
  WaterfallAxis,
  WaterfallBar,
  WaterfallColumnHeader,
  WaterfallHeaderRow,
  WaterfallRow,
  WaterfallRowHeader,
} from "@/components/ui/waterfall"

const phases = [
  { value: "design", label: "デザイン", start: 0, duration: 10 },
  { value: "build", label: "実装", start: 8, duration: 20 },
  { value: "test", label: "テスト", start: 24, duration: 8 },
  { value: "release", label: "公開準備", start: 31, duration: 3 },
]

export function WaterfallBasic() {
  return (
    <Waterfall
      aria-label="コーポレートサイト改修の工程"
      items={phases}
      format={(days) => `${days}日`}
      getBarLabel={(item, details) =>
        `${item.label}、${details.start}目に開始、${details.duration}かかる`
      }
    >
      <WaterfallHeaderRow>
        <WaterfallColumnHeader>工程</WaterfallColumnHeader>
        <WaterfallColumnHeader aria-label="開始からの日数">
          <WaterfallAxis maxTicks={4} />
        </WaterfallColumnHeader>
      </WaterfallHeaderRow>
      {phases.map((phase) => (
        <WaterfallRow key={phase.value} value={phase.value}>
          <WaterfallRowHeader>{phase.label}</WaterfallRowHeader>
          <WaterfallBar />
        </WaterfallRow>
      ))}
    </Waterfall>
  )
}
