import { Meter, MeterLabel, MeterValue } from "@/components/ui/meter"

const goals = [
  { team: "東京店", sales: 820, goal: 1000 },
  { team: "大阪店", sales: 640, goal: 800 },
  { team: "福岡店", sales: 510, goal: 500 },
]

export function MeterGoals() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <p className="font-medium text-sm">11月の売上目標（万円）</p>
      {goals.map((goal) => (
        <Meter
          key={goal.team}
          value={goal.sales}
          max={goal.goal}
          format={(value) => `${value} / ${goal.goal}`}
        >
          <MeterLabel>{goal.team}</MeterLabel>
          <MeterValue />
        </Meter>
      ))}
    </div>
  )
}
