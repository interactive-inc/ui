import { Progress, ProgressLabel } from "@/components/ui/progress"

export function ProgressIndeterminate() {
  return (
    <Progress value={null} className="w-full max-w-sm">
      <ProgressLabel>サーバーに接続しています</ProgressLabel>
    </Progress>
  )
}
