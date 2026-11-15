import { Meter, MeterLabel, MeterValue } from "@/components/ui/meter"

export function MeterFormat() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Meter value={38} max={50} format={{ style: "unit", unit: "gigabyte" }}>
        <MeterLabel>写真とファイル</MeterLabel>
        <MeterValue />
      </Meter>
      <Meter
        value={42000}
        max={60000}
        format={{ style: "currency", currency: "JPY" }}
      >
        <MeterLabel>今月の広告費</MeterLabel>
        <MeterValue />
      </Meter>
    </div>
  )
}
