import { TriangleAlertIcon } from "lucide-react"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function AlertWithAction() {
  return (
    <Alert>
      <TriangleAlertIcon />
      <AlertTitle>ストレージの残りが 10% を切りました</AlertTitle>
      <AlertDescription>
        容量が足りなくなると、新しいファイルを保存できません。
      </AlertDescription>
      <AlertAction>
        <Button size="xs" variant="outline">
          プランを見る
        </Button>
      </AlertAction>
    </Alert>
  )
}
