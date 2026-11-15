import { InfoIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertBasic() {
  return (
    <Alert>
      <InfoIcon />
      <AlertTitle>11月20日の深夜にメンテナンスを行います</AlertTitle>
      <AlertDescription>
        2:00〜4:00 のあいだ、注文履歴の表示が止まります。
      </AlertDescription>
    </Alert>
  )
}
