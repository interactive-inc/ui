import { CircleCheckIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertWithLink() {
  return (
    <Alert>
      <CircleCheckIcon />
      <AlertTitle>請求書を発行しました</AlertTitle>
      <AlertDescription>
        登録のメールアドレスにもお送りしています。
        <a href="#invoices">請求書の一覧</a>からいつでも取り出せます。
      </AlertDescription>
    </Alert>
  )
}
