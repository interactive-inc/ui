import { OctagonXIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <OctagonXIcon />
      <AlertTitle>お支払いを確認できませんでした</AlertTitle>
      <AlertDescription>
        カードの有効期限が切れています。別のお支払い方法を登録してください。
      </AlertDescription>
    </Alert>
  )
}
