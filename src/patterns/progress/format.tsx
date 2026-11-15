import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

export function ProgressFormat() {
  return (
    <Progress
      value={7}
      max={12}
      format={(value) => `${value} / 12 件`}
      className="w-full max-w-sm"
    >
      <ProgressLabel>請求書を送信中</ProgressLabel>
      <ProgressValue />
    </Progress>
  )
}
