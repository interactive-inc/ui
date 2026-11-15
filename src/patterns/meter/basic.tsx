import { Meter, MeterLabel, MeterValue } from "@/components/ui/meter"

export function MeterBasic() {
  return (
    <Meter value={72} className="max-w-sm">
      <MeterLabel>ストレージの使用率</MeterLabel>
      <MeterValue />
    </Meter>
  )
}
