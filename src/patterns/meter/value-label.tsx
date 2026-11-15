import { Meter, MeterLabel, MeterValue } from "@/components/ui/meter"

export function MeterValueLabel() {
  return (
    <Meter
      value={8}
      max={10}
      format={(value) => `${value} / 10 席`}
      getValueLabel={(value, details) =>
        `10席のうち${value}席が埋まっています。残りは${details.max - value}席です`
      }
      className="max-w-sm"
    >
      <MeterLabel>11月22日の説明会</MeterLabel>
      <MeterValue />
    </Meter>
  )
}
