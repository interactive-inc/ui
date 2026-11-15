import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

export function ProgressBasic() {
  return (
    <Progress value={64} className="w-full max-w-sm">
      <ProgressLabel>写真をアップロード中</ProgressLabel>
      <ProgressValue />
    </Progress>
  )
}
