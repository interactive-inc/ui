import { FileSearchIcon, PackageIcon, TruckIcon } from "lucide-react"
import {
  Trace,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"

export function TraceBasic() {
  return (
    <Trace className="max-w-md">
      <TraceLine>
        <TraceIcon>
          <FileSearchIcon />
        </TraceIcon>
        <TraceTitle>注文 #10482 を照会しました</TraceTitle>
        <TraceDescription>1秒</TraceDescription>
      </TraceLine>
      <TraceLine status="running">
        <TraceIcon>
          <TruckIcon />
        </TraceIcon>
        <TraceTitle>配送状況を確認しています</TraceTitle>
      </TraceLine>
      <TraceLine status="pending">
        <TraceIcon>
          <PackageIcon />
        </TraceIcon>
        <TraceTitle>お届け予定日を計算</TraceTitle>
      </TraceLine>
    </Trace>
  )
}
